"use client";

import { useEffect } from "react";

/** Fires once per page load to record a read; the API dedupes repeat hits server-side. */
export function ViewCounter({ slug }: { slug: string }) {
  useEffect(() => {
    fetch(`/api/blog/${slug}/view`, { method: "POST" }).catch(() => {});
  }, [slug]);

  return null;
}
