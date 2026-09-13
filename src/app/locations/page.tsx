import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { locations, locationRegions } from "@/content/locations";
import { placeholder } from "@/lib/placeholder-image";
import { siteConfig } from "@/lib/site-config";
import { GlobeIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Locations We Serve — Hijab & Abaya Wholesale Supply Worldwide",
  description: `SamNoor supplies wholesale hijabs and abayas to buyers across ${siteConfig.stats.countriesServed}+ countries, plus domestic distribution across India. Find shipping and lead time details for your market.`,
};

export default function LocationsIndexPage() {
  return (
    <>
      <PageHero
        kicker="Locations"
        title="Where We Ship"
        description={`Wholesale shipping details, freight options, and popular categories for every market we serve — ${siteConfig.stats.countriesServed}+ countries plus domestic distribution across India.`}
        image={placeholder("export-hero", "Shipping containers at an export freight terminal")}
      />

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-14">
          {locationRegions.map((region) => {
            const regionLocations = locations.filter((l) => l.region === region);
            return (
              <div key={region} className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5 border-b border-line pb-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <GlobeIcon width={16} height={16} />
                  </span>
                  <h2 className="font-heading text-xl font-semibold text-heading">{region}</h2>
                  <span className="ml-auto text-xs text-muted">{regionLocations.length} markets</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {regionLocations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                      className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
