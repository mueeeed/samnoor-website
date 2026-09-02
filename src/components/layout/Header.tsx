"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteConfig } from "@/lib/site-config";
import { MenuIcon, CloseIcon, ArrowRightIcon, MailIcon, PhoneIcon, GlobeIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/fabrics", label: "Fabrics" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/private-label", label: "Private Label" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-noir text-cream/70 lg:block">
        <Container className="flex h-9 items-center justify-between text-xs tracking-wide">
          <div className="flex items-center gap-6">
            <a href={`mailto:${siteConfig.contact.salesEmail}`} className="flex items-center gap-1.5 hover:text-gold">
              <MailIcon width={13} height={13} />
              {siteConfig.contact.salesEmail}
            </a>
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1.5 hover:text-gold">
              <PhoneIcon width={13} height={13} />
              {siteConfig.contact.phone}
            </a>
          </div>
          <span className="flex items-center gap-1.5">
            <GlobeIcon width={13} height={13} />
            Exporting to {siteConfig.stats.countriesServed}+ countries
          </span>
        </Container>
      </div>

      <div className="glass border-b border-line">
        <Container className="relative flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center text-ink lg:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm tracking-wide text-ink transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            onClick={() => setOpen(false)}
            aria-label="Abayatique"
          >
            <Image
              src="/logo-arabic-gold.png"
              alt=""
              width={2010}
              height={779}
              priority
              className="h-8 w-auto sm:h-9"
            />
            <span className="mt-1 font-heading text-sm uppercase tracking-[0.3em] text-heading">
              Abayatique
            </span>
          </Link>

          <div className="flex items-center gap-3 lg:gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-sm border border-accent px-5 py-2.5 font-body text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-paper lg:inline-flex"
            >
              Request a Quote
              <ArrowRightIcon width={15} height={15} />
            </Link>
          </div>
        </Container>

        {open && (
          <div className="border-t border-line bg-paper lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-body text-base text-ink transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-sm border border-accent px-5 py-3 font-body text-sm font-medium text-accent"
              >
                Request a Quote
                <ArrowRightIcon width={15} height={15} />
              </Link>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
