import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { placeholder } from "@/lib/placeholder-image";
import { siteConfig } from "@/lib/site-config";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";

const STRENGTHS = [
  `${siteConfig.stats.factoryAreaSqFt.toLocaleString()} sq ft production facility in Mumbai's Marol Industrial Estate`,
  `${siteConfig.stats.workforce}+ skilled machinists, pattern makers, and quality inspectors`,
  "In-house cutting, stitching, embroidery, and finishing under one roof",
  "Dedicated fabric testing lab for colorfastness, weight, and composition checks",
  `${Math.round(siteConfig.stats.monthlyCapacityUnits / 1000)}K unit monthly production capacity across all categories`,
];

export function ManufacturingStrengths() {
  const image = placeholder("home-manufacturing", "Wide view of the SamNoor factory production floor", 1600, 1200);

  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative lg:order-2">
          <div className="absolute -inset-4 -z-10 rounded-sm border border-accent/25 sm:-inset-5" aria-hidden="true" />
          <Link
            href="/manufacturing"
            aria-label="See our manufacturing facility"
            className="group relative block aspect-[4/3] w-full overflow-hidden rounded-sm shadow-[0_30px_70px_-35px_rgba(12,12,8,0.5)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-5 lg:order-1">
          <Kicker>Manufacturing</Kicker>
          <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">
            One Factory, Full Vertical Control
          </h2>
          <p className="text-muted">
            Every SamNoor order runs through a single facility &mdash; from fabric inspection to final packing &mdash;
            so specification, timeline, and quality stay consistent from your first sample to your fiftieth container.
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {STRENGTHS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <LinkButton href="/manufacturing" variant="outline">
              See Our Facility
              <ArrowRightIcon width={16} height={16} />
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
