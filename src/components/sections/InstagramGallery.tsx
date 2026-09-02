import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { placeholder } from "@/lib/placeholder-image";
import { siteConfig } from "@/lib/site-config";
import { Kicker } from "@/components/ui/Kicker";
import { InstagramIcon } from "@/components/ui/icons";

const GALLERY = [
  placeholder("instagram-0", "Abaya on a mannequin styled for social media"),
  placeholder("instagram-1", "Model wearing a draped chiffon hijab"),
  placeholder("instagram-2", "Woman wearing a printed silk scarf"),
  placeholder("instagram-3", "Close-up of a luxury silk hijab"),
  placeholder("instagram-4", "Woman wearing an embroidered kaftan"),
  placeholder("instagram-5", "Woman wearing an athletic sports hijab"),
];

export function InstagramGallery() {
  return (
    <section className="bg-panel-alt py-20 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-14">
          <Kicker align="center">Follow Along</Kicker>
          <h2 className="font-heading text-3xl font-semibold text-heading sm:text-4xl">@samnoor on Instagram</h2>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent hover:underline"
          >
            <InstagramIcon width={16} height={16} />
            Follow us
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {GALLERY.map((image, i) => (
            <a
              key={i}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 16vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-noir/0 text-cream opacity-0 transition-all duration-300 group-hover:bg-noir/40 group-hover:opacity-100">
                <InstagramIcon width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
