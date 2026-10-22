"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import type { BlogPost } from "@/content/types";

export function AdminBlogEdit() {
  const id = useSearchParams().get("id") || "";
  const [state, setState] = useState<"loading" | "not-found" | { post: BlogPost }>("loading");

  useEffect(() => {
    Promise.resolve()
      .then(() => (id ? fetch(`/php-api/admin/posts.php?id=${id}`).then((res) => (res.ok ? res.json() : null)) : null))
      .then((data) => setState(data?.post ? { post: data.post } : "not-found"))
      .catch(() => setState("not-found"));
  }, [id]);

  if (state === "loading") return <p className="text-sm text-muted">Loading…</p>;
  if (state === "not-found") return <p className="text-sm text-muted">Post not found.</p>;

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-heading text-2xl font-semibold text-heading">Edit Post</h1>
      <BlogPostForm mode="edit" postId={state.post.id} initial={state.post} />
    </div>
  );
}
