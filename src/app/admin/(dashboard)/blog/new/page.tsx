import type { Metadata } from "next";
import { BlogPostForm } from "@/components/admin/BlogPostForm";

export const metadata: Metadata = { title: "New Post" };
export const dynamic = "force-dynamic";

export default function NewBlogPostPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-heading text-2xl font-semibold text-heading">New Post</h1>
      <BlogPostForm mode="create" />
    </div>
  );
}
