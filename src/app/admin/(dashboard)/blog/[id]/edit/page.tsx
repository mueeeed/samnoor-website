import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/blog-store";
import { BlogPostForm } from "@/components/admin/BlogPostForm";

export const metadata: Metadata = { title: "Edit Post" };
export const dynamic = "force-dynamic";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) notFound();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-heading text-2xl font-semibold text-heading">Edit Post</h1>
      <BlogPostForm mode="edit" postId={post.id} initial={post} />
    </div>
  );
}
