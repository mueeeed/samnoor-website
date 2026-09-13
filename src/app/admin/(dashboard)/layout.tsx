import Link from "next/link";
import type { ReactNode } from "react";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-panel">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/admin/blog" className="font-heading text-sm font-semibold text-heading">
            SamNoor Admin
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/admin/blog" className="text-muted hover:text-heading">
              Blog Posts
            </Link>
            <Link href="/admin/enquiries" className="text-muted hover:text-heading">
              Enquiries
            </Link>
            <Link href="/blog" target="_blank" className="text-muted hover:text-heading">
              View Journal ↗
            </Link>
            <LogoutButton />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
