import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { placeholder } from "@/lib/placeholder-image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Story, Leadership & Philosophy",
  description: "SamNoor's story, philosophy, and leadership team — a Mumbai-based hijab and abaya manufacturer building modest fashion for wholesale partners worldwide.",
  keywords: [
    "hijab manufacturer Mumbai",
    "abaya manufacturer company profile",
    "modest fashion manufacturer India",
    "about SamNoor",
  ],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const storyImage = placeholder("about-story", "Product development desk with fabric swatches and sketches");
  const philosophyImage = placeholder("about-philosophy", "Quality inspector reviewing a finished garment");

  return (
    <>
      <PageHero
        kicker="About SamNoor"
        title={siteConfig.tagline}
        description={siteConfig.description}
        image={placeholder("about-hero", "Exterior of the SamNoor factory in Mumbai")}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line shadow-[0_24px_60px_-32px_rgba(12,12,8,0.4)]">
            <Image src={storyImage.src} alt={storyImage.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <Kicker>Our Story</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">From One Cutting Table in Marol to a Full Export House</h2>
            <p className="text-muted">
              SamNoor started in {siteConfig.founded} as a single cutting table and three tailors in Mumbai&rsquo;s
              Marol Industrial Estate, stitching chiffon hijabs to order for a handful of Gulf-bound trading houses.
              Marol has been one of the city&rsquo;s garment export hubs since the 1980s, and growing up inside that
              cluster meant learning the export side of the business &mdash; documentation, quality audits, freight
              &mdash; almost as early as the stitching side.
            </p>
            <p className="text-muted">
              {siteConfig.stats.yearsInBusiness} years on, that cutting table has grown into a{" "}
              {siteConfig.stats.factoryAreaSqFt.toLocaleString()} sq ft manufacturing unit employing{" "}
              {siteConfig.stats.workforce}+ people, producing eleven categories of hijabs, abayas, and modest wear for{" "}
              {siteConfig.stats.clientsWorldwide.toLocaleString()}+ wholesale clients across{" "}
              {siteConfig.stats.countriesServed}+ countries &mdash; still shipped out of the same neighbourhood where
              we started.
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
              We built our own internal fabric testing and inspection process, and it shapes how our floor
              actually runs, from fabric testing to worker conditions &mdash; not just what happens at final packing.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line shadow-[0_24px_60px_-32px_rgba(12,12,8,0.4)] lg:order-1">
            <Image src={philosophyImage.src} alt={philosophyImage.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
          </div>
        </Container>
      </section>
    </>
  );
}
