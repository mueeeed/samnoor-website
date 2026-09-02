import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/content/categories";
import { certifications } from "@/content/certifications";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { InstagramIcon, FacebookIcon, LinkedInIcon, MailIcon, PhoneIcon, MapPinIcon, ShieldIcon } from "@/components/ui/icons";

const SOCIAL_LINKS = [
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Samnoor" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/private-label", label: "Private Label & OEM" },
  { href: "/certifications", label: "Certifications" },
  { href: "/export", label: "Export Markets" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQs" },
];

export function Footer() {
  return (
    <footer className="noir-texture bg-noir text-cream">
      <Container className="relative z-10 grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Image
            src="/logo-wordmark-transparent.png"
            alt={siteConfig.name}
            width={520}
            height={140}
            className="h-11 w-auto brightness-110"
          />
          <p className="max-w-xs text-sm leading-relaxed text-cream/75">{siteConfig.description}</p>
          <div className="mt-2 flex gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-noir"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-cream/55">Trade Newsletter</span>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">Company</h3>
          {COMPANY_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-cream/75 transition-colors hover:text-gold-soft">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">Product Range</h3>
          {categories.slice(0, 6).map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="text-sm text-cream/75 transition-colors hover:text-gold-soft"
            >
              {category.shortName}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">Get in Touch</h3>
          <a href={`mailto:${siteConfig.contact.salesEmail}`} className="flex items-start gap-2.5 text-sm text-cream/75 hover:text-gold-soft">
            <MailIcon width={16} height={16} className="mt-0.5 shrink-0 text-gold" />
            {siteConfig.contact.salesEmail}
          </a>
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-start gap-2.5 text-sm text-cream/75 hover:text-gold-soft">
            <PhoneIcon width={16} height={16} className="mt-0.5 shrink-0 text-gold" />
            {siteConfig.contact.phone}
          </a>
          <p className="flex items-start gap-2.5 text-sm text-cream/75">
            <MapPinIcon width={16} height={16} className="mt-0.5 shrink-0 text-gold" />
            <span>
              {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
              <br />
              {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
            </span>
          </p>
        </div>
      </Container>

      <div className="relative z-10 border-t border-gold/15">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6">
          {certifications.map((cert) => (
            <span key={cert.name} className="flex items-center gap-2 text-xs tracking-wide text-cream/55">
              <ShieldIcon width={14} height={14} className="text-gold/70" />
              {cert.name}
            </span>
          ))}
        </Container>
      </div>

      <div className="relative z-10 border-t border-gold/15">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gold-soft">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-soft">Terms of Trade</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
