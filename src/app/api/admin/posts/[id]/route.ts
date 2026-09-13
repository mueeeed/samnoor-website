import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getPostById, updatePost, deletePost, isValidSlug, isValidImageSrc } from "@/lib/blog-store";
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

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) return NextResponse.json({ error: "Post not found." }, { status: 404 });
  return NextResponse.json({ post });
}

export async function PUT(req: NextRequest, { params }: RouteParams) {
  const originError = rejectIfCrossOrigin(req);
  if (originError) return originError;
  const sizeError = rejectIfTooLarge(req, 300_000);
  if (sizeError) return sizeError;

  const { id } = await params;
  const body = await req.json().catch(() => null);
  const parsed = postInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid post data.", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const post = await updatePost(id, parsed.data);
    return NextResponse.json({ post });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to update post.";
    const status = message === "Post not found." ? 404 : 409;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  const originError = rejectIfCrossOrigin(req);
  if (originError) return originError;

  const { id } = await params;
  try {
    await deletePost(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to delete post.";
    return NextResponse.json({ error: message }, { status: 404 });
  }
}
