"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";

/**
 * Client-side session gate for the admin SPA. There's no server left to
 * check the session cookie before the page renders (this is a static
 * export), so every admin page wraps its content in this and the actual
 * data still only ever comes from PHP endpoints that independently require
 * a valid session — this just spares a logged-out visitor from seeing a
 * flash of an empty dashboard before being redirected.
 */
export function RequireAdmin({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [status, setStatus] = useState<"checking" | "authenticated">("checking");

  useEffect(() => {
    fetch("/php-api/admin/session.php")
      .then((res) => (res.ok ? res.json() : { authenticated: false }))
      .then((data) => {
        if (data.authenticated) {
          setStatus("authenticated");
        } else {
          const next = encodeURIComponent(window.location.pathname + window.location.search);
          router.replace(`/admin/login?next=${next}`);
        }
      })
      .catch(() => router.replace("/admin/login"));
  }, [router]);

  if (status === "checking") {
    return <div className="flex min-h-screen items-center justify-center text-sm text-muted">Checking session…</div>;
  }

  return <>{children}</>;
}
