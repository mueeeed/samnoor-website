import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { ArrowRightIcon } from "@/components/ui/icons";

export function CTASection() {
  return (
    <section className="noir-texture relative bg-noir-soft py-20 text-cream sm:py-24">
      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
        <Kicker tone="gold" align="center">Get Started</Kicker>
        <h2 className="text-gold-gradient max-w-2xl font-heading text-3xl font-semibold sm:text-4xl">
          Ready to Put SamNoor on Your Production Line?
        </h2>
        <p className="max-w-xl text-cream/80">
          Send us your target products, estimated quantity, and market, and our sales team will respond
          with a quotation within one business day.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <LinkButton
            href="/contact"
            variant="primary"
            className="bg-gold! border-gold! text-noir! hover:bg-transparent! hover:text-gold!"
          >
            Request a Quote
            <ArrowRightIcon width={16} height={16} />
          </LinkButton>
          <LinkButton href="/products" variant="outline" className="border-gold/40! text-cream! hover:border-gold! hover:text-gold!">
            Browse the Catalog
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
