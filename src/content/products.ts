import { placeholder } from "@/lib/placeholder-image";
import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "aria-chiffon-hijab",
    categorySlug: "hijabs",
    name: "Aria Chiffon Hijab",
    shortDescription: "Signature matte chiffon hijab with a weighted hem for consistent drape.",
    description:
      "The Aria is our best-selling chiffon hijab, developed over three fabric revisions to land a matte finish that photographs well under studio and daylight conditions alike. A weighted rolled hem keeps the drape consistent through a full day of wear, and the fabric is opaque at 75 grams per square meter, so no underscarf is required in most climates. Available in 42 solid shades from our standard color library, with custom Pantone matching available at 500 pieces per color for private label orders.",
    images: [
      placeholder("prod-aria-1", "Aria chiffon hijab draped on a mannequin, front view"),
      placeholder("prod-aria-2", "Aria chiffon hijab fabric close-up showing matte texture"),
      placeholder("prod-aria-3", "Aria chiffon hijab folded in a color range"),
    ],
    fabrics: ["Premium Chiffon"],
    colors: [
      { name: "Emerald", hex: "#0B4A38" },
      { name: "Sand", hex: "#E9DFCF" },
      { name: "Charcoal", hex: "#2B2B28" },
      { name: "Bronze", hex: "#A97C50" },
      { name: "Ivory", hex: "#FAF7F1" },
    ],
    sizes: ["70x180 cm", "75x190 cm", "80x200 cm"],
    moq: "300 pieces per color",
    leadTime: "18–25 days after sample approval",
    customizationOptions: ["Custom color matching", "Woven or printed label", "Custom hem width", "Gift packaging"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Fabric weight", value: "75 gsm" },
      { label: "Composition", value: "100% polyester chiffon" },
      { label: "Finish", value: "Matte, opaque" },
      { label: "Hem", value: "Weighted rolled hem" },
      { label: "Care", value: "Machine wash cold, hang dry" },
    ],
    featured: true,
    bestSeller: true,
  },
  {
    slug: "nadia-jersey-hijab",
    categorySlug: "hijabs",
    name: "Nadia Jersey Hijab",
    shortDescription: "Stretch jersey hijab for a no-pin, wrap-and-go finish.",
    description:
      "Nadia is a four-way stretch jersey hijab built for customers who want a wrap-and-go finish without pins. The cotton-modal blend holds its shape through wear while remaining breathable for warm climates. This style is a strong entry point for private label ranges targeting everyday and athleisure positioning, and is offered in both solid and heathered finishes.",
    images: [
      placeholder("prod-nadia-1", "Nadia jersey hijab wrapped on a model"),
      placeholder("prod-nadia-2", "Jersey hijab fabric stretch detail"),
    ],
    fabrics: ["Cotton-Modal Jersey"],
    colors: [
      { name: "Olive", hex: "#6B7256" },
      { name: "Graphite", hex: "#1A1A18" },
      { name: "Warm Sand", hex: "#E9DFCF" },
    ],
    sizes: ["One size stretch"],
    moq: "500 pieces per color",
    leadTime: "20–28 days after sample approval",
    customizationOptions: ["Custom color matching", "Printed neck label", "Heathered or solid finish"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "95% cotton, 5% elastane" },
      { label: "Stretch", value: "Four-way" },
      { label: "Finish", value: "Solid or heathered" },
      { label: "Care", value: "Machine wash cold, tumble dry low" },
    ],
    bestSeller: true,
  },
  {
    slug: "layla-nida-abaya",
    categorySlug: "abayas",
    name: "Layla Nida Abaya",
    shortDescription: "Everyday open-front abaya in matte Korean Nida with clean seaming.",
    description:
      "The Layla is our volume program abaya, built on matte Korean Nida for a fabric that holds structure without stiffness. The open-front cut is finished with a concealed snap closure and side pockets. This silhouette is the most requested base style among our wholesale accounts across the GCC and is offered with a full private label program including custom embroidery placement and woven size labels.",
    images: [
      placeholder("prod-layla-1", "Layla open-front abaya on a mannequin"),
      placeholder("prod-layla-2", "Nida abaya fabric drape close-up"),
      placeholder("prod-layla-3", "Abaya side pocket and seam detail"),
    ],
    fabrics: ["Korean Nida"],
    colors: [
      { name: "Black", hex: "#1A1A18" },
      { name: "Emerald", hex: "#0B4A38" },
      { name: "Charcoal", hex: "#2B2B28" },
    ],
    sizes: ["52", "54", "56", "58", "60", "62"],
    moq: "200 pieces per color/size run",
    leadTime: "25–30 days after sample approval",
    customizationOptions: ["Custom embroidery placement", "Woven size labels", "Custom snap or zip closure", "Custom sizing chart"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Fabric weight", value: "180 gsm" },
      { label: "Composition", value: "100% polyester Nida" },
      { label: "Closure", value: "Concealed snap, 5-point" },
      { label: "Pockets", value: "Dual side seam pockets" },
      { label: "Care", value: "Machine wash cold, hang dry, cool iron" },
    ],
    featured: true,
    bestSeller: true,
  },
  {
    slug: "zahra-embellished-abaya",
    categorySlug: "abayas",
    name: "Zahra Embellished Abaya",
    shortDescription: "Occasion abaya with hand-placed stonework on premium crepe.",
    description:
      "Zahra is developed for the occasion and bridal-adjacent segment, built on a heavier crepe base that holds embellishment weight without distorting drape. Stonework is hand-placed by our embroidery unit and quality-checked stone by stone before packing. This style supports small-batch private label runs starting at 50 units per design, suited to boutique and premium retail buyers.",
    images: [
      placeholder("prod-zahra-1", "Zahra embellished abaya with stonework detail"),
      placeholder("prod-zahra-2", "Close-up of hand-placed stone embroidery"),
    ],
    fabrics: ["Premium Crepe"],
    colors: [
      { name: "Black", hex: "#1A1A18" },
      { name: "Bronze", hex: "#A97C50" },
    ],
    sizes: ["Made to size chart", "52", "54", "56", "58"],
    moq: "50 pieces per design",
    leadTime: "35–45 days after sample approval",
    customizationOptions: ["Custom stonework pattern", "Custom fabric color", "Bridal packaging", "Made-to-measure runs"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Fabric weight", value: "220 gsm" },
      { label: "Composition", value: "100% polyester crepe" },
      { label: "Embellishment", value: "Hand-placed stonework" },
      { label: "Care", value: "Dry clean recommended" },
    ],
    newArrival: true,
  },
  {
    slug: "sana-two-piece-prayer-dress",
    categorySlug: "prayer-dresses",
    name: "Sana Two-Piece Prayer Dress",
    shortDescription: "Lightweight two-piece salah set with elasticated waist and cuffs.",
    description:
      "Sana pairs a loose-cut top with an elasticated-waist skirt in a lightweight crepe that packs small for travel. The set is designed for ease of movement during prayer, with elasticated cuffs and a soft waistband that sits comfortably without pinching. This is one of our highest-repeat wholesale styles, particularly for Ramadan seasonal ordering cycles.",
    images: [
      placeholder("prod-sana-1", "Two-piece prayer dress set laid flat"),
      placeholder("prod-sana-2", "Woman wearing a two-piece prayer dress"),
    ],
    fabrics: ["Lightweight Crepe"],
    colors: [
      { name: "Ivory", hex: "#FAF7F1" },
      { name: "Sand", hex: "#E9DFCF" },
      { name: "Olive", hex: "#6B7256" },
    ],
    sizes: ["S/M", "L/XL", "XXL"],
    moq: "300 sets per color",
    leadTime: "20–25 days after sample approval",
    customizationOptions: ["Custom drawstring bag packaging", "Printed or woven label", "Custom color matching"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "100% polyester crepe" },
      { label: "Fit", value: "Relaxed, elasticated waist and cuffs" },
      { label: "Packaging", value: "Individual drawstring bag" },
      { label: "Care", value: "Machine wash cold, hang dry" },
    ],
    bestSeller: true,
  },
  {
    slug: "mira-three-tier-khimar",
    categorySlug: "khimars",
    name: "Mira Three-Tier Khimar",
    shortDescription: "Structured three-tier khimar in satin-back crepe.",
    description:
      "Mira is cut in three graduated tiers for a structured silhouette that holds its shape without additional stiffening. The satin-back crepe gives a subtle sheen at the collar while remaining matte through the body. Popular with boutique buyers building modest outerwear ranges alongside abaya collections.",
    images: [
      placeholder("prod-mira-1", "Three-tier khimar on a mannequin"),
      placeholder("prod-mira-2", "Khimar collar and tier stitching detail"),
    ],
    fabrics: ["Satin-Back Crepe"],
    colors: [
      { name: "Charcoal", hex: "#2B2B28" },
      { name: "Emerald", hex: "#0B4A38" },
    ],
    sizes: ["One size", "Petite", "Tall"],
    moq: "300 pieces per color",
    leadTime: "22–28 days after sample approval",
    customizationOptions: ["Custom tier length", "Custom collar finish", "Woven label"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "100% polyester crepe" },
      { label: "Layers", value: "Three graduated tiers" },
      { label: "Care", value: "Machine wash cold, hang dry, cool iron" },
    ],
  },
  {
    slug: "farah-kaftan",
    categorySlug: "kaftans",
    name: "Farah Occasion Kaftan",
    shortDescription: "Embroidered occasion kaftan in jacquard with statement sleeves.",
    description:
      "Farah is built for the occasion-wear segment, cut from a jacquard base with contrast embroidery at the neckline and cuffs. The relaxed silhouette and statement sleeve are designed to photograph well for e-commerce and social catalogs, and the style supports small-batch production for boutique buyers testing new designs before committing to volume.",
    images: [
      placeholder("prod-farah-1", "Embroidered jacquard kaftan on a mannequin"),
      placeholder("prod-farah-2", "Kaftan sleeve and neckline embroidery detail"),
    ],
    fabrics: ["Jacquard", "Premium Crepe"],
    colors: [
      { name: "Bronze", hex: "#A97C50" },
      { name: "Emerald", hex: "#0B4A38" },
    ],
    sizes: ["Free size", "Made to size chart"],
    moq: "50 pieces per design",
    leadTime: "30–40 days after sample approval",
    customizationOptions: ["Custom embroidery design", "Custom fabric selection", "Boutique packaging"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "Jacquard shell, crepe lining" },
      { label: "Embellishment", value: "Machine embroidery, contrast thread" },
      { label: "Care", value: "Dry clean recommended" },
    ],
    newArrival: true,
  },
  {
    slug: "amira-instant-hijab",
    categorySlug: "instant-hijabs",
    name: "Amira Instant Hijab",
    shortDescription: "Pull-on instant hijab with attached underscarf, no pins required.",
    description:
      "Amira solves for speed without sacrificing finish. The attached underscarf cap sits securely under the outer chiffon layer, and the pre-shaped drape means customers get a styled look in under a minute. This is a strong entry-level SKU for private label ranges targeting first-time hijab wearers and gifting occasions.",
    images: [
      placeholder("prod-amira-1", "Instant hijab with attached underscarf on a model"),
      placeholder("prod-amira-2", "Instant hijab pull-on construction detail"),
    ],
    fabrics: ["Premium Chiffon", "Cotton Jersey (underscarf)"],
    colors: [
      { name: "Ivory", hex: "#FAF7F1" },
      { name: "Charcoal", hex: "#2B2B28" },
      { name: "Sand", hex: "#E9DFCF" },
    ],
    sizes: ["One size"],
    moq: "500 pieces per color",
    leadTime: "18–24 days after sample approval",
    customizationOptions: ["Custom color matching", "Printed care label", "Retail-ready hang tag"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Construction", value: "Attached underscarf, pull-on" },
      { label: "Composition", value: "Chiffon shell, cotton-jersey cap" },
      { label: "Care", value: "Hand wash recommended" },
    ],
    bestSeller: true,
  },
  {
    slug: "zayn-sports-hijab",
    categorySlug: "sports-hijabs",
    name: "Zayn Sports Hijab",
    shortDescription: "Moisture-wicking performance hijab with four-way stretch.",
    description:
      "Zayn is built on a technical knit developed for moisture management and stretch recovery through repeated wear and washing. Flatlock seams prevent chafing during activity, and the fabric is tested for quick-dry performance, making this our reference style for activewear and swim-adjacent private label programs.",
    images: [
      placeholder("prod-zayn-1", "Sports hijab on an athletic model"),
      placeholder("prod-zayn-2", "Technical fabric texture close-up"),
    ],
    fabrics: ["Technical Performance Knit"],
    colors: [
      { name: "Graphite", hex: "#1A1A18" },
      { name: "Olive", hex: "#6B7256" },
      { name: "Bronze", hex: "#A97C50" },
    ],
    sizes: ["S/M", "L/XL"],
    moq: "500 pieces per color",
    leadTime: "25–30 days after sample approval",
    customizationOptions: ["Custom color matching", "Flatlock seam branding", "Custom hang tag"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "88% polyester, 12% spandex" },
      { label: "Finish", value: "Moisture-wicking, quick-dry" },
      { label: "Seams", value: "Flatlock, chafe-resistant" },
      { label: "Care", value: "Machine wash cold, air dry" },
    ],
    newArrival: true,
  },
  {
    slug: "noor-silk-luxury-hijab",
    categorySlug: "luxury-hijabs",
    name: "Noor Silk Luxury Hijab",
    shortDescription: "Hand-rolled mulberry silk hijab with gift packaging.",
    description:
      "Noor represents our premium retail tier: 100% mulberry silk with a hand-rolled hem finished by our specialist stitching team, individually inspected and packaged in a branded gift box. This style is positioned for boutique and department store placement, and supports fully custom packaging for private label luxury ranges.",
    images: [
      placeholder("prod-noor-1", "Silk luxury hijab draped elegantly on a model"),
      placeholder("prod-noor-2", "Hand-rolled silk hem detail"),
      placeholder("prod-noor-3", "Luxury hijab gift box packaging"),
    ],
    fabrics: ["Mulberry Silk"],
    colors: [
      { name: "Ivory", hex: "#FAF7F1" },
      { name: "Emerald", hex: "#0B4A38" },
      { name: "Bronze", hex: "#A97C50" },
    ],
    sizes: ["90x90 cm", "110x110 cm"],
    moq: "150 pieces per color",
    leadTime: "30–35 days after sample approval",
    customizationOptions: ["Custom gift box branding", "Hand-rolled or machine hem", "Custom silk weight"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "100% mulberry silk" },
      { label: "Hem", value: "Hand-rolled" },
      { label: "Packaging", value: "Branded rigid gift box" },
      { label: "Care", value: "Dry clean only" },
    ],
    featured: true,
  },
  {
    slug: "hana-jilbab-set",
    categorySlug: "jilbabs",
    name: "Hana Jilbab Set",
    shortDescription: "Two-piece jilbab in matte crepe with reinforced seams.",
    description:
      "Hana is a two-piece jilbab set designed for daily coverage and durability, with reinforced double-stitched seams at stress points. The matte crepe fabric resists wrinkling through travel and long wear, making it a dependable volume style for distributors serving conservative markets.",
    images: [
      placeholder("prod-hana-1", "Two-piece jilbab set on a mannequin"),
      placeholder("prod-hana-2", "Reinforced seam stitching detail"),
    ],
    fabrics: ["Matte Crepe"],
    colors: [
      { name: "Black", hex: "#1A1A18" },
      { name: "Charcoal", hex: "#2B2B28" },
    ],
    sizes: ["Free size", "52", "54", "56"],
    moq: "300 sets per color",
    leadTime: "25–30 days after sample approval",
    customizationOptions: ["Custom sizing", "Woven label", "Custom packaging"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "100% polyester crepe" },
      { label: "Seams", value: "Reinforced double-stitch" },
      { label: "Care", value: "Machine wash cold, hang dry" },
    ],
  },
  {
    slug: "rania-cotton-inner-cap",
    categorySlug: "islamic-inner-caps",
    name: "Rania Cotton Inner Cap",
    shortDescription: "Breathable cotton underscarf cap with non-slip grip band.",
    description:
      "Rania is our reference underscarf, built on breathable combed cotton with a non-slip grip band at the hairline to keep outer hijab layers in place through a full day of wear. Sold in bulk multi-packs for distributors and available in an extended neutral color range for retail resale.",
    images: [placeholder("prod-rania-1", "Cotton inner caps arranged by color"), placeholder("prod-rania-2", "Inner cap grip band detail")],
    fabrics: ["Combed Cotton"],
    colors: [
      { name: "Ivory", hex: "#FAF7F1" },
      { name: "Charcoal", hex: "#2B2B28" },
      { name: "Sand", hex: "#E9DFCF" },
    ],
    sizes: ["One size"],
    moq: "1,000 pieces per color",
    leadTime: "15–20 days after sample approval",
    customizationOptions: ["Custom color range", "Bulk multi-pack sizing", "Printed poly bag branding"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "95% cotton, 5% elastane" },
      { label: "Feature", value: "Non-slip grip band" },
      { label: "Care", value: "Machine wash cold" },
    ],
  },
  {
    slug: "yara-double-layer-niqab",
    categorySlug: "niqabs",
    name: "Yara Double-Layer Niqab",
    shortDescription: "Breathable double-layer niqab with reinforced ties for daily wear.",
    description:
      "Yara pairs two layers of lightweight chiffon for coverage without added heat retention, finished with reinforced stitching at the tie points that carry the most stress through daily wear and removal. Ties are cut long enough to accommodate multiple head sizes without a separate size run, simplifying inventory for distributors.",
    images: [
      placeholder("prod-yara-1", "Folded double-layer chiffon niqab detail"),
      placeholder("prod-yara-2", "Niqab fabric drape close-up"),
    ],
    fabrics: ["Premium Chiffon"],
    colors: [
      { name: "Charcoal", hex: "#2B2B28" },
      { name: "Black", hex: "#1A1A18" },
    ],
    sizes: ["One size"],
    moq: "500 pieces per color",
    leadTime: "18–24 days after sample approval",
    customizationOptions: ["Single or double layer", "Custom tie length", "Printed poly bag branding"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "100% polyester chiffon" },
      { label: "Layers", value: "Double, reinforced ties" },
      { label: "Care", value: "Hand wash recommended" },
    ],
  },
  {
    slug: "elif-modest-daywear-dress",
    categorySlug: "modest-dresses",
    name: "Elif Modest Daywear Dress",
    shortDescription: "Full-coverage daywear dress with a considered, structured silhouette.",
    description:
      "Elif is built for distributors serving the modest daywear segment: full coverage through the sleeve and hem, a fitted waist seam for shape without clinging fabric, and a fabric weight that holds structure through a full day of wear. Sized to a dedicated modest-fit block rather than a graded mainstream pattern.",
    images: [
      placeholder("prod-elif-1", "Modest long-sleeve dress on a mannequin"),
      placeholder("prod-elif-2", "Woman wearing a modest floor-length dress"),
    ],
    fabrics: ["Crepe", "Rayon"],
    colors: [
      { name: "Emerald", hex: "#0B4A38" },
      { name: "Charcoal", hex: "#2B2B28" },
      { name: "Sand", hex: "#E9DFCF" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    moq: "250 pieces per color/size run",
    leadTime: "25–30 days after sample approval",
    customizationOptions: ["Custom sleeve length", "Custom size block", "Woven size labels"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Fabric weight", value: "200 gsm" },
      { label: "Fit", value: "Structured, fitted waist seam" },
      { label: "Care", value: "Machine wash cold, hang dry, cool iron" },
    ],
  },
  {
    slug: "zainab-traditional-burqa",
    categorySlug: "burqas",
    name: "Zainab Traditional Burqa",
    shortDescription: "Traditional-cut burqa produced to regional mesh and weight specification.",
    description:
      "Zainab is produced to order against regional specification for mesh visibility panel size, fabric weight, and overall cut, since requirements vary meaningfully by market. We hold reference patterns for our most common export destinations and can develop a new specification from a reference sample in one sampling round.",
    images: [
      placeholder("prod-zainab-1", "Folded burqa fabric detail"),
      placeholder("prod-zainab-2", "Fabric roll used for burqa production"),
    ],
    fabrics: ["Nida", "Zoom"],
    colors: [{ name: "Black", hex: "#1A1A18" }],
    sizes: ["Made to regional specification"],
    moq: "500 pieces per specification",
    leadTime: "25–35 days after sample approval",
    customizationOptions: ["Custom mesh panel size", "Custom fabric weight", "Regional cut specification"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "100% polyester" },
      { label: "Production", value: "Made to regional specification" },
      { label: "Care", value: "Machine wash cold, hang dry" },
    ],
  },
  {
    slug: "lumen-magnetic-hijab-pins",
    categorySlug: "hijab-magnets",
    name: "Lumen Magnetic Hijab Pins",
    shortDescription: "Nickel-free magnetic pins tested for grip strength and daily safety.",
    description:
      "Lumen pins use a dual-magnet nickel-free construction tested for consistent grip strength across repeated daily use without weakening. Offered in decorative and minimal finishes, sold in bulk multi-packs sized for retail resale or gift-with-purchase bundling alongside hijab and scarf orders.",
    images: [placeholder("prod-lumen-1", "Decorative magnetic hijab pins on display")],
    fabrics: [],
    colors: [
      { name: "Gold-tone", hex: "#C9A34E" },
      { name: "Silver-tone", hex: "#C7C9CC" },
      { name: "Rose Gold-tone", hex: "#D9A88A" },
    ],
    sizes: ["Standard", "Mini"],
    moq: "2,000 units per finish",
    leadTime: "20–28 days after sample approval",
    customizationOptions: ["Custom finish", "Branded display card packaging", "Bulk multi-pack sizing"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Construction", value: "Dual nickel-free magnet" },
      { label: "Testing", value: "Grip-strength verified" },
      { label: "Packaging", value: "Bulk multi-pack or display card" },
    ],
  },
  {
    slug: "yasmin-silk-blend-scarf",
    categorySlug: "scarves",
    name: "Yasmin Silk-Blend Scarf",
    shortDescription: "Printed silk-blend scarf sized for hijab, shawl, or accessory styling.",
    description:
      "Yasmin is cut generously enough to style as a hijab, shawl, or neck scarf, giving retail buyers one SKU that serves multiple use cases. The silk-viscose blend takes fine print detail well, and our in-house print studio can turn a new pattern from concept to strike-off sample in under two weeks.",
    images: [
      placeholder("prod-yasmin-1", "Folded printed scarves stacked by color"),
      placeholder("prod-yasmin-2", "Woman wearing a printed silk scarf"),
    ],
    fabrics: ["Silk", "Viscose"],
    colors: [
      { name: "Bronze", hex: "#A97C50" },
      { name: "Emerald", hex: "#0B4A38" },
      { name: "Ivory", hex: "#FAF7F1" },
    ],
    sizes: ["90x90 cm", "70x180 cm"],
    moq: "300 pieces per print",
    leadTime: "20–26 days after sample approval",
    customizationOptions: ["Custom print design", "Custom edge finish", "Gift packaging"],
    privateLabelAvailable: true,
    specifications: [
      { label: "Composition", value: "70% silk, 30% viscose" },
      { label: "Print", value: "In-house digital print studio" },
      { label: "Care", value: "Dry clean recommended" },
    ],
    newArrival: true,
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(categorySlug: string, slug: string): Product | undefined {
  return products.find((p) => p.categorySlug === categorySlug && p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products.filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, limit);
}
