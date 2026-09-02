import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { categories } from "@/content/categories";
import { Kicker } from "@/components/ui/Kicker";
import { ArrowRightIcon } from "@/components/ui/icons";

const FEATURED_SLUGS = ["hijabs", "abayas", "khimars", "prayer-dresses", "kaftans", "luxury-hijabs", "scarves", "instant-hijabs"];

export function FeaturedCategories() {
  const featured = FEATURED_SLUGS.map((slug) => categories.find((c) => c.slug === slug)).filter(
    (c): c is (typeof categories)[number] => Boolean(c)
  );

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-4 sm:mb-14">
          <Kicker>Our Range</Kicker>
          <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Product Categories</h2>
          <p className="max-w-2xl text-muted">
            Fifteen categories manufactured in-house, from everyday essentials to embellished occasion pieces &mdash;
            every style available for private label and OEM production.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm border border-line shadow-[0_1px_2px_rgba(12,12,8,0.05),0_24px_48px_-32px_rgba(12,12,8,0.4)] transition-shadow duration-500 hover:border-gold/40 hover:shadow-[0_1px_2px_rgba(12,12,8,0.06),0_32px_64px_-32px_rgba(12,12,8,0.55)]"
            >
              <Image
                src={category.cardImage.src}
                alt={category.cardImage.alt}
                fill
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/15 to-transparent" />
              <div className="relative flex items-center justify-between gap-2 p-4 text-cream">
                <span className="font-heading text-lg font-semibold">{category.shortName}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-noir">
                  <ArrowRightIcon width={14} height={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/products" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent hover:underline">
            View all categories
            <ArrowRightIcon width={15} height={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
