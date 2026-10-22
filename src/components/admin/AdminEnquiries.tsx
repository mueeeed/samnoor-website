"use client";

import { useEffect, useState } from "react";
import { EnquiryRowActions } from "@/components/admin/EnquiryRowActions";
import type { Enquiry } from "@/content/types";

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

export function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState<Enquiry[] | null>(null);

  function load() {
    fetch("/php-api/admin/enquiries.php")
      .then((res) => (res.ok ? res.json() : { enquiries: [] }))
      .then((data) => setEnquiries(data.enquiries || []))
      .catch(() => setEnquiries([]));
  }

  useEffect(load, []);

  const list = enquiries ?? [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-semibold text-heading">Enquiries</h1>
        <span className="text-sm text-muted">{list.length} total</span>
      </div>

      <div className="overflow-x-auto rounded-sm border border-line bg-panel">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-line bg-panel-alt text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">Received</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Quantity / Market</th>
              <th className="px-4 py-3">Flags</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((e) => (
              <tr key={e.id} className="border-b border-line align-top last:border-0">
                <td className="whitespace-nowrap px-4 py-3 text-muted">{formatDateTime(e.submittedAt)}</td>
                <td className="px-4 py-3">
                  <div className="font-medium text-heading">{e.fullName}</div>
                  <div className="text-xs text-muted">{e.companyName}</div>
                  <div className="text-xs text-muted">{e.email}</div>
                  <div className="text-xs text-muted">{e.phone}</div>
                  <div className="text-xs text-muted">{e.country}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-ink">{e.productCategory}</div>
                  <div className="text-xs text-muted">{e.interestedProducts}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-ink">{e.quantity}</div>
                  <div className="text-xs text-muted">{e.targetMarket}</div>
                  <div className="text-xs text-muted">{e.businessType}</div>
                </td>
                <td className="px-4 py-3 text-xs text-muted">
                  {[e.privateLabelRequired && "Private label", e.oemRequired && "OEM", e.customBranding && "Custom branding"]
                    .filter(Boolean)
                    .join(", ") || "—"}
                </td>
                <td className="px-4 py-3 text-xs text-muted">{e.sourcePage}</td>
                <td className="px-4 py-3">
                  <EnquiryRowActions id={e.id} status={e.status} onChanged={load} />
                </td>
              </tr>
            ))}
            {enquiries !== null && list.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-muted">
                  No enquiries yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
