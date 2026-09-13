import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const STATS = [
  { label: "Countries Served", value: `${siteConfig.stats.countriesServed}+` },
  { label: "Years in Business", value: `${siteConfig.stats.yearsInBusiness}` },
  { label: "Monthly Capacity", value: `${Math.round(siteConfig.stats.monthlyCapacityUnits / 1000)}K units` },
  { label: "Factory Floor", value: `${siteConfig.stats.factoryAreaSqFt.toLocaleString()} sq ft` },
  { label: "Workforce", value: `${siteConfig.stats.workforce}+` },
  { label: "Clients Worldwide", value: `${siteConfig.stats.clientsWorldwide.toLocaleString()}+` },
];

export function StatsBar() {
  return (
    <section className="border-b border-line bg-panel-alt">
      <Container className="grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-1 border-line px-1 text-center ${i > 0 ? "lg:border-l" : ""}`}
          >
            <span className="whitespace-nowrap font-heading text-lg font-semibold text-heading sm:text-2xl lg:text-2xl xl:text-3xl">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-widest text-muted">{stat.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
