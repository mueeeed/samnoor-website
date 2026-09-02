"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/ui/icons";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("samnoor-theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <SunIcon width={16} height={16} /> : <MoonIcon width={16} height={16} />}
    </button>
  );
}
