import type { ImageAsset } from "@/content/types";

/**
 * Curated, verified, freely-licensed (Pexels) stock photos, one per visual
 * theme. Sourced to genuinely match modest fashion / garment manufacturing
 * subject matter — swap any entry for real Samnoor photography later by
 * replacing the URL here; every call site already carries brand-specific alt
 * text independent of this file.
 */
const THEME_PHOTOS: Record<string, string> = {
  "hijab-fashion-model": "https://images.pexels.com/photos/4728705/pexels-photo-4728705.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "hijab-flatlay-chiffon": "https://images.pexels.com/photos/6070106/pexels-photo-6070106.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "hijab-fabric-texture": "https://images.pexels.com/photos/6571744/pexels-photo-6571744.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "hijab-color-range": "https://images.pexels.com/photos/2171218/pexels-photo-2171218.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "abaya-mannequin": "https://images.pexels.com/photos/13838842/pexels-photo-13838842.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "abaya-model": "https://images.pexels.com/photos/10898230/pexels-photo-10898230.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "abaya-fabric-drape": "https://images.pexels.com/photos/4814074/pexels-photo-4814074.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "abaya-seam-detail": "https://images.pexels.com/photos/6801439/pexels-photo-6801439.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "abaya-embellished": "https://images.pexels.com/photos/32208656/pexels-photo-32208656.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "embroidery-closeup": "https://images.pexels.com/photos/18776725/pexels-photo-18776725.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "niqab-fabric": "https://images.pexels.com/photos/6044224/pexels-photo-6044224.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "prayer-dress-flatlay": "https://images.pexels.com/photos/7235669/pexels-photo-7235669.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "prayer-dress-model": "https://images.pexels.com/photos/36211965/pexels-photo-36211965.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "khimar-mannequin": "https://images.pexels.com/photos/4857762/pexels-photo-4857762.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "khimar-model": "https://images.pexels.com/photos/30116467/pexels-photo-30116467.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "modest-dress-mannequin": "https://images.pexels.com/photos/21047058/pexels-photo-21047058.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "modest-dress-model": "https://images.pexels.com/photos/35150034/pexels-photo-35150034.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "jilbab-flatlay": "https://images.pexels.com/photos/6461392/pexels-photo-6461392.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "jilbab-model": "https://images.pexels.com/photos/7249214/pexels-photo-7249214.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "kaftan-mannequin": "https://images.pexels.com/photos/18600902/pexels-photo-18600902.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "kaftan-model": "https://images.pexels.com/photos/30457749/pexels-photo-30457749.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "kaftan-detail": "https://images.pexels.com/photos/32856244/pexels-photo-32856244.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "burqa-fabric": "https://images.pexels.com/photos/29060193/pexels-photo-29060193.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "innercap-rows": "https://images.pexels.com/photos/30267890/pexels-photo-30267890.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "innercap-model": "https://images.pexels.com/photos/4728651/pexels-photo-4728651.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "hijab-pins": "https://images.pexels.com/photos/6844173/pexels-photo-6844173.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "scarves-stack": "https://images.pexels.com/photos/2325270/pexels-photo-2325270.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "scarf-model": "https://images.pexels.com/photos/26189511/pexels-photo-26189511.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "instant-hijab-model": "https://images.pexels.com/photos/32349583/pexels-photo-32349583.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "sports-hijab-fabric": "https://images.pexels.com/photos/4863009/pexels-photo-4863009.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "sports-hijab-model": "https://images.pexels.com/photos/7690849/pexels-photo-7690849.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "luxury-hijab-silk": "https://images.pexels.com/photos/34850184/pexels-photo-34850184.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "luxury-hijab-detail": "https://images.pexels.com/photos/36726420/pexels-photo-36726420.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "fabric-roll-generic": "https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "fabric-cotton-texture": "https://images.pexels.com/photos/5908326/pexels-photo-5908326.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "fabric-jersey-stretch": "https://images.pexels.com/photos/30710033/pexels-photo-30710033.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "fabric-silk-sheen": "https://images.pexels.com/photos/4884626/pexels-photo-4884626.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "fabric-linen-texture": "https://images.pexels.com/photos/7794365/pexels-photo-7794365.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "fabric-swatch-cards": "https://images.pexels.com/photos/6580549/pexels-photo-6580549.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "factory-exterior": "https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "factory-floor-wide": "https://images.pexels.com/photos/31031031/pexels-photo-31031031.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "qc-inspection": "https://images.pexels.com/photos/31090818/pexels-photo-31090818.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "cutting-table": "https://images.pexels.com/photos/7147578/pexels-photo-7147578.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "sewing-floor": "https://images.pexels.com/photos/4492077/pexels-photo-4492077.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "warehouse-cartons": "https://images.pexels.com/photos/10834810/pexels-photo-10834810.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "shipping-containers": "https://images.pexels.com/photos/9716365/pexels-photo-9716365.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "design-desk": "https://images.pexels.com/photos/15764763/pexels-photo-15764763.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "business-headshot-1": "https://images.pexels.com/photos/33261955/pexels-photo-33261955.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "business-headshot-2": "https://images.pexels.com/photos/10347162/pexels-photo-10347162.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "business-headshot-3": "https://images.pexels.com/photos/37148339/pexels-photo-37148339.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "business-headshot-4": "https://images.pexels.com/photos/34381970/pexels-photo-34381970.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "trade-exhibition-booth": "https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "certification-documents": "https://images.pexels.com/photos/10347152/pexels-photo-10347152.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

/** Maps every content seed used across the site to one of the themes above. */
const SEED_THEME_MAP: Record<string, keyof typeof THEME_PHOTOS> = {
  // Products — Aria chiffon hijab
  "prod-aria-1": "hijab-fashion-model",
  "prod-aria-2": "hijab-fabric-texture",
  "prod-aria-3": "hijab-color-range",
  // Nadia jersey hijab
  "prod-nadia-1": "instant-hijab-model",
  "prod-nadia-2": "fabric-jersey-stretch",
  // Layla Nida abaya
  "prod-layla-1": "abaya-mannequin",
  "prod-layla-2": "abaya-fabric-drape",
  "prod-layla-3": "abaya-seam-detail",
  // Zahra embellished abaya
  "prod-zahra-1": "abaya-embellished",
  "prod-zahra-2": "embroidery-closeup",
  // Sana prayer dress
  "prod-sana-1": "prayer-dress-flatlay",
  "prod-sana-2": "prayer-dress-model",
  // Mira khimar
  "prod-mira-1": "khimar-mannequin",
  "prod-mira-2": "abaya-seam-detail",
  // Farah kaftan
  "prod-farah-1": "kaftan-mannequin",
  "prod-farah-2": "kaftan-detail",
  // Amira instant hijab
  "prod-amira-1": "instant-hijab-model",
  "prod-amira-2": "hijab-fabric-texture",
  // Zayn sports hijab
  "prod-zayn-1": "sports-hijab-model",
  "prod-zayn-2": "sports-hijab-fabric",
  // Noor silk luxury hijab
  "prod-noor-1": "luxury-hijab-silk",
  "prod-noor-2": "luxury-hijab-detail",
  "prod-noor-3": "luxury-hijab-silk",
  // Hana jilbab
  "prod-hana-1": "jilbab-flatlay",
  "prod-hana-2": "abaya-seam-detail",
  // Rania cotton inner cap
  "prod-rania-1": "innercap-rows",
  "prod-rania-2": "innercap-model",
  // Yara double-layer niqab
  "prod-yara-1": "niqab-fabric",
  "prod-yara-2": "hijab-flatlay-chiffon",
  // Elif modest daywear dress
  "prod-elif-1": "modest-dress-mannequin",
  "prod-elif-2": "modest-dress-model",
  // Zainab traditional burqa
  "prod-zainab-1": "burqa-fabric",
  "prod-zainab-2": "fabric-roll-generic",
  // Lumen magnetic hijab pins
  "prod-lumen-1": "hijab-pins",
  // Yasmin silk-blend scarf
  "prod-yasmin-1": "scarves-stack",
  "prod-yasmin-2": "scarf-model",

  // Fabrics
  "fabric-nida": "abaya-fabric-drape",
  "fabric-korean-nida": "fabric-roll-generic",
  "fabric-zoom": "fabric-roll-generic",
  "fabric-chiffon": "hijab-flatlay-chiffon",
  "fabric-cotton": "fabric-cotton-texture",
  "fabric-jersey": "fabric-jersey-stretch",
  "fabric-silk": "fabric-silk-sheen",
  "fabric-linen": "fabric-linen-texture",
  "fabric-crepe": "fabric-linen-texture",
  "fabric-georgette": "hijab-flatlay-chiffon",
  "fabric-rayon": "fabric-silk-sheen",
  "fabric-viscose": "fabric-cotton-texture",
  "fabric-blends": "fabric-swatch-cards",

  // Categories — hero + card share a photo (never rendered together)
  "cat-hijabs-hero": "hijab-flatlay-chiffon",
  "cat-hijabs-card": "hijab-fashion-model",
  "cat-abayas-hero": "abaya-mannequin",
  "cat-abayas-card": "abaya-model",
  "cat-niqabs-hero": "niqab-fabric",
  "cat-niqabs-card": "niqab-fabric",
  "cat-prayer-hero": "prayer-dress-flatlay",
  "cat-prayer-card": "prayer-dress-model",
  "cat-khimars-hero": "khimar-mannequin",
  "cat-khimars-card": "khimar-model",
  "cat-dresses-hero": "modest-dress-mannequin",
  "cat-dresses-card": "modest-dress-model",
  "cat-jilbabs-hero": "jilbab-flatlay",
  "cat-jilbabs-card": "jilbab-model",
  "cat-kaftans-hero": "kaftan-mannequin",
  "cat-kaftans-card": "kaftan-model",
  "cat-burqas-hero": "burqa-fabric",
  "cat-burqas-card": "burqa-fabric",
  "cat-innercaps-hero": "innercap-rows",
  "cat-innercaps-card": "innercap-model",
  "cat-magnets-hero": "hijab-pins",
  "cat-magnets-card": "hijab-pins",
  "cat-scarves-hero": "scarves-stack",
  "cat-scarves-card": "scarf-model",
  "cat-instant-hero": "hijab-flatlay-chiffon",
  "cat-instant-card": "instant-hijab-model",
  "cat-sports-hero": "sports-hijab-fabric",
  "cat-sports-card": "sports-hijab-model",
  "cat-luxury-hero": "luxury-hijab-silk",
  "cat-luxury-card": "luxury-hijab-detail",

  // Home sections
  "home-hero": "abaya-model",
  "home-manufacturing": "factory-floor-wide",
  "home-private-label": "design-desk",
  "instagram-0": "abaya-model",
  "instagram-1": "hijab-fashion-model",
  "instagram-2": "scarf-model",
  "instagram-3": "luxury-hijab-silk",
  "instagram-4": "kaftan-model",
  "instagram-5": "sports-hijab-model",

  // Page heroes
  "products-hero": "hijab-color-range",
  "faq-hero": "certification-documents",
  "fabrics-hero": "fabric-roll-generic",
  "oem-hero": "design-desk",
  "export-hero": "shipping-containers",
  "contact-hero": "design-desk",
  "mfg-hero": "factory-floor-wide",
  "cert-hero": "certification-documents",
  "gallery-hero": "factory-floor-wide",
  "blog-hero": "factory-floor-wide",

  // Manufacturing process stages
  "mfg-inspection": "fabric-roll-generic",
  "mfg-cutting": "cutting-table",
  "mfg-stitching": "sewing-floor",
  "mfg-embroidery": "embroidery-closeup",
  "mfg-finishing": "abaya-seam-detail",
  "mfg-qc": "qc-inspection",
  "mfg-packaging": "warehouse-cartons",
  "mfg-warehouse": "shipping-containers",

  // Blog covers
  "blog-1-cover": "fabric-roll-generic",
  "blog-2-cover": "fabric-swatch-cards",
  "blog-3-cover": "design-desk",
  "blog-4-cover": "shipping-containers",
  "blog-5-cover": "khimar-mannequin",

  // About page
  "about-hero": "factory-exterior",
  "about-story": "design-desk",
  "about-philosophy": "qc-inspection",
  "leader-Yusuf Al Rashid": "business-headshot-1",
  "leader-Hana Qureshi": "business-headshot-2",
  "leader-Omar Siddiqui": "business-headshot-3",
  "leader-Farida Noor": "business-headshot-4",

  // Gallery grid
  "gallery-factory-1": "factory-exterior",
  "gallery-cutting-1": "cutting-table",
  "gallery-stitching-1": "sewing-floor",
  "gallery-embroidery-1": "embroidery-closeup",
  "gallery-product-1": "hijab-flatlay-chiffon",
  "gallery-product-2": "kaftan-model",
  "gallery-packaging-1": "warehouse-cartons",
  "gallery-warehouse-1": "warehouse-cartons",
  "gallery-shipping-1": "shipping-containers",
  "gallery-exhibition-1": "trade-exhibition-booth",
  "gallery-fabric-1": "fabric-swatch-cards",
  "gallery-team-1": "qc-inspection",
};

/**
 * Resolves a content seed to a real, verified stock photo where mapped,
 * falling back to a deterministic Lorem Picsum placeholder for anything new
 * that hasn't been curated yet — so a missing mapping degrades gracefully
 * instead of breaking the page.
 */
export function placeholder(seed: string, alt: string, width = 1200, height = 900): ImageAsset {
  const theme = SEED_THEME_MAP[seed];
  const src = theme
    ? THEME_PHOTOS[theme]
    : `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
  return { src, alt, width, height };
}
