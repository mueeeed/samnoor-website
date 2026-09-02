import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { fabrics } from "@/content/fabrics";
import { testingCapabilities } from "@/content/certifications";
import { placeholder } from "@/lib/placeholder-image";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Fabric Library",
  description: "Samnoor's core fabric library, from everyday Nida and chiffon to mulberry silk and custom-developed blends.",
};

export default function FabricsPage() {
  return (
    <>
      <PageHero
        kicker="Materials"
        title="Our Fabric Library"
        description="Thirteen base fabrics, tested and specified for modest wear applications, with custom development available for private label partners."
        image={placeholder("fabrics-hero", "Rolls of fabric arranged by color and texture")}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fabrics.map((fabric) => (
              <Link key={fabric.slug} href={`/fabrics/${fabric.slug}`} className="card-premium group flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={fabric.image.src}
                    alt={fabric.image.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="font-heading text-lg font-semibold text-heading transition-colors group-hover:text-accent">
                    {fabric.name}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted">{fabric.description}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                    {fabric.bestFor.slice(0, 2).map((use) => (
                      <span key={use} className="rounded-full bg-panel-alt px-2.5 py-1 text-xs text-muted">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <Kicker>Quality Assurance</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Every Batch Is Tested</h2>
            <p className="text-muted">
              Fabric batches are checked against specification before cutting begins. Third-party pre-shipment
              inspection can be arranged on any order.
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {testingCapabilities.map((item) => (
              <li key={item} className="card-premium flex items-center gap-3 px-5 py-4 text-sm text-ink">
                <CheckIcon width={18} height={18} className="shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="noir-texture relative bg-noir py-16 text-cream">
        <Container className="relative z-10 flex flex-col items-center gap-4 text-center">
          <h2 className="text-gold-gradient font-heading text-2xl font-semibold sm:text-3xl">Need a Custom Fabric?</h2>
          <p className="max-w-xl text-cream/80">
            We develop custom blends, weights, and finishes for qualifying volume commitments &mdash; typically
            starting at 1,000 to 3,000 meters depending on fabric type.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-sm border border-gold bg-gold px-6 py-3 font-body text-sm font-medium text-noir transition-colors hover:bg-transparent hover:text-gold"
          >
            Start a Fabric Inquiry
            <ArrowRightIcon width={16} height={16} />
          </Link>
        </Container>
      </section>
    </>
  );
}
