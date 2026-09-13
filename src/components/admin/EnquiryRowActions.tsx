"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Enquiry } from "@/lib/enquiry-store";

export function EnquiryRowActions({ id, status }: { id: string; status: Enquiry["status"] }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function setStatus(next: Enquiry["status"]) {
    setBusy(true);
    await fetch(`/api/admin/enquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    router.refresh();
    setBusy(false);
  }

  async function handleDelete() {
    if (!window.confirm("Delete this enquiry?")) return;
    setBusy(true);
    await fetch(`/api/admin/enquiries/${id}`, { method: "DELETE" });
    router.refresh();
    setBusy(false);
  }

  return (
    <div className="flex items-center justify-end gap-2 text-xs">
      <select
        value={status}
        disabled={busy}
        onChange={(e) => setStatus(e.target.value as Enquiry["status"])}
        className="rounded-sm border border-line bg-paper px-2 py-1 text-ink"
      >
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="closed">Closed</option>
      </select>
      <button type="button" onClick={handleDelete} disabled={busy} className="text-red-600 hover:underline disabled:opacity-50">
        Delete
      </button>
    </div>
  );
}
