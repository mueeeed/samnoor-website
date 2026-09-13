import { placeholder } from "@/lib/placeholder-image";
import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "hijabs",
    name: "Hijabs",
    shortName: "Hijabs",
    description:
      "Chiffon, jersey, modal, and Nida hijabs finished to a drape and hand-feel that reads well from the first fold, produced at wholesale volume without the finish falling apart at scale.",
    content: `
      <p>Hijab is the category most wholesale buyers start with, and also the one where fabric choice does the most damage if it's picked on unit cost alone. As a hijab manufacturer in India, we run four fabric families through this category &mdash; chiffon, jersey, modal, and Nida &mdash; because each solves a different problem for a different customer, not because a longer fabric list looks better on a spec sheet.</p>
      <p>Chiffon hijabs are our highest-volume export line: a 75 gsm matte weave that's opaque enough to wear without an underscarf in most climates, and the fabric most buyers mean when they ask for a "standard" hijab. Jersey and modal hijabs cover the no-pin, wrap-and-go segment &mdash; four-way stretch, no fraying, and a softer hand-feel that customers in cooler markets tend to prefer over chiffon. Nida hijabs sit at the structured end, usually ordered by buyers who also stock our Nida abayas and want a matching headscarf finish.</p>
      <p>Every hijab style ships in our standard 42-shade library, with custom Pantone matching available from 500 pieces per color. Standard sizes run 70x180 cm, 75x190 cm, and 80x200 cm, with custom dimensions available on request for markets that prefer a shorter or fuller drape.</p>
    `,
    heroImage: placeholder("cat-hijabs-hero", "Folded chiffon hijabs in a muted color palette"),
    cardImage: placeholder("cat-hijabs-card", "Model wearing a draped chiffon hijab"),
    keywords: [
      "hijab manufacturer in India",
      "hijab wholesale suppliers in Mumbai",
      "chiffon hijab wholesale",
      "modal hijab manufacturer",
      "wholesale hijab supplier",
    ],
    faqs: [
      {
        question: "What's the difference between chiffon, jersey, and modal hijabs?",
        answer:
          "Chiffon is a woven polyester fabric with a matte finish and enough opacity to skip an underscarf &mdash; it holds its shape but doesn't stretch. Jersey and modal are knits with four-way stretch, giving a wrap-and-go fit that chiffon can't, at the cost of the crisp, tailored drape chiffon holds. Buyers serving hot, humid markets usually lead with chiffon; buyers in temperate markets tend to sell more jersey and modal.",
      },
      {
        question: "Can I order hijabs in a fabric that's not listed here?",
        answer:
          "Yes. Georgette, viscose, and cotton hijabs are all things we produce regularly for private label accounts &mdash; they're just not carried as standing catalog SKUs. Send us the fabric and target price point and we'll quote a sample.",
      },
    ],
  },
  {
    slug: "abayas",
    name: "Abayas",
    shortName: "Abayas",
    description:
      "Structured and flowing abayas cut for clean drape, from everyday Nida silhouettes to embellished occasion pieces, produced to private label specification from our Mumbai facility.",
    content: `
      <p>Abaya manufacturing is the largest single line running through our Mumbai factory, and the one where cut matters as much as fabric. An open-front Nida abaya and an embellished crepe occasion abaya are built on almost entirely different pattern blocks, seam allowances, and finishing standards, even though both fall under the same product category on a wholesale order form.</p>
      <p>Our everyday abaya program runs on matte Korean Nida &mdash; a fabric with enough body to hold structure without stiffness, finished with concealed snap closures and reinforced side-seam pockets. This is the volume style most of our GCC and South Asian accounts reorder season after season. Above that sits our occasion tier: heavier crepe bases that hold hand-placed stonework and embroidery without distorting drape, produced in small-batch runs starting at 50 units per design for boutique and bridal-adjacent buyers.</p>
      <p>Every abaya style supports custom embroidery placement, woven size labels, and custom snap or zip closures for private label orders, with size runs from 52 to 62 as standard and made-to-measure available for occasion pieces.</p>
    `,
    heroImage: placeholder("cat-abayas-hero", "Black abaya on a mannequin against a neutral backdrop"),
    cardImage: placeholder("cat-abayas-card", "Woman wearing an open abaya over modest clothing"),
    keywords: [
      "abaya manufacturer in India",
      "abaya wholesale supplier",
      "abaya factory Mumbai",
      "Nida abaya manufacturer",
      "private label abaya manufacturer",
    ],
  },
  {
    slug: "niqabs",
    name: "Niqabs",
    shortName: "Niqabs",
    description:
      "Single and double-layer niqabs in breathable chiffon and crepe, finished with reinforced ties and stitching engineered for daily wear rather than occasional use.",
    content: `
      <p>A niqab is a face veil, worn with an abaya or separately over a hijab, and the detail that separates a well-made one from a poorly made one is almost never visible in a product photo: it's in the tie stitching. Ties are the first point of failure on a niqab that's worn and removed multiple times a day, which is why every SamNoor niqab uses reinforced double-stitching at the tie attachment point rather than a single seam.</p>
      <p>We produce both single-layer and double-layer niqabs. Single-layer styles in lightweight chiffon suit warmer climates and everyday wear; double-layer styles add a second, often less sheer panel for buyers whose markets expect fuller coverage. Both are cut from the same fabric library as our hijabs, so buyers stocking both categories can match shades exactly across a single order.</p>
    `,
    heroImage: placeholder("cat-niqabs-hero", "Folded chiffon niqab fabric detail"),
    cardImage: placeholder("cat-niqabs-card", "Niqab fabric texture close-up"),
    keywords: ["niqab manufacturer", "niqab wholesale supplier", "niqab manufacturer India"],
    faqs: [
      {
        question: "Is a niqab the same as a burqa?",
        answer:
          "No. A niqab covers the face below the eyes and is typically worn with a separate abaya or khimar. A burqa is a single full-body garment with the head covering and face veil built in as one piece, and often includes a mesh panel over the eyes rather than leaving them uncovered.",
      },
    ],
  },
  {
    slug: "prayer-dresses",
    name: "Prayer Dresses",
    shortName: "Prayer Dresses",
    description:
      "One-piece and two-piece prayer dresses (salah abayas) in lightweight, breathable fabrics designed for ease of movement during prayer, not just for looking the part in a product photo.",
    content: `
      <p>A prayer dress has one functional requirement a regular abaya doesn't: it has to move through a full prayer cycle &mdash; standing, bowing, prostrating &mdash; without pulling tight at the shoulders or riding up at the hem. That requirement drives every construction decision on this line, from elasticated cuffs and waistbands to a looser cut through the shoulder than we'd use on a daywear abaya in the same fabric.</p>
      <p>Our two-piece prayer set (top and skirt) is the highest-repeat style in this category, particularly around Ramadan ordering cycles, and packs down small enough to sell in an individual drawstring travel bag &mdash; a packaging detail several of our accounts specifically request for gifting and retail displays.</p>
    `,
    heroImage: placeholder("cat-prayer-hero", "Folded lightweight prayer dress fabric"),
    cardImage: placeholder("cat-prayer-card", "Woman wearing a two-piece prayer dress"),
    keywords: ["prayer dress manufacturer", "salah abaya supplier", "prayer abaya wholesale"],
  },
  {
    slug: "khimars",
    name: "Khimars",
    shortName: "Khimars",
    description:
      "Layered khimars in one, two, and three-tier cuts, offered in matte and satin-back crepe for a structured silhouette that holds its shape without added stiffening.",
    content: `
      <p>A khimar is a cape-like head covering that drapes over the head, shoulders, and upper torso in one piece, without the separate hijab-plus-top-layer combination some buyers assume it is. It's cut long enough to cover to around the waist or hip depending on the tier count, and unlike a hijab, it isn't wrapped or pinned &mdash; it's designed to be pulled on and worn as-is, which is a large part of why search demand for the garment itself runs well ahead of demand for most other modest-wear categories.</p>
      <p>We cut khimars in one, two, and three graduated tiers. A single-tier khimar reads closer to a long shawl-style covering; three tiers give the structured, stacked silhouette most boutique buyers associate with the category. Satin-back crepe is our most-ordered khimar fabric &mdash; it holds a clean fold line at each tier without needing interfacing, and gives a subtle sheen at the collar while staying matte through the body.</p>
      <p>Because khimar is a high-search, comparatively low-competition category for wholesale buyers building out a modest-wear range, it's one we'd point new private label accounts toward if they're deciding where to put their first development budget.</p>
    `,
    heroImage: placeholder("cat-khimars-hero", "Layered khimar garment on a hanger"),
    cardImage: placeholder("cat-khimars-card", "Woman wearing a tiered khimar"),
    keywords: [
      "khimar manufacturer",
      "khimar wholesale supplier",
      "three tier khimar manufacturer",
      "khimar manufacturer India",
    ],
    faqs: [
      {
        question: "What's the difference between a khimar and a hijab?",
        answer:
          "A hijab is a single length of fabric wrapped and pinned around the head and neck. A khimar is a pre-shaped, cape-style garment that covers the head and shoulders in one piece and is pulled on rather than wrapped &mdash; closer in construction to a poncho than a scarf.",
      },
      {
        question: "How many tiers should I order for a first khimar range?",
        answer:
          "Most first orders split evenly between two-tier and three-tier cuts. Two-tier khimars sell better in warmer markets where less layered fabric is preferred; three-tier is the stronger seller in cooler markets and for boutique/occasion positioning.",
      },
    ],
  },
  {
    slug: "jilbabs",
    name: "Jilbabs",
    shortName: "Jilbabs",
    description:
      "Jilbab sets in Nida and crepe, cut for full coverage and ease of movement, with reinforced seams for daily wear and a construction that holds up to repeated washing.",
    content: `
      <p>Jilbab is one of the highest-volume search terms in the entire modest-wear category, and one of the most commonly confused with abaya by buyers outside markets where the distinction is well established. An abaya is typically a single open or closed robe. A jilbab, in the sense most of our wholesale buyers order it, is a looser, often two-piece covering &mdash; a separate top and a full-length skirt or an integrated wide-cut robe &mdash; cut with more fabric ease through the body than a fitted abaya carries.</p>
      <p>Our jilbab program runs on Nida and crepe, the same fabric bases as our abaya line, with reinforced double-stitched seams at the underarm and hem &mdash; the two points that see the most stress on a loose-cut garment worn daily. Sizing runs from free-size cuts through a 52&ndash;56 graded range, and most of our distributor accounts order jilbabs as a value-tier companion to a more structured abaya range rather than as a standalone line.</p>
    `,
    heroImage: placeholder("cat-jilbabs-hero", "Jilbab set folded and displayed flat"),
    cardImage: placeholder("cat-jilbabs-card", "Woman wearing a flowing jilbab"),
    keywords: [
      "jilbab manufacturer",
      "jilbab wholesale supplier",
      "jilbab manufacturer India",
      "jilbab vs abaya",
    ],
    faqs: [
      {
        question: "What is the difference between a jilbab and an abaya?",
        answer:
          "The terms overlap by region, but in our production spec, an abaya is a more fitted, often single-piece robe cut close to the body, while a jilbab is looser through the body and frequently produced as a two-piece set. Buyers sourcing for markets where the terms are used interchangeably should confirm the specific cut with a reference image rather than the name alone.",
      },
    ],
  },
  {
    slug: "islamic-inner-caps",
    name: "Islamic Inner Caps",
    shortName: "Inner Caps",
    description:
      "Cotton and jersey underscarves and inner caps designed for grip, breathability, and all-day comfort beneath hijabs and khimars, sold as a bulk multi-pack line for distributors.",
    content: `
      <p>Inner caps are the lowest-visibility, highest-repeat-order item in our catalog. Buyers rarely feature them as a hero product, but distributors reorder them more predictably than almost anything else we make, because they're a consumable accessory sold alongside every hijab, khimar, and niqab a customer buys.</p>
      <p>We build ours on combed cotton for breathability and a non-slip grip band at the hairline, which is the detail that actually determines repeat purchase &mdash; a cap that slides under a hijab through a full day gets returned or simply not reordered. Sold in bulk multi-packs across an extended neutral color range, this is a category we'd recommend any hijab or khimar distributor stock alongside their core garment range rather than source separately.</p>
    `,
    heroImage: placeholder("cat-innercaps-hero", "Cotton inner caps arranged in rows"),
    cardImage: placeholder("cat-innercaps-card", "Model wearing an underscarf cap"),
    keywords: ["inner cap hijab manufacturer", "underscarf supplier wholesale", "hijab cap manufacturer India"],
  },
  {
    slug: "scarves",
    name: "Scarves",
    shortName: "Scarves",
    description:
      "Printed and solid scarves in silk, viscose, and modal, sized for versatile styling across hijab, shawl, and accessory use rather than locked to a single wear.",
    content: `
      <p>Scarves are the one category in our catalog that isn't styled exclusively as a hijab &mdash; the same piece is designed to work as a headscarf, a shawl, or a plain fashion accessory, which is why sizing and hem finish matter more here than on any other line. Our silk and viscose scarves run in two standard sizes: 90x90 cm for a square accessory-style scarf, and 70x180 cm for a hijab-length wrap.</p>
      <p>Print development runs through our in-house digital print studio, which can turn a new pattern from concept to strike-off sample in under two weeks &mdash; a fast enough turnaround that several of our retail accounts run seasonal print drops rather than sticking to a fixed solid-color range.</p>
    `,
    heroImage: placeholder("cat-scarves-hero", "Folded printed scarves stacked by color"),
    cardImage: placeholder("cat-scarves-card", "Woman wearing a printed silk scarf"),
    keywords: ["scarf manufacturer India", "wholesale scarf supplier", "silk scarf manufacturer"],
  },
  {
    slug: "instant-hijabs",
    name: "Instant Hijabs",
    shortName: "Instant Hijabs",
    description:
      "Pre-styled, pull-on instant hijabs with a built-in underscarf, engineered for a finished look in under a minute without any pinning.",
    content: `
      <p>An instant hijab solves a single problem: speed, without the styled look of a wrapped hijab falling apart by midday. The underscarf cap is sewn directly into the outer chiffon layer, pre-shaped so the drape falls the same way every time it's worn, with no pins required.</p>
      <p>This is consistently one of the strongest entry points we've found for private label ranges aimed at first-time hijab wearers, teenage customers, and gifting occasions &mdash; the finished, foolproof look reduces the return rate that comes from customers struggling to style a traditional wrap on their own. It's also one of the higher-search, lower-competition categories in modest wear, which makes it a reasonable one to lead a new retail range with rather than bury as a secondary SKU.</p>
    `,
    heroImage: placeholder("cat-instant-hero", "Instant hijab with attached underscarf laid flat"),
    cardImage: placeholder("cat-instant-card", "Woman wearing a pull-on instant hijab"),
    keywords: ["instant hijab manufacturer", "one-piece hijab supplier", "pull on hijab wholesale"],
  },
  {
    slug: "sports-hijabs",
    name: "Sports Hijabs",
    shortName: "Sports Hijabs",
    description:
      "Moisture-wicking, four-way stretch sports hijabs built for performance wear, swimming, and active use, in a breathable technical knit rather than repurposed regular hijab fabric.",
    content: `
      <p>A sports hijab isn't a jersey hijab with a sportier label &mdash; it's built on a different technical knit developed specifically for moisture management and stretch recovery through repeated wear, sweat, and washing, with flatlock seams to prevent chafing during activity. Reusing standard jersey for an "active" line is a shortcut that shows up quickly in customer complaints about pilling and stretched-out necklines after a few wash cycles.</p>
      <p>Our sports hijab fabric is tested specifically for quick-dry performance, which makes this our reference style for activewear and swim-adjacent private label programs. Search demand for the category is meaningfully higher than most buyers expect relative to how few manufacturers produce a genuinely technical version rather than a relabeled everyday hijab &mdash; a gap worth knowing about before committing a range to a generic fabric.</p>
    `,
    heroImage: placeholder("cat-sports-hero", "Technical sports hijab fabric close-up"),
    cardImage: placeholder("cat-sports-card", "Woman wearing an athletic sports hijab"),
    keywords: ["sports hijab manufacturer", "active hijab supplier wholesale", "sports hijab manufacturer India"],
  },
  {
    slug: "luxury-hijabs",
    name: "Luxury Hijabs",
    shortName: "Luxury Hijabs",
    description:
      "Mulberry silk and satin hijabs finished with hand-rolled hems and branded gift packaging, built for boutique and department store placement rather than volume racks.",
    content: `
      <p>Our luxury tier runs on 100% mulberry silk with a hand-rolled hem &mdash; a finish done by a specialist stitching team rather than a machine, which is the detail that actually separates a "silk-feel" hijab from a genuine silk one at the point of sale. Every piece is individually inspected and packaged in a branded rigid gift box before it ships, since this category is bought as much for the unboxing as for the fabric.</p>
      <p>This is a lower-competition, higher-margin category compared to standard chiffon or jersey hijabs, and one we'd recommend to boutique buyers specifically &mdash; the MOQ sits lower than our volume lines (150 pieces per color) because it's positioned for curated retail, not bulk distribution. Custom gift box branding and hand-rolled or machine-hemmed finishing are both available for private label orders.</p>
    `,
    heroImage: placeholder("cat-luxury-hero", "Silk luxury hijab draped elegantly"),
    cardImage: placeholder("cat-luxury-card", "Close-up of hand-rolled hem on a silk hijab"),
    keywords: ["luxury hijab manufacturer", "silk hijab manufacturer", "premium silk hijab supplier India"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
