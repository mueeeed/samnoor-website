import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { LinkButton } from "@/components/ui/Button";
import { fabrics, getFabricBySlug } from "@/content/fabrics";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";

export async function generateStaticParams() {
  return fabrics.map((fabric) => ({ slug: fabric.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const fabric = getFabricBySlug(slug);
  if (!fabric) return {};
  return { title: fabric.name, description: fabric.description };
}

export default async function FabricPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fabric = getFabricBySlug(slug);
  if (!fabric) notFound();

  const otherFabrics = fabrics.filter((f) => f.slug !== fabric.slug).slice(0, 4);

  return (
    <>
      <PageHero kicker="Fabric" title={fabric.name} description={fabric.origin} image={fabric.image} crumb={fabric.name} />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-ink">{fabric.description}</p>

            <div>
              <Kicker>Properties</Kicker>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {fabric.properties.map((prop) => (
                  <li key={prop} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                    {prop}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Kicker>Care Instructions</Kicker>
              <ul className="mt-5 flex flex-col gap-2">
                {fabric.careInstructions.map((instruction) => (
                  <li key={instruction} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card-premium p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">Best For</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {fabric.bestFor.map((use) => (
                  <span key={use} className="rounded-full bg-panel-alt px-3 py-1.5 text-sm text-ink">
                    {use}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-premium flex flex-col gap-3 p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">Request This Fabric</h3>
              <p className="text-sm text-muted">Get a quotation for {fabric.name} in your target style and volume.</p>
              <LinkButton href="/contact" variant="primary" className="mt-1">
                Request a Quote
                <ArrowRightIcon width={16} height={16} />
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-16 sm:py-20">
        <Container>
          <Kicker>More Fabrics</Kicker>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {otherFabrics.map((other) => (
              <Link
                key={other.slug}
                href={`/fabrics/${other.slug}`}
                className="shrink-0 rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
