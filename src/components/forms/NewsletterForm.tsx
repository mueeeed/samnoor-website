"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(formData.get("email") || ""),
          botField: String(formData.get("botField") || ""),
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-gold-soft">You&rsquo;re subscribed &mdash; thank you.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <p className="hidden" aria-hidden="true">
        <label>
          Don&rsquo;t fill this out if you&rsquo;re human: <input name="botField" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className="w-full min-w-0 rounded-sm border border-gold/25 bg-transparent px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-label="Subscribe"
          className="flex shrink-0 items-center justify-center rounded-sm border border-gold/40 px-3.5 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-noir disabled:opacity-60"
        >
          <ArrowRightIcon width={16} height={16} />
        </button>
      </div>
      {status === "error" && <p className="text-xs text-red-400">{error}</p>}
    </form>
  );
}
