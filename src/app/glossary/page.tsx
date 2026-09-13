import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { glossaryTerms, glossaryCategories } from "@/content/glossary";
import { placeholder } from "@/lib/placeholder-image";

export const metadata: Metadata = {
  title: "Glossary — Hijab & Abaya Wholesale Trade Terms",
  description: "Plain-language definitions of the trade, logistics, fabric, and product terms used across hijab and abaya wholesale manufacturing — MOQ, Incoterms, GSM, OEKO-TEX, and more.",
};

export default function GlossaryIndexPage() {
  return (
    <>
      <PageHero
        kicker="Glossary"
        title="Wholesale & Manufacturing Terms Explained"
        description="Plain-language definitions for the trade, compliance, fabric, and product terms used throughout this site — so you can source with confidence."
        image={placeholder("fabric-roll-generic", "Rolls of fabric arranged by color and texture on a fabric library shelf")}
      />

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-14">
          {glossaryCategories.map((category) => (
            <div key={category} className="flex flex-col gap-5">
              <div className="border-b border-line pb-4">
                <h2 className="font-heading text-xl font-semibold text-heading">{category}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {glossaryTerms
                  .filter((t) => t.category === category)
                  .map((t) => (
                    <Link key={t.slug} href={`/glossary/${t.slug}`} className="card-premium flex flex-col gap-2 p-5">
                      <h3 className="font-heading text-base font-semibold text-heading transition-colors hover:text-accent">{t.term}</h3>
                      <p className="text-sm leading-relaxed text-muted">{t.shortDefinition}</p>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
