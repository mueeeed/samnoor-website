import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { LinkButton } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { categories, getCategoryBySlug } from "@/content/categories";
import { getProductsByCategory, getProductBySlug } from "@/content/products";
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
  const collections = (category.collections || [])
    .map((c) => ({ ...c, product: getProductBySlug(category.slug, c.productSlug) }))
    .filter((c) => c.product !== undefined);

  return (
    <>
      <PageHero kicker="Category" title={category.name} description={category.description} image={category.heroImage} crumb={category.name} />

      {collections.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <div className="mb-10 flex flex-col gap-4">
              <Kicker>Shop by Collection</Kicker>
              <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">
                {collections.length} Collections Within {category.name}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {collections.map(({ name, product }) => (
                <Link
                  key={name}
                  href={`/products/${category.slug}/${product!.slug}`}
                  className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm border border-line"
                >
                  <Image
                    src={product!.images[0].src}
                    alt={product!.images[0].alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/15 to-transparent" />
                  <div className="relative flex flex-col gap-0.5 p-4 text-cream">
                    <span className="text-[0.65rem] font-medium uppercase tracking-widest text-gold-soft">Collection</span>
                    <span className="font-heading text-sm font-semibold leading-tight">{name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-8 sm:py-10">
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

        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="prose-samnoor" dangerouslySetInnerHTML={{ __html: category.content }} />
          <div className="flex flex-col gap-6">
            <div className="card-premium p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">Search Terms We Cover</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-line bg-panel-alt px-3 py-1 text-xs text-muted">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-premium flex flex-col gap-3 p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">Request This Category</h3>
              <p className="text-sm text-muted">Get a quotation for {category.name.toLowerCase()} in your target fabric and volume.</p>
              <LinkButton href="#enquire" variant="primary" className="mt-1">
                Request a Quote
                <ArrowRightIcon width={16} height={16} />
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {category.faqs && category.faqs.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <Kicker>Common Questions</Kicker>
            <h2 className="mt-4 mb-8 font-heading text-2xl font-semibold text-heading sm:text-3xl">{category.name} FAQs</h2>
            <div className="mx-auto flex max-w-3xl flex-col gap-4">
              {category.faqs.map((faq) => (
                <details key={faq.question} className="card-premium group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-heading">
                    {faq.question}
                    <span className="shrink-0 text-accent transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section id="enquire" className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Kicker>Request a Quote</Kicker>
            <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">
              Get Pricing on {category.name}
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Tell us your target fabric, quantity, and market and our export sales team will respond within one
              business day with a quotation and sample timeline. The category below is pre-selected for you.
            </p>
          </div>
          <ContactForm defaultCategory={category.name} sourcePage={`/products/${category.slug}`} />
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
