import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { glossaryTerms, getGlossaryTermBySlug } from "@/content/glossary";
import { ArrowRightIcon } from "@/components/ui/icons";

export async function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) return {};
  return {
    title: `What Is ${term.term}? — Glossary`,
    description: term.shortDefinition,
  };
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) notFound();

  const related = term.relatedSlugs.map(getGlossaryTermBySlug).filter((t) => t !== undefined);

  return (
    <>
      <Container className="pt-6">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link href="/glossary" className="hover:text-accent">Glossary</Link>
          <span>/</span>
          <span className="text-ink">{term.term}</span>
        </nav>
      </Container>

      <section className="py-10 sm:py-14">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <Kicker>{term.category}</Kicker>
            <h1 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">What Is {term.term}?</h1>
            <p className="text-lg leading-relaxed text-ink">{term.shortDefinition}</p>
            <p className="text-base leading-relaxed text-muted">{term.longDefinition}</p>
          </div>

          <div className="flex flex-col gap-6">
            {term.relatedLinks && term.relatedLinks.length > 0 && (
              <div className="card-premium flex flex-col gap-3 p-6">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">Read More</h3>
                {term.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
                  >
                    {link.label}
                    <ArrowRightIcon width={14} height={14} />
                  </Link>
                ))}
              </div>
            )}

            {related.length > 0 && (
              <div className="card-premium flex flex-col gap-3 p-6">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">Related Terms</h3>
                {related.map((t) => (
                  <Link key={t.slug} href={`/glossary/${t.slug}`} className="text-sm font-medium text-ink hover:text-accent">
                    {t.term}
                  </Link>
                ))}
              </div>
            )}

            <div className="card-premium flex flex-col gap-3 p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">Have a Question?</h3>
              <p className="text-sm text-muted">Our export sales team can walk you through how this applies to your order.</p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                Contact Us
                <ArrowRightIcon width={14} height={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
