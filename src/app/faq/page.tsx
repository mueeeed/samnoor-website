import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { getFaqsByCategory } from "@/content/faqs";
import { placeholder } from "@/lib/placeholder-image";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about ordering, MOQs, private label, fabrics, quality, and shipping with SamNoor.",
};

export default function FaqPage() {
  const grouped = getFaqsByCategory();

  return (
    <>
      <PageHero
        kicker="Support"
        title="Frequently Asked Questions"
        description="Ordering, private label, fabrics, and export — the questions we hear most from wholesale buyers."
        image={placeholder("faq-hero", "Certification and audit documents on a desk")}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-14">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-4">
                <h2 className="font-heading text-2xl font-semibold text-heading">{category}</h2>
                <div className="flex flex-col gap-4">
                  {items.map((faq) => (
                    <details key={faq.question} className="card-premium group px-6 py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-heading">
                        {faq.question}
                        <span className="shrink-0 text-accent transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
