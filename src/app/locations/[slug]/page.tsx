import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { ContactForm } from "@/components/forms/ContactForm";
import { locations, getLocationBySlug } from "@/content/locations";
import { getCategoryBySlug } from "@/content/categories";
import { placeholder } from "@/lib/placeholder-image";
import { siteConfig } from "@/lib/site-config";
import { GlobeIcon, TruckIcon, ClockIcon } from "@/components/ui/icons";

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  const title =
    location.kind === "country"
      ? `Hijab & Abaya Wholesale Supplier for ${location.name} Buyers`
      : `Hijab & Abaya Wholesale Supplier in ${location.name}, India`;
  return { title, description: location.intro };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const categories = location.popularCategories.map(getCategoryBySlug).filter((c) => c !== undefined);
  const heroImage = placeholder("export-hero", "Shipping containers at an export freight terminal");
  const isDomestic = location.kind === "city";

  const title = isDomestic
    ? `Hijab & Abaya Wholesale Supplier in ${location.name}, India`
    : `Hijab & Abaya Wholesale Supplier for ${location.name} Buyers`;

  return (
    <>
      <PageHero
        kicker={isDomestic ? "India" : location.region}
        title={title}
        description={location.intro}
        image={heroImage}
        crumb={location.name}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="card-premium flex flex-col gap-2 p-6">
            <GlobeIcon width={20} height={20} className="text-accent" />
            <h3 className="mt-1 font-heading text-sm font-semibold uppercase tracking-widest text-heading">
              {isDomestic ? "Delivery Route" : "Nearest Port"}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{location.nearestPort}</p>
          </div>
          <div className="card-premium flex flex-col gap-2 p-6">
            <TruckIcon width={20} height={20} className="text-accent" />
            <h3 className="mt-1 font-heading text-sm font-semibold uppercase tracking-widest text-heading">Typical Freight</h3>
            <p className="text-sm leading-relaxed text-muted">{location.typicalFreight}</p>
          </div>
          <div className="card-premium flex flex-col gap-2 p-6">
            <ClockIcon width={20} height={20} className="text-accent" />
            <h3 className="mt-1 font-heading text-sm font-semibold uppercase tracking-widest text-heading">Lead Time</h3>
            <p className="text-sm leading-relaxed text-muted">{location.leadTimeNote}</p>
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-4">
            <Kicker>Recommended Terms</Kicker>
            <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">
              Shipping to {location.name}
            </h2>
            <p className="max-w-2xl text-muted">{location.recommendedIncoterm}.</p>
          </div>

          <div className="mb-10 flex flex-col gap-4">
            <Kicker>Popular Categories in {isDomestic ? location.name : location.region}</Kicker>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm border border-line"
              >
                <Image
                  src={category.cardImage.src}
                  alt={category.cardImage.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/10 to-transparent" />
                <div className="relative p-3.5 text-cream">
                  <span className="font-heading text-sm font-semibold leading-tight">{category.shortName}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="enquire" className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Kicker>Request a Quote</Kicker>
            <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">
              Get Pricing for Your {location.name} Order
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Send your target category, quantity, and timeline and our export sales team will respond within one
              business day with a quotation and lead time for {location.name}.
            </p>
            <div className="mt-2 flex flex-col gap-2 text-sm text-muted">
              <p>
                Prefer to reach us directly? Email{" "}
                <a href={`mailto:${siteConfig.contact.salesEmail}`} className="text-accent hover:underline">
                  {siteConfig.contact.salesEmail}
                </a>{" "}
                or see all contact options on our{" "}
                <Link href="/contact" className="text-accent hover:underline">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </div>
          <ContactForm sourcePage={`/locations/${location.slug}`} />
        </Container>
      </section>

      <section className="bg-panel-alt py-16 sm:py-20">
        <Container>
          <Kicker>Explore More Markets</Kicker>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-heading sm:text-3xl">Other Locations We Serve</h2>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {locations
              .filter((l) => l.slug !== location.slug && l.region === location.region)
              .slice(0, 10)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/locations/${other.slug}`}
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
