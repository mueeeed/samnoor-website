import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { placeholder } from "@/lib/placeholder-image";
import { Kicker } from "@/components/ui/Kicker";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";

const OFFER = [
  "Custom woven or printed labels, hang tags, and branded packaging",
  "Pantone color matching from 500 pieces per color",
  "OEM production to your tech pack, or ODM support from concept to sample",
  "Fully custom fabric development for qualifying volume commitments",
];

export function PrivateLabelSection() {
  const image = placeholder("home-private-label", "Design desk with fabric swatches and a tech pack sketch", 1600, 1200);

  return (
    <section className="noir-texture relative bg-noir py-20 text-cream sm:py-24">
      <Container className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-5">
          <Kicker tone="gold">Private Label &amp; OEM</Kicker>
          <h2 className="text-gold-gradient font-heading text-3xl font-semibold sm:text-4xl">
            Build Your Brand on Our Production Line
          </h2>
          <p className="text-cream/80">
            From a rough sketch and a fabric swatch, our product development team can return a production-ready
            sample in as little as twelve days &mdash; then scale it into a full private label range.
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {OFFER.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-cream/85">
                <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <LinkButton
              href="/private-label"
              variant="primary"
              className="bg-gold! border-gold! text-noir! hover:bg-transparent! hover:text-gold!"
            >
              Start Your Private Label Program
              <ArrowRightIcon width={16} height={16} />
            </LinkButton>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-gold/20 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.6)]">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
        </div>
      </Container>
    </section>
  );
}
