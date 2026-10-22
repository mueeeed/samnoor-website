import type { Metadata } from "next";
import type { ReactNode } from "react";

// Metadata lives in this server layout because blog/page.tsx and
// blog/_post/page.tsx are client components (they fetch post data from the
// PHP backend at runtime, since content can change after the static export
// was built) — a "use client" page can't itself export `metadata`.
export const metadata: Metadata = {
  title: "The Journal",
  description: "Sourcing guides, private label playbooks, and export logistics notes from the SamNoor team.",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
