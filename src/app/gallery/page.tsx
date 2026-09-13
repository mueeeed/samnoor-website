import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { galleryItems } from "@/content/gallery";
import { placeholder } from "@/lib/placeholder-image";

export const metadata: Metadata = {
  title: "Factory Gallery",
  description: "A look inside SamNoor's Mumbai production facility — cutting, stitching, embroidery, packaging, and export.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        title="Inside the Factory"
        description="A visual look at production, packaging, and the people who run our facility day to day."
        image={placeholder("gallery-hero", "Wide view of the SamNoor factory production floor")}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <GalleryLightbox items={galleryItems} />
        </Container>
      </section>
    </>
  );
}
