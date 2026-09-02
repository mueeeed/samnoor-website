import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { galleryItems } from "@/content/gallery";
import { placeholder } from "@/lib/placeholder-image";

export const metadata: Metadata = {
  title: "Factory Gallery",
  description: "A look inside Samnoor's Dubai production facility — cutting, stitching, embroidery, packaging, and export.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        title="Inside the Factory"
        description="A visual look at production, packaging, and the people who run our facility day to day."
        image={placeholder("gallery-hero", "Wide view of the Samnoor factory production floor")}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {galleryItems.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm border border-line">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={600}
                  height={i % 3 === 0 ? 800 : 450}
                  sizes="(min-width: 1024px) 24vw, 45vw"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-noir/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="p-3 text-xs font-medium uppercase tracking-wide text-cream">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
