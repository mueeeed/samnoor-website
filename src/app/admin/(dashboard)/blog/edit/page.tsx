import type { Metadata } from "next";
import { Suspense } from "react";
import { AdminBlogEdit } from "@/components/admin/AdminBlogEdit";
import { RequireAdmin } from "@/components/admin/RequireAdmin";

export const metadata: Metadata = { title: "Edit Post" };

export default function EditBlogPostPage() {
  return (
    <RequireAdmin>
      <Suspense fallback={<p className="text-sm text-muted">Loading…</p>}>
        <AdminBlogEdit />
      </Suspense>
    </RequireAdmin>
  );
}
