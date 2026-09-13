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
    collections: [
      { name: "Everyday Essentials", productSlug: "aria-chiffon-hijab" },
      { name: "No-Pin Jersey", productSlug: "nadia-jersey-hijab" },
      { name: "Textured & Statement", productSlug: "alia-georgette-hijab" },
      { name: "Silk & Modal Premium", productSlug: "farah-silk-hijab" },
    ],
    subcategories: [
      {
        slug: "georgette",
        name: "Georgette Hijabs",
        shortDescription: "Crinkle-texture georgette with visible movement and a lightweight, non-cling drape.",
        description:
          "Georgette hijab wholesale is our go-to recommendation for buyers who want more visible texture than chiffon without adding weight. The self-crinkled polyester-viscose weave holds a soft, lived-in fold straight out of the pack, so it photographs well on a hanger and doesn't need steaming before a customer wears it. Because the crinkle is woven in rather than pressed, it survives repeated washing at retail without flattening out, which is the main complaint buyers report with pleated-finish competitors. Offered from 300 pieces per color with Pantone matching on request.",
        images: [
          placeholder("subcat-hijabs-georgette-1", "Model wearing a georgette hijab with visible crinkle texture and soft drape"),
          placeholder("subcat-hijabs-georgette-2", "Close-up of georgette hijab fabric showing its self-textured crinkle weave"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Burgundy", hex: "#6d2130" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "chiffon",
        name: "Chiffon Hijabs",
        shortDescription: "Our highest-volume export fabric — a 75 gsm matte weave opaque enough to skip an underscarf.",
        description:
          "Chiffon is the fabric most wholesale buyers mean by default when they ask for a \"standard\" hijab, and it's the largest single line running through our hijab manufacturing floor. The 75 gsm matte weave is opaque enough to wear without an underscarf in most climates, presses flat for retail packaging, and holds a crisp fold that jersey and modal can't replicate. It's the fabric we recommend to first-time private label buyers because it's the most forgiving to print, dye, and finish consistently at volume. Available across our full 42-shade library from 300 pieces per color.",
        images: [
          placeholder("subcat-hijabs-chiffon-1", "Model wearing a matte chiffon hijab draped with a crisp, structured fold"),
          placeholder("subcat-hijabs-chiffon-2", "Close-up of matte chiffon hijab fabric showing its fine, opaque weave"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Burgundy", hex: "#6d2130" },
        ],
      },
      {
        slug: "jersey",
        name: "Jersey Hijabs",
        shortDescription: "Four-way stretch knit built for a no-pin, wrap-and-go finish.",
        description:
          "Jersey hijabs solve for speed: a cotton-modal knit with four-way stretch that customers wrap and go without pins, safety pins, or an underscarf cap holding it in place. The knit resists fraying at the cut edge, which keeps hemming costs down compared to woven fabrics, and it holds its shape through a full day of wear without the sagging some cheaper viscose jerseys develop by afternoon. This is the strongest-reordering fabric for buyers targeting athleisure-adjacent and first-time hijab wearer segments. Offered in solid and heathered finishes from 300 pieces per color.",
        images: [
          placeholder("subcat-hijabs-jersey-1", "Model wearing a stretch jersey hijab wrapped in a relaxed, no-pin style"),
          placeholder("subcat-hijabs-jersey-2", "Close-up of jersey hijab knit fabric showing its four-way stretch texture"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal Heather", hex: "#5c5c5c" },
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Rust", hex: "#b5502c" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "modal",
        name: "Modal Hijabs",
        shortDescription: "Soft modal-blend hijab with a matte, low-sheen finish and a silkier hand-feel than jersey.",
        description:
          "Modal hijabs sit a step up from standard jersey for buyers who want the same no-pin stretch with a noticeably softer, silkier hand-feel and a lower-sheen finish. The beechwood-derived modal fiber blend drapes closer to the body than cotton jersey without clinging, and it takes dye more evenly, which shows up as richer, more consistent color across a production run. It's a strong fit for premium everyday and gifting ranges where buyers want to differentiate from commodity jersey hijabs on fabric feel alone. Offered from 300 pieces per color with custom blend ratios available for larger orders.",
        images: [
          placeholder("subcat-hijabs-modal-1", "Model wearing a soft modal hijab with a matte, low-sheen drape"),
          placeholder("subcat-hijabs-modal-2", "Close-up of heathered modal fabric showing its soft, fine knit texture"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Heather Grey", hex: "#8a8a8a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "printed-modal",
        name: "Printed Modal Hijabs",
        shortDescription: "Modal's soft stretch with in-house digital print development for pattern-led ranges.",
        description:
          "Printed modal brings our in-house print studio onto the modal base, giving buyers pattern variety without giving up the fabric's soft, no-pin stretch. Digital printing holds fine floral and botanical detail better than screen printing at this weight, and colors stay sharp through repeated washing because the print is heat-set into the modal fiber rather than sitting on top of it. This range is aimed at younger, fashion-forward customer segments who reorder for new prints more often than they reorder solids. Strike-off samples typically turn around in under two weeks, with production from 300 pieces per design.",
        images: [
          placeholder("subcat-hijabs-printed-modal-1", "Model wearing a printed modal hijab in a botanical pattern"),
          placeholder("subcat-hijabs-printed-modal-2", "Close-up of a floral printed pattern on soft modal fabric"),
        ],
        colors: [
          { name: "Indigo Floral", hex: "#2b3a67" },
          { name: "Blush Botanical", hex: "#d98c96" },
          { name: "Sage Paisley", hex: "#8a9b6e" },
          { name: "Terracotta Bloom", hex: "#c1622d" },
        ],
      },
      {
        slug: "printed-chiffon",
        name: "Printed Chiffon Hijabs",
        shortDescription: "Digitally printed chiffon with in-house pattern development from concept to strike-off.",
        description:
          "Printed chiffon pairs our standard-bearer fabric with custom pattern development, so private label buyers get a fully differentiated SKU rather than a solid reorder of the core chiffon line. Our in-house print studio can take a new pattern from concept to strike-off sample in under two weeks, and the chiffon base holds fine line detail and color saturation better than most printed jersey alternatives on the market. It's the fabric we recommend when a buyer wants a signature seasonal print without committing to a full custom-fabric minimum. Production runs from 300 pieces per design with Pantone-matched recoloring available on repeat orders.",
        images: [
          placeholder("subcat-hijabs-printed-chiffon-1", "Model wearing a printed chiffon hijab with a fine floral pattern"),
          placeholder("subcat-hijabs-printed-chiffon-2", "Close-up of a navy floral print on matte chiffon fabric"),
        ],
        colors: [
          { name: "Navy Floral", hex: "#22304f" },
          { name: "Ivory Vine", hex: "#e7e2d3" },
          { name: "Rust Paisley", hex: "#b5502c" },
          { name: "Emerald Bloom", hex: "#175f4c" },
        ],
      },
      {
        slug: "satin",
        name: "Satin Hijabs",
        shortDescription: "High-sheen satin weave positioned for occasion, evening, and gifting ranges.",
        description:
          "Satin hijabs are our step-up occasion fabric, woven for a high-gloss sheen and a fluid, weighted drape that reads as formal wear rather than daily basics. The tighter weave holds a pressed, glass-smooth finish through transport and retail handling far better than lower-cost satin-look alternatives, which tend to develop a dull, matted sheen after one wash. Buyers stock this range alongside luxury silk for evening and bridal-adjacent gifting collections where presentation matters as much as fabric cost. Offered from 200 pieces per color, with gift-box packaging available on request.",
        images: [
          placeholder("subcat-hijabs-satin-1", "Model wearing a high-sheen satin hijab with a fluid, weighted drape"),
          placeholder("subcat-hijabs-satin-2", "Close-up of ivory satin fabric showing its smooth, glossy sheen"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Wine", hex: "#722f37" },
          { name: "Emerald", hex: "#175f4c" },
          { name: "Royal Blue", hex: "#1f3a93" },
        ],
      },
      {
        slug: "silk",
        name: "Silk Hijabs",
        shortDescription: "Mid-tier mulberry silk with a machine-rolled hem for a genuine silk hand-feel at wholesale scale.",
        description:
          "Silk hijabs run on genuine mulberry silk rather than a synthetic silk-look substitute, which is the detail that separates a private label \"luxury\" claim customers actually believe from one they don't. The fiber's natural sheen and weight give a drape no polyester blend fully replicates, and our machine-rolled hem keeps unit costs workable at wholesale volume without hand-finishing every edge. This tier sits below our fully hand-rolled luxury silk hijab line, making it the practical entry point for buyers who want a genuine silk SKU without a luxury-tier price point. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-hijabs-silk-1", "Model wearing a mulberry silk hijab draped elegantly with natural sheen"),
          placeholder("subcat-hijabs-silk-2", "Close-up of silk hijab fabric showing its natural fiber sheen"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Emerald", hex: "#175f4c" },
          { name: "Sapphire", hex: "#0f52ba" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "crinkle",
        name: "Crinkle Hijabs",
        shortDescription: "Self-textured crinkle finish for volume and visible movement without added weight.",
        description:
          "Crinkle hijabs use a heat-set texturing process that locks a permanent, self-supporting ripple into the fabric surface, giving visible volume and movement that a flat weave can't produce on its own. Unlike a pressed pleat, the crinkle texture survives machine washing and doesn't need re-ironing to hold its shape, which buyers in retail (rather than boutique) channels consistently rate as the top reason they reorder this finish over pleated alternatives. It pairs naturally with our georgette range for buyers building a full textured-hijab collection. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-hijabs-crinkle-1", "Model wearing a crinkle-texture hijab with visible self-supporting ripple"),
          placeholder("subcat-hijabs-crinkle-2", "Close-up of crinkle hijab fabric showing its permanent textured surface"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
      {
        slug: "cotton",
        name: "Cotton Hijabs",
        shortDescription: "Breathable cotton voile built for hot-climate daily wear.",
        description:
          "Cotton voile hijabs are the fabric buyers in hot, humid markets ask for once chiffon starts drawing complaints about heat retention. The lightweight, breathable weave lets air through in a way synthetic fabrics can't, at the cost of a less structured drape and slightly more visible creasing after folding. It's a natural-fiber alternative for buyers whose customers specifically ask for cotton, and for private label ranges building a breathable, natural-fiber marketing angle. Offered from 300 pieces per color, pre-shrunk to reduce size variance after the customer's first wash.",
        images: [
          placeholder("subcat-hijabs-cotton-1", "Model wearing a breathable cotton voile hijab folded softly"),
          placeholder("subcat-hijabs-cotton-2", "Close-up of cotton voile hijab fabric showing its light, breathable weave"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Sand", hex: "#d9c7a3" },
          { name: "Charcoal", hex: "#4a4a4a" },
        ],
      },
      {
        slug: "ribbed",
        name: "Ribbed Hijabs",
        shortDescription: "Ribbed knit texture for a structured, streetwear-adjacent finish.",
        description:
          "Ribbed hijabs bring a visible vertical rib knit into the hijab category, aimed at younger customer segments who wear hijab styling closer to streetwear than traditional occasion wear. The tighter rib construction holds more structure than standard jersey, giving a slightly compressed, sculpted wrap style without needing pins to hold the shape. It reorders strongest alongside our sports and instant hijab ranges for buyers targeting an active, casual-first customer base. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-hijabs-ribbed-1", "Model wearing a ribbed knit hijab with a structured, sculpted wrap"),
          placeholder("subcat-hijabs-ribbed-2", "Close-up of ribbed knit fabric showing its vertical rib texture"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Rust", hex: "#b5502c" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Cream", hex: "#f5f0e6" },
        ],
      },
      {
        slug: "bamboo",
        name: "Bamboo Hijabs",
        shortDescription: "Bamboo-viscose blend for a soft, breathable, eco-positioned hijab range.",
        description:
          "Bamboo hijabs use a bamboo-viscose blend that markets well to sustainability-conscious customers while giving a genuinely softer hand-feel and better moisture-wicking than standard cotton jersey. The fiber's natural antibacterial properties and breathability make it a strong fit for buyers building an eco or wellness-positioned private label range, and it takes muted, earthy dye tones particularly well. This is a newer addition to our fabric library, developed in response to distributor demand for natural-fiber alternatives beyond cotton. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-hijabs-bamboo-1", "Model wearing a soft bamboo-viscose hijab in a muted earthy tone"),
          placeholder("subcat-hijabs-bamboo-2", "Close-up of soft bamboo-blend fabric showing its smooth, breathable weave"),
        ],
        colors: [
          { name: "Oat", hex: "#ddd2bc" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Stone", hex: "#b8ada0" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Ink", hex: "#23262b" },
        ],
      },
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
    collections: [
      { name: "Everyday Nida", productSlug: "layla-nida-abaya" },
      { name: "Occasion & Embellished", productSlug: "zahra-embellished-abaya" },
      { name: "Premium Korean Nida", productSlug: "salma-korean-nida-abaya" },
      { name: "Layering & Resort", productSlug: "widad-kimono-abaya" },
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
    collections: [
      { name: "Double-Layer Classics", productSlug: "yara-double-layer-niqab" },
      { name: "Single & Breathable", productSlug: "sabiha-single-layer-niqab" },
      { name: "Adjustable Fit", productSlug: "ghina-adjustable-niqab" },
    ],
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
    collections: [
      { name: "Two-Piece Sets", productSlug: "sana-two-piece-prayer-dress" },
      { name: "One-Piece & Travel", productSlug: "ruqayyah-travel-prayer-set" },
      { name: "Premium Gifting", productSlug: "bilqis-embellished-prayer-set" },
    ],
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
    collections: [
      { name: "Everyday Two-Tier", productSlug: "sundus-two-tier-khimar" },
      { name: "Structured Three-Tier", productSlug: "mira-three-tier-khimar" },
      { name: "Soft & Casual", productSlug: "latifa-georgette-khimar" },
      { name: "Occasion", productSlug: "amani-embellished-khimar" },
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
    collections: [
      { name: "Two-Piece Classics", productSlug: "hana-jilbab-set" },
      { name: "Premium Korean Nida", productSlug: "roshan-korean-nida-jilbab" },
      { name: "Value & Resort", productSlug: "najma-value-jilbab" },
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
    collections: [
      { name: "Everyday Caps", productSlug: "rania-cotton-inner-cap" },
      { name: "Stretch & Fit", productSlug: "bushra-jersey-inner-cap" },
      { name: "Specialty", productSlug: "insiya-bamboo-inner-cap" },
    ],
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
    collections: [
      { name: "Everyday Scarves", productSlug: "samar-cotton-scarf" },
      { name: "Silk & Occasion", productSlug: "yasmin-silk-blend-scarf" },
      { name: "Statement & Seasonal", productSlug: "celine-oversized-shawl" },
    ],
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
    collections: [
      { name: "Classic Instant", productSlug: "amira-instant-hijab" },
      { name: "Casual Jersey", productSlug: "rukan-jersey-instant-hijab" },
      { name: "Premium & Print", productSlug: "elif-printed-instant-hijab" },
    ],
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
    collections: [
      { name: "Performance Training", productSlug: "zayn-sports-hijab" },
      { name: "Swim & Water", productSlug: "rayyan-swim-hijab" },
      { name: "Running & Cardio", productSlug: "sakina-running-hijab" },
      { name: "Youth & Print", productSlug: "zara-print-sports-hijab" },
    ],
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
    collections: [
      { name: "Signature Silk", productSlug: "noor-silk-luxury-hijab" },
      { name: "Embellished", productSlug: "johara-embellished-silk-hijab" },
      { name: "Satin & Print", productSlug: "almas-satin-luxury-hijab" },
      { name: "Cashmere Blend", productSlug: "zumurrud-cashmere-blend-hijab" },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug: string, subcategorySlug: string) {
  const category = getCategoryBySlug(categorySlug);
  const subcategory = category?.subcategories?.find((s) => s.slug === subcategorySlug);
  return category && subcategory ? { category, subcategory } : undefined;
}
