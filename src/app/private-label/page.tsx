import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { LinkButton } from "@/components/ui/Button";
import { placeholder } from "@/lib/placeholder-image";
import { faqs } from "@/content/faqs";
import { CheckIcon, ArrowRightIcon, PackageIcon, SparkleIcon, ShieldIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Private Label Abaya & Hijab Manufacturer (OEM/ODM)",
  description: "Full private label, OEM, and ODM manufacturing — custom labels, packaging, fabric development, and design support.",
};

const PROGRAMS = [
  {
    Icon: PackageIcon,
    title: "Private Label",
    description: "Your branding on our production line — custom woven or printed labels, hang tags, and packaging on any style in our catalog.",
  },
  {
    Icon: ShieldIcon,
    title: "OEM Manufacturing",
    description: "Full production to your own tech pack and specification, from a style we've never made before.",
  },
  {
    Icon: SparkleIcon,
    title: "ODM Design Support",
    description: "Building a range from a concept rather than a finished spec? Our product development team designs alongside you.",
  },
];

const STEPS = [
  { title: "Reference & Brief", description: "Send a sketch, fabric swatch, or reference garment along with your target quantity and market." },
  { title: "Costing & Quotation", description: "We return a quotation with MOQ, lead time, and sample cost within one business day." },
  { title: "Sampling", description: "Pre-production sample produced in 7–12 days, with sample cost credited against your bulk order." },
  { title: "Bulk Production", description: "Production begins on sample approval and deposit, with regular progress updates through the run." },
  { title: "QC & Shipping", description: "Pre-final and final inspection, then dispatch under your chosen Incoterm." },
];

export default function PrivateLabelPage() {
  const image = placeholder("oem-hero", "Design desk with fabric swatches and a tech pack sketch");

  return (
    <>
      <PageHero
        kicker="Private Label & OEM"
        title="Build Your Brand on Our Production Line"
        description="From a rough sketch and a fabric swatch to a production-ready sample in as little as twelve days."
        image={image}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {PROGRAMS.map(({ Icon, title, description }) => (
              <div key={title} className="card-premium flex flex-col gap-4 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-accent/8 text-accent">
                  <Icon width={21} height={21} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-heading">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line shadow-[0_24px_60px_-32px_rgba(12,12,8,0.4)]">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <Kicker>What We Offer</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Fully Custom, Start to Finish</h2>
            <ul className="mt-2 flex flex-col gap-3">
              {[
                "Custom woven or printed labels, hang tags, and branded packaging",
                "Pantone color matching from 500 pieces per color",
                "Fully custom fabric development for qualifying volume commitments",
                "Custom sizing charts and grading for your target market",
                "Bridal, gift, and retail-ready packaging options",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-14 flex flex-col gap-4">
            <Kicker>How It Works</Kicker>
            <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">Five Steps to Bulk Production</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative flex flex-col gap-2">
                <span className="font-display text-4xl text-accent/30">{i + 1}</span>
                <h3 className="font-heading text-base font-semibold text-heading">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-panel-alt py-20 sm:py-24">
        <Container>
          <Kicker>Common Questions</Kicker>
          <h2 className="mt-4 mb-10 font-heading text-2xl font-semibold text-heading sm:text-3xl">Private Label &amp; OEM FAQs</h2>
          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            {faqs
              .filter((f) => f.category === "Private Label & OEM")
              .map((faq) => (
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

      <section className="noir-texture relative bg-noir py-16 text-cream">
        <Container className="relative z-10 flex flex-col items-center gap-4 text-center">
          <h2 className="text-gold-gradient font-heading text-2xl font-semibold sm:text-3xl">Ready to Start Your Program?</h2>
          <p className="max-w-xl text-cream/80">Send us your reference and target quantity — we&rsquo;ll come back with a quotation within one business day.</p>
          <LinkButton href="/contact" variant="primary" className="bg-gold! border-gold! text-noir! hover:bg-transparent! hover:text-gold! mt-2">
            Start Your Private Label Program
            <ArrowRightIcon width={16} height={16} />
          </LinkButton>
        </Container>
      </section>
    </>
  );
}
