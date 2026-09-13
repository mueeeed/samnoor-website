import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { LinkButton } from "@/components/ui/Button";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductCard } from "@/components/products/ProductCard";
import { ColorSwatches } from "@/components/products/ColorSwatches";
import { ContactForm } from "@/components/forms/ContactForm";
import { categories, getSubcategory } from "@/content/categories";
import { getProductsByCategory } from "@/content/products";
import { ArrowRightIcon } from "@/components/ui/icons";

export async function generateStaticParams() {
  return categories.flatMap((category) =>
    (category.subcategories ?? []).map((subcategory) => ({
      category: category.slug,
      subcategory: subcategory.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { category, subcategory } = await params;
  const match = getSubcategory(category, subcategory);
  if (!match) return {};
  return { title: match.subcategory.name, description: match.subcategory.shortDescription };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const match = getSubcategory(categorySlug, subcategorySlug);
  if (!match) notFound();
  const { category, subcategory } = match;

  const keywords = subcategory.slug.split("-");
  const matchingProducts = getProductsByCategory(category.slug).filter((product) =>
    product.fabrics.some((fabric) => {
      const f = fabric.toLowerCase();
      return keywords.every((kw) => f.includes(kw));
    })
  );

  const otherSubcategories = (category.subcategories ?? []).filter((s) => s.slug !== subcategory.slug);

  return (
    <>
      <Container className="pt-6">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-accent">Products</Link>
          <span>/</span>
          <Link href={`/products/${category.slug}`} className="hover:text-accent">{category.name}</Link>
          <span>/</span>
          <span className="text-ink">{subcategory.name}</span>
        </nav>
      </Container>

      <section className="py-8 sm:py-12">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={subcategory.images} />

          <div className="flex flex-col gap-5">
            <Kicker>{category.name}</Kicker>
            <h1 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">{subcategory.name}</h1>
            <p className="text-base leading-relaxed text-muted">{subcategory.description}</p>

            {subcategory.colors.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted">Available Colors</h3>
                <div className="mt-2.5">
                  <ColorSwatches colors={subcategory.colors} />
                </div>
              </div>
            )}

            <div className="mt-2 flex flex-wrap gap-3">
              <LinkButton href="#enquire" variant="primary">
                Request a Quote
                <ArrowRightIcon width={16} height={16} />
              </LinkButton>
              <LinkButton href={`/products/${category.slug}`} variant="outline">
                All {category.name}
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {matchingProducts.length > 0 && (
        <section className="bg-panel-alt py-16 sm:py-20">
          <Container>
            <Kicker>Shop This Fabric</Kicker>
            <h2 className="mt-4 mb-8 font-heading text-2xl font-semibold text-heading sm:text-3xl">
              {subcategory.name} Styles
            </h2>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {matchingProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section id="enquire" className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Kicker>Request a Quote</Kicker>
            <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">Get Pricing on {subcategory.name}</h2>
            <p className="text-sm leading-relaxed text-muted">
              Tell us your target color range and quantity and our export sales team will respond within one
              business day with a quotation and sample timeline.
            </p>
          </div>
          <ContactForm defaultCategory={category.name} sourcePage={`/products/${category.slug}/type/${subcategory.slug}`} />
        </Container>
      </section>

      {otherSubcategories.length > 0 && (
        <section className="bg-panel-alt py-16 sm:py-20">
          <Container>
            <Kicker>Explore More Fabrics</Kicker>
            <h2 className="mt-4 font-heading text-2xl font-semibold text-heading sm:text-3xl">Other {category.name} Fabrics</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {otherSubcategories.map((other) => (
                <Link
                  key={other.slug}
                  href={`/products/${category.slug}/type/${other.slug}`}
                  className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {other.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
