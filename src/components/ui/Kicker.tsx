import { cn } from "@/lib/utils";

export function Kicker({
  children,
  tone = "accent",
  align = "start",
  className,
}: {
  children: React.ReactNode;
  tone?: "accent" | "gold";
  align?: "start" | "center";
  className?: string;
}) {
  const toneClass = tone === "gold" ? "text-gold" : "text-accent";

  return (
    <div className={cn("flex items-center gap-3", toneClass, align === "center" && "justify-center", className)}>
      {align === "center" && <span className="hairline max-w-10" />}
      <span className="flex shrink-0 items-center gap-1.5 text-xs font-medium uppercase tracking-[0.25em]">
        <svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
          <path d="M4 0l1.2 2.8L8 4 5.2 5.2 4 8 2.8 5.2 0 4l2.8-1.2z" />
        </svg>
        {children}
      </span>
      <span className={cn("hairline", align === "center" && "max-w-10")} />
    </div>
  );
}
