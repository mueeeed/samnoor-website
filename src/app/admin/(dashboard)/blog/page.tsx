import type { Metadata } from "next";
import { AdminBlogList } from "@/components/admin/AdminBlogList";
import { RequireAdmin } from "@/components/admin/RequireAdmin";

export const metadata: Metadata = { title: "Blog Posts" };

export default function AdminBlogListPage() {
  return (
    <RequireAdmin>
      <AdminBlogList />
    </RequireAdmin>
  );
}
