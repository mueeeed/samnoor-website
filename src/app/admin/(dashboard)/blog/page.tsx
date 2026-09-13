import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsForAdmin } from "@/lib/blog-store";
import { formatDate } from "@/lib/utils";
import { DeletePostButton } from "@/components/admin/DeletePostButton";

export const metadata: Metadata = { title: "Blog Posts" };
export const dynamic = "force-dynamic";

export default function AdminBlogListPage() {
  const posts = getAllPostsForAdmin();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-semibold text-heading">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-sm bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          + New Post
        </Link>
      </div>

      <div className="overflow-hidden rounded-sm border border-line bg-panel">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-line bg-panel-alt text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Views</th>
              <th className="px-4 py-3">Reading Time</th>
              <th className="px-4 py-3">Updated</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-line last:border-0">
                <td className="px-4 py-3">
                  <div className="font-medium text-heading">{post.title}</div>
                  <div className="text-xs text-muted">/{post.slug}</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={
                      post.status === "published"
                        ? "rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                        : "rounded-full bg-panel-alt px-2 py-0.5 text-xs font-medium text-muted"
                    }
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-ink">{post.views.toLocaleString()}</td>
                <td className="px-4 py-3 text-ink">{post.readingTime}</td>
                <td className="px-4 py-3 text-muted">{formatDate(post.updatedAt || post.publishedAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-3">
                    <Link href={`/admin/blog/${post.id}/edit`} className="text-accent hover:underline">
                      Edit
                    </Link>
                    <DeletePostButton id={post.id} title={post.title} />
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted">
                  No posts yet. Create your first one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
