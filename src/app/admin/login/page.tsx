import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-16">
      <div className="w-full max-w-sm rounded-sm border border-line bg-panel p-8 shadow-sm">
        <h1 className="mb-1 font-heading text-xl font-semibold text-heading">SamNoor Admin</h1>
        <p className="mb-6 text-sm text-muted">Sign in to manage the Journal.</p>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
