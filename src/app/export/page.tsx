import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { LinkButton } from "@/components/ui/Button";
import { countries, regions } from "@/content/countries";
import { slugify } from "@/content/locations";
import { locationHeroPhoto } from "@/lib/placeholder-image";
import { siteConfig } from "@/lib/site-config";
import { GlobeIcon, TruckIcon, ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Export Markets",
  description: "SamNoor is a hijab and abaya exporter shipping from Mumbai to 42 countries across six regions, with air, sea, and express freight and full Incoterm support.",
};

const INCOTERMS = [
  { term: "EXW", name: "Ex Works", description: "You manage export customs and freight from our factory door. Lowest quoted price." },
  { term: "FOB", name: "Free on Board", description: "We handle export customs and load onto the vessel at Nhava Sheva (JNPT). Our most common wholesale term." },
  { term: "CIF", name: "Cost, Insurance & Freight", description: "We book freight and insurance to your destination port; you handle import customs." },
  { term: "DDP", name: "Delivered Duty Paid", description: "We manage the full chain including destination duties and clearance. Best for first-time importers." },
];

export default function ExportPage() {
  return (
    <>
      <PageHero
        kicker="Export"
        title={`Shipping to ${siteConfig.stats.countriesServed}+ Countries`}
        description="From our Mumbai facility, SamNoor exports to wholesale and private label partners across six regions, with full documentation and Incoterm support."
        image={{
          src: locationHeroPhoto(0),
          alt: "Container ship being loaded with cargo at a port terminal",
          width: 1200,
          height: 900,
        }}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-14 flex flex-col gap-4">
            <Kicker>Markets Served</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Six Regions, {countries.length} Countries</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => {
              const regionCountries = countries.filter((c) => c.region === region);
              return (
                <div key={region} className="card-premium flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-2.5 border-b border-line pb-4 text-accent">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <GlobeIcon width={16} height={16} />
                    </span>
                    <h3 className="font-heading text-base font-semibold text-heading">{region}</h3>
                    <span className="ml-auto text-xs text-muted">{regionCountries.length} markets</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {regionCountries.map((country) => (
                      <Link
                        key={country.code}
                        href={`/locations/${slugify(country.name)}`}
                        className="rounded-full border border-line bg-panel px-3 py-1 text-xs text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        {country.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container>
          <div className="mb-14 flex flex-col gap-4">
            <Kicker>Incoterms</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Choose the Right Shipping Term</h2>
            <p className="max-w-2xl text-muted">
              We quote all four terms on request so you can compare real landed cost, not just factory-gate price.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INCOTERMS.map((item) => (
              <div key={item.term} className="card-premium flex flex-col gap-2 p-6">
                <span className="font-heading text-2xl font-semibold text-accent">{item.term}</span>
                <h3 className="text-sm font-semibold text-heading">{item.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <Kicker>Logistics</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Flexible Freight, Full Documentation</h2>
            <p className="text-muted">
              Our export team prepares commercial invoices, packing lists, certificates of origin, and any
              additional documentation your destination market requires.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "Air freight for fast, lower-volume shipments",
              "Sea freight (FCL and LCL) for standing wholesale volume",
              "Express courier for samples and urgent replenishment",
              "Full customs clearance handled on DDP shipments",
            ].map((item) => (
              <div key={item} className="card-premium flex items-center gap-3 px-5 py-4 text-sm text-ink">
                <TruckIcon width={18} height={18} className="shrink-0 text-accent" />
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="noir-texture relative bg-noir py-16 text-cream">
        <Container className="relative z-10 flex flex-col items-center gap-4 text-center">
          <h2 className="text-gold-gradient font-heading text-2xl font-semibold sm:text-3xl">Shipping Somewhere Not Listed?</h2>
          <p className="max-w-xl text-cream/80">
            Our network covers markets beyond this list. Tell us your destination and target volume, and we&rsquo;ll
            confirm freight options and lead time.
          </p>
          <LinkButton
            href="/contact"
            variant="primary"
            className="bg-gold! border-gold! text-noir! hover:bg-transparent! hover:text-gold! mt-2"
          >
            Talk to Our Export Team
            <ArrowRightIcon width={16} height={16} />
          </LinkButton>
        </Container>
      </section>
    </>
  );
}
