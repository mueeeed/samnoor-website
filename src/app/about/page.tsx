import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { team } from "@/content/team";
import { certifications } from "@/content/certifications";
import { placeholder } from "@/lib/placeholder-image";
import { siteConfig } from "@/lib/site-config";
import { ShieldIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About Samnoor",
  description: "Samnoor's story, philosophy, and leadership team — a Dubai manufacturer building modest fashion for wholesale partners worldwide.",
};

export default function AboutPage() {
  const storyImage = placeholder("about-story", "Product development desk with fabric swatches and sketches");
  const philosophyImage = placeholder("about-philosophy", "Quality inspector reviewing a finished garment");

  return (
    <>
      <PageHero
        kicker="About Samnoor"
        title={siteConfig.tagline}
        description={siteConfig.description}
        image={placeholder("about-hero", "Exterior of the Samnoor factory in Dubai")}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line shadow-[0_24px_60px_-32px_rgba(12,12,8,0.4)]">
            <Image src={storyImage.src} alt={storyImage.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <Kicker>Our Story</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">From a Single Line to a Full Factory</h2>
            <p className="text-muted">
              Samnoor was founded in {siteConfig.founded} on a single production line making chiffon hijabs for
              regional wholesalers. Over {siteConfig.stats.yearsInBusiness} years, that line grew into a{" "}
              {siteConfig.stats.factoryAreaSqFt.toLocaleString()} square foot facility in Dubai&rsquo;s Al Quoz
              Industrial Area, employing {siteConfig.stats.workforce}+ people across cutting, stitching, embroidery,
              and quality control.
            </p>
            <p className="text-muted">
              Today we manufacture fifteen product categories for {siteConfig.stats.clientsWorldwide.toLocaleString()}+
              clients across {siteConfig.stats.countriesServed}+ countries, from standing wholesale accounts to
              private label brands we&rsquo;ve built from a first sketch.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-4 lg:order-2">
            <Kicker>Our Philosophy</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Consistency Over Volume</h2>
            <p className="text-muted">
              We turn away orders we can&rsquo;t deliver on time rather than overcommit our production schedule.
              That discipline is why our lead times hold across seasonal cycles, and why our reorder rate is the
              metric we track most closely internally &mdash; not units shipped.
            </p>
            <p className="text-muted">
              Certification isn&rsquo;t a marketing line for us. ISO 9001, OEKO-TEX, WRAP, and SEDEX/SMETA audits
              shape how our floor actually runs, from fabric testing to worker conditions.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line shadow-[0_24px_60px_-32px_rgba(12,12,8,0.4)] lg:order-1">
            <Image src={philosophyImage.src} alt={philosophyImage.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-14 flex flex-col gap-4">
            <Kicker>Leadership</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">The People Behind the Factory</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="card-premium flex flex-col overflow-hidden">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src={member.photo.src} alt={member.photo.alt} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <h3 className="font-heading text-base font-semibold text-heading">{member.name}</h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">{member.role}</span>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="noir-texture relative bg-noir py-16 text-cream">
        <Container className="relative z-10">
          <div className="mb-8 text-center">
            <h2 className="text-gold-gradient font-heading text-2xl font-semibold sm:text-3xl">Certified &amp; Audited</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {certifications.map((cert) => (
              <span key={cert.name} className="flex items-center gap-2 text-sm text-cream/75">
                <ShieldIcon width={16} height={16} className="text-gold" />
                {cert.name}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
