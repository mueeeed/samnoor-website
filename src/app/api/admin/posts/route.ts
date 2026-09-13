import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getAllPostsForAdmin, createPost, isValidSlug, isValidImageSrc } from "@/lib/blog-store";
import { rejectIfTooLarge, rejectIfCrossOrigin } from "@/lib/request-guards";

export const dynamic = "force-dynamic";

const faqSchema = z.object({ question: z.string().min(1).max(300), answer: z.string().min(1).max(2000) });

const postInputSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(100).refine(isValidSlug, "Slug must be lowercase letters, numbers, and hyphens only."),
  excerpt: z.string().min(1).max(400),
  coverImageSrc: z.string().min(1).max(2000).refine(isValidImageSrc, "Image URL must be https:// or a local path."),
  coverImageAlt: z.string().min(1).max(300),
  author: z.string().min(1).max(100),
  authorRole: z.string().min(1).max(100),
  category: z.string().min(1).max(100),
  tags: z.array(z.string().min(1).max(50)).max(20),
  content: z.string().min(1).max(200_000),
  faqs: z.array(faqSchema).max(20).optional(),
  status: z.enum(["draft", "published"]),
  publishedAt: z.string().optional(),
});

export async function GET() {
  return NextResponse.json({ posts: getAllPostsForAdmin() });
}

export async function POST(req: NextRequest) {
  const originError = rejectIfCrossOrigin(req);
  if (originError) return originError;
  const sizeError = rejectIfTooLarge(req, 300_000);
  if (sizeError) return sizeError;

  const body = await req.json().catch(() => null);
  const parsed = postInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid post data.", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const post = await createPost(parsed.data);
    return NextResponse.json({ post }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to create post.";
    return NextResponse.json({ error: message }, { status: 409 });
  }
}
