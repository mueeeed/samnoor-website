import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import type { ImageAsset } from "@/content/types";

export function PageHero({
  kicker,
  title,
  description,
  image,
  crumb,
}: {
  kicker: string;
  title: string;
  description?: string;
  image: ImageAsset;
  crumb?: string;
}) {
  return (
    <section className="noir-texture relative overflow-hidden bg-noir text-cream">
      <div className="absolute inset-0">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/85 to-noir/60" />
      </div>

      <Container className="relative z-10 flex flex-col gap-4 py-16 sm:py-20">
        <nav className="flex items-center gap-2 text-xs text-cream/55">
          <Link href="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <span className="text-cream/80">{crumb ?? title}</span>
        </nav>
        <Kicker tone="gold">{kicker}</Kicker>
        <h1 className="text-gold-gradient max-w-3xl text-balance font-heading text-4xl font-semibold leading-[1.1] sm:text-5xl">
          {title}
        </h1>
        {description && <p className="max-w-2xl text-cream/80 sm:text-lg">{description}</p>}
      </Container>
    </section>
  );
}
