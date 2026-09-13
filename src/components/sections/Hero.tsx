import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { ArrowRightIcon } from "@/components/ui/icons";

const heroImage = {
  src: "/hero-campaign.png",
  alt: "Woman in a flowing olive-green satin SamNoor abaya and hijab, viewed from behind",
};

const HERO_FADE = "linear-gradient(to right, transparent, black 24%)";

export function Hero() {
  return (
    <section className="noir-texture relative overflow-hidden bg-noir text-cream">
      <div
        className="absolute inset-y-0 right-0 hidden aspect-square overflow-hidden lg:block"
        style={{ WebkitMaskImage: HERO_FADE, maskImage: HERO_FADE }}
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="50vh"
          className="object-cover object-right"
        />
      </div>

      <Container className="relative z-10 py-10 lg:flex lg:min-h-[calc(100vh-7.25rem)] lg:items-center lg:py-0">
        <div className="flex flex-col justify-center gap-4 lg:max-w-[46%] lg:py-12">
          <span className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            <svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
              <path d="M4 0l1.2 2.8L8 4 5.2 5.2 4 8 2.8 5.2 0 4l2.8-1.2z" />
            </svg>
            Manufacturer &middot; Exporter &middot; Private Label
          </span>
          <h1 className="text-gold-gradient text-balance font-heading text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
            SamNoor produces premium hijabs, abayas, and modest wear at wholesale scale for distributors
            and private label brands in {siteConfig.stats.countriesServed}+ countries &mdash; from first sample to
            container-ready shipment.
          </p>
          <div className="mt-1 flex flex-wrap gap-3">
            <LinkButton
              href="/products"
              variant="primary"
              className="bg-gold! border-gold! px-5! py-2.5! text-noir! hover:bg-transparent! hover:text-gold!"
            >
              Explore Products
              <ArrowRightIcon width={16} height={16} />
            </LinkButton>
            <LinkButton
              href="/private-label"
              variant="outline"
              className="border-gold/40! px-5! py-2.5! text-cream! hover:border-gold! hover:text-gold!"
            >
              Start Private Label
            </LinkButton>
          </div>
          <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-3 border-t border-gold/15 pt-4">
            <div>
              <dt className="text-[0.65rem] uppercase tracking-widest text-cream/55">Founded</dt>
              <dd className="font-heading text-lg text-gold-soft">{siteConfig.founded}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-widest text-cream/55">Monthly Capacity</dt>
              <dd className="font-heading text-lg text-gold-soft">{siteConfig.stats.monthlyCapacityUnits.toLocaleString()} units</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-widest text-cream/55">Clients Worldwide</dt>
              <dd className="font-heading text-lg text-gold-soft">{siteConfig.stats.clientsWorldwide.toLocaleString()}+</dd>
            </div>
          </dl>
        </div>

        <div
          className="relative -mx-5 mt-8 aspect-square w-[calc(100%+2.5rem)] overflow-hidden sm:-mx-8 sm:w-[calc(100%+4rem)] lg:hidden"
          style={{ WebkitMaskImage: HERO_FADE, maskImage: HERO_FADE }}
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="90vw"
            className="object-cover object-right"
          />
        </div>
      </Container>
    </section>
  );
}
