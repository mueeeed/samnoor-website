import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { LinkButton } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { categories, getCategoryBySlug } from "@/content/categories";
import { getProductsByCategory } from "@/content/products";
import { ArrowRightIcon, PackageIcon } from "@/components/ui/icons";

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHero kicker="Category" title={category.name} description={category.description} image={category.heroImage} crumb={category.name} />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Kicker>{products.length} {products.length === 1 ? "Style" : "Styles"} Available</Kicker>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent hover:underline"
            >
              All categories
              <ArrowRightIcon width={15} height={15} />
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="card-premium flex flex-col items-center gap-4 p-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <PackageIcon width={26} height={26} />
              </span>
              <h3 className="font-heading text-xl font-semibold text-heading">Made to Order</h3>
              <p className="max-w-md text-sm text-muted">
                {category.name} are produced against your specification rather than from a fixed catalog. Send us your
                reference and target quantity and we&rsquo;ll return a quotation and sample timeline.
              </p>
              <LinkButton href="/contact" variant="primary">
                Request a Quotation
                <ArrowRightIcon width={16} height={16} />
              </LinkButton>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-2">
            {category.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-line bg-panel-alt px-3 py-1 text-xs text-muted">
                {keyword}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-16 sm:py-20">
        <Container>
          <Kicker>Explore More</Kicker>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-heading sm:text-3xl">Other Categories</h2>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {otherCategories.slice(0, 8).map((other) => (
              <Link
                key={other.slug}
                href={`/products/${other.slug}`}
                className="shrink-0 rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {other.shortName}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
