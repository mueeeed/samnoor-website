import { Container } from "@/components/ui/Container";
import { countries, regions } from "@/content/countries";
import { siteConfig } from "@/lib/site-config";
import { Kicker } from "@/components/ui/Kicker";
import { GlobeIcon } from "@/components/ui/icons";

export function CountriesServed() {
  return (
    <section className="bg-panel-alt py-20 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-4 sm:mb-14">
          <Kicker>Global Reach</Kicker>
          <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">
            Exporting to {siteConfig.stats.countriesServed}+ Countries
          </h2>
          <p className="max-w-2xl text-muted">
            From our Dubai facility, Samnoor ships to wholesale and private label partners across six regions.
          </p>
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
                    <span
                      key={country.code}
                      className="rounded-full border border-line bg-panel px-3 py-1 text-xs text-ink"
                    >
                      {country.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
