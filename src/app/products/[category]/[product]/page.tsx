import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { LinkButton } from "@/components/ui/Button";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductCard } from "@/components/products/ProductCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { getCategoryBySlug } from "@/content/categories";
import { products, getProductBySlug, getRelatedProducts } from "@/content/products";
import { CheckIcon, ArrowRightIcon, ShieldIcon, TruckIcon } from "@/components/ui/icons";

export async function generateStaticParams() {
  return products.map((product) => ({ category: product.categorySlug, product: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category, product: productSlug } = await params;
  const product = getProductBySlug(category, productSlug);
  if (!product) return {};
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { category: categorySlug, product: productSlug } = await params;
  const product = getProductBySlug(categorySlug, productSlug);
  if (!product) notFound();

  const category = getCategoryBySlug(categorySlug);
  const related = getRelatedProducts(product);

  return (
    <>
      <Container className="pt-6">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-accent">Products</Link>
          <span>/</span>
          <Link href={`/products/${categorySlug}`} className="hover:text-accent">{category?.name ?? categorySlug}</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </Container>

      <section className="py-8 sm:py-12">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} />

          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-1.5">
              {product.bestSeller && (
                <span className="rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-paper">
                  Best Seller
                </span>
              )}
              {product.newArrival && (
                <span className="rounded-full bg-noir px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-gold-soft">
                  New Arrival
                </span>
              )}
              {product.privateLabelAvailable && (
                <span className="rounded-full border border-line px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-muted">
                  Private Label Available
                </span>
              )}
            </div>

            <h1 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">{product.name}</h1>
            <p className="text-base leading-relaxed text-muted">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 border-y border-line py-5 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">MOQ</dt>
                <dd className="mt-1 font-heading text-base text-heading">{product.moq}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Lead Time</dt>
                <dd className="mt-1 font-heading text-base text-heading">{product.leadTime}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Fabric</dt>
                <dd className="mt-1 font-heading text-base text-heading">{product.fabrics.join(", ") || "Custom"}</dd>
              </div>
            </div>

            {product.colors.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted">Available Colors</h3>
                <div className="mt-2.5 flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <div key={color.name} className="flex items-center gap-2">
                      <span
                        className="h-6 w-6 rounded-full border border-line"
                        style={{ backgroundColor: color.hex ?? "#ccc" }}
                        title={color.name}
                      />
                      <span className="text-sm text-ink">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted">Sizes</h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span key={size} className="rounded-sm border border-line bg-panel-alt px-3 py-1.5 text-sm text-ink">
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted">Customization Options</h3>
              <ul className="mt-2.5 flex flex-col gap-2">
                {product.customizationOptions.map((option) => (
                  <li key={option} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <LinkButton href="#enquire" variant="primary">
                Request a Quote
                <ArrowRightIcon width={16} height={16} />
              </LinkButton>
              <LinkButton href="/private-label" variant="outline">
                Discuss Private Label
              </LinkButton>
            </div>

            <div className="mt-2 flex flex-col gap-2 rounded-sm border border-line bg-panel-alt p-4">
              <div className="flex items-center gap-2.5 text-sm text-ink">
                <ShieldIcon width={16} height={16} className="shrink-0 text-accent" />
                In-line inspected, ISO 9001 &amp; OEKO-TEX certified production
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink">
                <TruckIcon width={16} height={16} className="shrink-0 text-accent" />
                Air, sea, or express freight &mdash; EXW, FOB, CIF, and DDP supported
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-16 sm:py-20">
        <Container>
          <Kicker>Specifications</Kicker>
          <h2 className="mt-4 mb-8 font-heading text-2xl font-semibold text-heading sm:text-3xl">Full Specification Sheet</h2>
          <div className="card-premium overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-panel" : "bg-panel-alt"}>
                    <td className="w-1/3 px-6 py-3.5 font-medium text-heading">{spec.label}</td>
                    <td className="px-6 py-3.5 text-ink">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section id="enquire" className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Kicker>Request a Quote</Kicker>
            <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">Get Pricing on {product.name}</h2>
            <p className="text-sm leading-relaxed text-muted">
              Send your target quantity and market and our export sales team will respond within one business day.
              The category and product are pre-filled for you below.
            </p>
          </div>
          <ContactForm
            defaultCategory={category?.name}
            defaultInterest={product.name}
            sourcePage={`/products/${categorySlug}/${productSlug}`}
          />
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-20 sm:py-24">
          <Container>
            <Kicker>You May Also Like</Kicker>
            <h2 className="mt-4 mb-10 font-heading text-2xl font-semibold text-heading sm:text-3xl">More from {category?.name}</h2>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
