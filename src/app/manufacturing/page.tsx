import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { placeholder } from "@/lib/placeholder-image";
import { siteConfig } from "@/lib/site-config";
import { certifications } from "@/content/certifications";
import { ArrowRightIcon, ShieldIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Abaya Manufacturing Process & Factory Capabilities",
  description: "Inside SamNoor's Mumbai production facility — how a hijab and abaya manufacturer in India runs inspection, cutting, stitching, embroidery, QC, and packaging under one roof.",
};

const PROCESS = [
  { seed: "mfg-inspection", title: "Fabric Inspection", description: "Incoming fabric batches are checked for weight, composition, and colorfastness before cutting begins." },
  { seed: "mfg-cutting", title: "Cutting", description: "Patterns are laid and cut in-house, with in-line checks against the approved tech pack at every stage." },
  { seed: "mfg-stitching", title: "Stitching", description: "Our machinist floor produces standard and custom styles with seam and construction checks at each work station." },
  { seed: "mfg-embroidery", title: "Embroidery & Embellishment", description: "Hand and machine embroidery, stonework, and embellishment applied and quality-checked piece by piece." },
  { seed: "mfg-finishing", title: "Finishing", description: "Hemming, pressing, and final construction details completed to the specification agreed at sampling." },
  { seed: "mfg-qc", title: "Quality Control", description: "Pre-final inspection before packing, plus a randomized final audit before any shipment is released." },
  { seed: "mfg-packaging", title: "Packaging", description: "Custom poly bag, box, or branded packaging applied per your private label specification." },
  { seed: "mfg-warehouse", title: "Warehouse & Dispatch", description: "Finished goods staged for air, sea, or express freight, with full export documentation prepared." },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        kicker="Manufacturing"
        title="One Factory, Full Vertical Control"
        description="Every SamNoor order runs through a single facility in Mumbai — from fabric inspection to final packing — so quality and timeline stay consistent."
        image={placeholder("mfg-hero", "Wide view of the SamNoor factory production floor")}
      />

      <section className="border-b border-line bg-panel-alt py-14">
        <Container className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {[
            { label: "Factory Floor", value: `${siteConfig.stats.factoryAreaSqFt.toLocaleString()} sq ft` },
            { label: "Workforce", value: `${siteConfig.stats.workforce}+` },
            { label: "Monthly Capacity", value: `${Math.round(siteConfig.stats.monthlyCapacityUnits / 1000)}K units` },
            { label: "Operating Since", value: `${siteConfig.founded}` },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-heading text-2xl font-semibold text-heading sm:text-3xl">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-muted">{stat.label}</span>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-14 flex flex-col gap-4">
            <Kicker>The Process</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">From Fabric to Finished Container</h2>
          </div>

          <div className="flex flex-col gap-16">
            {PROCESS.map((stage, i) => {
              const image = placeholder(stage.seed, `${stage.title} at the SamNoor production facility`, 1200, 900);
              const reversed = i % 2 === 1;
              return (
                <div key={stage.seed} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line shadow-[0_24px_60px_-32px_rgba(12,12,8,0.4)]">
                    <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-display text-3xl text-accent/40">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-heading text-2xl font-semibold text-heading">{stage.title}</h3>
                    <p className="text-muted">{stage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container>
          <Kicker>Certified</Kicker>
          <h2 className="mt-4 mb-10 font-heading text-2xl font-semibold text-heading sm:text-3xl">Audited to International Standard</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="card-premium flex items-start gap-3 p-5">
                <ShieldIcon width={20} height={20} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-heading text-sm font-semibold text-heading">{cert.name}</h3>
                  <p className="mt-1 text-xs text-muted">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/certifications" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent hover:underline">
              View all certifications
              <ArrowRightIcon width={15} height={15} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
