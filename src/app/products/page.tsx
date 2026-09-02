import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { ProductCard } from "@/components/products/ProductCard";
import { categories } from "@/content/categories";
import { getBestSellers } from "@/content/products";
import { placeholder } from "@/lib/placeholder-image";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Product Categories",
  description: "Browse Samnoor's full catalog of hijabs, abayas, and modest wear, manufactured for wholesale and private label buyers.",
};

export default function ProductsPage() {
  const bestSellers = getBestSellers();

  return (
    <>
      <PageHero
        kicker="Catalog"
        title="Fifteen Categories, One Factory"
        description="Every category below is manufactured in-house and available for wholesale purchase or private label development."
        image={placeholder("products-hero", "Range of modest fashion garments in a curated color palette")}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm border border-line shadow-[0_1px_2px_rgba(12,12,8,0.05),0_24px_48px_-32px_rgba(12,12,8,0.4)] transition-shadow duration-500 hover:border-gold/40"
              >
                <Image
                  src={category.cardImage.src}
                  alt={category.cardImage.alt}
                  fill
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/10 to-transparent" />
                <div className="relative p-3.5 text-cream">
                  <span className="font-heading text-base font-semibold leading-tight">{category.shortName}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-4 sm:mb-14">
            <Kicker>Best Sellers</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Our Highest-Repeat Styles</h2>
            <p className="max-w-2xl text-muted">
              The styles our wholesale accounts reorder most consistently, across four consecutive seasonal cycles.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="noir-texture relative bg-noir py-16 text-cream">
        <Container className="relative z-10 flex flex-col items-center gap-4 text-center">
          <h2 className="text-gold-gradient font-heading text-2xl font-semibold sm:text-3xl">
            Don&rsquo;t See Exactly What You Need?
          </h2>
          <p className="max-w-xl text-cream/80">
            Every category on this page is a starting point for custom development. Send us a reference sketch,
            fabric swatch, or existing garment and our team will scope a private label program around it.
          </p>
          <Link
            href="/private-label"
            className="mt-2 inline-flex items-center gap-2 rounded-sm border border-gold bg-gold px-6 py-3 font-body text-sm font-medium text-noir transition-colors hover:bg-transparent hover:text-gold"
          >
            Explore Private Label
            <ArrowRightIcon width={16} height={16} />
          </Link>
        </Container>
      </section>
    </>
  );
}
