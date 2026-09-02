import { placeholder } from "@/lib/placeholder-image";
import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "hijabs",
    name: "Hijabs",
    shortName: "Hijabs",
    description:
      "Chiffon, jersey, and Nida hijabs finished to a drape and hand-feel that reads as premium from the first fold, produced at wholesale volume without compromising finish.",
    heroImage: placeholder("cat-hijabs-hero", "Folded premium chiffon hijabs in a muted color palette"),
    cardImage: placeholder("cat-hijabs-card", "Model wearing a draped chiffon hijab"),
    keywords: ["hijab manufacturer", "wholesale hijab supplier", "premium hijab manufacturer"],
  },
  {
    slug: "abayas",
    name: "Abayas",
    shortName: "Abayas",
    description:
      "Structured and flowing abayas cut for clean drape, from everyday Nida silhouettes to embellished occasion pieces, produced to private label specification.",
    heroImage: placeholder("cat-abayas-hero", "Black abaya on a mannequin against a neutral backdrop"),
    cardImage: placeholder("cat-abayas-card", "Woman wearing an open abaya over modest clothing"),
    keywords: ["abaya manufacturer", "wholesale abaya supplier", "luxury abaya manufacturer"],
  },
  {
    slug: "niqabs",
    name: "Niqabs",
    shortName: "Niqabs",
    description:
      "Single and double-layer niqabs in breathable chiffon and crepe, finished with reinforced ties and stitching engineered for daily wear.",
    heroImage: placeholder("cat-niqabs-hero", "Folded chiffon niqab fabric detail"),
    cardImage: placeholder("cat-niqabs-card", "Niqab fabric texture close-up"),
    keywords: ["niqab manufacturer", "niqab supplier wholesale"],
  },
  {
    slug: "prayer-dresses",
    name: "Prayer Dresses",
    shortName: "Prayer Dresses",
    description:
      "One-piece and two-piece prayer dresses (salah abayas) in lightweight, breathable fabrics designed for ease of movement during prayer.",
    heroImage: placeholder("cat-prayer-hero", "Folded lightweight prayer dress fabric"),
    cardImage: placeholder("cat-prayer-card", "Woman wearing a two-piece prayer dress"),
    keywords: ["prayer dress manufacturer", "salah abaya supplier"],
  },
  {
    slug: "khimars",
    name: "Khimars",
    shortName: "Khimars",
    description:
      "Layered khimars in one, two, and three-tier cuts, offered in matte and satin-back crepe for a clean, structured silhouette.",
    heroImage: placeholder("cat-khimars-hero", "Layered khimar garment on a hanger"),
    cardImage: placeholder("cat-khimars-card", "Woman wearing a tiered khimar"),
    keywords: ["khimar manufacturer", "wholesale khimar supplier"],
  },
  {
    slug: "modest-dresses",
    name: "Modest Dresses",
    shortName: "Modest Dresses",
    description:
      "Modest daywear and occasion dresses designed with full coverage, considered proportions, and fabrics selected for structure and drape.",
    heroImage: placeholder("cat-dresses-hero", "Modest long-sleeve dress on a mannequin"),
    cardImage: placeholder("cat-dresses-card", "Woman wearing a modest floor-length dress"),
    keywords: ["modest dress manufacturer", "modest fashion supplier"],
  },
  {
    slug: "jilbabs",
    name: "Jilbabs",
    shortName: "Jilbabs",
    description:
      "Two-piece jilbab sets in Nida and crepe, engineered for coverage and ease of movement, with reinforced seams for daily and occasion wear.",
    heroImage: placeholder("cat-jilbabs-hero", "Jilbab set folded and displayed flat"),
    cardImage: placeholder("cat-jilbabs-card", "Woman wearing a two-piece jilbab"),
    keywords: ["jilbab manufacturer", "wholesale jilbab supplier"],
  },
  {
    slug: "kaftans",
    name: "Kaftans",
    shortName: "Kaftans",
    description:
      "Occasion kaftans in embellished crepe, silk-blend, and jacquard fabrics, produced in small-batch and bulk runs for boutique and wholesale buyers.",
    heroImage: placeholder("cat-kaftans-hero", "Embellished kaftan on a mannequin"),
    cardImage: placeholder("cat-kaftans-card", "Woman wearing an embroidered kaftan"),
    keywords: ["kaftan manufacturer", "designer kaftan supplier"],
  },
  {
    slug: "burqas",
    name: "Burqas",
    shortName: "Burqas",
    description:
      "Traditional and modern burqa styles produced to regional specification, with attention to fabric weight, mesh visibility panels, and finishing.",
    heroImage: placeholder("cat-burqas-hero", "Folded burqa fabric detail"),
    cardImage: placeholder("cat-burqas-card", "Burqa garment displayed on a rack"),
    keywords: ["burqa manufacturer", "burqa supplier wholesale"],
  },
  {
    slug: "islamic-inner-caps",
    name: "Islamic Inner Caps",
    shortName: "Inner Caps",
    description:
      "Cotton and jersey underscarves and inner caps designed for grip, breathability, and all-day comfort beneath hijabs and khimars.",
    heroImage: placeholder("cat-innercaps-hero", "Cotton inner caps arranged in rows"),
    cardImage: placeholder("cat-innercaps-card", "Model wearing an underscarf cap"),
    keywords: ["hijab inner cap manufacturer", "underscarf supplier wholesale"],
  },
  {
    slug: "hijab-magnets",
    name: "Hijab Magnets",
    shortName: "Hijab Magnets",
    description:
      "Nickel-free magnetic hijab pins in decorative and minimal finishes, tested for grip strength and safe for daily use.",
    heroImage: placeholder("cat-magnets-hero", "Decorative hijab magnet pins on display"),
    cardImage: placeholder("cat-magnets-card", "Close-up of a hijab secured with a magnetic pin"),
    keywords: ["hijab magnet supplier", "hijab pin manufacturer wholesale"],
  },
  {
    slug: "scarves",
    name: "Scarves",
    shortName: "Scarves",
    description:
      "Printed and solid scarves in silk, viscose, and modal, sized for versatile styling across hijab, shawl, and accessory use.",
    heroImage: placeholder("cat-scarves-hero", "Folded printed scarves stacked by color"),
    cardImage: placeholder("cat-scarves-card", "Woman wearing a printed silk scarf"),
    keywords: ["scarf manufacturer", "wholesale scarf supplier"],
  },
  {
    slug: "instant-hijabs",
    name: "Instant Hijabs",
    shortName: "Instant Hijabs",
    description:
      "Pre-styled, pull-on instant hijabs with built-in underscarves, engineered for a finished look in seconds without pins.",
    heroImage: placeholder("cat-instant-hero", "Instant hijab with attached underscarf laid flat"),
    cardImage: placeholder("cat-instant-card", "Woman wearing a pull-on instant hijab"),
    keywords: ["instant hijab manufacturer", "one-piece hijab supplier"],
  },
  {
    slug: "sports-hijabs",
    name: "Sports Hijabs",
    shortName: "Sports Hijabs",
    description:
      "Moisture-wicking, four-way stretch sports hijabs built for performance wear, swimming, and active use, in breathable technical fabric.",
    heroImage: placeholder("cat-sports-hero", "Technical sports hijab fabric close-up"),
    cardImage: placeholder("cat-sports-card", "Woman wearing an athletic sports hijab"),
    keywords: ["sports hijab manufacturer", "active hijab supplier wholesale"],
  },
  {
    slug: "luxury-hijabs",
    name: "Luxury Hijabs",
    shortName: "Luxury Hijabs",
    description:
      "Silk, satin, and premium modal hijabs finished with hand-rolled hems and gift packaging for boutique and premium retail placement.",
    heroImage: placeholder("cat-luxury-hero", "Silk luxury hijab draped elegantly"),
    cardImage: placeholder("cat-luxury-card", "Close-up of hand-rolled hem on a silk hijab"),
    keywords: ["luxury hijab manufacturer", "premium silk hijab supplier"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
