import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-paper border border-accent hover:bg-transparent hover:text-accent",
  outline: "bg-transparent text-ink border border-line hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-ink border border-transparent hover:text-accent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-body text-sm font-medium tracking-wide transition-colors duration-200";

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
}
