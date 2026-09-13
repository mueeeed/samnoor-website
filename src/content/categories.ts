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
    subcategories: [
      {
        slug: "closed",
        name: "Closed Abaya",
        shortDescription: "Fully closed silhouette with a hidden zip or pull-over construction and no front opening.",
        description:
          "Closed abayas are cut as one continuous piece with no front seam to close, using either a concealed back zip or a pull-over head opening depending on the fabric weight. Removing the front closure removes the single most common failure point on an abaya &mdash; a snap or zip pull that fails after repeated use &mdash; which is why this silhouette shows the lowest return rate across our abaya range in distributor feedback. It's the volume style most GCC and South Asian accounts reorder season after season, usually run on matte Korean Nida for enough body to hold structure without stiffness. Offered from 300 pieces per color with reinforced side-seam pockets standard.",
        images: [
          placeholder("subcat-abayas-closed-1", "Model wearing a closed-silhouette abaya with no front opening"),
          placeholder("subcat-abayas-closed-2", "Close-up of a closed abaya's concealed back-zip seam construction"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Chocolate", hex: "#4a3728" },
          { name: "Taupe", hex: "#a08d78" },
          { name: "Olive", hex: "#6b6f52" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "open",
        name: "Open Abaya",
        shortDescription: "Open-front layering abaya worn over an underdress rather than closed at the front.",
        description:
          "Open abayas are designed as a layering piece from the start, cut with a front opening and no closure so it's worn over an underdress, trousers, or a coordinating set rather than sealed shut. The wider armhole and looser body block give more visible movement than a closed abaya, which is why this silhouette photographs better for social and e-commerce listings than it does on a hanger. It's the style most buyers pair with a matching underdress SKU to sell as a two-piece look without manufacturing it as a literal two-piece set. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-abayas-open-1", "Model wearing an open-front abaya layered over an underdress"),
          placeholder("subcat-abayas-open-2", "Close-up of open abaya fabric showing its fluid, layered drape"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Stone", hex: "#b8ada0" },
          { name: "Ash Rose", hex: "#c9a9a6" },
          { name: "Olive", hex: "#6b6f52" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "butterfly",
        name: "Butterfly Abaya",
        shortDescription: "Wide, winged sleeve construction that opens into a dramatic silhouette when arms are raised.",
        description:
          "Butterfly abayas use an exaggerated dolman sleeve pattern that joins the sleeve to the body in one continuous panel, so the garment reads relatively fitted at rest but opens into a wide, wing-like silhouette the moment the arms are raised. This is the style buyers pull for lookbook and runway-adjacent marketing because the movement photographs dramatically, even though it's cut from the same fabric base as our standard abayas. The wider panel does use more fabric per unit than a fitted sleeve, which shows up as a modest per-unit cost increase over our closed and everyday lines. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-abayas-butterfly-1", "Model wearing a butterfly abaya with wide, dramatic sleeve silhouette"),
          placeholder("subcat-abayas-butterfly-2", "Close-up detail of butterfly abaya sleeve seam construction"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Burgundy", hex: "#6d2130" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Chocolate", hex: "#4a3728" },
        ],
      },
      {
        slug: "kimono",
        name: "Kimono Abaya",
        shortDescription: "Straight-cut, open-front layering abaya inspired by kimono tailoring, tied or left open.",
        description:
          "Kimono abayas borrow their straight-line body and wide, uncurved sleeve from kimono tailoring rather than traditional abaya pattern blocks, giving a relaxed, resort-adjacent silhouette that buyers stock alongside occasion pieces for a lighter layering option. It's usually finished with a self-fabric tie belt rather than a fitted seam, so one size range fits a wider variety of body shapes than our fitted styles. This is our strongest-reordering layering style for warm-climate and resort-market buyers who want abaya-adjacent coverage without full structure. Offered from 300 pieces per color; see our Widad Kimono Abaya for a full product example in this cut.",
        images: [
          placeholder("subcat-abayas-kimono-1", "Model wearing a kimono-style abaya with a relaxed, tied silhouette"),
          placeholder("subcat-abayas-kimono-2", "Close-up of kimono abaya fabric and trim detail"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Stone", hex: "#b8ada0" },
          { name: "Olive", hex: "#6b6f52" },
          { name: "Taupe", hex: "#a08d78" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "kloosh-umbrella",
        name: "Kloosh / Umbrella Abaya",
        shortDescription: "Circular-cut hem that flares from the shoulder for maximum fullness and swing.",
        description:
          "Kloosh (umbrella-cut) abayas use a circular pattern block rather than straight panels, so the hem flares evenly from the shoulder seam the way an umbrella opens rather than gathering fullness at the waist. This cut uses noticeably more fabric per unit than a straight-panel abaya, which is the main reason it's positioned above our everyday styles, but it's also the cut GCC buyers most associate with a premium, traditional silhouette. The even flare holds its shape better through walking and movement than gathered or pleated fullness, which tends to collapse unevenly after washing. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-abayas-kloosh-umbrella-1", "Model wearing an umbrella-cut abaya with a full, circular flared hem"),
          placeholder("subcat-abayas-kloosh-umbrella-2", "Close-up of kloosh abaya hem showing its circular-cut fullness"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Chocolate", hex: "#4a3728" },
        ],
      },
      {
        slug: "batwing",
        name: "Batwing Abaya",
        shortDescription: "Dropped dolman sleeve for a relaxed, oversized upper body and tapered hem.",
        description:
          "Batwing abayas drop the sleeve seam low into the body panel, similar in construction to our butterfly cut but tapering back in toward a narrower hem rather than staying wide throughout, giving a more wearable, everyday-appropriate silhouette. The dropped shoulder line is more forgiving across a wider size range than a set-in sleeve, which is why buyers targeting a broad size run tend to prefer it over more fitted alternatives. It sits between our closed and butterfly styles on both fabric usage and price. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-abayas-batwing-1", "Model wearing a batwing-sleeve abaya with a relaxed, tapered silhouette"),
          placeholder("subcat-abayas-batwing-2", "Close-up of batwing abaya sleeve drape and fabric movement"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Taupe", hex: "#a08d78" },
          { name: "Olive", hex: "#6b6f52" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "coat-blazer",
        name: "Coat / Blazer Style Abaya",
        shortDescription: "Structured lapel and collar construction worn open, styled closer to outerwear than traditional abaya.",
        description:
          "Coat and blazer-style abayas bring a structured lapel, collar, and often a self-belt into the pattern block, positioning the piece closer to modest outerwear than a traditional abaya silhouette. It's cut on a heavier-body fabric than our fluid styles so the lapel holds its roll without interfacing, and it's usually worn fully open over daywear rather than closed. This is the fastest-growing style in our range among buyers targeting younger, fashion-forward customers who want abaya-adjacent coverage that reads as a going-out layer rather than traditional dress. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-abayas-coat-blazer-1", "Model wearing a structured blazer-style abaya with a tailored lapel"),
          placeholder("subcat-abayas-coat-blazer-2", "Close-up of blazer-style abaya lapel and collar construction"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Stone", hex: "#b8ada0" },
        ],
      },
      {
        slug: "front-open",
        name: "Front Open Abaya",
        shortDescription: "Functional button or snap-front closure the full length of the garment.",
        description:
          "Front open abayas differ from our general open-silhouette style by carrying a real, functional closure &mdash; a full-length row of snaps or buttons rather than an unclosed layering front &mdash; so the same garment can be worn fully closed, partially open, or as a layering piece depending on the customer's preference. This flexibility is the main reason distributors reorder it as a single SKU that serves multiple styling occasions instead of stocking separate closed and open styles. Closure hardware is available in tonal or contrast finishes for private label branding. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-abayas-front-open-1", "Model wearing a front-open abaya with a full-length snap closure"),
          placeholder("subcat-abayas-front-open-2", "Close-up of front-open abaya snap closure hardware detail"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Chocolate", hex: "#4a3728" },
        ],
      },
      {
        slug: "two-piece",
        name: "Two-Piece Abaya",
        shortDescription: "Coordinated top and skirt set styled and sold as a single abaya SKU.",
        description:
          "Two-piece abaya sets separate the garment into a coordinating top and skirt rather than one continuous dress, which gives customers independent sizing across the bust and waist that a one-piece cut can't offer. Buyers sell this as a single matched SKU rather than separates, with both pieces cut from the same fabric lot to guarantee an exact shade match. It's a strong fit for private label ranges targeting fit-conscious customers who've specifically asked for adjustable proportions. Sold as coordinated sets from 200 sets per color.",
        images: [
          placeholder("subcat-abayas-two-piece-1", "Model wearing a coordinated two-piece abaya top and skirt set"),
          placeholder("subcat-abayas-two-piece-2", "Close-up of two-piece abaya set seam and fabric match"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Taupe", hex: "#a08d78" },
        ],
      },
      {
        slug: "three-piece",
        name: "Three-Piece Abaya",
        shortDescription: "Top, skirt, and matching inner slip or hijab set sold as one coordinated SKU.",
        description:
          "Three-piece abaya sets add a matching inner slip or coordinating hijab to the two-piece top-and-skirt format, giving distributors a complete, ready-to-wear outfit to merchandise as a single gift-ready SKU rather than assembling separates at retail. This format sells strongest through our Eid and occasion-adjacent wholesale accounts, where a complete matched set justifies a higher basket value than separates. All three pieces are cut and dyed from the same fabric lot for guaranteed shade consistency. Sold as coordinated sets from 150 sets per color.",
        images: [
          placeholder("subcat-abayas-three-piece-1", "Model wearing a matching three-piece abaya, skirt, and hijab set"),
          placeholder("subcat-abayas-three-piece-2", "Close-up of three-piece abaya set fabric and coordinated finish"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Burgundy", hex: "#6d2130" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "embroidered",
        name: "Embroidered Abaya",
        shortDescription: "Hand or machine-placed embroidery on a heavier crepe base for occasion positioning.",
        description:
          "Embroidered abayas run on heavier crepe bases specifically because they hold hand-placed stonework and thread embroidery without the drape distorting around the stitched area, which is the defect buyers most often report from lower-cost embroidered competitors. Placement, thread color, and motif density are all fully customizable for private label buyers building a signature occasion line, and small-batch runs are supported for boutique and bridal-adjacent accounts. This is our highest-margin, lowest-competition abaya tier. Produced in small-batch runs from 50 units per design.",
        images: [
          placeholder("subcat-abayas-embroidered-1", "Model wearing an embroidered abaya with hand-placed stonework detail"),
          placeholder("subcat-abayas-embroidered-2", "Close-up of hand-placed embroidery and stonework on abaya fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Burgundy", hex: "#6d2130" },
          { name: "Emerald", hex: "#175f4c" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "everyday",
        name: "Everyday Abaya",
        shortDescription: "No-fuss daily-wear abaya on matte Nida, built for reorder volume over occasion styling.",
        description:
          "Everyday abayas strip the category back to what daily-wear customers actually reorder: matte Korean Nida with enough body to hold a clean line, concealed closures that won't snag under a handbag strap, and reinforced side-seam pockets that survive repeated use. There's no embellishment or dramatic silhouette here by design &mdash; this is the SKU distributors reorder every season without needing to refresh the design, which makes it the highest-volume, most predictable line in our abaya range. It's also the natural entry point for new private label accounts building their first abaya order. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-abayas-everyday-1", "Model wearing an everyday matte Nida abaya in a clean, simple silhouette"),
          placeholder("subcat-abayas-everyday-2", "Close-up of everyday abaya fabric and reinforced pocket seam"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Chocolate", hex: "#4a3728" },
          { name: "Olive", hex: "#6b6f52" },
          { name: "Stone", hex: "#b8ada0" },
        ],
      },
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
    subcategories: [
      {
        slug: "single-layer",
        name: "Single-Layer Niqab",
        shortDescription: "Lightweight single-panel veil suited to warmer climates and everyday wear.",
        description:
          "Single-layer niqabs use one lightweight chiffon panel, chosen for warmer climates and daily wear where breathability matters more than maximum opacity. It's the style most customers reach for as an everyday default, worn with either an abaya or separately over a hijab. Reinforced double-stitching at the tie attachment point is standard across our full niqab range, since tie failure from repeated daily removal is the most common defect in lower-cost alternatives. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-niqabs-single-layer-1", "Model wearing a single-layer chiffon niqab"),
          placeholder("subcat-niqabs-single-layer-2", "Close-up of single-layer niqab fabric and tie stitching"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "two-layer",
        name: "Two-Layer Niqab",
        shortDescription: "Adds a second, less sheer panel for buyers whose markets expect fuller coverage.",
        description:
          "Two-layer niqabs add a second fabric panel behind the outer layer, reducing see-through visibility for markets and customers who expect fuller coverage than a single sheer layer provides. The second layer is cut slightly narrower than the outer so it doesn't add visible bulk at the tie point. This is our standard recommendation for buyers unsure which coverage level their market expects, since it satisfies stricter coverage expectations without the added weight of a third layer. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-niqabs-two-layer-1", "Model wearing a two-layer niqab with reduced sheerness"),
          placeholder("subcat-niqabs-two-layer-2", "Close-up of two-layer niqab construction showing both fabric panels"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Chocolate", hex: "#4a3728" },
        ],
      },
      {
        slug: "three-layer",
        name: "Three-Layer Niqab",
        shortDescription: "Maximum-opacity triple-panel construction for the fullest coverage in our range.",
        description:
          "Three-layer niqabs stack a third fabric panel behind the standard two-layer construction, giving the fullest opacity we produce for markets with the strictest coverage expectations. Each layer is graded slightly narrower than the one in front of it so the tie point doesn't bunch under the combined thickness. It's a lower-volume, made-to-order style compared to our single and two-layer lines, given the more specific market it serves. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-niqabs-three-layer-1", "Model wearing a three-layer niqab for maximum coverage"),
          placeholder("subcat-niqabs-three-layer-2", "Close-up of three-layer niqab construction showing all fabric panels"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "tie-back",
        name: "Tie-Back Niqab",
        shortDescription: "Standard fabric tie closure at the back of the head, fully adjustable for fit.",
        description:
          "Tie-back niqabs close with a fabric tie at the back of the head rather than elastic, giving a fully adjustable fit and the option to tie looser or tighter depending on what's worn underneath. This is our most common closure type across the whole niqab range, and the one we recommend for buyers prioritizing fit flexibility over the quicker on/off of an elastic or pull-on style. Reinforced double-stitching at both tie attachment points is standard. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-niqabs-tie-back-1", "Close-up of tie-back niqab closure at the back of the head"),
          placeholder("subcat-niqabs-tie-back-2", "Model wearing a tie-back niqab with adjustable fabric ties"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "pull-on",
        name: "Pull-On Niqab",
        shortDescription: "Elastic-back construction for quick on/off without tying.",
        description:
          "Pull-on niqabs use an elastic back panel instead of fabric ties, letting the customer put it on and take it off in one motion without tying anything. It's the faster, more convenient option for customers who remove and replace their niqab frequently through the day, at the tradeoff of slightly less adjustability than a tie-back style. Elastic is fabric-covered rather than exposed to avoid skin irritation with extended wear. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-niqabs-pull-on-1", "Model wearing a pull-on niqab with an elastic back closure"),
          placeholder("subcat-niqabs-pull-on-2", "Close-up of fabric-covered elastic on a pull-on niqab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "jersey",
        name: "Jersey Niqab",
        shortDescription: "Stretch jersey construction for a softer fit than woven chiffon.",
        description:
          "Jersey niqabs use a stretch knit rather than woven chiffon, giving a softer fit against the skin and a closer, more secure hold without needing as tight a tie. It's a strong option for customers who find woven chiffon niqabs shift or slip during active days. The tradeoff is less opacity per layer than a woven fabric of similar weight, so most buyers pair it with our two-layer construction rather than ordering it single-layer. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-niqabs-jersey-1", "Model wearing a soft stretch jersey niqab"),
          placeholder("subcat-niqabs-jersey-2", "Close-up of jersey niqab fabric texture"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "chiffon",
        name: "Chiffon Niqab",
        shortDescription: "Our standard woven fabric, cut from the same library as our chiffon hijabs.",
        description:
          "Chiffon niqabs are cut from the same fabric library as our chiffon hijabs, so buyers stocking both categories can match shades exactly across a single order rather than sourcing niqab fabric separately. The matte weave holds structure at the tie point better than a knit, keeping the veil sitting flat against the face rather than clinging. It's the default fabric across our single, two, and three-layer constructions unless a buyer specifies otherwise. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-niqabs-chiffon-1", "Model wearing a chiffon niqab with a structured, flat fit"),
          placeholder("subcat-niqabs-chiffon-2", "Close-up of matte chiffon niqab fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Chocolate", hex: "#4a3728" },
        ],
      },
      {
        slug: "cotton",
        name: "Cotton Niqab",
        shortDescription: "Breathable cotton weave for hot-climate daily wear.",
        description:
          "Cotton niqabs trade chiffon's crisp structure for a more breathable natural-fiber weave, aimed at hot, humid climates where synthetic fabric against the face for extended periods becomes a genuine comfort complaint. It's a natural-fiber alternative for buyers whose customers specifically ask for cotton, matching the same positioning as our cotton voile hijab. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-niqabs-cotton-1", "Model wearing a breathable cotton niqab"),
          placeholder("subcat-niqabs-cotton-2", "Close-up of cotton niqab fabric showing its breathable weave"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "long",
        name: "Long Niqab",
        shortDescription: "Extended length falling well past the chest for fuller upper-body coverage.",
        description:
          "Long niqabs extend well past the chest rather than ending at the collarbone, for customers who want the veil itself to provide additional upper-body coverage rather than relying entirely on a separate abaya or khimar underneath. The added length is graded into the pattern so it doesn't add bulk or pull at the tie point. It's most often ordered by buyers whose customers layer it under an open-front abaya. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-niqabs-long-1", "Model wearing a long niqab extending past the chest"),
          placeholder("subcat-niqabs-long-2", "Close-up of long niqab fabric fall and length"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "half",
        name: "Half Niqab",
        shortDescription: "Shorter, minimal-coverage veil ending just below the nose.",
        description:
          "Half niqabs are cut shorter than our standard length, ending just below the nose rather than covering down to the chest, for customers who want minimal, lighter coverage or who primarily wear it for brief errands rather than extended wear. It's the lightest-weight, most breathable style in our niqab range, and the fastest to put on and remove given its smaller panel size. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-niqabs-half-1", "Model wearing a half niqab with minimal, shorter coverage"),
          placeholder("subcat-niqabs-half-2", "Close-up of half niqab fabric and shorter panel length"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
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
    subcategories: [
      {
        slug: "one-piece",
        name: "One-Piece Prayer Dress",
        shortDescription: "Single continuous prayer dress with elasticated cuffs and waist for full-range movement.",
        description:
          "One-piece prayer dresses are cut as a single continuous garment with elasticated cuffs and a soft waistband, built to move through a full prayer cycle without pulling tight at the shoulders or riding up at the hem. It's the simplest construction in the category and the fastest to put on before prayer, which is the main reason distributors reorder it more than any other prayer wear cut. Fabric is lightweight and breathable by design rather than borrowed from our daywear abaya line. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-prayer-one-piece-1", "Model wearing a one-piece prayer dress with elasticated cuffs"),
          placeholder("subcat-prayer-one-piece-2", "Close-up of one-piece prayer dress fabric and elastic waistband"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Grey", hex: "#8a8a8a" },
        ],
      },
      {
        slug: "two-piece",
        name: "Two-Piece Prayer Set",
        shortDescription: "Top and skirt set — the highest-repeat style in this category, especially around Ramadan.",
        description:
          "Two-piece prayer sets separate the garment into a top and skirt, our highest-repeat style in this category, particularly around Ramadan ordering cycles. The set packs down small enough to sell in an individual drawstring travel bag, a packaging detail several of our accounts specifically request for gifting and retail displays. Both pieces are cut from the same fabric lot for a guaranteed shade match. Sold as coordinated sets from 300 sets per color.",
        images: [
          placeholder("subcat-prayer-two-piece-1", "Model wearing a two-piece prayer set top and skirt"),
          placeholder("subcat-prayer-two-piece-2", "Close-up of two-piece prayer set packed in a drawstring travel bag"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Lavender", hex: "#c9b8e0" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
      {
        slug: "three-piece",
        name: "Three-Piece Prayer Set",
        shortDescription: "Top, skirt, and matching prayer hijab sold as one complete, coordinated set.",
        description:
          "Three-piece prayer sets add a matching prayer hijab to the standard top-and-skirt format, giving a complete, gift-ready outfit rather than requiring the customer to source a separate hijab. All three pieces are cut and dyed from the same fabric lot for guaranteed shade consistency. It's the format that performs strongest through our Ramadan and Eid gifting wholesale accounts. Sold as coordinated sets from 200 sets per color.",
        images: [
          placeholder("subcat-prayer-three-piece-1", "Model wearing a complete three-piece prayer set with matching hijab"),
          placeholder("subcat-prayer-three-piece-2", "Close-up of three-piece prayer set fabric and coordinated finish"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "instant-hijab",
        name: "Instant Prayer Hijab",
        shortDescription: "Pull-on prayer hijab with no pinning, designed to be thrown on right before prayer.",
        description:
          "Instant prayer hijabs bring our pull-on, no-pin construction to prayer wear specifically, letting a customer cover up in seconds right before prayer rather than styling a wrap under time pressure. It's sold both as a standalone accessory for customers who already own a prayer dress, and bundled into our three-piece prayer sets. Fabric is the same lightweight, breathable base as the rest of our prayer wear line. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-prayer-instant-hijab-1", "Model wearing an instant pull-on prayer hijab"),
          placeholder("subcat-prayer-instant-hijab-2", "Close-up of instant prayer hijab construction"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Grey", hex: "#8a8a8a" },
        ],
      },
      {
        slug: "khimar",
        name: "Prayer Khimar",
        shortDescription: "Cape-style khimar cut for prayer, covering the head and shoulders in one pull-on piece.",
        description:
          "Prayer khimars adapt our cape-style khimar construction to prayer wear, covering the head, shoulders, and upper torso in one pull-on piece rather than requiring a separate hijab layered over a prayer top. It's a strong alternative for customers who find a separate top-and-hijab combination fiddly to keep in place through a full prayer cycle. Fabric is lightweight and breathable, matching the rest of our prayer wear range rather than our heavier daywear khimar fabric. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-prayer-khimar-1", "Model wearing a cape-style prayer khimar covering the shoulders"),
          placeholder("subcat-prayer-khimar-2", "Close-up of prayer khimar fabric and construction"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Grey", hex: "#8a8a8a" },
        ],
      },
      {
        slug: "travel-set",
        name: "Travel Prayer Set",
        shortDescription: "Compact folding set packed in its own drawstring pouch for travel and daily commuting.",
        description:
          "Travel prayer sets are cut from a lighter, more compressible fabric specifically so the set folds down small enough to carry daily rather than only for occasional use, packaged in its own drawstring pouch. This is the SKU distributors sell hardest to commuting professionals and frequent travelers who pray away from home multiple times a day. The pouch is available in branded private label finishes for retail gifting. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-prayer-travel-set-1", "Model holding a compact travel prayer set in its drawstring pouch"),
          placeholder("subcat-prayer-travel-set-2", "Close-up of travel prayer set fabric folded compactly"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Grey", hex: "#8a8a8a" },
          { name: "Sky Blue", hex: "#a9cce3" },
        ],
      },
      {
        slug: "kids-set",
        name: "Kids Prayer Set",
        shortDescription: "Sized-down prayer set in the same lightweight fabric and construction as our adult range.",
        description:
          "Kids prayer sets scale our standard two-piece construction down to a junior size range, addressing a gap several distributors have flagged for family and gifting bundles that currently stop at adult sizing. Fabric, elastic placement, and finishing match our adult prayer wear line exactly, just graded to a smaller pattern rather than simplified. It's most often ordered alongside an adult set for a matching mother-daughter gifting bundle. Offered from 200 sets per color.",
        images: [
          placeholder("subcat-prayer-kids-set-1", "Close-up of kids prayer set fabric and construction detail"),
          placeholder("subcat-prayer-kids-set-2", "Close-up of kids prayer set stitching and elastic waistband"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "cotton",
        name: "Cotton Prayer Wear",
        shortDescription: "Breathable cotton base for buyers whose customers specifically ask for natural fiber.",
        description:
          "Cotton prayer wear swaps our standard lightweight synthetic blend for a breathable cotton base, for buyers whose customers specifically ask for natural fiber against the skin during prayer. It trades a small amount of the compressibility our travel-set fabric offers for a softer, more breathable hand-feel over extended wear. Available across our one-piece, two-piece, and three-piece constructions. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-prayer-cotton-1", "Model wearing a breathable cotton prayer dress"),
          placeholder("subcat-prayer-cotton-2", "Close-up of cotton prayer wear fabric"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Grey", hex: "#8a8a8a" },
        ],
      },
      {
        slug: "jersey",
        name: "Jersey Prayer Wear",
        shortDescription: "Stretch jersey construction for a softer, more forgiving fit during movement.",
        description:
          "Jersey prayer wear uses a stretch knit base, giving a softer, more forgiving fit through the shoulders and hips during the full range of motion in prayer compared to our standard woven fabric. The added stretch also means one size range comfortably fits a wider body-shape variation than a woven cut. It's a strong option for buyers whose customers have specifically asked for more give in the fabric. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-prayer-jersey-1", "Model wearing a stretch jersey prayer set"),
          placeholder("subcat-prayer-jersey-2", "Close-up of jersey prayer wear fabric texture"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Lavender", hex: "#c9b8e0" },
        ],
      },
      {
        slug: "embroidered",
        name: "Embroidered Prayer Wear",
        shortDescription: "Light embroidery detail at the neckline or hem for a premium gifting-tier prayer set.",
        description:
          "Embroidered prayer wear adds a restrained embroidery detail at the neckline, cuff, or hem, positioned as a premium gifting-tier option above our standard plain prayer sets rather than a heavily embellished occasion piece. The embroidery is placed to avoid any seam or stress point that flexes during prayer movement, so it doesn't distort or fray with regular use. It's the style most often chosen for Ramadan and Eid gift sets sold in branded packaging. Offered from 200 sets per color.",
        images: [
          placeholder("subcat-prayer-embroidered-1", "Model wearing an embroidered prayer set with neckline detail"),
          placeholder("subcat-prayer-embroidered-2", "Close-up of embroidery detail on prayer wear fabric"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
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
    subcategories: [
      {
        slug: "one-piece",
        name: "One-Piece Jilbab",
        shortDescription: "Single continuous robe rather than a separate top-and-skirt construction.",
        description:
          "One-piece jilbabs are cut as a single continuous robe rather than a separate top and skirt, giving the simplest, fastest construction in the category and the closest silhouette to a loose-cut abaya. It's the entry-point cut for distributors new to jilbab as a category, since one size block covers the whole garment rather than coordinating two separate patterns. Reinforced double-stitched seams at the underarm and hem hold up to daily wear and repeated washing. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-jilbabs-one-piece-1", "Model wearing a one-piece jilbab in a single continuous cut"),
          placeholder("subcat-jilbabs-one-piece-2", "Close-up of one-piece jilbab fabric and seam construction"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Chocolate", hex: "#4a3728" },
        ],
      },
      {
        slug: "two-piece",
        name: "Two-Piece Jilbab",
        shortDescription: "Separate top and full-length skirt, the classic jilbab construction our buyers order most.",
        description:
          "Two-piece jilbabs separate the garment into a top and a full-length skirt, the construction most of our wholesale buyers mean by default when they order a jilbab rather than an abaya. Independent top-and-skirt sizing fits a wider range of body proportions than a one-piece cut, and both pieces are cut from the same fabric lot for a guaranteed shade match. This is our highest-volume jilbab construction, sold as coordinated sets. Offered from 300 sets per color.",
        images: [
          placeholder("subcat-jilbabs-two-piece-1", "Model wearing a two-piece jilbab top and full-length skirt set"),
          placeholder("subcat-jilbabs-two-piece-2", "Close-up of two-piece jilbab set seam and fabric match"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Olive", hex: "#6b6f52" },
          { name: "Stone", hex: "#b8ada0" },
        ],
      },
      {
        slug: "three-piece",
        name: "Three-Piece Jilbab",
        shortDescription: "Top, skirt, and matching inner slip or hijab sold as one coordinated set.",
        description:
          "Three-piece jilbab sets add a matching inner slip or coordinating hijab to the standard top-and-skirt format, giving distributors a complete, ready-to-wear outfit to merchandise as a single SKU rather than assembling separates at retail. All three pieces are cut and dyed from the same fabric lot for guaranteed shade consistency across the set. It's the format that performs best through Eid and occasion-adjacent wholesale accounts. Sold as coordinated sets from 200 sets per color.",
        images: [
          placeholder("subcat-jilbabs-three-piece-1", "Model wearing a matching three-piece jilbab, skirt, and hijab set"),
          placeholder("subcat-jilbabs-three-piece-2", "Close-up of three-piece jilbab set fabric and coordinated finish"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "pull-on",
        name: "Pull-On Jilbab",
        shortDescription: "No-closure, pull-over construction for the fastest possible wear.",
        description:
          "Pull-on jilbabs use a wide head or neck opening rather than a zip, snap, or button closure, so the whole garment goes on in one motion. Removing the closure hardware also removes the most common point of wear-related failure on a daily-use garment. It's the style buyers reorder most heavily for value-tier and back-to-school-adjacent ranges where cost and simplicity matter more than styling detail. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-jilbabs-pull-on-1", "Model wearing a pull-on jilbab with no front closure"),
          placeholder("subcat-jilbabs-pull-on-2", "Close-up of pull-on jilbab neckline construction"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Chocolate", hex: "#4a3728" },
          { name: "Olive", hex: "#6b6f52" },
        ],
      },
      {
        slug: "hooded",
        name: "Hooded Jilbab",
        shortDescription: "Built-in hood for an additional, integrated head-covering option.",
        description:
          "Hooded jilbabs build an integrated hood into the neckline, giving customers an additional head-covering option layered over a separate hijab, or a quick, minimal cover-up option on its own for short trips. The hood is cut generously enough to fit over a styled hijab underneath without pulling the fabric taut. It's a strong fit for buyers targeting outdoor, travel, or colder-climate markets where an extra layer of coverage is a practical selling point rather than a styling one. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-jilbabs-hooded-1", "Model wearing a hooded jilbab with the hood down over the shoulders"),
          placeholder("subcat-jilbabs-hooded-2", "Close-up of hooded jilbab hood construction and neckline"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "full-length",
        name: "Full-Length Jilbab",
        shortDescription: "Maximum-length cut reaching the floor for buyers whose markets expect full coverage.",
        description:
          "Full-length jilbabs are cut to a floor-length hem rather than our standard ankle-grazing length, for markets and customer segments that specifically expect maximum coverage. The extra length is accounted for in the pattern rather than simply left unhemmed, so proportions through the body and sleeves stay consistent with our standard cut. It's a straightforward upsell SKU for distributors who've had customers ask for extra length on our standard jilbabs. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-jilbabs-full-length-1", "Model wearing a full-length, floor-grazing jilbab"),
          placeholder("subcat-jilbabs-full-length-2", "Close-up of full-length jilbab hem and fabric fall"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Stone", hex: "#b8ada0" },
        ],
      },
      {
        slug: "jersey",
        name: "Jersey Jilbab",
        shortDescription: "Stretch jersey construction for a softer, more casual jilbab than our Nida and crepe lines.",
        description:
          "Jersey jilbabs swap our standard Nida and crepe bases for a stretch jersey knit, giving a softer hand-feel and easier pull-on fit for customers who want the jilbab silhouette with the ease of casual jersey wear. The added stretch is also more forgiving across a wider size range than a woven fabric. It's tracking well with younger, casual-wear-focused customer segments who find our structured Nida jilbabs too formal for daily wear. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-jilbabs-jersey-1", "Model wearing a soft stretch jersey jilbab"),
          placeholder("subcat-jilbabs-jersey-2", "Close-up of jersey jilbab fabric texture"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal Heather", hex: "#5c5c5c" },
          { name: "Navy", hex: "#202a44" },
          { name: "Olive", hex: "#6b6f52" },
        ],
      },
      {
        slug: "chiffon",
        name: "Chiffon Jilbab",
        shortDescription: "Lightweight chiffon base for a flowing, lightweight jilbab in warmer climates.",
        description:
          "Chiffon jilbabs use a lightweight, flowing chiffon base rather than our structured Nida or crepe, suited to hot-climate markets where our standard jilbab weight runs too warm for daily wear. The tradeoff is a less structured silhouette than Nida, so this style typically requires an underlayer or slip for full opacity depending on the shade. It's a natural pairing for buyers who already stock our chiffon hijab range and want a matching lightweight jilbab. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-jilbabs-chiffon-1", "Model wearing a lightweight chiffon jilbab with a flowing drape"),
          placeholder("subcat-jilbabs-chiffon-2", "Close-up of chiffon jilbab fabric showing its lightweight weave"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "sports",
        name: "Sports Jilbab",
        shortDescription: "Technical stretch knit jilbab built for movement, layered over activewear.",
        description:
          "Sports jilbabs are cut on a technical stretch knit rather than our standard Nida or crepe, built to be worn over activewear for sport, exercise, and outdoor activity without restricting movement. The knit is selected for moisture management and stretch recovery through repeated wear and washing, the same standard we hold our dedicated sports hijab fabric to. It's a growing crossover category between our jilbab and sports hijab lines for buyers serving an active, modest-fashion customer base. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-jilbabs-sports-1", "Model wearing a sports jilbab over activewear"),
          placeholder("subcat-jilbabs-sports-2", "Close-up of technical stretch knit fabric used for sports jilbabs"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "nursing-friendly",
        name: "Nursing-Friendly Jilbab",
        shortDescription: "Discreet nursing access panel built into the bodice for new and breastfeeding mothers.",
        description:
          "Nursing-friendly jilbabs build a discreet, concealed access panel into the bodice, positioned and finished so it isn't visible when closed and doesn't compromise the garment's coverage when in use. This is a specialty SKU distributors stock specifically for new-mother and maternity-adjacent customer segments, a need we've heard flagged repeatedly by buyers whose standard jilbab range doesn't accommodate it. Panel placement and closure type (snap or concealed zip) are customizable for private label orders. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-jilbabs-nursing-friendly-1", "Model wearing a nursing-friendly jilbab with a concealed access panel"),
          placeholder("subcat-jilbabs-nursing-friendly-2", "Close-up of concealed nursing access panel construction on a jilbab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
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
    subcategories: [
      {
        slug: "tube",
        name: "Tube Cap",
        shortDescription: "Seamless tube construction for a smooth profile under thinner outer hijab fabrics.",
        description:
          "Tube caps are knit as one continuous seamless tube rather than a fitted cap shape, which removes the one detail most likely to show through a thin chiffon or georgette outer layer: a seamed cap edge printing a visible line across the forehead or crown. Distributors sell it as the complement SKU to lightweight, sheer hijab fabrics specifically because of this smoother profile. It stretches to fit a wide head-size range with no adjustment needed, which keeps SKU count down for retailers stocking a single size. Sold in bulk multi-packs from 500 pieces per color.",
        images: [
          placeholder("subcat-innercaps-tube-1", "Rows of seamless tube-construction inner caps"),
          placeholder("subcat-innercaps-tube-2", "Model wearing a seamless tube inner cap under a hijab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Beige", hex: "#e3d3b8" },
          { name: "Brown", hex: "#5c4433" },
          { name: "Grey", hex: "#8a8a8a" },
          { name: "White", hex: "#f5f3ee" },
        ],
      },
      {
        slug: "ninja",
        name: "Ninja Cap",
        shortDescription: "Extended coverage down the neck and across the shoulders for full-wrap modesty underneath any outer layer.",
        description:
          "Ninja caps extend coverage past the hairline and jaw down across the neck and upper shoulders in one piece, giving full-wrap modesty underneath any outer hijab, khimar, or niqab without needing a separate neck cover. It's the style distributors stock for customers who specifically ask for maximum coverage, particularly in markets where a visible neckline under a lighter outer fabric is a common complaint. The wider shoulder panel uses more fabric than a standard cap, which is reflected in a modest per-unit cost increase over our tube and cotton lines. Sold in bulk multi-packs from 500 pieces per color.",
        images: [
          placeholder("subcat-innercaps-ninja-1", "Model wearing a full-coverage ninja-style inner cap extending over the neck and shoulders"),
          placeholder("subcat-innercaps-ninja-2", "Close-up of ninja cap fabric and neck coverage panel"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Brown", hex: "#5c4433" },
          { name: "Grey", hex: "#8a8a8a" },
        ],
      },
      {
        slug: "scrunchie-volumising",
        name: "Scrunchie / Volumising Cap",
        shortDescription: "Built-in volume at the crown for a fuller, styled silhouette under the outer hijab.",
        description:
          "Scrunchie and volumising caps build a gathered, scrunchie-style panel or padded crown into the cap itself, giving customers height and volume at the crown without a separate hair bun or clip-in volumizer underneath. This is the fastest-growing style in our inner cap range, driven almost entirely by short-form video tutorials showing the \"no-bun volume\" styling technique. It pairs naturally with our instant hijab and luxury hijab ranges, where a more sculpted silhouette is part of the sell. Sold in bulk multi-packs from 300 pieces per color.",
        images: [
          placeholder("subcat-innercaps-scrunchie-volumising-1", "Close-up of a volumising inner cap with a gathered crown panel"),
          placeholder("subcat-innercaps-scrunchie-volumising-2", "Rows of scrunchie-style volumising inner caps"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Beige", hex: "#e3d3b8" },
          { name: "Brown", hex: "#5c4433" },
        ],
      },
      {
        slug: "adjustable",
        name: "Adjustable Cap",
        shortDescription: "Drawstring or elastic-back adjustment for a customizable fit across head sizes.",
        description:
          "Adjustable caps add a drawstring or elastic toggle at the back rather than relying on stretch fabric alone to fit a range of head sizes, which is the detail buyers ask for specifically when stocking for a customer base with a wider-than-average size range, including youth and plus-size lines. The adjustment mechanism sits flat against the head so it doesn't print through a thin outer fabric the way a knot or clip would. It's a practical, low-return-rate SKU for distributors who've had size-related returns on stretch-only caps. Sold in bulk multi-packs from 500 pieces per color.",
        images: [
          placeholder("subcat-innercaps-adjustable-1", "Rows of adjustable inner caps with back drawstring detail"),
          placeholder("subcat-innercaps-adjustable-2", "Model wearing an adjustable inner cap fitted at the back"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Beige", hex: "#e3d3b8" },
          { name: "Grey", hex: "#8a8a8a" },
          { name: "White", hex: "#f5f3ee" },
        ],
      },
      {
        slug: "band",
        name: "Band Cap",
        shortDescription: "Minimal-coverage stretch headband style for buyers layering their own separate hair cover.",
        description:
          "Band caps cover only the hairline and forehead in a wide stretch band rather than the full crown, designed for customers who already wear a separate volumizer or bun cover and just need a clean, non-slip hairline edge under their outer hijab. It's the lowest-fabric, lowest-cost SKU in our inner cap range, which makes it a strong impulse-add or bundle item at checkout rather than a standalone hero product. Distributors typically stock it alongside our scrunchie/volumising cap as a two-piece styling system. Sold in bulk multi-packs from 500 pieces per color.",
        images: [
          placeholder("subcat-innercaps-band-1", "Model wearing a minimal stretch band cap at the hairline"),
          placeholder("subcat-innercaps-band-2", "Close-up of stretch band cap fabric and hairline edge"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Beige", hex: "#e3d3b8" },
        ],
      },
      {
        slug: "multi-wear",
        name: "4-Coloured Multi-Wear Cap",
        shortDescription: "Four color-blocked panels on one cap, giving distributors four coordinating looks from a single SKU.",
        description:
          "Multi-wear caps piece together four coordinating fabric panels on a single cap, so the same SKU can be styled to peek out from underneath an outer hijab in whichever panel color best matches that day's outfit, rather than a customer needing four separate solid caps. This is a merchandising-driven SKU we developed specifically for retailers who wanted to reduce shelf-facing count without reducing perceived color choice. Panel colorways are fully customizable for private label buyers who want to match their own core palette. Sold in bulk multi-packs from 300 pieces per set.",
        images: [
          placeholder("subcat-innercaps-multi-wear-1", "Close-up of a four-panel color-blocked multi-wear inner cap"),
          placeholder("subcat-innercaps-multi-wear-2", "Rows of multi-wear inner caps in coordinating color panels"),
        ],
        colors: [
          { name: "Black / Nude / Grey / White", hex: "#1a1a1a" },
          { name: "Brown / Beige / Nude / Black", hex: "#5c4433" },
        ],
      },
      {
        slug: "cotton",
        name: "Cotton Cap",
        shortDescription: "Combed cotton with a non-slip grip band at the hairline for all-day breathable wear.",
        description:
          "Cotton caps are our reference underscarf, built on breathable combed cotton with a non-slip grip band woven into the hairline to keep the cap in place through a full day of wear without repositioning. This is the detail that actually determines repeat purchase on an inner cap: one that slides under a hijab by afternoon gets returned or simply not reordered, regardless of price. It's the style we'd recommend as the default stocking SKU for any new distributor entering this category. Sold in bulk multi-packs from 500 pieces per color across an extended neutral range.",
        images: [
          placeholder("subcat-innercaps-cotton-1", "Rows of combed cotton inner caps in a neutral color range"),
          placeholder("subcat-innercaps-cotton-2", "Model wearing a combed cotton inner cap"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Beige", hex: "#e3d3b8" },
          { name: "Brown", hex: "#5c4433" },
          { name: "Grey", hex: "#8a8a8a" },
          { name: "White", hex: "#f5f3ee" },
        ],
      },
      {
        slug: "jersey",
        name: "Jersey Cap",
        shortDescription: "Stretch jersey construction for a softer, more casual pull-on fit than woven cotton.",
        description:
          "Jersey caps swap our standard combed cotton for a stretch jersey knit, giving a softer hand-feel and an easier pull-on fit for customers who find woven cotton caps too structured for daily, casual wear. The added stretch also makes it more forgiving across a wider head-size range without needing the drawstring adjustment our adjustable cap relies on. It's the style that pairs most naturally with our jersey and modal hijab ranges for buyers building a coordinated casual-wear program. Sold in bulk multi-packs from 500 pieces per color.",
        images: [
          placeholder("subcat-innercaps-jersey-1", "Model wearing a soft stretch jersey inner cap"),
          placeholder("subcat-innercaps-jersey-2", "Close-up of stretch jersey inner cap fabric texture"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Grey", hex: "#8a8a8a" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "tie-back",
        name: "Tie-Back Cap",
        shortDescription: "Adjustable fabric tie closure at the nape for a fully customizable, no-elastic fit.",
        description:
          "Tie-back caps close with a fabric tie at the nape rather than elastic or a drawstring toggle, giving a fit that's fully customizable and comfortable for extended daily wear, including for customers who find elastic bands irritating against the skin over a full day. The tie construction is the same approach used on our turban-style specialty cap, adapted here to a simpler, everyday base fabric. It's a strong option for sensitive-skin and all-day-wear customer segments that buyers flag as underserved by standard elastic caps. Sold in bulk multi-packs from 300 pieces per color.",
        images: [
          placeholder("subcat-innercaps-tie-back-1", "Close-up of tie-back inner cap closure at the nape"),
          placeholder("subcat-innercaps-tie-back-2", "Rows of tie-back inner caps with fabric tie closures"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Beige", hex: "#e3d3b8" },
        ],
      },
      {
        slug: "lace",
        name: "Lace Cap",
        shortDescription: "Decorative lace trim at the front edge for bridal and occasion-adjacent styling.",
        description:
          "Lace caps add a decorative lace trim along the front hairline edge, positioned for customers who want a visible, feminine detail peeking out from under a loosely styled outer hijab rather than a purely functional cap. It's the style our distributors reorder most heavily ahead of wedding and Eid season, often bundled with our bridal hijab and luxury hijab ranges for a coordinated occasion look. The lace trim is finished flat against the base cap so it doesn't add bulk under thinner outer fabrics. Sold in bulk multi-packs from 200 pieces per color.",
        images: [
          placeholder("subcat-innercaps-lace-1", "Close-up of decorative lace trim on an inner cap hairline edge"),
          placeholder("subcat-innercaps-lace-2", "Model wearing a lace-trim inner cap peeking out from under a hijab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
      {
        slug: "full-coverage",
        name: "Full Coverage Cap",
        shortDescription: "Extended coverage down to the base of the neck for buyers whose markets expect fuller coverage.",
        description:
          "Full coverage caps extend a few centimeters past the standard cap line down to the base of the neck, without going as far as our ninja cap's shoulder panel, for markets and customer segments that expect fuller coverage than a standard crown-and-hairline cap provides. It's a middle-ground SKU between our standard cotton cap and the full ninja cap, letting distributors offer a graduated coverage range rather than jumping straight from minimal to maximum. Fabric and construction otherwise match our combed cotton cap line. Sold in bulk multi-packs from 400 pieces per color.",
        images: [
          placeholder("subcat-innercaps-full-coverage-1", "Model wearing a full coverage inner cap extending to the base of the neck"),
          placeholder("subcat-innercaps-full-coverage-2", "Close-up of full coverage inner cap neck extension panel"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Brown", hex: "#5c4433" },
          { name: "Grey", hex: "#8a8a8a" },
        ],
      },
      {
        slug: "cross-back",
        name: "Cross-Back Cap",
        shortDescription: "Crossover back panel doubling as a standalone light underscarf as well as a base layer.",
        description:
          "Cross-back caps add a crossover front-and-back panel construction, letting the same piece function as a standalone light underscarf on its own or as a base layer underneath a heavier outer hijab &mdash; a dual-purpose SKU that serves two use cases from one product line rather than requiring separate inventory for each. The crossed panels also distribute tension more evenly across the back of the head than a single elastic band, which buyers report as more comfortable for extended wear. Sold in bulk multi-packs from 300 pieces per color.",
        images: [
          placeholder("subcat-innercaps-cross-back-1", "Close-up of crossover back panel construction on an inner cap"),
          placeholder("subcat-innercaps-cross-back-2", "Model wearing a cross-back inner cap as a standalone light underscarf"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Beige", hex: "#e3d3b8" },
          { name: "Grey", hex: "#8a8a8a" },
        ],
      },
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
    subcategories: [
      {
        slug: "chiffon",
        name: "Chiffon Instant Hijab",
        shortDescription: "Our classic pull-on construction on matte chiffon, sewn to a pre-shaped drape.",
        description:
          "Chiffon instant hijabs are the reference style in this category: a matte chiffon outer shell with the underscarf cap sewn directly in, pre-shaped so the drape falls the same way every time without pins or practice. Chiffon holds a crisper, more structured fold than jersey-based instant styles, which is why it's the version most private label ranges lead with for a polished, retail-ready first impression. It's also the easiest base fabric to print and recolor consistently at volume for buyers building a wider instant hijab range. Offered from 500 pieces per color.",
        images: [
          placeholder("subcat-instant-chiffon-1", "Model wearing a chiffon instant hijab with a pre-shaped drape"),
          placeholder("subcat-instant-chiffon-2", "Close-up of chiffon instant hijab construction and attached underscarf"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "jersey",
        name: "Jersey Instant Hijab",
        shortDescription: "Stretch jersey base for a softer, more casual pull-on than the chiffon standard.",
        description:
          "Jersey instant hijabs replace the chiffon shell with a stretch jersey knit, trading chiffon's crisp structure for a softer, more casual finish suited to everyday and athleisure-adjacent ranges. The stretch also makes it more forgiving to pull on and adjust than a woven fabric, which buyers targeting younger or first-time hijab-wearing customers tend to prefer. It reorders strongest alongside our jersey and modal hijab lines for buyers building a coordinated casual program. Offered from 500 pieces per color.",
        images: [
          placeholder("subcat-instant-jersey-1", "Model wearing a jersey instant hijab in a relaxed, casual style"),
          placeholder("subcat-instant-jersey-2", "Close-up of stretch jersey instant hijab fabric and construction"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal Heather", hex: "#5c5c5c" },
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
      {
        slug: "pre-stitched",
        name: "Pre-Stitched Hijab",
        shortDescription: "Fully pre-sewn shape with no folding or draping required at the point of wear.",
        description:
          "Pre-stitched hijabs take the instant category's core idea furthest: the entire outer shape, pleating, and fall are stitched into the garment at the factory, so there's no folding, tucking, or draping technique for the customer to get right at all. This is the style we recommend for gifting and first-time-buyer SKUs specifically because it removes user error from the equation entirely. Construction is more labor-intensive than a simple pull-on tube, which is reflected in a moderate per-unit cost increase over our standard chiffon instant line. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-instant-pre-stitched-1", "Model wearing a fully pre-stitched hijab with no draping required"),
          placeholder("subcat-instant-pre-stitched-2", "Close-up of pre-stitched hijab construction showing built-in pleating"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "modal",
        name: "Modal Instant Hijab",
        shortDescription: "Soft modal-blend shell for a natural-fiber instant hijab with a matte, low-sheen finish.",
        description:
          "Modal instant hijabs use our modal-cotton blend in place of chiffon, aimed at buyers positioning a natural-fiber narrative even within the fast-fashion instant hijab category. The modal shell holds shape well through the attached-cap construction without needing the fabric to carry structure on its own, and it gives a noticeably softer hand-feel against the skin than chiffon over a full day of wear. It's a strong step-up SKU for buyers building a good-better-best instant hijab range. Offered from 500 pieces per color.",
        images: [
          placeholder("subcat-instant-modal-1", "Model wearing a soft modal instant hijab with a matte finish"),
          placeholder("subcat-instant-modal-2", "Close-up of modal instant hijab fabric and attached cap construction"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Heather Grey", hex: "#8a8a8a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Blush", hex: "#f2c4c4" },
        ],
      },
      {
        slug: "crinkle",
        name: "Crinkle Instant Hijab",
        shortDescription: "Self-textured crinkle finish for volume and movement in a pull-on construction.",
        description:
          "Crinkle instant hijabs bring our heat-set crinkle texturing into the pull-on category, giving visible volume and movement without asking the customer to style or crease the fabric themselves. Because the texture is permanent rather than pressed, it survives machine washing without needing to be re-ironed between wears, which is the same durability advantage our standalone crinkle hijab has over pleated alternatives. It's a strong step-up finish for buyers who find flat chiffon instant styles too plain for their retail price point. Offered from 500 pieces per color.",
        images: [
          placeholder("subcat-instant-crinkle-1", "Model wearing a crinkle-texture instant hijab with visible movement"),
          placeholder("subcat-instant-crinkle-2", "Close-up of crinkle instant hijab fabric showing its textured surface"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "cotton",
        name: "Cotton Instant Hijab",
        shortDescription: "Breathable cotton shell for hot-climate daily wear in a no-pin construction.",
        description:
          "Cotton instant hijabs pair a breathable cotton-voile shell with the category's standard attached-underscarf construction, for buyers in hot, humid markets whose customers ask for natural fiber but still want the speed of a pull-on style. It trades chiffon's crisp structure for better airflow and a softer, less synthetic hand-feel, at the cost of a slightly less sharp fold after packaging. It's the natural pairing for buyers who already stock our cotton voile hijab and want a matching instant option. Offered from 500 pieces per color.",
        images: [
          placeholder("subcat-instant-cotton-1", "Model wearing a breathable cotton instant hijab"),
          placeholder("subcat-instant-cotton-2", "Close-up of cotton instant hijab fabric and construction"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Sand", hex: "#d9c7a3" },
        ],
      },
      {
        slug: "pleated",
        name: "Pleated Instant Hijab",
        shortDescription: "Pressed pleat construction for a structured, uniform fold across every unit.",
        description:
          "Pleated instant hijabs use a pressed, uniform pleat set into the fabric during finishing, giving a structured, tailored look distinct from crinkle's random self-texture. Because the pleat is heat-pressed rather than woven in, buyers should expect it to soften gradually over repeated washing, which we disclose upfront rather than overselling the finish as permanent. It's a strong fit for occasion and formalwear-adjacent private label ranges wanting a tailored instant option. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-instant-pleated-1", "Model wearing a pleated instant hijab with a structured, tailored fold"),
          placeholder("subcat-instant-pleated-2", "Close-up of pressed pleat detail on an instant hijab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Burgundy", hex: "#6d2130" },
          { name: "Charcoal", hex: "#4a4a4a" },
        ],
      },
      {
        slug: "one-piece",
        name: "One-Piece Instant Hijab",
        shortDescription: "Single-piece pull-on construction — the simplest, fastest style in the category.",
        description:
          "One-piece instant hijabs are the simplest version in this category: a single pull-on garment with the underscarf built in, no detachable layers or separate components to lose or mismatch. It's the lowest-cost, fastest-to-wear construction we produce, and the SKU we'd recommend leading with for a brand-new instant hijab range before adding two-piece or layered variations. Fabric can be specified as chiffon, jersey, or modal at the same one-piece construction. Offered from 500 pieces per color.",
        images: [
          placeholder("subcat-instant-one-piece-1", "Model wearing a simple one-piece pull-on instant hijab"),
          placeholder("subcat-instant-one-piece-2", "Close-up of one-piece instant hijab construction"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "two-layer",
        name: "Two-Layer Instant Hijab",
        shortDescription: "Double-fabric-layer construction for added opacity and dimension over a single shell.",
        description:
          "Two-layer instant hijabs add a second fabric layer beneath the outer shell, giving added opacity for lighter-colored or sheerer fabrics and a subtle dimensional fall that a single-layer construction can't produce. It's the style we recommend for pastel and light-colorway orders specifically, where a single chiffon layer alone can run too sheer for some markets' coverage expectations. See our Shifa Two-Piece Instant Hijab for a detachable variation on this layered approach. Offered from 400 pieces per color.",
        images: [
          placeholder("subcat-instant-two-layer-1", "Model wearing a two-layer instant hijab with added opacity and fall"),
          placeholder("subcat-instant-two-layer-2", "Close-up of two-layer instant hijab construction showing the double fabric"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
      {
        slug: "khimar",
        name: "Instant Khimar Hijab",
        shortDescription: "Instant pull-on convenience extended to khimar-length shoulder and chest coverage.",
        description:
          "Instant khimar hijabs extend the category's pull-on, no-pin convenience down to khimar-length coverage across the shoulders and chest, for customers who want fuller coverage without giving up the speed that makes instant styles popular. It's a strong crossover SKU for buyers stocking both categories who want a single style that bridges instant hijabs and our khimar range rather than treating them as entirely separate customer segments. Construction and fabric options mirror our standard instant hijab line, scaled to the longer khimar body. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-instant-khimar-1", "Model wearing an instant khimar hijab with extended shoulder coverage"),
          placeholder("subcat-instant-khimar-2", "Close-up of instant khimar hijab construction and fabric fall"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Olive", hex: "#6b6f52" },
          { name: "Burgundy", hex: "#6d2130" },
        ],
      },
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
    subcategories: [
      {
        slug: "sports-hijabs",
        name: "Sports Hijabs",
        shortDescription: "Our reference technical-knit hijab, tested for moisture management and stretch recovery.",
        description:
          "Sports hijabs are built on a technical knit developed specifically for moisture management and stretch recovery through repeated wear, sweat, and washing, with flatlock seams to prevent chafing during activity. This isn't a jersey hijab with a sportier label; reusing standard jersey for an \"active\" line is a shortcut that shows up quickly in customer complaints about pilling and stretched-out necklines after a few wash cycles. It's the reference style underneath every other activewear piece in this category. Offered from 500 pieces per color.",
        images: [
          placeholder("subcat-activewear-sports-hijabs-1", "Model wearing a technical sports hijab during activity"),
          placeholder("subcat-activewear-sports-hijabs-2", "Close-up of technical sports hijab fabric and flatlock seams"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Teal", hex: "#1f7a6c" },
          { name: "Maroon", hex: "#7a2333" },
        ],
      },
      {
        slug: "sports-jilbabs",
        name: "Sports Jilbabs",
        shortDescription: "Full-length jilbab cut on technical sports knit for coverage during activity.",
        description:
          "Sports jilbabs bring our technical activewear knit to the jilbab silhouette, giving full-length modest coverage for exercise and outdoor activity without the fabric restricting movement or trapping heat the way a standard jilbab fabric would. It's built with the same flatlock seam construction as our sports hijab line to prevent chafing during extended wear. This is a growing crossover category between our jilbab and activewear ranges. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-activewear-sports-jilbabs-1", "Model wearing a sports jilbab in technical activewear knit"),
          placeholder("subcat-activewear-sports-jilbabs-2", "Close-up of technical knit fabric used for sports jilbabs"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "tops",
        name: "Modest Sports Tops",
        shortDescription: "Long-sleeve, high-coverage athletic tops designed to layer under or replace a standard tee.",
        description:
          "Modest sports tops are cut long through the torso and sleeve with a higher neckline than a standard athletic tee, designed to be worn on their own or layered under a sports jilbab or full-coverage set. The technical knit matches our sports hijab fabric for moisture management, so buyers can offer a fully coordinated activewear range from one consistent fabric library. It's a strong standalone SKU for customers who want modest activewear without committing to a full matching set. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-activewear-tops-1", "Model wearing a long-sleeve modest sports top"),
          placeholder("subcat-activewear-tops-2", "Close-up of modest sports top fabric and seam construction"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Teal", hex: "#1f7a6c" },
        ],
      },
      {
        slug: "track-pants",
        name: "Modest Track Pants",
        shortDescription: "Full-length, relaxed-through-the-leg track pants to complete a modest activewear set.",
        description:
          "Modest track pants are cut full-length and relaxed through the leg rather than fitted, completing a modest activewear look without the compression-fit silhouette of standard leggings. Waistbands use a wide, soft elastic for comfort through a full range of motion, and the fabric matches our sports hijab and tops for a fully coordinated set. It's a straightforward companion SKU for buyers building a complete activewear range rather than hijabs alone. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-activewear-track-pants-1", "Model wearing modest, relaxed-fit track pants"),
          placeholder("subcat-activewear-track-pants-2", "Close-up of modest track pants fabric and waistband"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "full-coverage-sets",
        name: "Full-Coverage Sports Sets",
        shortDescription: "Coordinated hijab, top, and pants sold as one complete modest activewear outfit.",
        description:
          "Full-coverage sports sets bundle our sports hijab, modest top, and track pants into one coordinated outfit, cut and dyed from matching fabric lots so distributors can merchandise it as a single ready-to-wear SKU rather than assembling separates. This is the format we recommend for buyers entering the activewear category for the first time, since it demonstrates the full coordinated range in one purchase. Sold as coordinated sets from 200 sets per color.",
        images: [
          placeholder("subcat-activewear-full-coverage-sets-1", "Model wearing a full-coverage modest sports set"),
          placeholder("subcat-activewear-full-coverage-sets-2", "Close-up of coordinated full-coverage sports set fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Teal", hex: "#1f7a6c" },
        ],
      },
      {
        slug: "running-hijabs",
        name: "Running Hijabs",
        shortDescription: "Lightweight running hijab with mesh ventilation panels for high-output cardio.",
        description:
          "Running hijabs add mesh ventilation panels at the temples and nape to our sports hijab construction, developed specifically for running and high-output cardio activity where heat buildup is the primary complaint with standard sports hijabs. The lighter overall weight compared to our general sports hijab makes it the preferred choice for buyers whose customers specifically train outdoors or run distance rather than mixed gym training. Offered from 400 pieces per color.",
        images: [
          placeholder("subcat-activewear-running-hijabs-1", "Model wearing a running hijab with mesh ventilation panels"),
          placeholder("subcat-activewear-running-hijabs-2", "Close-up of mesh ventilation panel detail on a running hijab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Teal", hex: "#1f7a6c" },
        ],
      },
      {
        slug: "gym-hijabs",
        name: "Gym Hijabs",
        shortDescription: "Firmer-compression sports hijab built for high-intensity strength and interval training.",
        description:
          "Gym hijabs use a firmer compression knit than our standard sports hijab, developed for high-intensity training where a snugger fit reduces movement and slippage during strength and interval work. This is the style our distributors in competitive athletic-wear channels reorder most consistently, since it holds position through movement patterns that would shift a looser hijab. Offered from 400 pieces per color.",
        images: [
          placeholder("subcat-activewear-gym-hijabs-1", "Model wearing a firm-compression gym hijab during strength training"),
          placeholder("subcat-activewear-gym-hijabs-2", "Close-up of compression knit fabric used for gym hijabs"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Maroon", hex: "#7a2333" },
        ],
      },
      {
        slug: "swimming-hijabs",
        name: "Swimming Hijabs",
        shortDescription: "Chlorine- and salt-resistant swim hijab with a snug, secure fit in water.",
        description:
          "Swimming hijabs are built on a chlorine- and salt-resistant technical knit with a snug fit designed to stay in place in water, extending our sports hijab program into swimwear. It pairs with our modest swimwear-adjacent development program for buyers building a full aquatics range. Standard fabric doesn't hold up to chlorine exposure the way this dedicated swim knit does, which is the detail we flag to any buyer trying to repurpose a standard sports hijab for pool use. Offered from 400 pieces per color.",
        images: [
          placeholder("subcat-activewear-swimming-hijabs-1", "Model wearing a chlorine-resistant swimming hijab"),
          placeholder("subcat-activewear-swimming-hijabs-2", "Close-up of technical swim knit fabric used for swimming hijabs"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Teal", hex: "#1f7a6c" },
        ],
      },
      {
        slug: "sports-abayas",
        name: "Sports Abayas",
        shortDescription: "Looser-cut abaya silhouette on technical activewear knit for modest outdoor activity.",
        description:
          "Sports abayas apply our technical activewear knit to a looser abaya silhouette, aimed at customers who want full-coverage modest dressing for outdoor activity, walking, or light training without the fitted profile of a sports jilbab or leggings-based set. The wider cut trades some of the compression benefits of our gym hijab line for a more relaxed, everyday-adjacent activewear look. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-activewear-sports-abayas-1", "Model wearing a sports abaya in technical activewear fabric"),
          placeholder("subcat-activewear-sports-abayas-2", "Close-up of technical knit fabric used for sports abayas"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "co-ord-sets",
        name: "Activewear Co-Ord Sets",
        shortDescription: "Mix-and-match coordinated activewear pieces sold as a styled bundle rather than a fixed outfit.",
        description:
          "Activewear co-ord sets bundle multiple pieces from across our activewear range &mdash; hijab, top, and pants or jilbab &mdash; in coordinating (rather than identical) colorways, so the set reads as intentionally styled rather than a uniform. This differs from our full-coverage sports sets, which use matching fabric lots throughout; co-ord sets are curated for color-blocking and visual variety instead. It's a merchandising-driven format aimed at buyers who want to present activewear as a lifestyle range rather than purely functional kit. Sold as coordinated sets from 200 sets per color.",
        images: [
          placeholder("subcat-activewear-co-ord-sets-1", "Model wearing a coordinated activewear co-ord set"),
          placeholder("subcat-activewear-co-ord-sets-2", "Close-up of coordinated color-blocked activewear fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Teal", hex: "#1f7a6c" },
          { name: "Maroon", hex: "#7a2333" },
        ],
      },
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
  {
    slug: "bridal-hijabs",
    name: "Bridal Hijabs",
    shortName: "Bridal Hijabs",
    description:
      "Occasion-grade hijabs finished with pearl, crystal, stone, and hand-embroidered embellishment, built for wedding, nikah, and bridal party ranges rather than everyday retail.",
    content: `
      <p>Bridal hijab is a distinct manufacturing discipline from our standard hijab lines, not just a dressier colorway of the same fabric. Embellishment &mdash; pearls, crystals, stones, or embroidery &mdash; has to be hand-placed or hand-stitched without distorting the drape underneath it, which means every bridal piece runs through a specialist finishing team rather than the standard production line.</p>
      <p>We build this range on silk and satin bases specifically because they hold embellishment weight without sagging or puckering the way lighter chiffon can. Buyers use this category to serve boutique, bridal party, and gifting channels alongside their standard hijab range, usually as a lower-volume, higher-margin complement rather than a volume line. Small-batch production is standard here &mdash; most styles are available from 50 to 100 pieces per design.</p>
    `,
    heroImage: placeholder("cat-bridal-hijabs-hero", "Bridal hijab with pearl and crystal embellishment draped elegantly"),
    cardImage: placeholder("cat-bridal-hijabs-card", "Close-up of hand-placed bridal embellishment on silk hijab fabric"),
    keywords: [
      "bridal hijab manufacturer",
      "wedding hijab wholesale supplier",
      "pearl embellished hijab manufacturer",
      "nikah hijab supplier India",
    ],
    subcategories: [
      {
        slug: "lace",
        name: "Bridal Lace Hijab",
        shortDescription: "Delicate lace trim or lace overlay panel for a soft, romantic bridal finish.",
        description:
          "Bridal lace hijabs pair a silk or satin base with a lace trim edge or a sheer lace overlay panel, giving a softer, more romantic finish than fully embellished crystal or stone styles. The lace is finished flat and pre-washed to prevent shrinkage mismatch against the base fabric, a defect that shows up as visible puckering along the trim line on lower-cost competitors. It's the style most bridal party buyers order for bridesmaids' hijabs alongside a more heavily embellished piece for the bride herself. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-lace-1", "Model wearing a bridal hijab with delicate lace trim detail"),
          placeholder("subcat-bridal-hijab-lace-2", "Close-up of lace overlay panel on a bridal hijab"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Blush", hex: "#f2c4c4" },
        ],
      },
      {
        slug: "pearl",
        name: "Pearl-Embellished Hijab",
        shortDescription: "Hand-placed pearl trim along the edge or in a scattered field across the fabric.",
        description:
          "Pearl-embellished bridal hijabs use hand-sewn faux-pearl beading, either as a continuous trim along the hem or scattered across the body of the fabric, individually secured so beads don't shed with handling the way glued alternatives do. This is our most-ordered bridal finish because it reads as elevated without the cost or weight of full crystal coverage. Bead density and placement pattern are fully customizable per design. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-pearl-1", "Model wearing a pearl-embellished bridal hijab"),
          placeholder("subcat-bridal-hijab-pearl-2", "Close-up of hand-sewn pearl beading on bridal hijab fabric"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Pearl White", hex: "#f3ece2" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Blush", hex: "#f2c4c4" },
        ],
      },
      {
        slug: "crystal",
        name: "Crystal Hijab",
        shortDescription: "Faceted crystal embellishment for maximum sparkle under event lighting.",
        description:
          "Crystal hijabs use faceted glass or acrylic crystals hand-set in a hot-fix or hand-stitched application, chosen specifically for how they catch light under event and reception lighting rather than daylight photography alone. Coverage density ranges from an accent trim to a fully crystal-covered surface, priced accordingly. This is our highest-embellishment-weight style, so it's built exclusively on a structured silk or satin base that holds the added weight without drooping. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-crystal-1", "Model wearing a crystal-embellished bridal hijab catching the light"),
          placeholder("subcat-bridal-hijab-crystal-2", "Close-up of hand-set faceted crystals on bridal hijab fabric"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
      {
        slug: "stone-studded",
        name: "Stone-Studded Hijab",
        shortDescription: "Mixed stone-work embellishment combining beads, sequins, and crystals in one design.",
        description:
          "Stone-studded bridal hijabs combine multiple embellishment types &mdash; beads, sequins, and crystals &mdash; into one mixed-media design rather than a single repeated element, giving a more layered, textured finish than a single-material style. This is the finish our design team recommends when a buyer sends a reference image combining several embellishment styles they've seen separately elsewhere. Because it mixes application methods, production lead time runs slightly longer than single-technique styles. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-stone-studded-1", "Model wearing a stone-studded bridal hijab with mixed embellishment"),
          placeholder("subcat-bridal-hijab-stone-studded-2", "Close-up of mixed bead, sequin, and crystal stonework on bridal hijab fabric"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Gold", hex: "#c9a635" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Rose Gold", hex: "#d9a89c" },
        ],
      },
      {
        slug: "embroidered",
        name: "Embroidered Bridal Hijab",
        shortDescription: "Hand or machine thread embroidery in a custom motif for a signature bridal design.",
        description:
          "Embroidered bridal hijabs carry a thread-embroidered motif rather than applied beading or crystal, giving a design that reads as couture-adjacent and is fully customizable to a buyer's own pattern or a motif we develop in-house. Thread color, density, and placement are all specified per order, and combination pieces that pair embroidery with a light pearl or crystal accent are available on request. It's the bridal finish most often ordered as a fully custom, one-off design rather than a repeat catalog SKU. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-embroidered-1", "Model wearing an embroidered bridal hijab with a custom thread motif"),
          placeholder("subcat-bridal-hijab-embroidered-2", "Close-up of hand embroidery detail on a bridal hijab"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Gold", hex: "#c9a635" },
          { name: "Blush", hex: "#f2c4c4" },
        ],
      },
      {
        slug: "satin",
        name: "Satin Bridal Hijab",
        shortDescription: "High-sheen satin base for a fluid, photograph-ready drape under embellishment.",
        description:
          "Satin bridal hijabs use our high-sheen satin weave as a base specifically because its weighted drape holds embellishment placement without shifting through a full day of wear, ceremony, and photography. The glossy finish also reflects light well in both daylight and flash photography, which buyers report as a meaningful factor in how a style performs in a bride's wedding photos. It's offered plain or as a base for any of our pearl, crystal, or embroidery finishes. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-satin-1", "Model wearing a satin bridal hijab with a fluid, photograph-ready drape"),
          placeholder("subcat-bridal-hijab-satin-2", "Close-up of glossy satin fabric used as a bridal hijab base"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Blush", hex: "#f2c4c4" },
        ],
      },
      {
        slug: "silk",
        name: "Silk Bridal Hijab",
        shortDescription: "Genuine mulberry silk base with a hand-rolled hem for the highest bridal tier.",
        description:
          "Silk bridal hijabs run on the same genuine mulberry silk as our luxury hijab line, finished with a hand-rolled hem rather than a machine hem, positioned as our top bridal tier for buyers whose customers specifically ask for real silk over a synthetic satin-look alternative. The natural fiber's sheen and weight give a drape that photographs and moves differently from satin, which some brides specifically request once they've felt both. Every piece is individually inspected before packaging. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-silk-1", "Model wearing a mulberry silk bridal hijab with a hand-rolled hem"),
          placeholder("subcat-bridal-hijab-silk-2", "Close-up of silk bridal hijab fabric showing its natural sheen"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "White", hex: "#faf8f5" },
        ],
      },
      {
        slug: "shimmer",
        name: "Shimmer Bridal Hijab",
        shortDescription: "Fine metallic-thread weave for a subtle overall shimmer rather than applied embellishment.",
        description:
          "Shimmer bridal hijabs weave a fine metallic thread through the base fabric itself, giving an all-over subtle sparkle rather than the localized sparkle of applied crystals or beads. It's a lower-cost route to a bridal-appropriate finish for buyers who want event-ready shine without the labor cost of hand-applied embellishment, and it pairs well as a base fabric for a light pearl or crystal accent on top. The metallic thread is woven, not printed, so the shimmer doesn't crack or flake with wear. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-shimmer-1", "Model wearing a shimmer bridal hijab with subtle all-over metallic sparkle"),
          placeholder("subcat-bridal-hijab-shimmer-2", "Close-up of fine metallic thread woven through shimmer bridal hijab fabric"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Gold", hex: "#c9a635" },
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Rose Gold", hex: "#d9a89c" },
        ],
      },
      {
        slug: "crown-style",
        name: "Crown-Style Bridal Hijab",
        shortDescription: "Structured under-cap and drape built to sit cleanly beneath a bridal tiara or crown.",
        description:
          "Crown-style bridal hijabs are drafted with a structured under-cap and a drape line specifically engineered to sit cleanly beneath a tiara, crown, or hijab-specific headpiece without the fabric bunching or shifting the accessory out of place through the ceremony. This is a construction detail most standard hijabs aren't drafted for, since the pattern has to account for headpiece pins and a flatter crown profile. Buyers typically order this alongside a matching bridal accessory line. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-crown-style-1", "Model wearing a crown-style bridal hijab styled beneath a tiara"),
          placeholder("subcat-bridal-hijab-crown-style-2", "Close-up of structured under-cap construction for a crown-style bridal hijab"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
      {
        slug: "veil-style",
        name: "Veil-Style Bridal Hijab",
        shortDescription: "Extended sheer overlay styled to fall like a traditional veil over the base hijab.",
        description:
          "Veil-style bridal hijabs add an extended sheer overlay layer, cut and hemmed to fall like a traditional wedding veil over a base hijab rather than functioning as a single-layer garment. The overlay can be styled forward over the face for the ceremony and swept back for the reception, giving one piece two distinct looks across the event. It's most often ordered paired with one of our embellished bridal hijabs as the base layer underneath. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-veil-style-1", "Model wearing a veil-style bridal hijab with a sheer overlay"),
          placeholder("subcat-bridal-hijab-veil-style-2", "Close-up of sheer veil overlay fabric hemmed for a bridal hijab"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
    ],
  },
  {
    slug: "bridal-abayas",
    name: "Bridal Abayas",
    shortName: "Bridal Abayas",
    description:
      "Occasion-grade abayas in embroidery, pearl, stone, and crystal embellishment on silk and satin bases, built for wedding, nikah, and bridal party ranges rather than everyday retail.",
    content: `
      <p>Bridal abaya is the highest-embellishment, highest-margin tier in our abaya range, and the one where fabric weight matters most: every stone, pearl, or crystal adds real weight to the garment, and a base fabric that can't carry that weight will sag or pucker exactly where the embellishment sits. We build this range exclusively on heavier crepe, satin, and silk bases for that reason, never on lighter everyday fabrics.</p>
      <p>Buyers use this category to serve boutique, bridal party, and gifting channels alongside their standard abaya range, typically as a lower-volume, higher-margin complement. Small-batch production is standard, with most styles available from 50 units per design, and custom embroidery motifs, stone placement, and color-matched threadwork are all available for private label buyers building a signature bridal line.</p>
    `,
    heroImage: placeholder("cat-bridal-abayas-hero", "Embellished bridal abaya with hand-placed stonework draped elegantly"),
    cardImage: placeholder("cat-bridal-abayas-card", "Close-up of hand-placed bridal embellishment on abaya fabric"),
    keywords: [
      "bridal abaya manufacturer",
      "wedding abaya wholesale supplier",
      "embellished bridal abaya manufacturer India",
      "nikah abaya supplier",
    ],
    subcategories: [
      {
        slug: "embroidered",
        name: "Bridal Embroidered Abaya",
        shortDescription: "Hand or machine thread embroidery in a custom motif on a heavier crepe or satin base.",
        description:
          "Bridal embroidered abayas carry a thread-embroidered motif across the bodice, sleeves, or hem, fully customizable to a buyer's own pattern or one we develop in-house from a reference image. The heavier crepe or satin base is chosen specifically because it holds the embroidery's tension without the fabric puckering around the stitched area, which is the defect most buyers cite from lower-cost embroidered competitors. This is the style most often ordered as a fully custom, one-off design for a specific wedding party rather than a repeat catalog SKU. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-embroidered-1", "Model wearing a bridal embroidered abaya with a custom thread motif"),
          placeholder("subcat-bridal-abaya-embroidered-2", "Close-up of hand embroidery detail on a bridal abaya"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Burgundy", hex: "#6d2130" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
      {
        slug: "pearl",
        name: "Pearl Bridal Abaya",
        shortDescription: "Hand-sewn pearl trim or scattered pearl field across the bodice and sleeves.",
        description:
          "Pearl bridal abayas use hand-sewn faux-pearl beading, either as a trim line along seams and hems or scattered across the bodice, individually secured so beads don't shed with handling. It's our most-ordered bridal abaya finish because it reads as elevated without the weight or cost of full crystal or stone coverage across the whole garment. Bead density and placement pattern are fully customizable per design. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-pearl-1", "Model wearing a pearl-embellished bridal abaya"),
          placeholder("subcat-bridal-abaya-pearl-2", "Close-up of hand-sewn pearl beading on bridal abaya fabric"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Black", hex: "#1a1a1a" },
        ],
      },
      {
        slug: "stone-work",
        name: "Stone-Work Bridal Abaya",
        shortDescription: "Mixed stone, bead, and sequin embellishment concentrated at the bodice and cuffs.",
        description:
          "Stone-work bridal abayas combine cut-glass stones, beads, and sequins into one mixed-media design, usually concentrated at the bodice, collar, and cuffs where it catches the most light and attention rather than spread evenly across the full garment. This concentrated placement also keeps the added weight manageable for a full-length garment compared to all-over coverage. It's the finish our design team recommends when a buyer wants a statement front panel without the cost of embellishing the entire abaya. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-stone-work-1", "Model wearing a bridal abaya with concentrated stone-work at the bodice"),
          placeholder("subcat-bridal-abaya-stone-work-2", "Close-up of mixed stone and bead embellishment on bridal abaya fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
      {
        slug: "crystal",
        name: "Crystal Bridal Abaya",
        shortDescription: "Faceted crystal embellishment for maximum sparkle under reception and event lighting.",
        description:
          "Crystal bridal abayas use faceted glass or acrylic crystals in a hot-fix or hand-stitched application, chosen for how they catch light under event and reception lighting specifically. Coverage ranges from an accent trim at the neckline and cuffs to a fully crystal-covered bodice, priced accordingly. Because of the added weight, this style is built exclusively on our heaviest crepe and satin bases to hold structure without drooping. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-crystal-1", "Model wearing a crystal-embellished bridal abaya catching the light"),
          placeholder("subcat-bridal-abaya-crystal-2", "Close-up of hand-set faceted crystals on bridal abaya fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Silver", hex: "#c7c7c7" },
        ],
      },
      {
        slug: "lace",
        name: "Lace Bridal Abaya",
        shortDescription: "Lace overlay panels or lace sleeve inserts for a softer, layered bridal finish.",
        description:
          "Lace bridal abayas use sheer lace overlay panels or lace sleeve inserts against a solid base fabric, giving a softer, more layered finish than fully embellished crystal or stone styles. The lace is pre-washed and finished flat against the base to prevent shrinkage mismatch, which otherwise shows up as visible puckering along the seam line. It's the style most bridal party buyers order for the wider wedding party alongside a more heavily embellished piece for the bride. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-lace-1", "Model wearing a bridal abaya with lace overlay sleeve inserts"),
          placeholder("subcat-bridal-abaya-lace-2", "Close-up of lace overlay panel on a bridal abaya"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Black", hex: "#1a1a1a" },
        ],
      },
      {
        slug: "satin",
        name: "Satin Bridal Abaya",
        shortDescription: "High-sheen satin base for a fluid, photograph-ready drape under embellishment weight.",
        description:
          "Satin bridal abayas use our high-sheen satin weave as a base specifically because its weighted drape holds embellishment placement without shifting through a full ceremony and reception. The glossy finish reflects light well in both daylight and flash photography, which matters more for bridal wear than almost any other category we produce. Offered plain or as a base for any of our pearl, stone, or crystal finishes. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-satin-1", "Model wearing a satin bridal abaya with a fluid, photograph-ready drape"),
          placeholder("subcat-bridal-abaya-satin-2", "Close-up of glossy satin fabric used as a bridal abaya base"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Wine", hex: "#722f37" },
        ],
      },
      {
        slug: "silk",
        name: "Luxury Silk Bridal Abaya",
        shortDescription: "Genuine mulberry silk base for the highest bridal abaya tier, hand-finished throughout.",
        description:
          "Luxury silk bridal abayas run on genuine mulberry silk rather than a satin substitute, hand-finished at the hem and seams by a specialist team rather than machine-processed like our standard lines. This is our top bridal abaya tier, positioned for boutique and department-store-adjacent placement rather than volume distribution. The natural fiber's sheen and weight give a drape and movement that photographs distinctly from satin or crepe alternatives. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-silk-1", "Model wearing a luxury silk bridal abaya with a hand-finished hem"),
          placeholder("subcat-bridal-abaya-silk-2", "Close-up of silk bridal abaya fabric showing its natural sheen"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Blush", hex: "#f2c4c4" },
        ],
      },
      {
        slug: "cape-style",
        name: "Cape-Style Bridal Abaya",
        shortDescription: "Detachable or built-in cape layer over a fitted or flowing base abaya.",
        description:
          "Cape-style bridal abayas add a detachable or built-in cape layer over the shoulders, a construction borrowed from bridal gown design and adapted to abaya proportions. The cape can be removed for the reception after being worn through the ceremony, giving one garment two distinct looks across a single event. It's the style our boutique accounts report as the strongest differentiator versus standard embellished abayas, since the silhouette itself is the statement rather than the embellishment alone. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-cape-style-1", "Model wearing a cape-style bridal abaya with a detachable shoulder layer"),
          placeholder("subcat-bridal-abaya-cape-style-2", "Close-up of cape-style bridal abaya construction and attachment point"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Burgundy", hex: "#6d2130" },
        ],
      },
      {
        slug: "trail-gown-style",
        name: "Trail / Gown-Style Bridal Abaya",
        shortDescription: "Extended back trail on a gown-adjacent silhouette for maximum bridal drama.",
        description:
          "Trail and gown-style bridal abayas extend the back hem into a trailing panel, borrowing the silhouette of a bridal gown train while keeping full modest coverage through the body and sleeves. This is our most fabric-intensive bridal style, and it's usually ordered as a single custom piece for the bride rather than across a wedding party given the extended hem's specialized cutting and finishing requirements. It pairs naturally with a veil-style bridal hijab for a complete matched bridal look. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-trail-gown-style-1", "Model wearing a gown-style bridal abaya with an extended back trail"),
          placeholder("subcat-bridal-abaya-trail-gown-style-2", "Close-up of trail-style bridal abaya hem and fabric fall"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Black", hex: "#1a1a1a" },
        ],
      },
      {
        slug: "white",
        name: "White Bridal Abaya",
        shortDescription: "Pure white base fabric positioned for Western-influenced and civil ceremony bridal wear.",
        description:
          "White bridal abayas run on a pure white base rather than our warmer ivory or champagne tones, positioned for buyers whose customers want a Western-bridal-adjacent white look for a civil ceremony or reception rather than the traditional ivory associated with regional bridal wear. Getting a true, consistent white at scale requires tighter dye-lot control than our standard color range, since white shows any batch-to-batch shade variation far more visibly than darker colors. Available plain or as a base for any embellishment finish in this category. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-white-1", "Model wearing a pure white bridal abaya"),
          placeholder("subcat-bridal-abaya-white-2", "Close-up of pure white bridal abaya fabric and finish"),
        ],
        colors: [
          { name: "White", hex: "#faf8f5" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Off-White", hex: "#f2efe6" },
          { name: "Pearl White", hex: "#f3ece2" },
        ],
      },
      {
        slug: "champagne",
        name: "Champagne Bridal Abaya",
        shortDescription: "Warm champagne base tone, the most-requested neutral for regional bridal and nikah wear.",
        description:
          "Champagne bridal abayas run on a warm, muted gold-beige base that's consistently the most-requested neutral tone across our regional bridal accounts, photographing warmer than white and softer than gold under most venue lighting. It's a versatile base for embellishment since pearl, gold-thread, and crystal accents all read cleanly against it without competing for attention the way they can against pure white. Shade consistency across a production run is checked against a fixed Pantone reference rather than eyeballed, given how visible small variations are in this tone family. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-champagne-1", "Model wearing a champagne-toned bridal abaya"),
          placeholder("subcat-bridal-abaya-champagne-2", "Close-up of champagne bridal abaya fabric showing its warm tone"),
        ],
        colors: [
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Rose Champagne", hex: "#e0c4ae" },
          { name: "Gold Champagne", hex: "#dcc48f" },
          { name: "Blush Champagne", hex: "#e6c9c0" },
        ],
      },
      {
        slug: "gold-embellished",
        name: "Gold Embellished Bridal Abaya",
        shortDescription: "Gold-thread embroidery or gold-tone stonework on a dark base for maximum contrast.",
        description:
          "Gold embellished bridal abayas pair gold-thread embroidery or gold-tone stonework against a dark base fabric &mdash; usually black, navy, or charcoal &mdash; for maximum contrast between the embellishment and the garment rather than the tonal, monochrome look of pearl-on-ivory styles. This is the style most requested by buyers serving Gulf regional markets specifically, where gold embellishment on a dark abaya is a well-established bridal and formal-occasion convention. Gold-thread color is checked against a fixed reference to avoid the greenish cast cheaper metallic thread can develop after washing. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-gold-embellished-1", "Model wearing a gold-embellished bridal abaya on a dark base"),
          placeholder("subcat-bridal-abaya-gold-embellished-2", "Close-up of gold-thread embroidery and stonework on bridal abaya fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
    ],
  },
  {
    slug: "fabric-collections",
    name: "Fabric & Material Collections",
    shortName: "Fabric Collections",
    description:
      "Browse our manufacturing catalog by fabric rather than garment — the same premium chiffon, georgette, modal, jersey, satin, and silk bases used across every category, grouped by material for buyers who spec by fabric first.",
    content: `
      <p>Most buyers browse our catalog by garment, but fabric is what actually determines cost, MOQ, and lead time, and several of our accounts prefer to spec a private label range by material first and choose garment silhouettes second. This category groups our fabric library that way, cross-referencing every garment category that fabric appears in rather than repeating fabric information on each individual product page.</p>
      <p>For the full technical fabric library &mdash; weight, composition, and care instructions for every fabric we run &mdash; see our dedicated <a href="/fabrics">Fabric Library</a>. This category exists as a shopping entry point for buyers who want to jump straight to "show me everything in silk" rather than browsing category by category.</p>
    `,
    heroImage: placeholder("cat-fabric-collections-hero", "Fabric swatch cards arranged for a private label review"),
    cardImage: placeholder("cat-fabric-collections-card", "Stack of premium fabric blends arranged by texture"),
    keywords: [
      "fabric manufacturer India",
      "wholesale fabric supplier modest wear",
      "premium chiffon supplier",
      "silk fabric manufacturer India",
    ],
    subcategories: [
      {
        slug: "premium-chiffon",
        name: "Premium Chiffon",
        shortDescription: "Our 75 gsm matte chiffon base, used across hijabs, niqabs, jilbabs, and instant hijabs.",
        description:
          "Premium chiffon is the single most-used fabric in our catalog, running through our hijab, niqab, jilbab, and instant hijab lines as the default \"standard\" fabric most buyers mean when they don't specify otherwise. The 75 gsm matte weave is opaque enough to wear without an underscarf in most climates and takes dye and print consistently at volume. Buyers spec-ing a private label range around one core fabric across multiple garment types most often choose this one. Available across our full 42-shade library from 300 pieces per color.",
        images: [
          placeholder("subcat-fabric-premium-chiffon-1", "Close-up of premium matte chiffon fabric weave"),
          placeholder("subcat-fabric-premium-chiffon-2", "Chiffon fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Burgundy", hex: "#6d2130" },
        ],
      },
      {
        slug: "premium-georgette",
        name: "Premium Georgette",
        shortDescription: "Self-crinkled polyester-viscose weave used across hijabs, abayas, and jilbabs.",
        description:
          "Premium georgette carries our self-crinkled texture across every category that offers it &mdash; hijabs, abayas, and jilbabs &mdash; giving buyers a consistent textured-fabric option throughout a coordinated range rather than a texture that's unique to one garment type. The crinkle is woven in rather than pressed, so it survives repeated washing without flattening, a durability advantage over pleated-finish competitors. Available from 300 pieces per color.",
        images: [
          placeholder("subcat-fabric-premium-georgette-1", "Close-up of premium georgette fabric showing its crinkle weave"),
          placeholder("subcat-fabric-premium-georgette-2", "Georgette fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "luxury-modal",
        name: "Luxury Modal",
        shortDescription: "Beechwood-derived modal blend used across hijabs and instant hijabs for a softer hand-feel.",
        description:
          "Luxury modal is our step-up natural-fiber-blend fabric, used across standard and instant hijabs wherever a buyer wants a noticeably softer hand-feel and lower-sheen finish than jersey without moving up to genuine silk. The beechwood-derived fiber takes dye more evenly than cotton jersey, giving richer, more consistent color across a production run. Available from 500 pieces per color.",
        images: [
          placeholder("subcat-fabric-luxury-modal-1", "Close-up of soft heather modal fabric texture"),
          placeholder("subcat-fabric-luxury-modal-2", "Modal fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Heather Grey", hex: "#8a8a8a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Blush", hex: "#f2c4c4" },
        ],
      },
      {
        slug: "premium-jersey",
        name: "Premium Jersey",
        shortDescription: "Cotton-modal stretch knit used across hijabs, jilbabs, instant hijabs, and niqabs.",
        description:
          "Premium jersey is our four-way stretch knit base, appearing across hijabs, jilbabs, instant hijabs, and niqabs wherever a no-pin, wrap-and-go construction is the priority over chiffon's structured drape. It resists fraying at the cut edge, keeping hemming costs down compared to woven fabrics, and holds shape through a full day of wear without sagging. Available in solid and heathered finishes from 300 pieces per color.",
        images: [
          placeholder("subcat-fabric-premium-jersey-1", "Close-up of premium stretch jersey fabric texture"),
          placeholder("subcat-fabric-premium-jersey-2", "Jersey fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal Heather", hex: "#5c5c5c" },
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "satin-collection",
        name: "Satin Collection",
        shortDescription: "High-sheen occasion fabric used across hijabs, abayas, and bridal ranges.",
        description:
          "The satin collection spans every occasion-tier product we make &mdash; satin hijabs, satin abayas, and satin bridal styles &mdash; built on the same high-gloss weave engineered to hold a pressed, glass-smooth finish through transport and retail handling. Buyers building a coordinated occasion or bridal range across multiple garment types typically standardize on this fabric first. Available from 200 pieces per color.",
        images: [
          placeholder("subcat-fabric-satin-collection-1", "Close-up of glossy satin fabric sheen"),
          placeholder("subcat-fabric-satin-collection-2", "Satin fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Wine", hex: "#722f37" },
          { name: "Royal Blue", hex: "#1f3a93" },
        ],
      },
      {
        slug: "silk-collection",
        name: "Silk Collection",
        shortDescription: "Genuine mulberry silk used across our luxury, bridal, and mid-tier hijab and abaya lines.",
        description:
          "The silk collection covers every genuine mulberry silk product we manufacture &mdash; luxury and mid-tier silk hijabs, silk bridal hijabs, and luxury silk bridal abayas &mdash; rather than a synthetic silk-look substitute. Finishing ranges from a machine-rolled hem on our mid-tier pieces to a fully hand-rolled hem on our luxury and bridal tiers. Available from 150 pieces per color depending on tier.",
        images: [
          placeholder("subcat-fabric-silk-collection-1", "Close-up of natural silk fabric sheen"),
          placeholder("subcat-fabric-silk-collection-2", "Silk fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Emerald", hex: "#175f4c" },
          { name: "Sapphire", hex: "#0f52ba" },
        ],
      },
      {
        slug: "cotton-collection",
        name: "Cotton Collection",
        shortDescription: "Breathable cotton voile used across hijabs, instant hijabs, and niqabs for hot climates.",
        description:
          "The cotton collection groups every breathable, natural-fiber cotton voile product across our hijab, instant hijab, and niqab lines, positioned for hot, humid markets and buyers building a natural-fiber marketing narrative. It trades a small amount of chiffon's crisp structure for genuinely better airflow. Available from 300 pieces per color, pre-shrunk to reduce size variance after the customer's first wash.",
        images: [
          placeholder("subcat-fabric-cotton-collection-1", "Close-up of breathable cotton voile fabric weave"),
          placeholder("subcat-fabric-cotton-collection-2", "Cotton fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
      {
        slug: "linen-collection",
        name: "Linen Collection",
        shortDescription: "Natural linen-blend fabric for buyers building an earthy, texture-forward private label range.",
        description:
          "The linen collection offers a natural, visibly textured fiber option for buyers whose customers respond to an earthy, less polished aesthetic than our smoother chiffon and satin lines. Linen blends take muted, natural dye tones particularly well and develop a soft hand-feel with wear and washing rather than pilling. It's a lower-volume, specialty fabric compared to our chiffon and jersey lines. Available from 300 pieces per color.",
        images: [
          placeholder("subcat-fabric-linen-collection-1", "Close-up of natural linen fabric texture"),
          placeholder("subcat-fabric-linen-collection-2", "Linen fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Natural", hex: "#ddd2bc" },
          { name: "Sand", hex: "#d9c7a3" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Charcoal", hex: "#4a4a4a" },
        ],
      },
      {
        slug: "crinkle-collection",
        name: "Crinkle Collection",
        shortDescription: "Heat-set crinkle texturing available across hijabs and instant hijabs for volume and movement.",
        description:
          "The crinkle collection covers our heat-set texturing process across every category that offers it, giving visible volume and movement that survives machine washing without needing to be re-ironed the way a pressed pleat does. This is the same permanent texturing behind our georgette fabric family, grouped here for buyers browsing by finish rather than by base fabric name. Available from 300 pieces per color.",
        images: [
          placeholder("subcat-fabric-crinkle-collection-1", "Close-up of crinkle-textured fabric surface"),
          placeholder("subcat-fabric-crinkle-collection-2", "Crinkle fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "ribbed-collection",
        name: "Ribbed Collection",
        shortDescription: "Vertical rib-knit fabric used across hijabs and inner caps for a structured, streetwear-adjacent finish.",
        description:
          "The ribbed collection groups our vertical rib-knit fabric across the categories that use it, giving a slightly compressed, sculpted silhouette aimed at younger customer segments who wear modest fashion closer to streetwear than traditional occasion dressing. The tighter rib construction holds more structure than standard jersey without needing pins to hold shape. Available from 300 pieces per color.",
        images: [
          placeholder("subcat-fabric-ribbed-collection-1", "Close-up of ribbed knit fabric vertical texture"),
          placeholder("subcat-fabric-ribbed-collection-2", "Ribbed fabric swatch cards showing the available color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Rust", hex: "#b5502c" },
        ],
      },
    ],
  },
  {
    slug: "wholesale-collections",
    name: "Wholesale Collections",
    shortName: "Wholesale Collections",
    description:
      "Pre-configured bulk assortments and starter packs across our catalog, built for distributors and new retail accounts who want a ready-made order structure rather than building one SKU at a time.",
    content: `
      <p>Every product in our catalog can be ordered individually against its own MOQ, but a meaningful share of our accounts &mdash; particularly new distributors and retailers placing a first order &mdash; prefer a pre-configured bundle that removes the guesswork of which styles, colors, and quantities to start with. This category exists for that buyer.</p>
      <p>Bundles are built from our best-reordering SKUs in each category, weighted toward the colors and sizes our sales data shows move fastest, and can be adjusted before production once a buyer has reviewed the default configuration. None of these are simply excess stock repackaged &mdash; every bundle is produced to order against the same specification as the individual product it's built from, with the exception of our Bulk Clearance Stock line.</p>
    `,
    heroImage: placeholder("cat-wholesale-collections-hero", "Warehouse cartons stacked and ready for wholesale shipment"),
    cardImage: placeholder("cat-wholesale-collections-card", "Shipping containers at an export freight terminal"),
    keywords: [
      "wholesale hijab bundles",
      "bulk abaya supplier",
      "modest fashion starter pack wholesale",
      "wholesale modest wear distributor India",
    ],
    subcategories: [
      {
        slug: "hijab-bundles",
        name: "Wholesale Hijab Bundles",
        shortDescription: "Pre-configured multi-color, multi-fabric hijab assortment built from our best-reordering SKUs.",
        description:
          "Wholesale hijab bundles pre-configure a multi-color, multi-fabric assortment across our chiffon, jersey, and modal lines, weighted toward the shades and fabrics our sales data shows move fastest for new accounts. It removes the guesswork of picking an opening order color range from scratch, while still being fully adjustable before production runs. Bundles are produced to order, not drawn from existing stock. Configured from 1,000 pieces total per bundle.",
        images: [
          placeholder("subcat-wholesale-hijab-bundles-1", "Assortment of hijab styles representing a wholesale bundle"),
          placeholder("subcat-wholesale-hijab-bundles-2", "Fabric swatch cards showing the bundle's color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
      {
        slug: "abaya-bundles",
        name: "Wholesale Abaya Bundles",
        shortDescription: "Coordinated closed, open, and everyday abaya assortment for a first or refresh order.",
        description:
          "Wholesale abaya bundles pre-configure a coordinated mix across our closed, open, and everyday silhouettes in our core neutral color range, giving distributors a balanced opening assortment rather than over-committing to a single cut before seeing what their market prefers. Quantities per style are weighted toward our historically strongest reorder rates. Configured from 500 pieces total per bundle.",
        images: [
          placeholder("subcat-wholesale-abaya-bundles-1", "Assortment of abaya silhouettes representing a wholesale bundle"),
          placeholder("subcat-wholesale-abaya-bundles-2", "Warehouse cartons packed for a wholesale abaya bundle shipment"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Chocolate", hex: "#4a3728" },
        ],
      },
      {
        slug: "cap-bundles",
        name: "Wholesale Cap Bundles",
        shortDescription: "Bulk multi-pack inner cap assortment across our best-selling constructions and neutral shades.",
        description:
          "Wholesale cap bundles package our cotton, jersey, and tube inner cap constructions together across our extended neutral color range, matching how most distributors actually stock this category &mdash; as a consumable accessory sold alongside every hijab, khimar, and niqab a customer buys rather than a single hero SKU. Configured from 2,000 pieces total per bundle given the category's low per-unit cost and high reorder frequency.",
        images: [
          placeholder("subcat-wholesale-cap-bundles-1", "Rows of inner caps representing a wholesale bundle assortment"),
          placeholder("subcat-wholesale-cap-bundles-2", "Model wearing an inner cap from a wholesale bundle assortment"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Beige", hex: "#e3d3b8" },
          { name: "Grey", hex: "#8a8a8a" },
        ],
      },
      {
        slug: "instant-hijab-bundles",
        name: "Wholesale Instant Hijab Bundles",
        shortDescription: "Multi-color pull-on instant hijab assortment for gifting and first-time-wearer retail ranges.",
        description:
          "Wholesale instant hijab bundles pre-configure a multi-color assortment across our chiffon and jersey pull-on constructions, positioned for retailers targeting gifting and first-time hijab wearer segments where a foolproof, no-styling-required product matters more than fabric variety. Bundles are produced to order in our current best-selling colorways. Configured from 1,000 pieces total per bundle.",
        images: [
          placeholder("subcat-wholesale-instant-hijab-bundles-1", "Assortment of instant hijab styles representing a wholesale bundle"),
          placeholder("subcat-wholesale-instant-hijab-bundles-2", "Warehouse cartons packed for a wholesale instant hijab shipment"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "bridal",
        name: "Bridal Wholesale Collection",
        shortDescription: "Curated assortment across our bridal hijab and bridal abaya embellishment tiers.",
        description:
          "The bridal wholesale collection curates a spread across our pearl, crystal, and embroidered embellishment tiers in both bridal hijabs and bridal abayas, giving boutique buyers a representative sample of our full bridal range without commissioning each embellishment style separately. It's the format we recommend for a buyer's first bridal order before they've identified which specific finishes their market responds to. Configured from 100 pieces total per bundle across mixed designs.",
        images: [
          placeholder("subcat-wholesale-bridal-1", "Bridal hijab embellishment representing the bridal wholesale collection"),
          placeholder("subcat-wholesale-bridal-2", "Bridal abaya embellishment representing the bridal wholesale collection"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Black", hex: "#1a1a1a" },
        ],
      },
      {
        slug: "eid",
        name: "Eid Wholesale Collection",
        shortDescription: "Seasonal bulk assortment across abayas, hijabs, and prayer sets timed for Eid ordering cycles.",
        description:
          "The Eid wholesale collection bundles our strongest-reordering abaya, hijab, and prayer set styles into one seasonal order, timed to land with distributors' Eid ordering cycles rather than requiring separate purchase orders across categories. Colorways lean toward richer, occasion-appropriate tones alongside our core neutrals. Configured from 1,000 pieces total per bundle, with earlier ordering recommended given seasonal production capacity constraints.",
        images: [
          placeholder("subcat-wholesale-eid-1", "Assortment of Eid-season styles representing a wholesale bundle"),
          placeholder("subcat-wholesale-eid-2", "Fabric swatch cards showing the Eid collection's color range"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Emerald", hex: "#175f4c" },
          { name: "Burgundy", hex: "#6d2130" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
      {
        slug: "ramadan",
        name: "Ramadan Wholesale Collection",
        shortDescription: "Seasonal bundle weighted toward prayer wear and modest daywear for Ramadan ordering cycles.",
        description:
          "The Ramadan wholesale collection weights its assortment toward prayer sets, prayer khimars, and everyday abayas and hijabs rather than occasion-heavy pieces, matching the actual purchase pattern distributors report through the month. It's designed to be ordered well ahead of the season given the lead time required for a bundle of this size. Configured from 1,000 pieces total per bundle.",
        images: [
          placeholder("subcat-wholesale-ramadan-1", "Assortment of prayer wear and daywear styles representing a Ramadan bundle"),
          placeholder("subcat-wholesale-ramadan-2", "Warehouse cartons packed for a Ramadan wholesale collection shipment"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "starter-packs",
        name: "Retailer Starter Packs",
        shortDescription: "Cross-category opening assortment for a brand-new modest fashion retail account.",
        description:
          "Retailer starter packs pull a small cross-category assortment &mdash; hijabs, an abaya style, inner caps, and a scarf &mdash; into one opening order, sized for a new retail account testing the category rather than an established distributor placing a category-specific bulk order. It's the lowest-commitment entry point into our wholesale catalog, and several accounts have used it specifically to validate demand before placing a larger single-category order. Configured from 300 pieces total per pack.",
        images: [
          placeholder("subcat-wholesale-starter-packs-1", "Warehouse cartons packed for a retailer starter pack shipment"),
          placeholder("subcat-wholesale-starter-packs-2", "Shipping containers representing export of a retailer starter pack order"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "mixed-colour",
        name: "Mixed Colour Bundles",
        shortDescription: "Single style, full color range — one SKU ordered across our entire standing color library.",
        description:
          "Mixed colour bundles order a single style across our entire standing color range in one purchase order, rather than a buyer manually splitting quantities across individual color line items. It's a practical simplification for distributors who've already decided on a specific style and just need full-spectrum color coverage for retail display. Available for any standing catalog SKU from 500 pieces total across the full color range.",
        images: [
          placeholder("subcat-wholesale-mixed-colour-1", "Fabric swatch cards showing a full mixed colour range"),
          placeholder("subcat-wholesale-mixed-colour-2", "Stack of premium fabric blends showing color variety"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#4a4a4a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Burgundy", hex: "#6d2130" },
        ],
      },
      {
        slug: "clearance",
        name: "Bulk Clearance Stock",
        shortDescription: "Discounted end-of-run and discontinued-colorway stock sold as-is at reduced MOQ.",
        description:
          "Bulk clearance stock is the one line in this category drawn from existing inventory rather than produced to order: end-of-run fabric lots, discontinued colorways, and overrun quantities from other orders, sold at a reduced price and a lower MOQ than our standard production minimums. Availability changes continuously and isn't guaranteed to repeat, so buyers should confirm current stock before planning a retail launch around it. Available from 100 pieces, subject to current inventory.",
        images: [
          placeholder("subcat-wholesale-clearance-1", "Shipping containers representing bulk clearance stock ready for export"),
          placeholder("subcat-wholesale-clearance-2", "Warehouse cartons of clearance stock ready for shipment"),
        ],
        colors: [
          { name: "Assorted", hex: "#8a8a8a" },
        ],
      },
    ],
  },
  {
    slug: "tunics",
    name: "Modest Tops & Tunics",
    shortName: "Tops & Tunics",
    description:
      "Longline, oversized, and flared modest tops and tunics cut to layer over trousers or a skirt, filling the gap between a standard top and a full abaya for buyers building a modest separates range.",
    content: `
      <p>Modest tops and tunics fill a gap in most wholesale ranges: customers who want daily coverage without committing to a full abaya every day, and who build outfits from separates rather than one-piece garments. Length and cut are what separate this category from a standard top &mdash; every style here is drafted long enough to cover the hip at minimum, with the wider silhouettes running to mid-thigh.</p>
      <p>We produce this range across cotton, linen, and jersey bases depending on the silhouette, with construction detail (button plackets, peplum seams, embroidery placement) driving most of the cost difference between styles rather than fabric alone. It's a natural complement category for buyers who already stock our hijab and skirt ranges and want to offer complete separates-based outfits.</p>
    `,
    heroImage: placeholder("cat-tunics-hero", "Woman wearing an oversized button-down modest tunic with a hijab"),
    cardImage: placeholder("cat-tunics-card", "Woman wearing a printed oversized tunic with puff sleeves"),
    keywords: [
      "modest tunic manufacturer",
      "wholesale modest tops supplier",
      "longline tunic manufacturer India",
      "modest fashion separates wholesale",
    ],
    subcategories: [
      {
        slug: "longline",
        name: "Longline Tops",
        shortDescription: "Extended-length top covering to the hip or below, the base cut for this category.",
        description:
          "Longline tops extend past a standard top's hem to cover the hip or below, the base construction most of our other tunic styles build from. It's cut close enough through the body to layer under a cardigan or open abaya without adding bulk, unlike our fuller oversized and flared cuts. This is the entry-point SKU for buyers new to the tunic category, since one silhouette works across the widest range of styling occasions. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-tunics-longline-1", "Model wearing a longline modest top with a hijab"),
          placeholder("subcat-tunics-longline-2", "Model wearing a longline top styled with wide-leg trousers"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "oversized",
        name: "Oversized Tunics",
        shortDescription: "Relaxed, boxy fit through the body for a loose, comfortable daily layer.",
        description:
          "Oversized tunics use a boxy, relaxed body block that skips waist shaping entirely, giving a loose, comfortable daily layer that suits a wide range of body shapes without needing multiple fitted sizes. It's the style our buyers reorder most for casual, everyday-adjacent ranges, since the relaxed fit reduces size-related returns compared to our more fitted longline cut. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-tunics-oversized-1", "Model wearing an oversized button-down tunic over jeans"),
          placeholder("subcat-tunics-oversized-2", "Model wearing an oversized navy tunic with a hijab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Lavender", hex: "#c9b8e0" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "flared",
        name: "Flared Tunics",
        shortDescription: "A-line flare from the bust for movement and a more feminine silhouette than a boxy cut.",
        description:
          "Flared tunics introduce an A-line flare from the bust down, giving a more feminine, movement-forward silhouette than our boxy oversized cut without going as fitted as our longline style. The flare is built into the pattern rather than gathered at a seam, so it hangs evenly rather than bunching at one point. It's a strong option for buyers whose customers want tunics with visible shape rather than a purely relaxed fit. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-tunics-flared-1", "Model wearing a flared A-line tunic with a hijab"),
          placeholder("subcat-tunics-flared-2", "Model wearing a flared tunic with floral sleeve detail"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "button-down",
        name: "Button-Down Tunics",
        shortDescription: "Full-length button placket for a shirt-style tunic that can be worn open or closed.",
        description:
          "Button-down tunics carry a full-length button placket rather than a pull-on construction, letting the same piece be worn fully closed, partially open over a top, or fully open as a light layering piece. This flexibility is the main reason distributors reorder it as a single SKU that serves multiple styling occasions. Buttonhole and button hardware are available in tonal or contrast finishes for private label branding. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-tunics-button-down-1", "Model wearing an oversized button-down tunic with a hijab"),
          placeholder("subcat-tunics-button-down-2", "Model wearing a printed button-down tunic with puff sleeves"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "peplum",
        name: "Peplum Tunics",
        shortDescription: "Fitted bodice with a gathered peplum flare at the waist for a defined, structured silhouette.",
        description:
          "Peplum tunics fit through the bodice and add a gathered flare panel at the waist, giving a more structured, defined silhouette than our other tunic cuts. The peplum seam is the main construction cost driver on this style, since it requires an additional pattern piece and seam finish beyond a single-panel cut. It's positioned as a step-up, going-out-adjacent style rather than a purely casual daily top. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-tunics-peplum-1", "Model wearing a peplum-waist tunic with button detail"),
          placeholder("subcat-tunics-peplum-2", "Model wearing a peplum-style longline tunic in pinstripe fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Burgundy", hex: "#6d2130" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "jersey",
        name: "Jersey Tunics",
        shortDescription: "Stretch jersey base for a softer, more casual tunic than our woven cotton and linen styles.",
        description:
          "Jersey tunics use a stretch knit base rather than woven cotton or linen, giving a softer hand-feel and more forgiving fit for customers who want a casual, athleisure-adjacent tunic. The added stretch also makes it easier to layer under a fitted outer piece without pulling at the seams. It's the fabric we recommend pairing with our jersey hijab range for a fully coordinated casual line. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-tunics-jersey-1", "Model wearing a soft jersey tunic with a hijab"),
          placeholder("subcat-tunics-jersey-2", "Model wearing a jersey longline top styled casually"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal Heather", hex: "#5c5c5c" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
      {
        slug: "cotton",
        name: "Cotton Tunics",
        shortDescription: "Breathable woven cotton for hot-climate daily wear with a crisper structure than jersey.",
        description:
          "Cotton tunics use a breathable woven cotton base, holding a crisper structure than our jersey line while staying cooler than synthetic-blend fabrics in hot, humid climates. It's the fabric most buyers choose for our button-down and oversized silhouettes specifically, since cotton presses and holds a crease better than a stretch knit. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-tunics-cotton-1", "Model wearing an oversized cotton tunic over trousers"),
          placeholder("subcat-tunics-cotton-2", "Model wearing a cotton tunic with a hijab in an outdoor setting"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Sand", hex: "#d9c7a3" },
        ],
      },
      {
        slug: "linen",
        name: "Linen Tunics",
        shortDescription: "Natural linen-blend fabric for a visibly textured, earthy-toned tunic range.",
        description:
          "Linen tunics bring our natural, visibly textured linen blend into the tunic category, aimed at buyers whose customers respond to an earthy, less polished aesthetic than our smoother cotton and jersey lines. Linen takes muted, natural dye tones particularly well and develops a soft hand-feel with wear rather than pilling. It's a lower-volume, specialty fabric compared to our cotton and jersey tunics. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-tunics-linen-1", "Model wearing a linen-blend tunic with a hijab outdoors"),
          placeholder("subcat-tunics-linen-2", "Model wearing a flared linen tunic in a natural tone"),
        ],
        colors: [
          { name: "Natural", hex: "#ddd2bc" },
          { name: "Sand", hex: "#d9c7a3" },
          { name: "Charcoal", hex: "#4a4a4a" },
        ],
      },
      {
        slug: "embroidered",
        name: "Embroidered Tunics",
        shortDescription: "Thread embroidery detail at the neckline or sleeve for a premium, occasion-adjacent tunic.",
        description:
          "Embroidered tunics add a thread-embroidered motif at the neckline, cuff, or hem, positioned as a premium step-up above our plain tunic styles rather than full bridal-tier embellishment. Thread color, density, and placement are all customizable per order. It's the style most often chosen for gifting and festive-adjacent retail displays where a tunic needs to read as more than a basic daily top. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-tunics-embroidered-1", "Model wearing an embroidered oversized tunic with a hijab"),
          placeholder("subcat-tunics-embroidered-2", "Close-up of embroidered detail on a modest tunic"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Burgundy", hex: "#6d2130" },
        ],
      },
      {
        slug: "layering",
        name: "Layering Tunics",
        shortDescription: "Lightweight open-front tunic designed to be worn over another top rather than alone.",
        description:
          "Layering tunics are cut deliberately lighter and looser than our other styles, designed from the start to be worn open over another top or dress rather than as a standalone piece. It fills a similar role to a light cardigan but in a longer, more structured tunic length. This is a strong complement SKU for buyers who want to extend a core top or dress range into more layered, cooler-weather-appropriate looks without a full new garment category. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-tunics-layering-1", "Model wearing a longline layering tunic over a printed top"),
          placeholder("subcat-tunics-layering-2", "Model wearing a peplum tunic layered over a coordinating top"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
    ],
  },
  {
    slug: "skirts",
    name: "Modest Skirts",
    shortName: "Skirts",
    description:
      "Maxi, pleated, A-line, and straight-cut modest skirts, drafted to a floor-grazing or ankle length across cotton, jersey, satin, and denim bases for a full modest separates range.",
    content: `
      <p>A modest skirt is defined almost entirely by length and fullness rather than any single fabric, which is why we run the same core silhouettes &mdash; maxi, pleated, A-line, straight-cut, and tiered &mdash; across multiple fabric bases rather than tying a cut to one material. Every style is drafted to a floor-grazing or ankle length as standard, with waistbands sized generously enough to sit comfortably under a longline top or tunic.</p>
      <p>This category is built as a companion range to our tops and tunics line: buyers building complete separates-based outfits typically order matching or coordinating skirts and tops from the same fabric lot to guarantee a shade match across the full look. Custom waistband elastic, drawstring, or zip-fly construction is available for private label orders.</p>
    `,
    heroImage: placeholder("cat-skirts-hero", "Woman wearing a long maxi skirt with a hijab"),
    cardImage: placeholder("cat-skirts-card", "Woman wearing a flared floral maxi skirt with a hijab"),
    keywords: [
      "modest skirt manufacturer",
      "wholesale maxi skirt supplier",
      "pleated modest skirt manufacturer India",
      "modest fashion separates wholesale",
    ],
    subcategories: [
      {
        slug: "maxi",
        name: "Maxi Skirts",
        shortDescription: "Our base floor-length skirt cut, straight through the hip with a soft fall to the floor.",
        description:
          "Maxi skirts are our base floor-length cut, sitting straight through the hip with enough fabric ease to fall softly to the floor without clinging. It's the silhouette most other cuts in this category build from, and the one we recommend as an opening SKU for buyers new to the skirt category. Waistband options include elastic, drawstring, or a fitted zip-fly depending on the fabric base. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-maxi-1", "Model wearing a floor-length maxi skirt with a hijab"),
          placeholder("subcat-skirts-maxi-2", "Model wearing a straight-cut maxi skirt in an urban setting"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "pleated",
        name: "Pleated Skirts",
        shortDescription: "Permanent heat-set pleats from waist to hem for structured movement and fall.",
        description:
          "Pleated skirts use heat-set pleats running the full length from waist to hem, giving structured, defined movement that a flat maxi cut doesn't produce. The pleats are permanently set rather than pressed, so they survive machine washing without needing to be re-ironed between wears. It's a strong step-up SKU above our plain maxi skirt for buyers who want more visual interest at a similar price point. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-pleated-1", "Model wearing a pleated black maxi skirt with a printed hijab"),
          placeholder("subcat-skirts-pleated-2", "Model wearing a pleated skirt with a wide sun hat over a hijab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Grey", hex: "#8a8a8a" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "a-line",
        name: "A-Line Skirts",
        shortDescription: "Gentle flare from the waist for a classic, universally flattering silhouette.",
        description:
          "A-line skirts flare gently from the waist down, giving a classic, universally flattering silhouette that sits between our fitted straight-cut and our fuller flared styles. The flare is built into the pattern rather than gathered, so it hangs evenly without bunching at the waistband. It's the safest default recommendation we give buyers unsure which silhouette their market prefers. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-a-line-1", "Model wearing an A-line skirt with a white top and hijab"),
          placeholder("subcat-skirts-a-line-2", "Model wearing a pleated A-line skirt with a sun hat"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
      {
        slug: "flared",
        name: "Flared Skirts",
        shortDescription: "Fuller circular flare than our A-line cut, for more visible movement and swing.",
        description:
          "Flared skirts use a fuller circular-cut flare than our A-line style, giving more visible movement and swing when walking. This uses more fabric per unit than a straight or A-line cut, which is reflected in a modest per-unit cost increase. It's the style our buyers reorder most for warm-climate markets where a fuller, breezier skirt is preferred over a fitted silhouette. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-flared-1", "Model wearing a straight-cut skirt with a belt and hijab"),
          placeholder("subcat-skirts-flared-2", "Model wearing a satin pleated skirt with visible movement"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Teal", hex: "#1f7a6c" },
        ],
      },
      {
        slug: "straight-cut",
        name: "Straight-Cut Skirts",
        shortDescription: "Fitted, column silhouette with a rear vent or kick pleat for ease of movement.",
        description:
          "Straight-cut skirts hold a fitted, column silhouette from waist to hem rather than flaring, with a rear vent or kick pleat built into the hem specifically so the fitted cut doesn't restrict walking. This is our most tailored, office-and-formal-adjacent skirt style, positioned above our casual maxi and A-line cuts. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-skirts-straight-cut-1", "Model wearing a fitted straight-cut skirt with a belt and hijab"),
          placeholder("subcat-skirts-straight-cut-2", "Model wearing a straight maxi skirt with a hijab on steps"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Grey", hex: "#8a8a8a" },
        ],
      },
      {
        slug: "denim-maxi",
        name: "Denim Maxi Skirts",
        shortDescription: "Structured denim base for a casual, durable everyday skirt.",
        description:
          "Denim maxi skirts bring our maxi silhouette to a structured denim base, giving a more durable, casual-everyday option than our fluid woven and knit fabrics. The heavier fabric holds a straighter line at the hem than our lighter maxi skirts, and it's the style buyers reorder most for youth and casual-wear-focused retail ranges. Offered from 300 pieces per color, in standard indigo and black washes.",
        images: [
          placeholder("subcat-skirts-denim-maxi-1", "Model wearing a pleated skirt styled casually with a sun hat"),
          placeholder("subcat-skirts-denim-maxi-2", "Model wearing a black pleated maxi skirt with a printed hijab"),
        ],
        colors: [
          { name: "Indigo", hex: "#2c3e6b" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Grey Wash", hex: "#7a8494" },
        ],
      },
      {
        slug: "satin",
        name: "Satin Skirts",
        shortDescription: "High-sheen satin base for an occasion-adjacent skirt with a fluid drape.",
        description:
          "Satin skirts use our high-sheen satin weave, giving a fluid, weighted drape and glossy finish suited to occasion and evening-adjacent styling rather than daily casual wear. It pairs naturally with our satin and silk tunic and hijab lines for a coordinated occasion outfit. The glossier surface shows creasing more visibly than matte fabrics, so garments ship on a hanger rather than folded for retail accounts that request it. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-skirts-satin-1", "Model wearing a satin-look pleated maxi skirt"),
          placeholder("subcat-skirts-satin-2", "Model wearing an A-line skirt in a glossy satin fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Wine", hex: "#722f37" },
        ],
      },
      {
        slug: "jersey",
        name: "Jersey Skirts",
        shortDescription: "Stretch jersey construction for a soft, comfortable everyday maxi skirt.",
        description:
          "Jersey skirts use a stretch knit base rather than a woven fabric, giving a softer, more comfortable fit for daily wear and easier care than our structured cotton and satin styles. The added stretch also makes one size range fit a wider variety of body shapes. It's the fabric we recommend pairing with our jersey hijab and tunic ranges for a fully coordinated casual line. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-jersey-1", "Model wearing a soft flared skirt styled casually"),
          placeholder("subcat-skirts-jersey-2", "Model wearing a pleated skirt with a relaxed, casual fit"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal Heather", hex: "#5c5c5c" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "cotton",
        name: "Cotton Skirts",
        shortDescription: "Breathable woven cotton for hot-climate daily wear with a crisper structure than jersey.",
        description:
          "Cotton skirts use a breathable woven cotton base, holding a crisper structure than our jersey line while staying cooler than synthetic-blend fabrics in hot, humid climates. It's the fabric most buyers choose for our A-line and straight-cut silhouettes specifically, since cotton presses and holds a crease better than a stretch knit. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-cotton-1", "Model wearing a floral maxi skirt with a hijab outdoors"),
          placeholder("subcat-skirts-cotton-2", "Model wearing a satin-finish skirt in a natural setting"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Sand", hex: "#d9c7a3" },
        ],
      },
      {
        slug: "tiered",
        name: "Tiered Skirts",
        shortDescription: "Stacked ruffle-tier construction for a boho-adjacent, romantic silhouette.",
        description:
          "Tiered skirts stack multiple gathered fabric tiers from waist to hem, giving a boho-adjacent, romantic silhouette with more visible volume than our other flared cuts. Each tier is cut and gathered separately before assembly, which is the main construction cost driver on this style compared to a single-panel maxi skirt. It's a strong seasonal or occasion-adjacent addition to a primarily solid-color skirt range. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-skirts-tiered-1", "Model wearing a pleated skirt styled with a wide sun hat"),
          placeholder("subcat-skirts-tiered-2", "Model wearing a maxi skirt with visible tiered movement"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
    ],
  },
  {
    slug: "kaftans",
    name: "Kaftans",
    shortName: "Kaftans",
    description:
      "Moroccan and Turkish-influenced kaftans in embroidered, beaded, satin, and silk finishes, cut for occasion and evening wear with full modest coverage.",
    content: `
      <p>A kaftan differs from our abaya range mainly in construction philosophy: where an abaya is drafted for daily wear first and occasion styling second, a kaftan is built around embellishment and drape from the outset, usually on a wider, more flowing body block that showcases beading, embroidery, or a printed pattern rather than a clean minimal line. It's a category we position for boutique, gifting, and occasion-adjacent retail rather than daily-wear volume racks.</p>
      <p>Construction ranges from lightweight chiffon and satin bases for warm-climate occasion wear through to heavier embroidered and beaded pieces built for evening and bridal-adjacent events. Every style in this category maintains full coverage through the body and sleeve, styled with a hijab in our reference photography, consistent with the rest of our catalog.</p>
    `,
    heroImage: placeholder("cat-kaftans-hero", "Woman wearing an embellished blush kaftan with beaded embroidery and a hijab"),
    cardImage: placeholder("cat-kaftans-card", "Woman wearing a beaded pink evening kaftan with a hijab"),
    keywords: [
      "kaftan manufacturer India",
      "wholesale kaftan supplier",
      "Moroccan kaftan manufacturer",
      "embroidered kaftan wholesale",
    ],
    subcategories: [
      {
        slug: "moroccan",
        name: "Moroccan Kaftans",
        shortDescription: "Wide-sleeve, richly trimmed silhouette in the North African kaftan tradition.",
        description:
          "Moroccan kaftans follow the wide, dramatic sleeve and richly trimmed neckline of the North African tradition, usually finished with contrast piping or braided trim along every seam. It's the most recognizable kaftan silhouette in our range and the reference point most buyers mean when they order a kaftan without specifying further. Trim color and placement are customizable for private label buyers building a signature look. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-kaftans-moroccan-1", "Model wearing a blue Moroccan-style kaftan with black bow trim and a hijab"),
          placeholder("subcat-kaftans-moroccan-2", "Model wearing a blush Moroccan-style kaftan with gold beaded trim"),
        ],
        colors: [
          { name: "Royal Blue", hex: "#1f3a93" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
      {
        slug: "turkish",
        name: "Turkish Kaftans",
        shortDescription: "Straighter body block with panel embroidery down the front, a more tailored kaftan cut.",
        description:
          "Turkish kaftans use a straighter, less voluminous body block than our Moroccan styles, with embroidery or embellishment concentrated in a vertical front panel rather than spread across the full garment. This gives a more tailored, contemporary read while keeping the loose, unstructured comfort that defines the category. It's a strong option for buyers who find fully voluminous kaftans too costume-like for their market. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-kaftans-turkish-1", "Model wearing a black tailored kaftan with a straw hat and hijab"),
          placeholder("subcat-kaftans-turkish-2", "Model wearing a navy kaftan with embroidered front panel detail"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "embroidered",
        name: "Embroidered Kaftans",
        shortDescription: "Thread embroidery in custom motifs, developed in-house or to a buyer's own reference.",
        description:
          "Embroidered kaftans carry a thread-embroidered motif across the neckline, cuffs, or front panel, fully customizable to a buyer's own pattern or one we develop in-house from a reference image. Thread color, density, and placement are all specified per order. This is the finish most often ordered as a fully custom design for a specific retail season or event rather than a repeat catalog SKU. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-kaftans-embroidered-1", "Model wearing a white kaftan with metallic embroidered pattern and hijab"),
          placeholder("subcat-kaftans-embroidered-2", "Close-up of glittering embroidered detail on a kaftan bodice"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "beaded",
        name: "Beaded Kaftans",
        shortDescription: "Hand-set beadwork in geometric or floral patterns for a statement occasion piece.",
        description:
          "Beaded kaftans use hand-set beadwork in geometric or floral patterns rather than machine-embroidered thread, giving more dimension and sparkle at the cost of a longer production lead time. Bead density ranges from an accent trim to a fully beaded bodice, priced accordingly. This is our highest-embellishment-weight kaftan tier, built exclusively on structured satin and crepe bases that hold the added weight without drooping. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-kaftans-beaded-1", "Close-up of intricate pearl beadwork on a red and gold kaftan"),
          placeholder("subcat-kaftans-beaded-2", "Close-up of green beaded calligraphic embroidery on a white kaftan"),
        ],
        colors: [
          { name: "Red", hex: "#8e2130" },
          { name: "Gold", hex: "#c9a635" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "satin",
        name: "Satin Kaftans",
        shortDescription: "High-sheen satin base for a fluid, photograph-ready kaftan drape.",
        description:
          "Satin kaftans use our high-sheen satin weave as a base, giving a fluid, weighted drape that holds embellishment placement without shifting through a full event. The glossy finish reflects light well in both daylight and flash photography. It's offered plain or as a base for any of our embroidered or beaded finishes, and pairs naturally with our satin hijab and abaya lines for a coordinated occasion outfit. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-kaftans-satin-1", "Model wearing a blush satin kaftan with beaded embroidery and hijab"),
          placeholder("subcat-kaftans-satin-2", "Model wearing a pink beaded satin evening kaftan"),
        ],
        colors: [
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
      {
        slug: "silk",
        name: "Silk Kaftans",
        shortDescription: "Genuine mulberry silk base for our top kaftan tier, with a natural fiber sheen.",
        description:
          "Silk kaftans run on genuine mulberry silk rather than a satin substitute, positioned as our top kaftan tier for boutique and gifting buyers whose customers specifically ask for real silk. The natural fiber's sheen and weight give a drape that moves and photographs differently from satin. Every piece is individually inspected before packaging, consistent with our luxury hijab and bridal silk standards. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-kaftans-silk-1", "Model wearing a navy silk kaftan with embroidered cuff detail"),
          placeholder("subcat-kaftans-silk-2", "Model wearing a blue silk kaftan with black embellishment and hijab"),
        ],
        colors: [
          { name: "Navy", hex: "#202a44" },
          { name: "Royal Blue", hex: "#1f3a93" },
          { name: "Black", hex: "#1a1a1a" },
        ],
      },
      {
        slug: "printed",
        name: "Printed Kaftans",
        shortDescription: "Digitally printed pattern development for younger, fashion-forward kaftan ranges.",
        description:
          "Printed kaftans bring our in-house digital print studio to the kaftan silhouette, giving buyers pattern variety beyond the solid-and-embellished styles that dominate this category. Digital printing holds fine pattern detail well and colors stay sharp through repeated washing. It's aimed at younger, fashion-forward customer segments who reorder for new prints more than they reorder solids. Strike-off samples typically turn around in under two weeks. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-kaftans-printed-1", "Close-up of glittering embroidered pattern detail on a kaftan"),
          placeholder("subcat-kaftans-printed-2", "Model wearing a black tailored kaftan with pattern detail and hijab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Rust", hex: "#b5502c" },
        ],
      },
      {
        slug: "bridal",
        name: "Bridal Kaftans",
        shortDescription: "Heavily embellished kaftan silhouette positioned as a bridal party or nikah alternative to a gown.",
        description:
          "Bridal kaftans bring our heaviest embellishment tiers to the kaftan silhouette, positioned as an alternative to a bridal abaya or gown for nikah, engagement, and bridal party styling. The wider kaftan cut suits guests and bridal party members who want a coordinated but distinct silhouette from the bride's own piece. Custom color-matching to a wedding palette is available for bridal party orders. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-kaftans-bridal-1", "Model wearing a white kaftan with green beaded calligraphic embroidery and hijab"),
          placeholder("subcat-kaftans-bridal-2", "Close-up of hand-set pearl beadwork on a red and gold bridal kaftan"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
      {
        slug: "evening",
        name: "Evening Kaftans",
        shortDescription: "Fitted bodice with a fuller tulle or chiffon skirt for a gown-adjacent evening silhouette.",
        description:
          "Evening kaftans fit through the bodice before flaring into a fuller tulle or chiffon skirt, giving a gown-adjacent silhouette dressier than our other kaftan cuts. Beading and embroidery concentrate at the bodice where they catch the most light under evening venue lighting. It's the style buyers reorder most for formal, non-bridal event wear &mdash; galas, receptions, and formal dinners. Produced from 75 pieces per design.",
        images: [
          placeholder("subcat-kaftans-evening-1", "Model wearing a pink beaded evening kaftan with a fitted bodice and hijab"),
          placeholder("subcat-kaftans-evening-2", "Close-up of hand-set beadwork on a red evening kaftan bodice"),
        ],
        colors: [
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Red", hex: "#8e2130" },
          { name: "Black", hex: "#1a1a1a" },
        ],
      },
      {
        slug: "casual",
        name: "Casual Kaftans",
        shortDescription: "Lighter, unembellished kaftan cut for warm-climate daily wear rather than occasion styling.",
        description:
          "Casual kaftans strip the category back to a simple, unembellished silhouette on a lightweight chiffon or cotton-blend base, positioned for warm-climate daily wear rather than occasion styling. It's the entry point for buyers who want the relaxed kaftan silhouette without the embellishment cost of our beaded or embroidered tiers. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-kaftans-casual-1", "Model wearing a simple blue kaftan with a hijab in a relaxed pose"),
          placeholder("subcat-kaftans-casual-2", "Model wearing a navy kaftan styled casually with embroidered cuffs"),
        ],
        colors: [
          { name: "Royal Blue", hex: "#1f3a93" },
          { name: "Navy", hex: "#202a44" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Sand", hex: "#d9c7a3" },
        ],
      },
    ],
  },
  {
    slug: "hijab-accessories",
    name: "Hijab Accessories",
    shortName: "Accessories",
    description:
      "Pins, clips, magnets, and brooches for securing and finishing a hijab, sold as a bulk accessory line alongside our garment categories rather than sourced separately.",
    content: `
      <p>Hijab accessories are a small-object category we manufacture and source as a bulk accessory line specifically because our distributor accounts asked to stop sourcing fastening hardware separately from their garment orders. Every accessory here is developed against the same standard we hold garments to: hardware that holds under repeated daily use rather than looking good in a single product photo and failing after a week.</p>
      <p>This is a low-cost, high-repeat-order category, typically sold in bulk multi-packs and bundled with hijab or khimar orders rather than as a standalone hero purchase. Custom finishes and packaging (including branded retail card mounts) are available for private label buyers.</p>
    `,
    heroImage: placeholder("cat-hijab-accessories-hero", "Assorted pearl hair pins and gold accessories arranged for display"),
    cardImage: placeholder("cat-hijab-accessories-card", "Close-up of a small gold decorative pin fastened to fabric"),
    keywords: [
      "hijab pins wholesale",
      "hijab accessories manufacturer",
      "hijab magnet supplier",
      "hijab brooch wholesale India",
    ],
    subcategories: [
      {
        slug: "magnets",
        name: "Hijab Magnets",
        shortDescription: "Concealed magnetic closure for a pin-free fasten with no fabric puncture.",
        description:
          "Hijab magnets use a two-piece concealed magnet rather than a pin, closing fabric layers without puncturing the material at all. This is the fastest-growing fastener style in our accessory range, driven by customers who've had hijabs damaged by repeated pin holes in the same spot. Magnet strength is tested against our own chiffon and jersey weights to hold securely without being difficult to separate. Sold in bulk multi-packs from 500 sets per finish.",
        images: [
          placeholder("subcat-hijab-acc-magnets-1", "Close-up of a decorative gold pin used to fasten hijab fabric"),
          placeholder("subcat-hijab-acc-magnets-2", "Close-up of a small gold pin fastened to a fold of fabric"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Rose Gold", hex: "#d9a89c" },
        ],
      },
      {
        slug: "pins",
        name: "Hijab Pins",
        shortDescription: "Standard straight decorative pin, the most common hijab fastener sold at retail.",
        description:
          "Hijab pins are a straight decorative pin with a secure locking clasp, the most common fastener sold at hijab retail counters worldwide. Ours use a stainless pin core under a decorative gold or silver head so the pin doesn't rust or discolor with repeated use. It's the default accessory bundled into our starter packs and gift sets. Sold in bulk multi-packs from 500 pieces per finish.",
        images: [
          placeholder("subcat-hijab-acc-pins-1", "Close-up of the pin clasp mechanism on a decorative flower brooch"),
          placeholder("subcat-hijab-acc-pins-2", "Close-up of a gold hair clip pinned to striped fabric"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Rose Gold", hex: "#d9a89c" },
        ],
      },
      {
        slug: "safety-pins",
        name: "Safety Pins",
        shortDescription: "Enclosed-point pin for the securest hold and the lowest snag or scratch risk.",
        description:
          "Safety pins fully enclose the sharp point when closed, making them the securest and lowest-risk fastener in our range for customers concerned about a pin working loose or scratching. It's a practical, unglamorous accessory that distributors reorder at higher volume than any decorative pin style precisely because it's the most functional option. Sold in bulk multi-packs from 1,000 pieces per finish.",
        images: [
          placeholder("subcat-hijab-acc-safety-pins-1", "Close-up of a pearl-bordered decorative pin on dark fabric"),
          placeholder("subcat-hijab-acc-safety-pins-2", "Close-up of cream hair clips displayed in a shell dish"),
        ],
        colors: [
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Gold", hex: "#c9a635" },
          { name: "Black", hex: "#1a1a1a" },
        ],
      },
      {
        slug: "brooches",
        name: "Brooches",
        shortDescription: "Decorative statement pin sized for a visible finishing detail rather than a hidden fastener.",
        description:
          "Brooches are sized and designed to be seen, used as a finishing detail at the collarbone or temple rather than a hidden functional fastener. Buyers stock this style for gifting and occasion-adjacent ranges where the accessory itself is part of the styling rather than purely functional hardware. Motifs and stone colors are customizable for private label orders. Sold in bulk multi-packs from 300 pieces per design.",
        images: [
          placeholder("subcat-hijab-acc-brooches-1", "Close-up of a small gold leaf-and-pearl brooch pinned to a coat lapel"),
          placeholder("subcat-hijab-acc-brooches-2", "Assorted pearl hair pins and brooches arranged for display"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Pearl White", hex: "#f3ece2" },
          { name: "Silver", hex: "#c7c7c7" },
        ],
      },
      {
        slug: "clips",
        name: "Hijab Clips",
        shortDescription: "Spring-hinge clip for gathering fabric volume without a pin or magnet.",
        description:
          "Hijab clips use a spring-hinge mechanism to gather and hold fabric volume, most often used at the crown or nape to secure a wrap style in place. It's a faster, no-puncture alternative to a pin for customers styling rather than simply fastening their hijab. Offered in both plain and decorative finishes. Sold in bulk multi-packs from 500 pieces per finish.",
        images: [
          placeholder("subcat-hijab-acc-clips-1", "Close-up of a gold hair clip pinned to striped fabric"),
          placeholder("subcat-hijab-acc-clips-2", "Close-up of a decorative gold pin used to fasten hijab fabric"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Tortoiseshell", hex: "#6b4a2f" },
        ],
      },
      {
        slug: "rings",
        name: "Hijab Rings",
        shortDescription: "Fabric-gathering ring accessory for a cinched, styled drape without pinning.",
        description:
          "Hijab rings gather loose fabric through a decorative ring rather than pinning or clipping it, creating a cinched, styled drape at the shoulder or side that's popular in wrap-style tutorials. It's a styling accessory more than a functional fastener, and buyers typically stock it alongside instant and luxury hijab ranges where a more finished, styled look is part of the sell. Sold in bulk multi-packs from 300 pieces per finish.",
        images: [
          placeholder("subcat-hijab-acc-rings-1", "Close-up of cream hair clips and a pearl bracelet displayed together"),
          placeholder("subcat-hijab-acc-rings-2", "Close-up of the pin clasp mechanism on a decorative flower brooch"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Rose Gold", hex: "#d9a89c" },
        ],
      },
      {
        slug: "grippers",
        name: "Hijab Grippers",
        shortDescription: "Small friction-grip clip designed to hold an underscarf edge in place all day.",
        description:
          "Hijab grippers are a small, low-profile friction clip designed specifically to hold the edge of an underscarf or inner cap in place under an outer hijab layer through a full day of wear, rather than to be seen. It's a practical companion accessory to our inner cap range, addressing the same all-day-slip complaint that drove the grip-band design on our cotton inner caps. Sold in bulk multi-packs from 500 pieces per finish.",
        images: [
          placeholder("subcat-hijab-acc-grippers-1", "Assorted pearl hair pins arranged with jewelry for display"),
          placeholder("subcat-hijab-acc-grippers-2", "Close-up of a pearl-bordered decorative pin on dark fabric"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Clear", hex: "#e8e6e1" },
        ],
      },
      {
        slug: "tape",
        name: "Hijab Tape",
        shortDescription: "Double-sided fabric-safe tape for a completely pin-free, invisible fasten.",
        description:
          "Hijab tape is a double-sided, fabric-safe adhesive strip for customers who want a completely pin-free, invisible fasten, particularly for delicate chiffon and silk where a pin can snag or pull threads. It's a single-use consumable rather than a reusable hardware accessory, so it's sold in higher-count packs than our pins and clips. Sold in bulk multi-packs from 1,000 strips per pack.",
        images: [
          placeholder("subcat-hijab-acc-tape-1", "Close-up of a decorative gold pin used to fasten hijab fabric"),
          placeholder("subcat-hijab-acc-tape-2", "Close-up of cream hair clips displayed in a shell dish"),
        ],
        colors: [
          { name: "Clear", hex: "#e8e6e1" },
        ],
      },
      {
        slug: "decorative-pins",
        name: "Decorative Pins",
        shortDescription: "Fashion-forward pin designs in seasonal motifs for retail impulse-add merchandising.",
        description:
          "Decorative pins rotate through seasonal motifs and finishes, developed as an impulse-add, checkout-counter merchandising item rather than a core stocked SKU. Buyers reorder new designs each season to keep the display fresh, similar to how our printed scarf program rotates patterns. Custom motifs are available for private label buyers running seasonal retail campaigns. Sold in bulk multi-packs from 300 pieces per design.",
        images: [
          placeholder("subcat-hijab-acc-decorative-pins-1", "Close-up of the pin clasp mechanism on a decorative flower brooch"),
          placeholder("subcat-hijab-acc-decorative-pins-2", "Assorted pearl hair pins and brooches arranged for display"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Rose Gold", hex: "#d9a89c" },
          { name: "Pearl White", hex: "#f3ece2" },
        ],
      },
      {
        slug: "magnetic-brooch-sets",
        name: "Magnetic Brooch Sets",
        shortDescription: "Decorative brooch head paired with a magnetic back plate, combining both fastener types.",
        description:
          "Magnetic brooch sets pair a decorative brooch head with a magnetic back plate instead of a traditional pin post, combining the visible styling of a brooch with the no-puncture hold of a magnetic fastener. This is our premium accessory tier, priced above single-mechanism pins or magnets, and sold as a matched set rather than separate components. Sold in bulk multi-packs from 200 sets per design.",
        images: [
          placeholder("subcat-hijab-acc-magnetic-brooch-sets-1", "Close-up of a pearl-bordered decorative pin on dark fabric"),
          placeholder("subcat-hijab-acc-magnetic-brooch-sets-2", "Close-up of a gold hair clip pinned to striped fabric"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Silver", hex: "#c7c7c7" },
        ],
      },
    ],
  },
  {
    slug: "bridal-accessories",
    name: "Bridal Accessories",
    shortName: "Bridal Accessories",
    description:
      "Pearl pins, crystal brooches, tiaras, and veils to complete a bridal hijab or bridal abaya look, sold as a finishing accessory line alongside our bridal garment categories.",
    content: `
      <p>Bridal accessories finish a bridal hijab or bridal abaya look the way jewelry finishes a bridal gown &mdash; they're rarely the hero purchase, but a buyer's bridal range is genuinely incomplete without them. We develop this line specifically to coordinate with our Bridal Hijabs and Bridal Abayas categories, so a distributor can offer a bride a fully matched head-to-accessory look from one order rather than sourcing accessories separately.</p>
      <p>Every piece here is built for a single event's wear rather than daily use, which changes the engineering priorities versus our everyday hijab accessories: hold and appearance matter more than long-term durability under repeated use. Custom color-matching to a wedding palette and gift-box packaging are available for bridal party and boutique orders.</p>
    `,
    heroImage: placeholder("cat-bridal-accessories-hero", "Bride wearing a crystal-embellished hijab crown and veil"),
    cardImage: placeholder("cat-bridal-accessories-card", "Close-up of a bridal hijab crown with crystal detail and veil"),
    keywords: [
      "bridal hijab accessories manufacturer",
      "wedding hijab pin supplier",
      "hijab crown wholesale",
      "bridal veil manufacturer India",
    ],
    subcategories: [
      {
        slug: "hijab-pins",
        name: "Bridal Hijab Pins",
        shortDescription: "Occasion-grade decorative pins sized and finished for a single day's bridal wear.",
        description:
          "Bridal hijab pins step up from our everyday hijab pin line with heavier plating and larger decorative heads sized for bridal photography rather than daily practicality. They're built to hold securely through a full ceremony and reception rather than the extended multi-week wear our everyday accessories are tested against. Sold individually or in small sets for bridal party coordination. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-hijab-pins-1", "Bride wearing a crystal-embellished hijab crown"),
          placeholder("subcat-bridal-acc-hijab-pins-2", "Close-up of the pin clasp mechanism on a decorative flower brooch"),
        ],
        colors: [
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Gold", hex: "#c9a635" },
          { name: "Rose Gold", hex: "#d9a89c" },
        ],
      },
      {
        slug: "pearl-pins",
        name: "Pearl Hijab Pins",
        shortDescription: "Individually set pearl-head pins for a classic bridal finishing detail.",
        description:
          "Pearl hijab pins use individually set faux-pearl heads on a secure locking pin, the most classic and most-ordered bridal accessory finish across our regional bridal accounts. Pearl size and pin length are available in a few standard options, and larger custom orders can specify pearl tone (bright white through warmer cream) to match a specific bridal palette. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-pearl-pins-1", "Bride wearing a crystal tiara over a white hijab and veil"),
          placeholder("subcat-bridal-acc-pearl-pins-2", "Close-up of a pearl-bordered decorative pin on dark fabric"),
        ],
        colors: [
          { name: "Pearl White", hex: "#f3ece2" },
          { name: "Cream", hex: "#f5f0e6" },
        ],
      },
      {
        slug: "crystal-brooches",
        name: "Crystal Brooches",
        shortDescription: "Faceted crystal statement brooch for maximum sparkle in bridal photography.",
        description:
          "Crystal brooches use faceted glass stones set in a statement cluster, chosen for how they catch flash photography and venue lighting rather than daylight alone. It's the accessory we recommend pairing with our crystal bridal hijab and crystal bridal abaya lines for a fully coordinated sparkle finish rather than mixing embellishment styles. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-crystal-brooches-1", "Close-up of a pearl and crystal flower brooch on a white background"),
          placeholder("subcat-bridal-acc-crystal-brooches-2", "Close-up of a small gold leaf-and-pearl brooch pinned to a coat lapel"),
        ],
        colors: [
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
      {
        slug: "crowns",
        name: "Bridal Hijab Crowns",
        shortDescription: "Crystal crown-band styled directly onto the hijab drape rather than a separate headpiece.",
        description:
          "Bridal hijab crowns integrate a crystal crown-band directly onto the hijab's hairline drape rather than functioning as a separate headpiece worn on top, giving a cleaner, more intentional bridal silhouette. This is our top-tier bridal accessory, usually reserved for the bride rather than the wider bridal party. It pairs specifically with our crown-style bridal hijab construction, which is drafted to sit cleanly beneath it. Produced from 25 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-crowns-1", "Bride wearing a crystal-embellished hijab crown"),
          placeholder("subcat-bridal-acc-crowns-2", "Bride wearing a crystal tiara over a white hijab and veil"),
        ],
        colors: [
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
      {
        slug: "tiara",
        name: "Hijab Tiara Accessories",
        shortDescription: "Standalone tiara-style headpiece worn over the hijab rather than integrated into it.",
        description:
          "Hijab tiara accessories are a standalone crystal headpiece worn over the completed hijab, distinct from our integrated crown-style hijab where the embellishment is built into the drape itself. This gives buyers a more flexible accessory that can be removed for the reception while the base hijab stays on, versus a crown-style piece that's fixed to the garment. Produced from 25 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-tiara-1", "Close-up of a pearl and crystal flower brooch on a white background"),
          placeholder("subcat-bridal-acc-tiara-2", "Close-up of the pin clasp mechanism on a decorative flower brooch"),
        ],
        colors: [
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
      {
        slug: "veils",
        name: "Bridal Veils",
        shortDescription: "Sheer tulle overlay styled to fall like a traditional veil over a bridal hijab.",
        description:
          "Bridal veils add a sheer tulle layer over a base bridal hijab, styled forward over the face for the ceremony and swept back for the reception, the same dual-look approach as our veil-style bridal hijab garment. Length is available in shoulder, waist, and cathedral options. It's most often ordered alongside a crown or tiara accessory for a complete bridal headpiece look. Produced from 25 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-veils-1", "Close-up of a pearl-bordered decorative pin on dark fabric"),
          placeholder("subcat-bridal-acc-veils-2", "Close-up of a small gold leaf-and-pearl brooch pinned to a coat lapel"),
        ],
        colors: [
          { name: "White", hex: "#faf8f5" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "lace-veils",
        name: "Lace Veils",
        shortDescription: "Scalloped lace-edge veil for a softer, more traditional bridal finish than plain tulle.",
        description:
          "Lace veils finish the tulle edge with a scalloped lace border rather than a raw or simply hemmed edge, giving a softer, more traditional bridal look. It pairs naturally with our bridal lace hijab for a coordinated lace-detail bridal look across the hijab and veil. Lace pattern and border width are available in a couple of standard options. Produced from 25 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-lace-veils-1", "Bride wearing a crystal-embellished hijab crown"),
          placeholder("subcat-bridal-acc-lace-veils-2", "Close-up of a pearl and crystal flower brooch on a white background"),
        ],
        colors: [
          { name: "White", hex: "#faf8f5" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "embellished-hair",
        name: "Embellished Hair Accessories",
        shortDescription: "Decorative pins and clips positioned at the visible hijab edge rather than under it.",
        description:
          "Embellished hair accessories are positioned to be visible at the hijab's front edge or temple rather than hidden underneath it, functioning as a styling detail rather than a structural fastener. This is a flexible, lower-commitment accessory category for bridal party members who want a coordinated look without the cost of a full crown or tiara. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-embellished-hair-1", "Bride wearing a crystal tiara over a white hijab and veil"),
          placeholder("subcat-bridal-acc-embellished-hair-2", "Close-up of the pin clasp mechanism on a decorative flower brooch"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Pearl White", hex: "#f3ece2" },
        ],
      },
      {
        slug: "chains",
        name: "Bridal Hijab Chains",
        shortDescription: "Delicate draped chain accessory styled across the forehead or temple of the hijab.",
        description:
          "Bridal hijab chains drape a delicate metal chain, often with small pearl or crystal accents, across the forehead or from temple to temple over the hijab, a styling detail borrowed from South Asian and Middle Eastern bridal jewelry traditions. It's ordered as a coordinating accessory alongside a crown or tiara rather than as a standalone piece. Produced from 25 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-chains-1", "Bride wearing a crystal-embellished hijab crown"),
          placeholder("subcat-bridal-acc-chains-2", "Close-up of a pearl-bordered decorative pin on dark fabric"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Silver", hex: "#c7c7c7" },
        ],
      },
      {
        slug: "rhinestone",
        name: "Rhinestone Accessories",
        shortDescription: "Budget-tier sparkle accessories using rhinestones rather than cut crystal or pearl.",
        description:
          "Rhinestone accessories use lower-cost rhinestones rather than faceted cut crystal or genuine pearl, giving bridal party buyers a budget-tier sparkle option for larger orders where every attendant needs a coordinated piece. The visual effect reads similarly to our crystal line from a normal viewing distance, at a meaningfully lower unit cost for bulk bridal party orders. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-bridal-acc-rhinestone-1", "Bride wearing a crystal tiara over a white hijab and veil"),
          placeholder("subcat-bridal-acc-rhinestone-2", "Close-up of a small gold leaf-and-pearl brooch pinned to a coat lapel"),
        ],
        colors: [
          { name: "Silver", hex: "#c7c7c7" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
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
