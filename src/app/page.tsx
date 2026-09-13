import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ManufacturingStrengths } from "@/components/sections/ManufacturingStrengths";
import { PrivateLabelSection } from "@/components/sections/PrivateLabelSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CountriesServed } from "@/components/sections/CountriesServed";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Hijab & Abaya Manufacturer in Mumbai, India`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

// The Journal preview reads live blog data from disk, so this page is
// revalidated periodically rather than only at build time.
export const revalidate = 300;

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedCategories />
      <WhyChooseUs />
      <ManufacturingStrengths />
      <PrivateLabelSection />
      <Testimonials />
      <CountriesServed />
      <BlogPreview />
      <InstagramGallery />
      <CTASection />
    </>
  );
}
