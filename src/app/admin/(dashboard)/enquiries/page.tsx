import type { Metadata } from "next";
import { AdminEnquiries } from "@/components/admin/AdminEnquiries";
import { RequireAdmin } from "@/components/admin/RequireAdmin";

export const metadata: Metadata = { title: "Enquiries" };

export default function AdminEnquiriesPage() {
  return (
    <RequireAdmin>
      <AdminEnquiries />
    </RequireAdmin>
  );
}
