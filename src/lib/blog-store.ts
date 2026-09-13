import "server-only";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sanitizeHtml from "sanitize-html";
import type { BlogPost } from "@/content/types";
import { blogSeedPosts } from "@/lib/blog-seed";

/**
 * File-based JSON store for the blog CMS, per the chosen architecture: the
 * admin panel lives at /admin/blog on this same site, and posts are saved to
 * a JSON file on the Hostinger server itself rather than a hosted database.
 *
 * `data/` is gitignored on purpose — this file is server state that lives on
 * the deployed machine, not something re-shipped by every code deploy. On
 * first run (nothing on disk yet) it's seeded from `blog-seed.ts` so the
 * site has real content immediately; after that, all admin edits persist
 * here independent of future `git pull` / redeploys, provided the deploy
 * process doesn't delete the `data/` directory.
 */

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "blog-posts.json");

function ensureSeeded(): void {
  if (fs.existsSync(DATA_FILE)) return;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(blogSeedPosts, null, 2), "utf8");
}

// Serializes writes so two overlapping requests can't interleave partial
// JSON and corrupt the file. Reads always go straight to disk so the admin
// UI and public pages never see stale in-memory state across requests.
let writeQueue: Promise<void> = Promise.resolve();

function readAll(): BlogPost[] {
  ensureSeeded();
  const raw = fs.readFileSync(DATA_FILE, "utf8");
  try {
    return JSON.parse(raw) as BlogPost[];
  } catch {
    return [];
  }
}

function writeAll(posts: BlogPost[]): Promise<void> {
  writeQueue = writeQueue.then(() => {
    ensureSeeded();
    const tmpFile = `${DATA_FILE}.${process.pid}.${Date.now()}.tmp`;
    fs.writeFileSync(tmpFile, JSON.stringify(posts, null, 2), "utf8");
    fs.renameSync(tmpFile, DATA_FILE); // atomic on the same filesystem
  });
  return writeQueue;
}

/** Tags/attributes an admin is allowed to author. Everything else is stripped on save AND on render. */
const ALLOWED_TAGS = [
  "p", "h2", "h3", "h4", "ul", "ol", "li", "strong", "em", "a", "blockquote",
  "img", "br", "hr", "code", "pre", "figure", "figcaption",
];

/**
 * Strips all markup from fields that are rendered as plain text (title,
 * excerpt, author, tags, etc.). React already escapes these on render, so
 * this isn't preventing an XSS that would otherwise fire — it's defense in
 * depth so a field like "title" can never end up holding raw markup that a
 * future integration (RSS, email, JSON-LD) might render less safely.
 */
export function sanitizePlainText(input: string): string {
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim();
}

export function sanitizeBlogHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "width", "height"],
    },
    allowedSchemes: ["https", "mailto"],
    // Local uploads are served from /uploads/... which sanitize-html treats
    // as a relative URL — allow it explicitly alongside https.
    allowedSchemesByTag: { img: ["https", "data"] },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
    exclusiveFilter: (frame) => frame.tag === "img" && !!frame.attribs.src && frame.attribs.src.startsWith("javascript:"),
  });
}

export function computeReadingTime(html: string): string {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 100);
}

export function isValidSlug(slug: string): boolean {
  return SLUG_PATTERN.test(slug) && slug.length > 0 && slug.length <= 100;
}

/** Cover images may only be an https:// URL or a same-origin local path — never javascript:, data:, etc. */
export function isValidImageSrc(src: string): boolean {
  if (src.startsWith("https://")) return true;
  if (src.startsWith("/") && !src.startsWith("//")) return true;
  return false;
}

export function getPublishedPosts(): BlogPost[] {
  return readAll()
    .filter((p) => p.status === "published")
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getAllPostsForAdmin(): BlogPost[] {
  return readAll().sort(
    (a, b) => new Date(b.updatedAt || b.publishedAt).getTime() - new Date(a.updatedAt || a.publishedAt).getTime()
  );
}

export function getPublishedPostBySlug(slug: string): BlogPost | undefined {
  return readAll().find((p) => p.slug === slug && p.status === "published");
}

export function getPostById(id: string): BlogPost | undefined {
  return readAll().find((p) => p.id === id);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const published = getPublishedPosts().filter((p) => p.id !== post.id);
  const sameCategory = published.filter((p) => p.category === post.category);
  const rest = published.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export type BlogPostInput = {
  title: string;
  slug: string;
  excerpt: string;
  coverImageSrc: string;
  coverImageAlt: string;
  author: string;
  authorRole: string;
  category: string;
  tags: string[];
  content: string;
  faqs?: { question: string; answer: string }[];
  status: "draft" | "published";
  publishedAt?: string;
};

export async function createPost(input: BlogPostInput): Promise<BlogPost> {
  const posts = readAll();
  if (posts.some((p) => p.slug === input.slug)) {
    throw new Error(`A post with slug "${input.slug}" already exists.`);
  }
  const sanitized = sanitizeBlogHtml(input.content);
  const now = new Date().toISOString();
  const post: BlogPost = {
    id: crypto.randomUUID(),
    slug: input.slug,
    title: sanitizePlainText(input.title),
    excerpt: sanitizePlainText(input.excerpt),
    coverImage: { src: input.coverImageSrc, alt: sanitizePlainText(input.coverImageAlt) },
    author: sanitizePlainText(input.author),
    authorRole: sanitizePlainText(input.authorRole),
    publishedAt: input.publishedAt || now,
    updatedAt: now,
    readingTime: computeReadingTime(sanitized),
    category: sanitizePlainText(input.category),
    tags: input.tags.map(sanitizePlainText).filter(Boolean),
    content: sanitized,
    faqs: input.faqs?.map((f) => ({ question: sanitizePlainText(f.question), answer: sanitizePlainText(f.answer) })),
    status: input.status,
    views: 0,
  };
  const next = [...posts, post];
  await writeAll(next);
  return post;
}

export async function updatePost(id: string, input: BlogPostInput): Promise<BlogPost> {
  const posts = readAll();
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) throw new Error("Post not found.");

  const duplicateSlug = posts.some((p) => p.id !== id && p.slug === input.slug);
  if (duplicateSlug) throw new Error(`A post with slug "${input.slug}" already exists.`);

  const sanitized = sanitizeBlogHtml(input.content);
  const existing = posts[index];
  const updated: BlogPost = {
    ...existing,
    slug: input.slug,
    title: sanitizePlainText(input.title),
    excerpt: sanitizePlainText(input.excerpt),
    coverImage: { src: input.coverImageSrc, alt: sanitizePlainText(input.coverImageAlt) },
    author: sanitizePlainText(input.author),
    authorRole: sanitizePlainText(input.authorRole),
    publishedAt: input.publishedAt || existing.publishedAt,
    updatedAt: new Date().toISOString(),
    readingTime: computeReadingTime(sanitized),
    category: sanitizePlainText(input.category),
    tags: input.tags.map(sanitizePlainText).filter(Boolean),
    content: sanitized,
    faqs: input.faqs?.map((f) => ({ question: sanitizePlainText(f.question), answer: sanitizePlainText(f.answer) })),
    status: input.status,
  };
  posts[index] = updated;
  await writeAll(posts);
  return updated;
}

export async function deletePost(id: string): Promise<void> {
  const posts = readAll();
  const next = posts.filter((p) => p.id !== id);
  if (next.length === posts.length) throw new Error("Post not found.");
  await writeAll(next);
}

export async function incrementViewCount(slug: string): Promise<number | null> {
  const posts = readAll();
  const index = posts.findIndex((p) => p.slug === slug && p.status === "published");
  if (index === -1) return null;
  posts[index] = { ...posts[index], views: (posts[index].views || 0) + 1 };
  await writeAll(posts);
  return posts[index].views;
}
