import { placeholder } from "@/lib/placeholder-image";
import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "hijabs",
    name: "Hijabs",
    shortName: "Hijabs",
    description:
      "Chiffon, jersey, modal, and Nida hijabs, finished for a drape and hand-feel that holds up whether you're ordering 500 pieces or 50,000.",
    content: `
      <p>Hijab is usually the first category a new wholesale buyer orders from us, and it's also where fabric choice matters more than people expect going in. We work with four fabric families here: chiffon, jersey, modal, and Nida. Each one solves a different problem for a different kind of customer, and picking one purely because it's cheaper per meter is a decision that tends to show up in your return rate a few months later.</p>
      <p>Chiffon is our highest-volume export fabric &mdash; a 75 gsm matte weave, opaque enough to wear without an underscarf in most climates. It's what most buyers actually mean when they ask for a "standard" hijab, even if they don't use that word. Jersey and modal cover the no-pin, wrap-and-go side of things: four-way stretch, no fraying at the edges, and a softer feel that tends to do better in cooler markets than chiffon does. Nida sits at the more structured end of the range, and it's usually ordered by buyers who are already stocking our Nida abayas and want the headscarf to match.</p>
      <p>Every hijab ships in our standard 42-shade library. Custom Pantone matching is available from 500 pieces per color if you need something outside that range. Standard sizes are 70x180 cm, 75x190 cm, and 80x200 cm, and we can cut custom dimensions on request for markets that want something shorter or fuller.</p>
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
      { name: "Animal Printed", productSlug: "salwa-animal-print-hijab" },
    ],
    subcategories: [
      {
        slug: "georgette",
        name: "Georgette Hijabs",
        shortDescription: "Crinkle-texture georgette with visible movement and a lightweight, non-cling drape.",
        description:
          "This is usually what we point buyers toward when they want more visible texture than chiffon gives them, without adding any weight to the fabric. It's a self-crinkled polyester-viscose weave, and the fold is soft right out of the pack, no steaming needed before a customer can wear it, which also means it photographs well straight off a hanger. Because the crinkle is woven in rather than pressed on, it doesn't flatten out after a few washes the way pleated finishes tend to, and that's the complaint we hear most often about competitors' versions. Offered from 300 pieces per color, and we'll match a specific Pantone if you need one.",
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
          "When a buyer asks for a \"standard\" hijab without specifying fabric, this is usually what they mean, and it's the single largest line running through our factory. The 75 gsm matte weave is opaque enough to wear without an underscarf in most climates, presses flat for retail packaging, and holds a fold that jersey or modal simply can't match. We recommend it to first-time private label buyers specifically because it's the easiest fabric to print, dye, and finish consistently once you're ordering at volume. It's available across the full 42-shade library, starting at 300 pieces per color.",
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
          "Jersey is really about speed. It's a cotton-modal knit with four-way stretch, so customers wrap it and go, no pins, no separate underscarf cap holding anything in place. The knit doesn't fray at the cut edge, which keeps our hemming costs down compared to woven fabrics, and it holds its shape through a full day rather than sagging by afternoon the way some cheaper viscose jerseys do. Of everything in our fabric library, this is the one that reorders best with buyers targeting athleisure-adjacent customers or first-time hijab wearers. We offer it in solid and heathered finishes, from 300 pieces per color.",
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
          "Modal is a step up from standard jersey for buyers who still want that no-pin stretch but with a noticeably softer, silkier feel and less sheen. It's a beechwood-derived fiber blend that drapes closer to the body than cotton jersey without ever clinging, and it takes dye more evenly too, so colors come out richer and more consistent across a full production run. This tends to work well for premium everyday or gifting ranges, where the point is to feel different from a commodity jersey hijab rather than just look different. Offered from 300 pieces per color, with custom blend ratios available on larger orders.",
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
          "Printed modal takes our in-house print studio and puts it on the modal base, so buyers get pattern variety without giving up the fabric's soft, no-pin stretch. Digital printing holds fine floral and botanical detail better than screen printing does at this weight, and because the print is heat-set into the fiber rather than sitting on top of it, colors stay sharp wash after wash. This range tends to do best with younger, fashion-forward customers who reorder for new prints more than they reorder solids. Strike-off samples usually take under two weeks, and production starts at 300 pieces per design.",
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
          "Printed chiffon pairs our standard fabric with custom pattern development, so private label buyers get something genuinely different from just reordering the plain chiffon line. Our print studio can take a new pattern from concept to strike-off sample in under two weeks, and the chiffon base actually holds fine line detail and color saturation better than most printed jersey out there. It's what we recommend when someone wants a signature seasonal print but doesn't want to commit to a full custom-fabric minimum. Production starts at 300 pieces per design, and repeat orders can get Pantone-matched recoloring.",
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
          "Satin is our step-up occasion fabric: a high-gloss sheen and a fluid, weighted drape that reads as formalwear rather than a daily basic. The tighter weave keeps its pressed, glass-smooth finish through transport and retail handling in a way cheaper satin-look alternatives just don't — those tend to dull and mat after a single wash. Buyers usually stock this alongside our luxury silk for evening and bridal-adjacent gifting, where presentation matters as much as the fabric cost itself. Offered from 200 pieces per color, and gift-box packaging is available if you want it.",
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
          "This one runs on genuine mulberry silk, not a synthetic silk-look substitute, and that distinction is exactly what separates a \"luxury\" claim customers believe from one they don't. The natural sheen and weight give a drape no polyester blend fully replicates, and we keep the hem machine-rolled to hold unit costs workable at wholesale volume rather than hand-finishing every single edge. It sits a step below our fully hand-rolled luxury silk line, so it's the practical entry point if you want a genuine silk SKU without paying luxury-tier prices. Offered from 200 pieces per color.",
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
          "Crinkle uses a heat-set texturing process that locks a permanent ripple into the surface, giving real volume and movement that a flat weave just can't produce. Unlike a pressed pleat, this texture survives machine washing without needing to be re-ironed, and that's the reason retail buyers, as opposed to boutique accounts, consistently give us for reordering this finish over pleated alternatives. It pairs naturally with our georgette range if you're building out a full textured-hijab collection. Offered from 300 pieces per color.",
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
          "Cotton voile is what buyers in hot, humid markets ask for once chiffon starts drawing complaints about heat retention. It's lightweight and genuinely breathable in a way synthetic fabric isn't, though the trade-off is a less structured drape and a bit more visible creasing after folding. It works well as a natural-fiber option for customers who specifically ask for cotton, or for a private label range building around a breathable, natural-fiber angle. Offered from 300 pieces per color, and we pre-shrink it to cut down on size variance after the first wash.",
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
          "Ribbed brings a visible vertical rib knit into the hijab line, aimed more at younger customers who wear their hijab closer to streetwear styling than traditional occasion dress. The tighter rib holds more structure than standard jersey, which gives a slightly compressed, sculpted wrap without needing pins to hold it in place. It tends to reorder best alongside our sports and instant hijab ranges, for buyers going after an active, casual-first customer. Offered from 300 pieces per color.",
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
          "Bamboo uses a bamboo-viscose blend, and it markets well to sustainability-conscious customers while also just genuinely feeling softer and wicking moisture better than standard cotton jersey. The fiber's natural antibacterial properties and breathability make it a good fit if you're building an eco or wellness-positioned private label range, and it takes muted, earthy dye tones particularly well. This is a newer addition to our fabric library, added because distributors kept asking for a natural-fiber option beyond cotton. Offered from 300 pieces per color.",
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
          "Chiffon is a woven polyester fabric with a matte finish and enough opacity to skip an underscarf — it holds its shape but doesn't stretch. Jersey and modal are knits with four-way stretch, giving a wrap-and-go fit that chiffon can't, at the cost of the crisp, tailored drape chiffon holds. Buyers serving hot, humid markets usually lead with chiffon; buyers in temperate markets tend to sell more jersey and modal.",
      },
      {
        question: "Can I order hijabs in a fabric that's not listed here?",
        answer:
          "Yes. Georgette, viscose, and cotton hijabs are all things we produce regularly for private label accounts — they're just not carried as standing catalog SKUs. Send us the fabric and target price point and we'll quote a sample.",
      },
    ],
  },
  {
    slug: "abayas",
    name: "Abayas",
    shortName: "Abayas",
    description:
      "Everyday Nida abayas through to hand-embellished occasion pieces, cut and finished at our Mumbai facility to whatever private label spec you send us.",
    content: `
      <p>Abaya is the biggest single line running through our factory, and it's also where cut matters just as much as fabric does. An open-front Nida abaya and an embellished crepe occasion piece share almost nothing in terms of pattern block, seam allowance, or finishing standard, even though a buyer might list both under "abayas" on the same purchase order.</p>
      <p>Our everyday abaya program is built on matte Korean Nida, a fabric with enough body to hold its shape without turning stiff. We finish it with concealed snap closures and reinforced pockets at the side seam, and this is the style our GCC and South Asian accounts come back for order after order. Above that sits our occasion tier: heavier crepe bases that can carry hand-placed stonework and embroidery without the drape distorting, produced in smaller runs starting at 50 units per design, which tends to suit boutique and bridal-adjacent buyers better than a 500-piece minimum would.</p>
      <p>Custom embroidery placement, woven size labels, and custom snap or zip closures are all available across the range for private label orders. Size runs go from 52 to 62 as standard, and we'll do made-to-measure for occasion pieces on request.</p>
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
          "Closed abayas are cut as one continuous piece, no front seam to close, using either a concealed back zip or a pull-over head opening depending on how heavy the fabric is. Taking away the front closure also takes away the most common failure point on an abaya, a snap or zip pull that gives out after repeated use, and that's part of why this silhouette shows the lowest return rate across our range according to distributor feedback. It's the volume style most GCC and South Asian accounts keep reordering season after season, usually run on matte Korean Nida for enough body to hold structure without turning stiff. Offered from 300 pieces per color, with reinforced side-seam pockets as standard.",
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
          "Open abayas are a layering piece from the start: cut with a front opening and no closure, meant to be worn over an underdress, trousers, or a coordinating set rather than sealed shut. The wider armhole and looser body give more visible movement than a closed abaya, which is part of why this silhouette tends to photograph better for social media and e-commerce than it does hanging on a rack. Most buyers pair it with a matching underdress SKU to sell as a two-piece look, without actually manufacturing it as a literal two-piece set. Offered from 300 pieces per color.",
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
          "Butterfly abayas use an exaggerated dolman sleeve that joins to the body in one continuous panel, so the garment sits fairly fitted at rest and then opens into a wide, wing-like shape the moment the arms go up. It's the style buyers reach for in lookbook and runway-adjacent marketing, since the movement photographs dramatically, even though it's cut from the same fabric base as our standard abayas. The wider panel does use more fabric per unit than a fitted sleeve would, so there's a modest cost increase over our closed and everyday lines. Offered from 200 pieces per color.",
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
          "Kimono abayas borrow their straight-line body and wide, uncurved sleeve from kimono tailoring rather than a traditional abaya block, which gives a relaxed, resort-adjacent silhouette buyers tend to stock alongside occasion pieces as a lighter layering option. It's usually finished with a self-fabric tie belt instead of a fitted seam, so one size range covers a wider variety of body shapes than our fitted styles do. This is our best-reordering layering style among warm-climate and resort-market buyers who want abaya-adjacent coverage without the full structure. Offered from 300 pieces per color; the Widad Kimono Abaya is a good example of this cut on a full product.",
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
          "Kloosh, or umbrella-cut, abayas use a circular pattern rather than straight panels, so the hem flares evenly from the shoulder seam the way an umbrella opens, instead of gathering fullness at the waist. It uses noticeably more fabric per unit than a straight-panel abaya, which is the main reason it sits above our everyday styles, but it's also the cut GCC buyers most associate with a premium, traditional silhouette. The even flare holds its shape through walking and movement better than gathered or pleated fullness, which tends to collapse unevenly after a few washes. Offered from 200 pieces per color.",
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
          "Batwing abayas drop the sleeve seam low into the body panel, similar in construction to our butterfly cut, but tapering back toward a narrower hem instead of staying wide throughout, which gives a more wearable, everyday silhouette. The dropped shoulder line is more forgiving across a wide size range than a set-in sleeve, which is why buyers targeting a broad size run tend to prefer it over more fitted options. It sits between our closed and butterfly styles on both fabric usage and price. Offered from 250 pieces per color.",
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
          "Coat and blazer-style abayas bring a structured lapel, collar, and often a self-belt into the pattern, positioning the piece closer to modest outerwear than a traditional abaya. It's cut on a heavier fabric than our fluid styles so the lapel holds its roll without interfacing, and it's usually worn fully open over daywear rather than closed. This is the fastest-growing style in our range right now among buyers targeting younger, fashion-forward customers who want abaya-adjacent coverage that reads as a going-out layer rather than traditional dress. Offered from 200 pieces per color.",
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
          "Front open abayas differ from our general open-silhouette style in one way: they carry a real, functional closure, a full-length row of snaps or buttons, rather than an unclosed layering front. That means the same garment can be worn fully closed, partially open, or as a layering piece, depending on what the customer wants that day. It's mainly why distributors reorder this as one SKU that covers multiple styling occasions instead of stocking separate closed and open lines. Closure hardware comes in tonal or contrast finishes for private label branding. Offered from 250 pieces per color.",
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
          "Two-piece abaya sets split the garment into a coordinating top and skirt instead of one continuous dress, which gives customers independent sizing across the bust and waist that a one-piece cut just can't offer. Buyers sell it as a single matched SKU rather than separates, with both pieces cut from the same fabric lot so the shade matches exactly. It tends to work well for private label ranges targeting fit-conscious customers who've specifically asked for adjustable proportions. Sold as coordinated sets from 200 sets per color.",
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
          "Three-piece abaya sets add a matching inner slip or coordinating hijab to the two-piece top-and-skirt format, so distributors get a complete, ready-to-wear outfit they can merchandise as one gift-ready SKU instead of assembling separates at retail. This format sells strongest through our Eid and occasion-adjacent wholesale accounts, where a complete matched set justifies a higher basket value than separates would. All three pieces are cut and dyed from the same fabric lot, so the shades stay consistent. Sold as coordinated sets from 150 sets per color.",
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
          "Embroidered abayas run on heavier crepe bases specifically because that weight can hold hand-placed stonework and thread embroidery without the drape distorting around the stitched area, which is the defect buyers most often report from cheaper embroidered competitors. Placement, thread color, and motif density are all fully customizable if you're building a signature occasion line, and we support small-batch runs for boutique and bridal-adjacent accounts. This is our highest-margin, lowest-competition abaya tier, produced in small-batch runs from 50 units per design.",
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
          "Everyday abayas strip the category back to what daily-wear customers actually reorder: matte Korean Nida with enough body to hold a clean line, concealed closures that won't snag on a handbag strap, and reinforced side-seam pockets built to survive repeated use. There's no embellishment or dramatic silhouette here, and that's deliberate. This is the SKU distributors reorder every season without needing a design refresh, which makes it the highest-volume, most predictable line in our abaya range, and usually the natural first order for a new private label account. Offered from 300 pieces per color.",
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
      "Single and double-layer niqabs in chiffon and crepe. We put the extra work into the tie stitching, since that's the part that actually wears out first.",
    content: `
      <p>A niqab is a face veil, worn either with an abaya or on its own over a hijab. The thing that separates a well-made one from a badly made one almost never shows up in a product photo &mdash; it's in the tie stitching. Ties are the first point to fail on a niqab that gets put on and taken off several times a day, so we double-stitch the tie attachment on every niqab we make instead of running a single seam through it.</p>
      <p>We make both single-layer and double-layer versions. Single-layer, in a lighter chiffon, works well in warmer climates and for everyday wear. Double-layer adds a second panel, usually less sheer, for markets where buyers expect fuller coverage. Both draw from the same fabric library as our hijabs, so if you're stocking both categories, the shades will match exactly across one order.</p>
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
          "This is the lightest version we make, a single chiffon panel, chosen for warmer climates and daily wear where breathability matters more than maximum opacity. It's the style most customers reach for by default, whether worn with an abaya or on its own over a hijab. We reinforce the tie attachment point with double-stitching across the whole niqab range, since a failed tie from daily removal is the most common defect we see in cheaper alternatives. Offered from 300 pieces per color.",
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
          "Two-layer niqabs add a second panel behind the outer layer, cutting down on see-through visibility for markets and customers who expect more coverage than a single sheer layer gives them. That second layer is cut a bit narrower than the outer one so it doesn't add visible bulk at the tie point. If you're not sure which coverage level your market expects, this is usually what we'd recommend, since it satisfies stricter expectations without the extra weight of a third layer. Offered from 300 pieces per color.",
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
          "This stacks a third panel behind the standard two-layer build, giving the fullest opacity we produce for markets with the strictest coverage expectations. Each layer is graded slightly narrower than the one in front of it, so the tie point doesn't bunch under the combined thickness. It's a lower-volume, made-to-order style compared to our single and two-layer lines, simply because it serves a narrower market. Offered from 200 pieces per color.",
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
          "Tie-back niqabs close with a fabric tie at the back of the head instead of elastic, so you can tie it looser or tighter depending on what's underneath and adjust the fit exactly. This is our most common closure type across the whole range, and what we'd recommend if fit flexibility matters more to you than the quicker on-and-off of an elastic style. Both tie attachment points get reinforced double-stitching as standard. Offered from 300 pieces per color.",
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
          "Pull-on niqabs use an elastic back panel instead of ties, so it goes on and comes off in one motion, no tying required. It's the faster, more convenient option for customers who take their niqab on and off frequently through the day, though you do lose a bit of the adjustability a tie-back gives you. We keep the elastic fabric-covered rather than exposed, so it doesn't irritate the skin over extended wear. Offered from 300 pieces per color.",
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
          "Jersey niqabs use a stretch knit instead of woven chiffon, which gives a softer fit against the skin and holds more securely without needing as tight a tie. It's a good option for anyone who finds a woven chiffon niqab shifts or slips during an active day. The trade-off is less opacity per layer than a woven fabric of similar weight, so most buyers pair this with our two-layer construction rather than ordering it single-layer. Offered from 300 pieces per color.",
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
          "Chiffon niqabs are cut from the same fabric library as our chiffon hijabs, so if you're stocking both categories, the shades will match exactly without sourcing niqab fabric separately. The matte weave holds structure at the tie point better than a knit would, so the veil sits flat against the face instead of clinging. It's the default fabric across our single, two, and three-layer builds unless you specify otherwise. Offered from 300 pieces per color.",
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
          "Cotton niqabs trade chiffon's crisp structure for a more breathable, natural-fiber weave, aimed at hot, humid climates where wearing synthetic fabric against the face for long stretches becomes a genuine comfort complaint. It's a natural-fiber option for customers who specifically ask for cotton, same positioning as our cotton voile hijab. Offered from 300 pieces per color.",
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
          "Long niqabs extend well past the chest instead of stopping at the collarbone, for customers who want the veil itself to add upper-body coverage rather than relying entirely on a separate abaya or khimar underneath. The extra length is graded into the pattern so it doesn't add bulk or pull at the tie point. It's most often ordered by buyers whose customers layer it under an open-front abaya. Offered from 250 pieces per color.",
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
          "Half niqabs are cut shorter than our standard length, ending just below the nose rather than down to the chest, for customers who want lighter, more minimal coverage, or who mainly wear it for brief errands rather than all day. It's the lightest and most breathable style in our range, and, given the smaller panel, also the fastest to put on and take off. Offered from 300 pieces per color.",
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
      "One-piece and two-piece prayer dresses in fabrics chosen for how they move through a full prayer cycle, not just how they photograph.",
    content: `
      <p>A prayer dress has one job a regular abaya doesn't: it needs to move through a full prayer cycle &mdash; standing, bowing, prostrating &mdash; without pulling at the shoulders or riding up at the hem. That single requirement drives most of the construction choices on this line: elasticated cuffs and waistbands, and a looser cut through the shoulder than we'd use on a daywear abaya cut from the same fabric.</p>
      <p>Our two-piece prayer set, top and skirt, is the most-repeated style in this category, especially in the run-up to Ramadan. It also packs down small enough to sell in its own drawstring travel bag, which a fair number of our accounts ask for specifically because it works for gifting and for retail display.</p>
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
          "One-piece prayer dresses are a single continuous garment with elasticated cuffs and a soft waistband, built to move through a full prayer cycle without pulling at the shoulders or riding up at the hem. It's the simplest cut in the category, and the fastest to put on right before prayer, which is really why distributors reorder it more than any other prayer wear style. The fabric is lightweight and breathable by design, not borrowed from our daywear abaya line. Offered from 300 pieces per color.",
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
          "Two-piece prayer sets split the garment into a top and skirt, and it's our highest-repeat style in this category, especially around Ramadan. The set packs down small enough to sell in its own drawstring travel bag, which a fair number of our accounts ask for specifically because it works for gifting and retail display. Both pieces come from the same fabric lot, so the shade matches exactly. Sold as coordinated sets from 300 sets per color.",
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
          "Three-piece prayer sets add a matching prayer hijab to the standard top-and-skirt format, so the customer gets a complete, gift-ready outfit instead of having to source a hijab separately. All three pieces are cut and dyed from the same fabric lot, so the shades stay consistent. This is the format that performs best through our Ramadan and Eid gifting wholesale accounts. Sold as coordinated sets from 200 sets per color.",
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
          "Instant prayer hijabs bring our pull-on, no-pin construction specifically to prayer wear, so a customer can cover up in seconds right before prayer instead of styling a wrap under time pressure. We sell it both as a standalone accessory for customers who already own a prayer dress, and bundled into our three-piece sets. The fabric is the same lightweight, breathable base as the rest of the prayer wear line. Offered from 300 pieces per color.",
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
          "Prayer khimars adapt our cape-style khimar to prayer wear, covering the head, shoulders, and upper torso in one pull-on piece instead of needing a separate hijab layered over a prayer top. It's a good alternative for customers who find a separate top-and-hijab combination fiddly to keep in place through a full prayer cycle. The fabric is lightweight and breathable, matching the rest of our prayer wear range rather than our heavier daywear khimar fabric. Offered from 300 pieces per color.",
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
          "Travel prayer sets are cut from a lighter, more compressible fabric specifically so the set folds down small enough to carry every day, not just for occasional use, and it comes packaged in its own drawstring pouch. This is the SKU distributors sell hardest to commuting professionals and frequent travelers who pray away from home more than once a day. The pouch is available in branded private label finishes for retail gifting. Offered from 300 pieces per color.",
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
          "Kids prayer sets scale our standard two-piece construction down to a junior size range, which several distributors had flagged as a gap in their family and gifting bundles that otherwise stopped at adult sizing. Fabric, elastic placement, and finishing match our adult prayer wear line exactly, just graded to a smaller pattern rather than simplified. It's most often ordered alongside an adult set for a matching mother-daughter gifting bundle. Offered from 200 sets per color.",
        images: [
          placeholder("subcat-prayer-kids-set-1", "Dress form displaying a modest wrapped garment with a headscarf"),
          placeholder("subcat-prayer-kids-set-2", "Mannequins displaying robes in a shop doorway"),
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
          "Cotton prayer wear swaps our standard lightweight synthetic blend for a breathable cotton base, for buyers whose customers specifically want natural fiber against the skin during prayer. You do give up a bit of the compressibility our travel-set fabric offers, in exchange for a softer, more breathable feel over extended wear. It's available across our one-piece, two-piece, and three-piece constructions. Offered from 300 pieces per color.",
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
          "Jersey prayer wear uses a stretch knit base, which gives a softer, more forgiving fit through the shoulders and hips during the full range of motion prayer requires, compared to our standard woven fabric. The added stretch also means one size range comfortably covers a wider variation in body shape than a woven cut would. It's a good option if your customers have specifically asked for more give in the fabric. Offered from 300 pieces per color.",
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
          "Embroidered prayer wear adds a restrained embroidery detail at the neckline, cuff, or hem, sitting as a premium gifting-tier option above our standard plain prayer sets rather than a heavily embellished occasion piece. We place the embroidery to avoid any seam or stress point that flexes during prayer movement, so it doesn't distort or fray with regular use. It's the style most often chosen for Ramadan and Eid gift sets in branded packaging. Offered from 200 sets per color.",
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
      "Layered khimars in one, two, and three-tier cuts, in matte and satin-back crepe. They hold their shape without any added stiffening.",
    content: `
      <p>A khimar is a cape-like head covering that drapes over the head, shoulders, and upper torso in one piece &mdash; not the separate hijab-plus-top-layer combination some buyers assume it is. It's cut long enough to reach around the waist or hip depending on how many tiers it has, and unlike a hijab, you don't wrap or pin it. It's meant to be pulled on as-is, which is a big part of why people search for this garment specifically more than they do for most other modest-wear categories.</p>
      <p>We cut khimars in one, two, and three graduated tiers. A single tier reads closer to a long shawl. Three tiers gives you the structured, stacked look that most boutique buyers picture when they think of the category. Satin-back crepe is what we sell most of it in &mdash; it holds a clean fold at each tier without needing interfacing, and it picks up a slight sheen at the collar while staying matte through the body.</p>
      <p>Khimar sits in a spot a lot of buyers overlook: high search demand, and comparatively little competition among manufacturers actually producing it well. If you're a private label account trying to figure out where your first development budget should go, this is usually where we'd point you.</p>
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
          "A hijab is a single length of fabric wrapped and pinned around the head and neck. A khimar is a pre-shaped, cape-style garment that covers the head and shoulders in one piece and is pulled on rather than wrapped — closer in construction to a poncho than a scarf.",
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
      "Jilbab sets in Nida and crepe, cut loose for full coverage and reinforced at the seams that actually take the wear.",
    content: `
      <p>Jilbab is one of the highest-volume search terms in modest wear, and also one of the most confused with abaya by buyers outside the markets where the difference is already well understood. An abaya, generally, is a single open or closed robe. A jilbab, at least the way most of our wholesale buyers order it, is looser and often two pieces &mdash; a separate top with a full-length skirt, or a wide-cut robe with a lot more fabric ease through the body than a fitted abaya would have.</p>
      <p>We run our jilbab program on Nida and crepe, the same fabric bases as the abaya line, with double-stitched seams reinforced at the underarm and hem, since those are the two spots that take the most stress on a loose-cut garment worn every day. Sizing goes from free-size through a graded 52&ndash;56 range. Most of our distributor accounts treat jilbab as a value-tier companion to a more structured abaya range rather than ordering it on its own.</p>
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
          "One-piece jilbabs are cut as a single continuous robe instead of a separate top and skirt, which makes it the simplest, fastest construction in the category and the closest thing to a loose-cut abaya. It's usually the entry point for distributors new to jilbab as a category, since there's one size block covering the whole garment rather than two patterns to coordinate. Reinforced double-stitched seams at the underarm and hem hold up to daily wear and repeated washing. Offered from 300 pieces per color.",
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
          "Two-piece jilbabs split the garment into a top and a full-length skirt, which is really what most of our wholesale buyers mean by default when they say \"jilbab\" rather than abaya. Sizing the top and skirt independently fits a wider range of body proportions than a one-piece cut would, and both pieces come from the same fabric lot so the shade matches exactly. This is our highest-volume jilbab construction, sold as coordinated sets from 300 sets per color.",
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
          "Three-piece jilbab sets add a matching inner slip or coordinating hijab to the standard top-and-skirt format, so distributors get a complete, ready-to-wear outfit they can merchandise as one SKU instead of assembling separates at retail. All three pieces are cut and dyed from the same fabric lot for consistent shading across the set. It's the format that performs best through Eid and occasion-adjacent wholesale accounts. Sold as coordinated sets from 200 sets per color.",
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
          "Pull-on jilbabs use a wide head or neck opening instead of a zip, snap, or button closure, so the whole garment goes on in one motion. Taking away the closure hardware also takes away the most common point of wear-related failure on a daily-use garment. This is the style buyers reorder most for value-tier and back-to-school-adjacent ranges, where cost and simplicity matter more than styling detail. Offered from 300 pieces per color.",
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
          "Hooded jilbabs build an integrated hood into the neckline, giving customers an extra head-covering option over a separate hijab, or a quick, minimal cover-up on its own for short trips. The hood is cut generously enough to fit over a styled hijab underneath without pulling the fabric taut. It works well for buyers targeting outdoor, travel, or colder-climate markets, where the extra layer is a practical selling point rather than a styling one. Offered from 250 pieces per color.",
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
          "Full-length jilbabs are cut to a floor-length hem instead of our standard ankle-grazing length, for markets and customers who specifically expect maximum coverage. The extra length is built into the pattern rather than just left unhemmed, so the proportions through the body and sleeves stay consistent with our standard cut. It's a straightforward upsell for distributors who've had customers ask for more length on our standard jilbabs. Offered from 300 pieces per color.",
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
          "Jersey jilbabs swap our standard Nida and crepe bases for a stretch jersey knit, giving a softer feel and an easier pull-on fit for customers who want the jilbab silhouette with the ease of casual jersey wear. The added stretch is also more forgiving across a wider size range than a woven fabric would be. It's tracking well with younger, casual-wear-focused customers who find our structured Nida jilbabs too formal for daily wear. Offered from 300 pieces per color.",
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
          "Chiffon jilbabs use a lightweight, flowing chiffon base instead of our structured Nida or crepe, suited to hot-climate markets where our standard jilbab weight runs too warm for daily wear. The trade-off is a less structured silhouette than Nida, so depending on the shade, this style often needs an underlayer or slip for full opacity. It's a natural pairing for buyers who already stock our chiffon hijab range and want a matching lightweight jilbab. Offered from 300 pieces per color.",
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
          "Sports jilbabs are cut on a technical stretch knit instead of our standard Nida or crepe, built to layer over activewear for sport, exercise, and outdoor activity without restricting movement. We hold the knit to the same standard as our dedicated sports hijab fabric: moisture management and stretch recovery through repeated wear and washing. It's a growing crossover between our jilbab and sports hijab lines, for buyers serving an active, modest-fashion customer. Offered from 250 pieces per color.",
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
          "Nursing-friendly jilbabs build a discreet, concealed access panel into the bodice, positioned and finished so it isn't visible when closed and doesn't compromise coverage when it's in use. This is a specialty SKU distributors stock specifically for new-mother and maternity-adjacent customers, a need we've heard flagged repeatedly by buyers whose standard jilbab range didn't accommodate it. Panel placement and closure type, snap or concealed zip, are customizable for private label orders. Offered from 200 pieces per color.",
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
      "Cotton and jersey underscarves and inner caps, built for grip and all-day comfort under a hijab or khimar, sold in bulk multi-packs for distributors.",
    content: `
      <p>Inner caps are probably the least glamorous item in our catalog, and also one of the most reliably reordered. Nobody features them as a hero product on their own storefront, but distributors come back for these more predictably than almost anything else we make, simply because every hijab, khimar, and niqab sold needs one alongside it.</p>
      <p>We build ours on combed cotton for breathability, with a non-slip grip band at the hairline &mdash; and that grip band is really what decides whether someone reorders. A cap that slides around under a hijab through a full day just doesn't get bought again. We sell these in bulk multi-packs across an extended neutral color range, and honestly, it's a category we'd tell any hijab or khimar distributor to stock alongside their main range instead of sourcing it from somewhere else.</p>
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
          "Tube caps are knit as one continuous seamless tube instead of a fitted cap shape, which gets rid of the one detail most likely to show through a thin chiffon or georgette outer layer: a seamed edge printing a visible line across the forehead or crown. Distributors sell it as the natural complement to lightweight, sheer hijab fabrics specifically because of that smoother profile. It stretches to fit a wide head-size range with no adjustment needed, which keeps SKU count down for retailers stocking a single size. Sold in bulk multi-packs from 500 pieces per color.",
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
          "Ninja caps extend coverage past the hairline and jaw, down across the neck and upper shoulders in one piece, giving full-wrap modesty underneath any outer hijab, khimar, or niqab without a separate neck cover. Distributors stock it for customers who specifically ask for maximum coverage, especially in markets where a visible neckline under a lighter outer fabric is a common complaint. The wider shoulder panel uses more fabric than a standard cap, so there's a modest cost increase over our tube and cotton lines. Sold in bulk multi-packs from 500 pieces per color.",
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
          "Scrunchie and volumising caps build a gathered, scrunchie-style panel or padded crown right into the cap, giving customers height and volume without a separate hair bun or clip-in volumizer underneath. This is the fastest-growing style in our inner cap range, driven almost entirely by short-form video tutorials showing the \"no-bun volume\" technique. It pairs naturally with our instant hijab and luxury hijab ranges, where a more sculpted silhouette is part of the appeal. Sold in bulk multi-packs from 300 pieces per color.",
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
          "Adjustable caps add a drawstring or elastic toggle at the back instead of relying on stretch fabric alone to fit a range of head sizes, which is what buyers ask for specifically when stocking for a customer base with a wider-than-average size range, including youth and plus-size lines. The adjustment mechanism sits flat against the head, so it doesn't print through a thin outer fabric the way a knot or clip would. It's a practical, low-return-rate SKU for distributors who've had size-related returns on stretch-only caps. Sold in bulk multi-packs from 500 pieces per color.",
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
          "Band caps cover only the hairline and forehead in a wide stretch band rather than the full crown, meant for customers who already wear a separate volumizer or bun cover and just need a clean, non-slip hairline edge under their outer hijab. It's the lowest-fabric, lowest-cost SKU in our inner cap range, which makes it more of an impulse-add or bundle item at checkout than a standalone product. Distributors typically stock it alongside our scrunchie/volumising cap as a two-piece styling system. Sold in bulk multi-packs from 500 pieces per color.",
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
          "Multi-wear caps piece together four coordinating fabric panels on a single cap, so the same SKU can be styled to peek out from underneath an outer hijab in whichever panel color matches that day's outfit, instead of a customer needing four separate solid caps. We developed this specifically for retailers who wanted to cut down shelf-facing count without reducing perceived color choice. Panel colorways are fully customizable if you want to match your own core palette. Sold in bulk multi-packs from 300 pieces per set.",
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
          "Cotton caps are our reference underscarf, built on breathable combed cotton with a non-slip grip band woven into the hairline to keep it in place through a full day without repositioning. This is really the detail that determines whether an inner cap gets reordered: one that slides under a hijab by afternoon just doesn't get bought again, regardless of price. It's the style we'd recommend as the default stocking SKU for any new distributor entering this category. Sold in bulk multi-packs from 500 pieces per color across an extended neutral range.",
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
          "Jersey caps swap our standard combed cotton for a stretch jersey knit, giving a softer feel and an easier pull-on fit for customers who find woven cotton caps too structured for daily, casual wear. The added stretch also makes it more forgiving across a wider head-size range without needing the drawstring adjustment our adjustable cap relies on. It's the style that pairs most naturally with our jersey and modal hijab ranges for buyers building a coordinated casual-wear program. Sold in bulk multi-packs from 500 pieces per color.",
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
          "Tie-back caps close with a fabric tie at the nape instead of elastic or a drawstring toggle, giving a fit that's fully adjustable and comfortable for extended daily wear, including for customers who find elastic bands irritating against the skin over a full day. It's the same tie approach we use on our turban-style specialty cap, adapted here to a simpler, everyday base fabric. Buyers tell us this fills a gap for sensitive-skin and all-day-wear customers who don't do well with standard elastic caps. Sold in bulk multi-packs from 300 pieces per color.",
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
          "Lace caps add a decorative trim along the front hairline edge, for customers who want a visible, feminine detail peeking out from under a loosely styled outer hijab rather than a purely functional cap. It's the style our distributors reorder most heavily ahead of wedding and Eid season, often bundled with our bridal hijab and luxury hijab ranges for a coordinated occasion look. The lace trim sits flat against the base cap, so it doesn't add bulk under thinner outer fabrics. Sold in bulk multi-packs from 200 pieces per color.",
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
          "Full coverage caps extend a few centimeters past the standard cap line down to the base of the neck, without going as far as our ninja cap's shoulder panel, for markets and customers who expect more coverage than a standard crown-and-hairline cap gives them. It sits as a middle ground between our standard cotton cap and the full ninja cap, so distributors can offer a graduated range instead of jumping straight from minimal to maximum. Fabric and construction otherwise match our combed cotton cap line. Sold in bulk multi-packs from 400 pieces per color.",
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
          "Cross-back caps add a crossover front-and-back panel, letting the same piece work as a standalone light underscarf on its own, or as a base layer underneath a heavier outer hijab. That dual purpose means one product line covers two use cases instead of requiring separate inventory for each. The crossed panels also spread tension more evenly across the back of the head than a single elastic band, which buyers tell us is more comfortable over a full day. Sold in bulk multi-packs from 300 pieces per color.",
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
      "Printed and solid scarves in silk, viscose, and modal, cut to work as a hijab, a shawl, or just a fashion accessory.",
    content: `
      <p>Scarves are the one category in our catalog we don't design purely as a hijab. The same piece is meant to work as a headscarf, a shawl, or a plain fashion accessory, which is exactly why sizing and hem finish matter more here than anywhere else in the range. Our silk and viscose scarves come in two standard sizes: 90x90 cm for a square accessory scarf, and 70x180 cm for something long enough to wrap as a hijab.</p>
      <p>Print development goes through our in-house digital studio, and we can take a new pattern from concept to strike-off sample in under two weeks. That's fast enough that a few of our retail accounts run proper seasonal print drops instead of sticking to one fixed range of solids.</p>
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
      "Pre-styled, pull-on instant hijabs with the underscarf built in, so the look is finished in under a minute with zero pinning.",
    content: `
      <p>An instant hijab solves exactly one problem: speed, without the wrapped, styled look falling apart by midday. The underscarf cap is sewn straight into the outer chiffon layer and pre-shaped, so it falls the same way every single time it's put on, no pins involved.</p>
      <p>This has consistently been one of the strongest entry points for private label ranges aimed at first-time hijab wearers, teenagers, and gifting occasions. Part of the reason is simple: a foolproof, already-styled look cuts down on the returns you'd otherwise get from customers who can't quite manage a traditional wrap on their own. It's also a category with more search demand than competition in modest wear right now, so it's a reasonable one to build a new range around rather than treat as an afterthought SKU.</p>
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
          "Chiffon instant hijabs are the reference style in this category: a matte chiffon outer shell with the underscarf cap sewn directly in, pre-shaped so the drape falls the same way every time, no pins or practice needed. Chiffon holds a crisper, more structured fold than jersey-based instant styles, which is why most private label ranges lead with this version for a polished, retail-ready first impression. It's also the easiest base fabric to print and recolor consistently at volume if you're building a wider instant hijab range. Offered from 500 pieces per color.",
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
          "Jersey instant hijabs swap the chiffon shell for a stretch jersey knit, trading chiffon's crisp structure for a softer, more casual finish that suits everyday and athleisure-adjacent ranges better. The stretch also makes it easier to pull on and adjust than a woven fabric, which buyers targeting younger or first-time hijab wearers tend to prefer. It reorders strongest alongside our jersey and modal hijab lines for anyone building a coordinated casual program. Offered from 500 pieces per color.",
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
          "Pre-stitched hijabs take the instant idea as far as it goes: the entire outer shape, pleating, and fall are stitched in at the factory, so there's no folding, tucking, or draping technique for the customer to get right at all. We recommend this for gifting and first-time-buyer SKUs specifically because it removes user error from the equation entirely. Construction is more labor-intensive than a simple pull-on tube, so there's a moderate cost increase over our standard chiffon instant line. Offered from 300 pieces per color.",
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
          "Modal instant hijabs use our modal-cotton blend in place of chiffon, for buyers who want a natural-fiber story even within the fast-fashion instant hijab category. The modal shell holds its shape well through the attached-cap construction without needing the fabric to carry structure on its own, and it feels noticeably softer against the skin than chiffon over a full day. It's a good step-up SKU if you're building a good-better-best instant hijab range. Offered from 500 pieces per color.",
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
          "Crinkle instant hijabs bring our heat-set crinkle texturing into the pull-on category, giving visible volume and movement without asking the customer to style or crease the fabric themselves. Since the texture is permanent rather than pressed, it survives machine washing without needing to be re-ironed between wears, the same durability edge our standalone crinkle hijab has over pleated alternatives. It's a good step-up finish for buyers who find flat chiffon instant styles too plain for their retail price point. Offered from 500 pieces per color.",
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
          "Cotton instant hijabs pair a breathable cotton-voile shell with the category's standard attached-underscarf construction, for buyers in hot, humid markets whose customers want natural fiber but still expect the speed of a pull-on style. It trades chiffon's crisp structure for better airflow and a softer, less synthetic feel, at the cost of a slightly less sharp fold after packaging. It's a natural pairing for buyers who already stock our cotton voile hijab and want a matching instant option. Offered from 500 pieces per color.",
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
          "Pleated instant hijabs use a pressed, uniform pleat set into the fabric during finishing, giving a structured, tailored look quite different from crinkle's random self-texture. Because the pleat is heat-pressed rather than woven in, it will soften gradually over repeated washing, and we tell buyers that upfront rather than overselling the finish as permanent. It works well for occasion and formalwear-adjacent private label ranges that want a tailored instant option. Offered from 300 pieces per color.",
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
          "One-piece instant hijabs are the simplest version in this category: a single pull-on garment with the underscarf built in, no detachable layers or separate components to lose or mismatch. It's the lowest-cost, fastest-to-wear construction we make, and what we'd recommend leading with for a brand-new instant hijab range before adding two-piece or layered variations. You can specify chiffon, jersey, or modal within this same one-piece construction. Offered from 500 pieces per color.",
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
          "Two-layer instant hijabs add a second fabric layer beneath the outer shell, giving added opacity for lighter-colored or sheerer fabrics and a subtle dimensional fall that a single layer can't produce on its own. We recommend this specifically for pastel and light-colorway orders, where a single chiffon layer alone can run too sheer for some markets' coverage expectations. If you want a detachable variation on this layered approach, take a look at our Shifa Two-Piece Instant Hijab. Offered from 400 pieces per color.",
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
          "Instant khimar hijabs extend the category's pull-on, no-pin convenience down to khimar-length coverage across the shoulders and chest, for customers who want fuller coverage without giving up the speed that makes instant styles popular in the first place. It's a good crossover SKU if you're stocking both categories and want one style that bridges instant hijabs and our khimar range rather than treating them as separate customer segments. Construction and fabric options mirror our standard instant hijab line, just scaled to the longer khimar body. Offered from 300 pieces per color.",
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
      "Moisture-wicking, four-way stretch sports hijabs in a genuine technical knit, built for performance wear, swimming, and active use.",
    content: `
      <p>A sports hijab isn't just a jersey hijab with a sportier label. It's built on a different technical knit, one developed specifically for moisture management and stretch recovery through repeated wear, sweat, and washing, with flatlock seams so it doesn't chafe during activity. Reusing standard jersey and calling it an "active" line is a shortcut, and it shows up fast in the form of pilling and stretched-out necklines after a handful of wash cycles.</p>
      <p>Our sports hijab fabric is tested specifically for quick-dry performance, and it's the reference style we use for activewear and swim-adjacent private label programs. Search demand for this category tends to run higher than most buyers expect, mostly because so few manufacturers actually make a genuinely technical version instead of just relabeling an everyday hijab. That's worth knowing before you commit a range to generic fabric.</p>
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
          "This is built on a technical knit developed specifically for moisture management and stretch recovery through repeated wear, sweat, and washing, with flatlock seams to prevent chafing during activity. It's not just a jersey hijab with a sportier label. Reusing standard jersey for an \"active\" line is a shortcut, and it shows up fast in customer complaints about pilling and stretched-out necklines after a few wash cycles. This is the reference style underneath every other activewear piece in this category. Offered from 500 pieces per color.",
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
          "Sports jilbabs bring our technical activewear knit to the jilbab silhouette, giving full-length modest coverage for exercise and outdoor activity without the fabric restricting movement or trapping heat the way a standard jilbab fabric would. It uses the same flatlock seam construction as our sports hijab line to prevent chafing during extended wear. This is a growing crossover between our jilbab and activewear ranges. Offered from 250 pieces per color.",
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
          "Modest sports tops are cut long through the torso and sleeve with a higher neckline than a standard athletic tee, meant to be worn on their own or layered under a sports jilbab or full-coverage set. The technical knit matches our sports hijab fabric for moisture management, so buyers can offer a fully coordinated activewear range from one consistent library. It works well as a standalone SKU for customers who want modest activewear without committing to a full matching set. Offered from 300 pieces per color.",
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
          "Modest track pants are cut full-length and relaxed through the leg rather than fitted, completing a modest activewear look without the compression-fit silhouette of standard leggings. The waistband uses a wide, soft elastic for comfort through a full range of motion, and the fabric matches our sports hijab and tops for a fully coordinated set. It's a straightforward companion if you're building a complete activewear range rather than hijabs alone. Offered from 300 pieces per color.",
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
          "Full-coverage sports sets bundle our sports hijab, modest top, and track pants into one coordinated outfit, cut and dyed from matching fabric lots so distributors can sell it as a single ready-to-wear SKU instead of assembling separates. We'd recommend this format for buyers entering the activewear category for the first time, since it shows off the full coordinated range in one purchase. Sold as coordinated sets from 200 sets per color.",
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
          "Running hijabs add mesh ventilation panels at the temples and nape to our sports hijab construction, built specifically for running and high-output cardio where heat buildup is the main complaint with standard sports hijabs. It's lighter overall than our general sports hijab, which makes it the better choice for customers who train outdoors or run distance rather than mixed gym training. Offered from 400 pieces per color.",
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
          "Gym hijabs use a firmer compression knit than our standard sports hijab, built for high-intensity training where a snugger fit keeps things from shifting during strength and interval work. This is the style our distributors in competitive athletic-wear channels reorder most consistently, since it holds position through movement that would shift a looser hijab. Offered from 400 pieces per color.",
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
          "Swimming hijabs are built on a chlorine- and salt-resistant technical knit with a snug fit designed to stay in place in water, extending our sports hijab program into swimwear. It pairs with our modest swimwear-adjacent development program for buyers building a full aquatics range. Standard fabric just doesn't hold up to chlorine exposure the way this dedicated swim knit does, which is worth knowing if you're tempted to repurpose a standard sports hijab for pool use. Offered from 400 pieces per color.",
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
          "Sports abayas apply our technical activewear knit to a looser abaya silhouette, for customers who want full-coverage modest dressing for outdoor activity, walking, or light training without the fitted profile of a sports jilbab or leggings-based set. The wider cut trades some of the compression benefits of our gym hijab line for a more relaxed, everyday-adjacent activewear look. Offered from 250 pieces per color.",
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
          "Activewear co-ord sets bundle multiple pieces from across our activewear range — hijab, top, and pants or jilbab — in coordinating rather than identical colorways, so the set reads as intentionally styled rather than uniform. That's different from our full-coverage sports sets, which use matching fabric lots throughout; co-ord sets are curated for color-blocking and visual variety instead. It's aimed at buyers who want to present activewear as a lifestyle range rather than purely functional kit. Sold as coordinated sets from 200 sets per color.",
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
      "Mulberry silk and satin hijabs with hand-rolled hems and branded gift packaging, built for boutique and department store placement, not volume racks.",
    content: `
      <p>Our luxury tier is 100% mulberry silk with a hand-rolled hem, done by a specialist stitching team rather than a machine. That's really the detail that tells a genuine silk hijab apart from a "silk-feel" one at the point of sale. Every piece gets inspected individually and packed into a branded rigid gift box before it ships, because at this price point, people are buying the unboxing almost as much as the fabric.</p>
      <p>Margins are better here than on standard chiffon or jersey, and competition is thinner, which is why we'd point boutique buyers toward this category specifically. The MOQ is lower than on our volume lines too &mdash; 150 pieces per color &mdash; because it's built for curated retail, not bulk distribution. Custom gift box branding and either hand-rolled or machine-hemmed finishing are both available if you're ordering private label.</p>
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
      "Occasion-grade hijabs with pearl, crystal, stone, and hand-embroidered embellishment, made for wedding, nikah, and bridal party ranges.",
    content: `
      <p>Bridal hijab is a genuinely different manufacturing discipline from our standard hijab lines, not just a dressier colorway of the same fabric. Pearls, crystals, stones, embroidery, whatever the embellishment is, it has to be placed or stitched by hand without distorting the drape underneath. That's why every bridal piece goes through a specialist finishing team instead of the standard line.</p>
      <p>We build this range on silk and satin bases because they can carry the weight of embellishment without sagging or puckering the way a lighter chiffon would. Buyers tend to use this category for boutique, bridal party, and gifting channels alongside their regular hijab range &mdash; lower volume, better margin, more of a complement than a core line. Small-batch production is the norm here, and most styles are available from 50 to 100 pieces per design.</p>
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
          "Bridal lace hijabs pair a silk or satin base with either a lace trim edge or a sheer lace overlay panel, giving a softer, more romantic finish than our fully embellished crystal or stone styles. We finish the lace flat and pre-wash it to avoid a shrinkage mismatch against the base fabric — that's the defect that shows up as visible puckering along the trim line on lower-cost competitors' pieces. Most bridal party buyers order this one for bridesmaids' hijabs, then pick something more heavily embellished for the bride herself. Produced from 50 pieces per design.",
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
          "Pearl-embellished bridal hijabs use hand-sewn faux-pearl beading, either as a continuous trim along the hem or scattered across the fabric, with each bead individually secured so it doesn't shed with handling the way glued alternatives do. It's our most-ordered bridal finish, mostly because it reads as elevated without the cost or weight of full crystal coverage. Bead density and placement pattern can be fully customized per design. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-pearl-1", "Model wearing a bridal hijab draped in cascading pearl bead chains"),
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
          "Crystal hijabs use faceted glass or acrylic crystals, hand-set through a hot-fix or hand-stitched application chosen specifically for how they catch light under event and reception lighting, not just in daylight photography. Coverage can run anywhere from an accent trim to a fully crystal-covered surface, priced accordingly. Since this is our heaviest embellishment style, we only build it on a structured silk or satin base sturdy enough to carry the weight without drooping. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-bridal-hijab-crystal-1", "Model wearing a blush bridal niqab with faceted crystal trim catching the light"),
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
          "Stone-studded bridal hijabs combine multiple embellishment types — beads, sequins, and crystals — into one mixed-media design instead of a single repeated element, which gives a more layered, textured finish than a single-material style can. Our design team tends to recommend this when a buyer sends over a reference image that combines several embellishment styles they've seen separately elsewhere. Mixing application methods does push the lead time slightly longer than single-technique styles. Produced from 50 pieces per design.",
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
          "Embroidered bridal hijabs carry a thread-embroidered motif rather than applied beading or crystal, which gives a couture-adjacent read and can be fully customized to a buyer's own pattern or a motif we develop in-house. Thread color, density, and placement are all specified per order, and we can also combine embroidery with a light pearl or crystal accent on request. More often than not, this finish gets ordered as a fully custom, one-off design rather than a repeat catalog SKU. Produced from 50 pieces per design.",
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
          "Satin bridal hijabs use our high-sheen satin weave as a base, specifically because its weighted drape holds embellishment in place through a full day of ceremony, reception, and photography without shifting. The glossy finish also reflects light well under both daylight and flash, which buyers tell us makes a real difference in how a style shows up in a bride's wedding photos. You can order it plain or as the base for any of our pearl, crystal, or embroidery finishes. Produced from 50 pieces per design.",
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
          "Silk bridal hijabs run on the same genuine mulberry silk as our luxury hijab line, finished with a hand-rolled hem instead of a machine one — our top bridal tier, for buyers whose customers specifically ask for real silk over a synthetic satin-look alternative. The natural fiber's sheen and weight give it a drape that photographs and moves differently from satin, and some brides ask for it by name once they've felt both side by side. Every piece gets inspected individually before packaging. Produced from 50 pieces per design.",
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
          "Shimmer bridal hijabs weave a fine metallic thread through the base fabric itself, for an all-over subtle sparkle rather than the localized sparkle you'd get from applied crystals or beads. It's a lower-cost route to a bridal-appropriate finish for buyers who want event-ready shine without the labor cost of hand-applied embellishment, and it also works well as a base fabric if you want to add a light pearl or crystal accent on top. Since the metallic thread is woven rather than printed, the shimmer won't crack or flake with wear. Produced from 100 pieces per design.",
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
          "Crown-style bridal hijabs are drafted with a structured under-cap and a drape line engineered specifically to sit cleanly beneath a tiara, crown, or hijab-specific headpiece, without the fabric bunching or shifting the accessory out of place through the ceremony. Most standard hijabs aren't drafted with this in mind, since the pattern has to account for headpiece pins and a flatter crown profile. Buyers typically order this alongside a matching bridal accessory line. Produced from 50 pieces per design.",
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
          "Veil-style bridal hijabs add an extended sheer overlay layer, cut and hemmed to fall like a traditional wedding veil over a base hijab rather than working as a single-layer garment. Buyers can style the overlay forward over the face for the ceremony, then sweep it back for the reception, so one piece covers two distinct looks across the event. Most often it's ordered paired with one of our embellished bridal hijabs as the base layer underneath. Produced from 50 pieces per design.",
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
      "Occasion-grade abayas with embroidery, pearl, stone, and crystal embellishment on silk and satin bases, made for wedding, nikah, and bridal party ranges.",
    content: `
      <p>Bridal abaya is the most heavily embellished, highest-margin tier in our abaya range, and it's also where fabric weight matters more than anywhere else. Every stone, pearl, or crystal adds real weight to the garment, and a base fabric that can't hold that weight will sag or pucker right where the embellishment sits. That's why we only build this range on heavier crepe, satin, and silk bases, never on the lighter fabrics we'd use for everyday abayas.</p>
      <p>Buyers generally use this category alongside their standard abaya range, to cover boutique, bridal party, and gifting channels &mdash; lower volume, better margin. Small-batch production is standard, most styles are available from 50 units per design, and if you're building a signature bridal line, custom embroidery motifs, stone placement, and color-matched threadwork are all on the table for private label.</p>
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
          "Bridal embroidered abayas carry a thread-embroidered motif across the bodice, sleeves, or hem — a buyer's own pattern, or one we develop in-house from a reference image. We deliberately use a heavier crepe or satin base here, since it holds the embroidery's tension without puckering around the stitched area, which is the defect most buyers tell us they've run into with lower-cost embroidered competitors. This style tends to get ordered as a fully custom, one-off design for a specific wedding party rather than as a repeat catalog SKU. Produced from 50 units per design.",
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
          "Pearl bridal abayas use hand-sewn faux-pearl beading, either as a trim line along the seams and hems or scattered across the bodice, with each bead secured individually so it doesn't shed with handling. It's our most-ordered bridal abaya finish, mainly because it reads as elevated without the weight or cost of full crystal or stone coverage across the whole garment. Bead density and placement pattern can be fully customized per design. Produced from 50 units per design.",
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
          "Stone-work bridal abayas combine cut-glass stones, beads, and sequins into one mixed-media design, usually concentrated at the bodice, collar, and cuffs rather than spread evenly across the whole garment, since that's where it catches the most light and attention. Keeping the placement concentrated also keeps the added weight manageable on a full-length garment compared to all-over coverage. Our design team tends to recommend this when a buyer wants a statement front panel without paying to embellish the entire abaya. Produced from 50 units per design.",
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
          "Crystal bridal abayas use faceted glass or acrylic crystals in a hot-fix or hand-stitched application, chosen specifically for how they catch light under event and reception lighting. Coverage can range from an accent trim at the neckline and cuffs up to a fully crystal-covered bodice, priced accordingly. Given the added weight, we build this style exclusively on our heaviest crepe and satin bases, so it holds its structure without drooping. Produced from 50 units per design.",
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
          "Lace bridal abayas use sheer lace overlay panels or lace sleeve inserts against a solid base fabric, giving a softer, more layered finish than our fully embellished crystal or stone styles. We pre-wash the lace and finish it flat against the base to prevent a shrinkage mismatch, which otherwise shows up as visible puckering along the seam line. Most bridal party buyers order this for the wider wedding party and save something more heavily embellished for the bride. Produced from 50 units per design.",
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
          "Satin bridal abayas use our high-sheen satin weave as a base, specifically because its weighted drape holds embellishment in place through a full ceremony and reception without shifting. The glossy finish reflects light well under both daylight and flash, and that matters more for bridal wear than almost any other category we make. Offered plain or as a base for any of our pearl, stone, or crystal finishes. Produced from 50 units per design.",
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
          "Luxury silk bridal abayas run on genuine mulberry silk instead of a satin substitute, and get hand-finished at the hem and seams by a specialist team rather than machine-processed the way our standard lines are. This is our top bridal abaya tier, built for boutique and department-store-adjacent placement rather than volume distribution. The natural fiber's sheen and weight give it a drape and movement that photographs distinctly from satin or crepe alternatives. Produced from 50 units per design.",
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
          "Cape-style bridal abayas add a detachable or built-in cape layer over the shoulders — a construction we borrowed from bridal gown design and adapted to abaya proportions. The cape comes off for the reception after being worn through the ceremony, so one garment covers two distinct looks across a single event. Our boutique accounts tell us this is the strongest differentiator against standard embellished abayas, since here the silhouette itself is the statement, not just the embellishment. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-cape-style-1", "Model wearing a blush pink bridal abaya with a floral-embroidered sheer cape"),
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
          "Trail and gown-style bridal abayas extend the back hem into a trailing panel, borrowing the silhouette of a bridal gown train while keeping full modest coverage through the body and sleeves. It's our most fabric-intensive bridal style, and given the specialized cutting and finishing the extended hem requires, it's usually ordered as a single custom piece for the bride rather than across a wedding party. It pairs naturally with a veil-style bridal hijab for a complete matched look. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-trail-gown-style-1", "Model wearing a red gown-style bridal abaya with a long embellished back trail"),
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
          "White bridal abayas run on a pure white base rather than our warmer ivory or champagne tones, aimed at buyers whose customers want a Western-bridal-adjacent white look for a civil ceremony or reception, rather than the traditional ivory associated with regional bridal wear. Getting a true, consistent white at scale takes tighter dye-lot control than our standard color range does, since white shows any batch-to-batch shade variation far more visibly than darker colors do. Available plain or as a base for any embellishment finish in this category. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-white-1", "Model wearing a pure white bridal abaya with a cape overlay and matching hijab"),
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
          "Champagne bridal abayas run on a warm, muted gold-beige base — consistently the most-requested neutral across our regional bridal accounts, since it photographs warmer than white and softer than gold under most venue lighting. It's also a versatile base for embellishment: pearl, gold-thread, and crystal accents all read cleanly against it without competing for attention the way they can against pure white. We check shade consistency across a production run against a fixed Pantone reference rather than eyeballing it, since small variations show up easily in this tone family. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-champagne-1", "Model seated in a champagne satin and organza bridal abaya"),
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
          "Gold embellished bridal abayas pair gold-thread embroidery or gold-tone stonework against a dark base fabric — usually black, navy, or charcoal — for maximum contrast between the embellishment and the garment, rather than the tonal, monochrome look you get from pearl-on-ivory styles. Buyers serving Gulf regional markets request this one most, since gold embellishment on a dark abaya is a well-established bridal and formal-occasion convention there. We check the gold-thread color against a fixed reference to avoid the greenish cast cheaper metallic thread can develop after washing. Produced from 50 units per design.",
        images: [
          placeholder("subcat-bridal-abaya-gold-embellished-1", "Model wearing a black bridal abaya with gold floral embroidery on the bodice and sleeves"),
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
      "Browse by fabric instead of garment: the same premium chiffon, georgette, modal, jersey, satin, and silk bases used across every category, grouped here by material.",
    content: `
      <p>Most buyers browse our catalog by garment. But fabric is really what drives cost, MOQ, and lead time, and a good number of our accounts prefer to spec a private label range by material first, then pick the garment silhouette second. This section groups the fabric library that way, cross-referencing every category a given fabric shows up in instead of repeating the same fabric details on every single product page.</p>
      <p>For the full technical breakdown &mdash; weight, composition, care instructions for everything we run &mdash; see the dedicated <a href="/fabrics">Fabric Library</a>. This section is really just a shortcut for buyers who'd rather say "show me everything in silk" than click through category by category.</p>
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
          "Premium chiffon is the single most-used fabric in our catalog, running through our hijab, niqab, jilbab, and instant hijab lines as the default \"standard\" fabric most buyers mean when they don't specify otherwise. The 75 gsm matte weave is opaque enough to wear without an underscarf in most climates and takes dye and print consistently at volume. If you're specing a private label range around one core fabric across multiple garment types, this is usually the one to pick. Available across the full 42-shade library from 300 pieces per color.",
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
          "Premium georgette carries our self-crinkled texture across every category that offers it, hijabs, abayas, and jilbabs, so buyers get a consistent textured-fabric option throughout a coordinated range rather than a texture unique to one garment type. The crinkle is woven in rather than pressed, so it survives repeated washing without flattening, an edge over pleated-finish competitors. Available from 300 pieces per color.",
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
          "Luxury modal is our step-up natural-fiber-blend fabric, used across standard and instant hijabs wherever a buyer wants a noticeably softer feel and lower-sheen finish than jersey, without moving up to genuine silk. The beechwood-derived fiber takes dye more evenly than cotton jersey, giving richer, more consistent color across a production run. Available from 500 pieces per color.",
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
          "Premium jersey is our four-way stretch knit base, showing up across hijabs, jilbabs, instant hijabs, and niqabs wherever a no-pin, wrap-and-go construction matters more than chiffon's structured drape. It resists fraying at the cut edge, which keeps hemming costs down compared to woven fabrics, and it holds shape through a full day without sagging. Available in solid and heathered finishes from 300 pieces per color.",
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
          "The satin collection spans every occasion-tier product we make, satin hijabs, satin abayas, and satin bridal styles, built on the same high-gloss weave that holds a pressed, glass-smooth finish through transport and retail handling. Buyers building a coordinated occasion or bridal range across multiple garment types typically standardize on this fabric first. Available from 200 pieces per color.",
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
          "The silk collection covers every genuine mulberry silk product we make, luxury and mid-tier silk hijabs, silk bridal hijabs, and luxury silk bridal abayas, never a synthetic silk-look substitute. Finishing ranges from a machine-rolled hem on our mid-tier pieces to a fully hand-rolled hem on our luxury and bridal tiers. Available from 150 pieces per color depending on tier.",
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
          "The cotton collection groups every breathable, natural-fiber cotton voile product across our hijab, instant hijab, and niqab lines, positioned for hot, humid markets and buyers building a natural-fiber story. You trade a bit of chiffon's crisp structure for genuinely better airflow. Available from 300 pieces per color, pre-shrunk to cut down on size variance after the first wash.",
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
          "The linen collection is a natural, visibly textured option for buyers whose customers respond to an earthy, less polished look than our smoother chiffon and satin lines. Linen blends take muted, natural dye tones particularly well and soften with wear and washing rather than pilling. It's a lower-volume, specialty fabric compared to our chiffon and jersey lines. Available from 300 pieces per color.",
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
          "The crinkle collection covers our heat-set texturing process across every category that offers it, giving visible volume and movement that survives machine washing without needing to be re-ironed the way a pressed pleat does. It's the same permanent texturing behind our georgette fabric family, just grouped here for buyers browsing by finish rather than by base fabric name. Available from 300 pieces per color.",
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
          "The ribbed collection groups our vertical rib-knit fabric across the categories that use it, giving a slightly compressed, sculpted look aimed at younger customers who wear modest fashion closer to streetwear than traditional occasion dressing. The tighter rib holds more structure than standard jersey without needing pins to hold its shape. Available from 300 pieces per color.",
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
      "Pre-configured bulk assortments and starter packs, built for distributors and new retail accounts who'd rather not build an order one SKU at a time.",
    content: `
      <p>Every product in our catalog can be ordered on its own against its MOQ. But a meaningful share of our accounts, especially new distributors and retailers placing a first order, would rather start with a pre-configured bundle than guess at which styles, colors, and quantities to pick. That's who this category is for.</p>
      <p>Bundles are built from our best-reordering SKUs in each category, weighted toward whatever colors and sizes our sales data shows move fastest, and they can be adjusted before production once you've looked over the default setup. None of this is excess stock repackaged, either &mdash; every bundle is produced to order against the same spec as the individual product it's built from, with one exception: our Bulk Clearance Stock line.</p>
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
          "Wholesale hijab bundles put together a multi-color, multi-fabric assortment across our chiffon, jersey, and modal lines, weighted toward whatever shades and fabrics our sales data shows move fastest for new accounts. It takes the guesswork out of picking an opening color range from scratch, and it's still fully adjustable before production runs. Bundles are produced to order, never drawn from existing stock. Configured from 1,000 pieces total per bundle.",
        images: [
          placeholder("subcat-wholesale-hijab-bundles-1", "Bundle of rolled jersey hijabs in assorted colors tied with a ribbon"),
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
          "Wholesale abaya bundles put together a coordinated mix across our closed, open, and everyday silhouettes in our core neutral color range, giving distributors a balanced opening assortment instead of over-committing to a single cut before seeing what their market actually prefers. Quantities per style lean toward our historically strongest reorder rates. Configured from 500 pieces total per bundle.",
        images: [
          placeholder("subcat-wholesale-abaya-bundles-1", "Row of open abayas in a neutral color range hung for a wholesale bundle"),
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
          "Wholesale cap bundles package our cotton, jersey, and tube inner cap constructions together across an extended neutral color range, matching how most distributors actually stock this category: as a consumable accessory sold alongside every hijab, khimar, and niqab a customer buys, not a single hero SKU. Given how low the per-unit cost is and how often the category reorders, this is configured from 2,000 pieces total per bundle.",
        images: [
          placeholder("subcat-wholesale-cap-bundles-1", "Assortment of tie-back inner caps in neutral colors laid out for a wholesale bundle"),
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
          "Wholesale instant hijab bundles put together a multi-color assortment across our chiffon and jersey pull-on constructions, for retailers targeting gifting and first-time hijab wearers, where a foolproof, no-styling-required product matters more than fabric variety. Bundles are produced to order in our current best-selling colorways. Configured from 1,000 pieces total per bundle.",
        images: [
          placeholder("subcat-wholesale-instant-hijab-bundles-1", "Stack of instant hijabs in assorted colors folded for a wholesale bundle"),
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
          "The bridal wholesale collection curates a spread across our pearl, crystal, and embroidered embellishment tiers in both bridal hijabs and bridal abayas, giving boutique buyers a representative sample of the full bridal range without commissioning each embellishment style separately. We'd recommend this format for a first bridal order, before you've identified which specific finishes your market responds to. Configured from 100 pieces total per bundle across mixed designs.",
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
          "The Eid wholesale collection bundles our strongest-reordering abaya, hijab, and prayer set styles into one seasonal order, timed to land with distributors' Eid ordering cycles instead of requiring separate purchase orders across categories. Colorways lean toward richer, occasion-appropriate tones alongside our core neutrals. Configured from 1,000 pieces total per bundle, and we'd recommend ordering early given seasonal production capacity constraints.",
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
          "The Ramadan wholesale collection weights its assortment toward prayer sets, prayer khimars, and everyday abayas and hijabs rather than occasion-heavy pieces, matching what distributors actually tell us sells through the month. Given the lead time a bundle this size needs, it's meant to be ordered well ahead of the season. Configured from 1,000 pieces total per bundle.",
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
          "Retailer starter packs pull a small cross-category assortment, hijabs, an abaya style, inner caps, and a scarf, into one opening order, sized for a brand-new retail account testing the category rather than an established distributor placing a category-specific bulk order. It's the lowest-commitment way into our wholesale catalog, and a few accounts have used it specifically to validate demand before committing to a larger single-category order. Configured from 300 pieces total per pack.",
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
          "Mixed colour bundles order a single style across our entire standing color range in one purchase order, instead of a buyer manually splitting quantities across individual color line items. It's a practical shortcut for distributors who've already decided on a specific style and just need full-spectrum color coverage for retail display. Available for any standing catalog SKU from 500 pieces total across the full color range.",
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
          "Bulk clearance stock is the one line in this category drawn from existing inventory rather than produced to order: end-of-run fabric lots, discontinued colorways, and overrun quantities from other orders, sold at a reduced price and a lower MOQ than our standard production minimums. What's available changes constantly and isn't guaranteed to repeat, so it's worth confirming current stock before planning a retail launch around it. Available from 100 pieces, subject to current inventory.",
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
    slug: "skirts",
    name: "Modest Skirts",
    shortName: "Skirts",
    description:
      "Maxi, pleated, A-line, and straight-cut modest skirts, floor-grazing or ankle length, across cotton, jersey, satin, and denim.",
    content: `
      <p>A modest skirt is defined almost entirely by length and fullness, not by any one fabric, which is why we run the same core silhouettes &mdash; maxi, pleated, A-line, straight-cut, tiered &mdash; across several fabric bases instead of locking a cut to a single material. Every style is drafted floor-grazing or ankle-length as standard, with the waistband sized generously enough to sit comfortably under a longline top or tunic.</p>
      <p>This category is really a companion to our tops and tunics line. Buyers putting together separates-based outfits usually order matching or coordinating skirts and tops from the same fabric lot, just to guarantee the shades actually match across the full look. Custom waistband elastic, drawstring, or zip-fly construction is available if you're ordering private label.</p>
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
          "This is our base floor-length skirt, cut straight through the hip with enough ease in the fabric to fall softly rather than cling. Most of the other silhouettes in this category start from this pattern, so it's usually the first SKU we suggest to buyers who are new to the skirt range. Waistband finish varies by fabric base: elastic, drawstring, or a fitted zip-fly. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-maxi-1", "Model wearing a navy floor-length maxi skirt with a cream blouse and hijab"),
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
          "The pleats here run the full length from waist to hem and are heat-set, not just pressed in, so they hold their shape through machine washing instead of needing an iron after every wear. That gives more structured, defined movement than a flat maxi cut. It's a natural step up from our plain maxi skirt for buyers who want extra visual interest without moving to a higher price point. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-pleated-1", "Model wearing a pale yellow knife-pleated maxi skirt with a cream blouse"),
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
          "A-line skirts flare gently from the waist, landing somewhere between our fitted straight-cut and our fuller flared styles — a classic, flattering shape that works across most markets. Because the flare is built into the pattern rather than gathered at the waistband, it hangs evenly instead of bunching. When a buyer isn't sure which silhouette will sell best, this is usually what we suggest first. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-a-line-1", "Model wearing a burgundy A-line skirt with a cream knit top"),
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
          "Flared skirts take the circular cut fuller than our A-line style, so there's noticeably more swing and movement when walking. That extra fabric per unit does push the cost up slightly. Even so, it's the cut our buyers in warm-climate markets reorder the most — a breezier fit tends to outsell a fitted one there. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-flared-1", "Model wearing a white full-circle flared skirt with a cream blouse and hijab"),
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
          "Straight-cut skirts run a fitted column from waist to hem with no flare, and we build a rear vent or kick pleat into the hem so the fitted cut still allows a normal walking stride. It's our most tailored option, positioned above the casual maxi and A-line cuts and closer to office and formal-adjacent wear. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-skirts-straight-cut-1", "Model wearing a black straight-cut midi skirt with a back slit"),
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
          "This takes our maxi silhouette and builds it in a structured denim base instead of our usual fluid wovens and knits, so it holds up better for daily, casual wear. The heavier fabric also keeps a straighter line at the hem than our lighter maxi skirts do. Buyers building youth or casual-focused ranges tend to reorder this one the most. Offered from 300 pieces per color, in standard indigo and black washes.",
        images: [
          placeholder("subcat-skirts-denim-maxi-1", "Model wearing a mid-wash denim maxi skirt with a navy top and hijab"),
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
          "Our satin skirts use the same high-sheen weave as the rest of the satin line, giving a fluid, weighted drape that suits occasion and evening styling more than everyday casual wear. It pairs naturally with our satin and silk tunics and hijabs if you want a coordinated occasion set. One practical note: the glossy surface shows creasing more than matte fabrics do, so for retail accounts that request it, we ship these on a hanger instead of folded. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-skirts-satin-1", "Model wearing a champagne satin skirt with a fluted hem"),
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
          "These use a stretch knit base instead of a woven fabric, which makes for a softer, easier-care skirt than our structured cotton and satin styles. The stretch also means a single size range covers a wider variety of body shapes. If you're building a coordinated casual line, this is the fabric to pair with our jersey hijabs and tunics. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-jersey-1", "Model wearing a sky blue jersey skirt with a twisted waist"),
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
          "Cotton skirts hold a crisper structure than our jersey line while staying cooler than synthetic blends in hot, humid climates — a breathable woven base does both jobs well. Most buyers pick cotton specifically for our A-line and straight-cut silhouettes, since it presses and holds a crease far better than a stretch knit does. Offered from 300 pieces per color.",
        images: [
          placeholder("subcat-skirts-cotton-1", "Model wearing a burgundy pleated cotton skirt with pockets"),
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
          "Tiered skirts stack several gathered fabric tiers from waist to hem for a romantic, boho-adjacent silhouette with more visible volume than our other flared cuts. Each tier has to be cut and gathered separately before assembly, which is why this style costs more to construct than a single-panel maxi skirt. It works well as a seasonal or occasion-leaning addition alongside a mostly solid-color skirt range. Offered from 250 pieces per color.",
        images: [
          placeholder("subcat-skirts-tiered-1", "Model wearing a red gingham tiered maxi skirt"),
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
      "Moroccan and Turkish-influenced kaftans in embroidered, beaded, satin, and silk finishes, cut for occasion and evening wear.",
    content: `
      <p>A kaftan is different from our abaya range mostly in how it's approached from the start. An abaya is drafted for daily wear first, with occasion styling as a secondary concern. A kaftan is built around embellishment and drape from day one, usually on a wider, more flowing body block designed to show off beading, embroidery, or a printed pattern rather than keep a clean minimal line. We treat this as a boutique, gifting, and occasion-adjacent category, not something for daily-wear volume racks.</p>
      <p>Construction ranges from lightweight chiffon and satin for warm-climate occasion wear up to heavier embroidered and beaded pieces meant for evening and bridal-adjacent events. Every style keeps full coverage through the body and sleeve, and in our reference photography, they're all styled with a hijab, same as the rest of the catalog.</p>
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
          "Moroccan kaftans keep the wide, dramatic sleeve and richly trimmed neckline of the North African tradition, usually finished with contrast piping or braided trim along every seam. When a buyer orders \"a kaftan\" without specifying further, this is usually what they mean — it's the most recognizable silhouette in our range. Trim color and placement can be customized for private label buyers building their own signature look. Produced from 100 pieces per design.",
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
          "Turkish kaftans trade our Moroccan style's fuller volume for a straighter body block, concentrating the embroidery or embellishment into a vertical front panel instead of spreading it across the whole garment. The result reads more tailored and contemporary without losing the loose, unstructured comfort that defines the category. For buyers whose market finds a fully voluminous kaftan too costume-like, this is usually the better fit. Produced from 100 pieces per design.",
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
          "Embroidered kaftans carry a thread motif across the neckline, cuffs, or front panel — either a buyer's own pattern or something we develop in-house from a reference image. Thread color, density, and placement are all specified per order. More often than not, this finish gets ordered as a one-off custom design for a specific retail season or event, rather than as a repeat catalog SKU. Produced from 100 pieces per design.",
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
          "Beaded kaftans swap machine-embroidered thread for hand-set beadwork in geometric or floral patterns, which adds real dimension and sparkle but also stretches out the production lead time. Bead density can run anywhere from an accent trim to a fully beaded bodice, and pricing follows accordingly. This sits at the top of our embellishment range, and we only build it on structured satin and crepe bases sturdy enough to carry the added weight without drooping. Produced from 100 pieces per design.",
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
          "Satin kaftans are built on our high-sheen satin weave, which gives a fluid, weighted drape that holds any embellishment in place through a full event rather than shifting around. The glossy finish also reflects light well under both daylight and flash. You can order it plain or as the base for any of our embroidered or beaded finishes, and it pairs naturally with our satin hijabs and abayas for a coordinated occasion outfit. Produced from 100 pieces per design.",
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
          "Silk kaftans run on genuine mulberry silk instead of a satin substitute — our top kaftan tier, aimed at boutique and gifting buyers whose customers specifically ask for real silk. The natural fiber's sheen and weight give it a drape that moves and photographs differently from satin. Every piece gets inspected individually before packaging, the same standard we hold for our luxury hijabs and bridal silk. Produced from 100 pieces per design.",
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
          "Printed kaftans put our in-house digital print studio to work on the kaftan silhouette, giving buyers pattern variety beyond the solid-and-embellished styles that otherwise dominate this category. Digital printing holds fine detail well, and the colors stay sharp through repeated washing. This tends to land best with younger, fashion-forward customers, who reorder for new prints more than they do for solids. Strike-off samples usually turn around in under two weeks. Produced from 100 pieces per design.",
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
          "Bridal kaftans carry our heaviest embellishment into the kaftan silhouette, giving nikah, engagement, and bridal party buyers an alternative to a bridal abaya or gown. The wider cut works well for guests and bridal party members who want to coordinate with the bride's look without wearing an identical silhouette. For bridal party orders, we can also color-match to a wedding palette. Produced from 50 pieces per design.",
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
          "Evening kaftans fit through the bodice, then flare into a fuller tulle or chiffon skirt for a gown-adjacent silhouette dressier than our other kaftan cuts. We concentrate the beading and embroidery at the bodice, since that's where it catches the most light under venue lighting. For formal, non-bridal events — galas, receptions, formal dinners — this is what buyers come back for. Produced from 75 pieces per design.",
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
          "Casual kaftans strip the category down to a simple, unembellished silhouette on a lightweight chiffon or cotton-blend base, built for warm-climate daily wear rather than occasion styling. If a buyer wants the relaxed kaftan shape without paying for beading or embroidery, this is where they start. Offered from 200 pieces per color.",
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
      "Pins, clips, magnets, and brooches for securing and finishing a hijab, sold in bulk alongside our garment categories.",
    content: `
      <p>We manufacture and source hijab accessories as a bulk line specifically because our distributor accounts asked us to stop making them source fastening hardware separately from their garment orders. Everything here gets held to the same standard as our garments: hardware that holds up under daily use, not something that looks fine in a photo and fails within a week.</p>
      <p>It's a low-cost, high-repeat-order category, usually sold in bulk multi-packs and bundled with hijab or khimar orders rather than bought on its own. Custom finishes and packaging, including branded retail card mounts, are available for private label buyers.</p>
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
          "Hijab magnets close fabric layers with a two-piece concealed magnet instead of a pin, so there's no puncture at all. We've seen this become the fastest-growing fastener in our accessory range, mostly from customers whose hijabs had visible pin-hole damage building up in the same spot over time. We test magnet strength against our own chiffon and jersey weights, so it holds securely but still separates easily when you need it to. Sold in bulk multi-packs from 500 sets per finish.",
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
          "Hijab pins are a straight decorative pin with a secure locking clasp — the most common fastener you'll find at hijab retail counters worldwide. Ours run a stainless pin core under the decorative gold or silver head, so it won't rust or discolor with repeated use. This is the default accessory we bundle into starter packs and gift sets. Sold in bulk multi-packs from 500 pieces per finish.",
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
          "Safety pins fully enclose the point once closed, which makes them the lowest-risk fastener we sell for customers worried about a pin working loose or scratching. It isn't a glamorous accessory, but distributors reorder it at higher volume than any decorative pin style — it's simply the most functional option on the shelf. Sold in bulk multi-packs from 1,000 pieces per finish.",
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
          "Brooches are meant to be seen — a finishing detail at the collarbone or temple rather than hardware you hide. Buyers stock this style for gifting and occasion-adjacent ranges, where the accessory is part of the styling rather than purely functional hardware. Motifs and stone colors can be customized for private label orders. Sold in bulk multi-packs from 300 pieces per design.",
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
          "Hijab clips gather and hold fabric volume with a spring-hinge mechanism, usually at the crown or nape to keep a wrap style in place. For customers who are styling their hijab rather than just fastening it, this is a faster, no-puncture option than a pin. We offer both plain and decorative finishes. Sold in bulk multi-packs from 500 pieces per finish.",
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
          "Hijab rings pull loose fabric through a decorative ring instead of pinning or clipping it, creating the cinched, styled drape at the shoulder or side you see in wrap-style tutorials. This is more of a styling accessory than a fastener, and buyers typically stock it alongside instant and luxury hijab ranges where a more finished look is part of the sell. Sold in bulk multi-packs from 300 pieces per finish.",
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
          "Hijab grippers are small, low-profile friction clips built to hold an underscarf or inner cap edge in place under an outer hijab layer through a full day of wear — they're not meant to be seen. This pairs naturally with our inner cap range, since it addresses the same all-day-slip complaint that led us to add the grip band to our cotton inner caps. Sold in bulk multi-packs from 500 pieces per finish.",
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
          "Hijab tape is a double-sided, fabric-safe adhesive strip for customers who want a completely invisible, pin-free fasten — especially useful on delicate chiffon and silk, where a pin can snag or pull threads. Since it's single-use rather than reusable hardware, we sell it in higher-count packs than our pins and clips. Sold in bulk multi-packs from 1,000 strips per pack.",
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
          "Decorative pins rotate through seasonal motifs and finishes — we designed this line as a checkout-counter, impulse-add item rather than a core stocked SKU. Buyers reorder new designs each season to keep the display fresh, the same way our printed scarf program rotates patterns. We can also develop custom motifs for private label buyers running seasonal campaigns. Sold in bulk multi-packs from 300 pieces per design.",
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
          "Magnetic brooch sets pair a decorative brooch head with a magnetic back plate instead of a traditional pin post, so you get the visible styling of a brooch with the no-puncture hold of a magnet. This is our premium accessory tier — priced above single-mechanism pins or magnets, and sold as a matched set rather than separate pieces. Sold in bulk multi-packs from 200 sets per design.",
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
    slug: "belts",
    name: "Belts & Waist Accessories",
    shortName: "Belts",
    description:
      "Tie, buckle, chain, and elastic waist belts, styled over abayas, kaftans, and modest dresses to define the waist without touching the garment itself.",
    content: `
      <p>A waist belt is probably the fastest way for a customer to make the same abaya or kaftan look like a different garment, which is why we treat it as its own accessory category instead of bundling one fixed belt in with each piece. Buyers who stock a belt range alongside their abaya and kaftan lines tend to report it as one of the best attach-rate add-ons at checkout.</p>
      <p>Construction runs from simple fabric tie belts to structured buckle and chain styles, and every belt is sized to go over outer garments rather than against bare skin, so the sizing runs looser than you'd expect from a normal fashion belt. Custom buckle branding and fabric-matched tie belts, cut from the same fabric lot as a specific abaya style, are available for private label buyers.</p>
    `,
    heroImage: placeholder("cat-belts-hero", "Woman wearing a magenta obi-style tie belt over a floral dress and hijab"),
    cardImage: placeholder("cat-belts-card", "Close-up of a thick buckle belt worn over a purple dress"),
    keywords: [
      "abaya belt manufacturer",
      "waist belt wholesale supplier",
      "obi belt manufacturer India",
      "modest fashion accessories wholesale",
    ],
    subcategories: [
      {
        slug: "abaya-waist",
        name: "Abaya Waist Belts",
        shortDescription: "Fabric tie belt sized to sit comfortably over an abaya rather than against the body.",
        description:
          "Abaya waist belts are cut long and finished with a soft fabric tie instead of a rigid buckle, sized to sit comfortably over the volume of an abaya rather than against bare skin. If you're stocking our abaya range and need a first accessory SKU, we usually point buyers here, since it works across nearly every silhouette from closed to open-front styles. Offered in coordinating and contrast colorways. Sold in bulk multi-packs from 300 pieces per color.",
        images: [
          placeholder("subcat-belts-abaya-waist-1", "Model wearing a fabric tie belt over a floral dress and hijab"),
          placeholder("subcat-belts-abaya-waist-2", "Back view of a fabric tie belt worn over a modest dress"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Burgundy", hex: "#6d2130" },
        ],
      },
      {
        slug: "elastic",
        name: "Elastic Waist Belts",
        shortDescription: "Stretch elastic band belt for a no-fuss, one-size cinch over any outer garment.",
        description:
          "Elastic waist belts use a wide stretch band instead of a tie or buckle, so it's a no-fuss, one-size fit that cinches over an outer garment without adjusting or tying anything. It's also the fastest belt to put on, which distributors tell us is exactly why customers keep reordering it as a daily-wear piece rather than something they save for occasions. Sold in bulk multi-packs from 300 pieces per color.",
        images: [
          placeholder("subcat-belts-elastic-1", "Close-up of a thin belt worn over a floral dress"),
          placeholder("subcat-belts-elastic-2", "Close-up of a thick buckle belt worn over a purple dress"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Camel", hex: "#c19a6b" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "buckle",
        name: "Buckle Belts",
        shortDescription: "Structured belt with a statement buckle for a defined, tailored waist finish.",
        description:
          "Buckle belts use a rigid closure rather than a tie or elastic, which gives the most structured, defined waist finish in our belt range. Buckle size and finish range from a minimal metal clasp up to a large statement piece, priced accordingly. Our coat and blazer-style abayas are the most common pairing here, since a tailored, structured accessory suits their own silhouette. Sold in bulk multi-packs from 200 pieces per design.",
        images: [
          placeholder("subcat-belts-buckle-1", "Close-up of a thick buckle belt worn over a purple dress"),
          placeholder("subcat-belts-buckle-2", "Close-up of an ornate buckle belt with gold medallion detail"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Tan", hex: "#c19a6b" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
      {
        slug: "chain",
        name: "Chain Belts",
        shortDescription: "Metal chain-link belt for a statement, occasion-adjacent finish over a plain garment.",
        description:
          "Chain belts swap fabric for metal chain-link or linked-medallion construction, giving a statement, occasion-adjacent finish that dresses up a plain abaya or kaftan without touching the garment itself. Since it's heavier than our fabric belt styles, we size it with an adjustable clasp rather than a fixed tie length. Sold in bulk multi-packs from 200 pieces per design.",
        images: [
          placeholder("subcat-belts-chain-1", "Close-up of an ornate buckle belt with gold medallion detail"),
          placeholder("subcat-belts-chain-2", "Model wearing a fabric tie belt over a floral dress and hijab"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Silver", hex: "#c7c7c7" },
        ],
      },
      {
        slug: "embellished",
        name: "Embellished Belts",
        shortDescription: "Stone, crystal, or metalwork detail belt positioned for occasion and bridal-adjacent styling.",
        description:
          "Embellished belts carry hand-applied stonework, crystal detail, or ornate metalwork across the buckle or body — an occasion accessory rather than a daily one. Buyers pair this most often with our bridal kaftans and bridal abayas, where the belt becomes part of the garment's overall embellishment instead of just holding it together. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-belts-embellished-1", "Close-up of an ornate buckle belt with gold medallion detail"),
          placeholder("subcat-belts-embellished-2", "Back view of a fabric tie belt worn over a modest dress"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Silver", hex: "#c7c7c7" },
        ],
      },
      {
        slug: "corset",
        name: "Corset-Style Belts",
        shortDescription: "Wide, structured belt that cinches at the waist for a more sculpted silhouette.",
        description:
          "Corset-style belts are cut wider than our standard tie or buckle belts and built to cinch at the natural waist, giving a more sculpted silhouette over a loose-cut abaya or kaftan. There's no boning involved, unlike a true corset — the structure comes from a heavier interior interfacing that holds its shape without restricting movement or breathing. Sold in bulk multi-packs from 200 pieces per color.",
        images: [
          placeholder("subcat-belts-corset-1", "Back view of a wide structured tie belt worn over a modest dress"),
          placeholder("subcat-belts-corset-2", "Close-up of a thin belt worn over a floral dress"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Olive", hex: "#6b6f52" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "obi",
        name: "Obi Belts",
        shortDescription: "Wide sash-style belt tied in a front bow, borrowed from Japanese obi styling.",
        description:
          "Obi belts borrow the wide sash and front-tied bow from Japanese obi styling, adapted here as a modest fashion accessory worn over a kaftan or open-front abaya. The sash covers more of the torso than a standard tie belt, and the front bow reads as a visible styling feature rather than just a closure. It pairs especially well with our kimono-style abayas, since they share the same reference point. Sold in bulk multi-packs from 200 pieces per color.",
        images: [
          placeholder("subcat-belts-obi-1", "Model wearing a wide obi-style tie belt with a front bow over a floral dress"),
          placeholder("subcat-belts-obi-2", "Close-up of a thick buckle belt worn over a purple dress"),
        ],
        colors: [
          { name: "Magenta", hex: "#a3275a" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "leather-look",
        name: "Leather-Look Belts",
        shortDescription: "Vegan leather-look finish for a structured belt without genuine leather sourcing.",
        description:
          "Leather-look belts use a vegan PU finish rather than genuine leather, which gets you the structured look and slight sheen of a leather belt while keeping sourcing and pricing simpler at wholesale volume. It's a practical everyday belt that holds its shape better through repeated use than a purely fabric tie belt would. Sold in bulk multi-packs from 300 pieces per color.",
        images: [
          placeholder("subcat-belts-leather-look-1", "Close-up of a thin leather-look belt worn over a floral dress"),
          placeholder("subcat-belts-leather-look-2", "Close-up of an ornate buckle belt with gold medallion detail"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Tan", hex: "#c19a6b" },
          { name: "Burgundy", hex: "#6d2130" },
        ],
      },
      {
        slug: "satin",
        name: "Satin Waist Belts",
        shortDescription: "High-sheen satin tie belt for an occasion-appropriate finishing detail.",
        description:
          "Satin waist belts use the same high-sheen satin fabric as the rest of our satin line, rather than matte cotton or a leather-look finish, and they're built for occasion and evening styling over a satin or silk kaftan, abaya, or bridal piece. The glossy finish catches light the same way our satin garments do, so it coordinates with a satin outer piece instead of competing with it. Sold in bulk multi-packs from 200 pieces per color.",
        images: [
          placeholder("subcat-belts-satin-1", "Model wearing a wide obi-style tie belt with a front bow over a floral dress"),
          placeholder("subcat-belts-satin-2", "Close-up of a thin belt worn over a floral dress"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Wine", hex: "#722f37" },
        ],
      },
      {
        slug: "adjustable",
        name: "Adjustable Waist Belts",
        shortDescription: "Multi-hole or slide-adjust closure for a fit that isn't locked to one waist size.",
        description:
          "Adjustable waist belts use a multi-hole buckle or slide-adjust closure instead of a fixed tie length or single elastic size, so one SKU covers a wider range of body sizes and garment thicknesses. If a buyer has dealt with size-related returns or fit complaints on fixed-length tie belts, this is usually the fix. Sold in bulk multi-packs from 300 pieces per color.",
        images: [
          placeholder("subcat-belts-adjustable-1", "Close-up of a thick buckle belt worn over a purple dress"),
          placeholder("subcat-belts-adjustable-2", "Back view of a wide structured tie belt worn over a modest dress"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Tan", hex: "#c19a6b" },
        ],
      },
    ],
  },
  {
    slug: "occasion-wear",
    name: "Modest Occasion Wear",
    shortName: "Occasion Wear",
    description:
      "Embellished gowns and formal dresses with full modest coverage, covering everything from Eid and nikah through engagement, party, and black-tie occasions.",
    content: `
      <p>Modest occasion wear pulls together a bit of nearly everything else we make: embellishment techniques from our bridal lines, satin and silk bases from our fabric library, and the same full-coverage standard we use for daily-wear hijabs and abayas, but built into standalone formal gowns and dresses rather than an abaya or kaftan shape. It exists simply because not every dressy occasion calls for something abaya-shaped.</p>
      <p>Long sleeves and a high neckline are standard on every style here, with modesty built into the pattern itself rather than added on afterward with a separate underlayer. Buyers use this category for customers attending events where Western-style formalwear is the norm but full coverage still isn't optional. Given how event- and season-specific this category is, small-batch and made-to-order production is the default.</p>
    `,
    heroImage: placeholder("cat-occasion-hero", "Woman wearing a champagne glittered gown with a jeweled hijab pin"),
    cardImage: placeholder("cat-occasion-card", "Woman wearing a blue sequin gown with a peplum ruffle and hijab"),
    keywords: [
      "modest evening gown manufacturer",
      "modest occasion wear wholesale",
      "hijab formal dress supplier",
      "modest party dress manufacturer India",
    ],
    subcategories: [
      {
        slug: "eid",
        name: "Eid Collection",
        shortDescription: "Richly colored formal gowns timed for Eid celebration dressing.",
        description:
          "Our Eid collection leans into richer jewel tones and all-over embellishment, built for daytime and evening Eid celebrations where customers want a formal gown rather than an abaya or kaftan silhouette. Think of it as a seasonal companion to our Eid wholesale bundle in the Wholesale Collections category, just sold here as an individual style instead of a pre-configured bundle. Produced from 75 pieces per design; given the production lead time, we'd recommend ordering ahead of season.",
        images: [
          placeholder("subcat-occasion-eid-1", "Woman wearing a sequined pale yellow gown with a hijab"),
          placeholder("subcat-occasion-eid-2", "Woman wearing a blue sequin gown with a peplum ruffle and hijab"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Emerald", hex: "#175f4c" },
          { name: "Fuchsia", hex: "#c22a6d" },
        ],
      },
      {
        slug: "ramadan",
        name: "Ramadan Collection",
        shortDescription: "Softer, more modest-toned formal wear for iftar gatherings and family events.",
        description:
          "Our Ramadan collection favors softer tones and slightly more restrained embellishment than our Eid styles, suited to iftar gatherings and family events through the month rather than the peak celebration itself. Think of it as a lighter-weight complement to our Ramadan wholesale bundle, for buyers who want an individual formalwear SKU alongside that assortment. Produced from 75 pieces per design.",
        images: [
          placeholder("subcat-occasion-ramadan-1", "Woman wearing a fuchsia beaded gown with a taupe hijab"),
          placeholder("subcat-occasion-ramadan-2", "Woman wearing a lavender embellished gown with a hijab"),
        ],
        colors: [
          { name: "Lavender", hex: "#c9b8e0" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
      {
        slug: "wedding-guest",
        name: "Wedding Guest Wear",
        shortDescription: "Formal dressing appropriate for attending a wedding without competing with the bride.",
        description:
          "Wedding guest wear is calibrated to be formal enough for a wedding without competing with the bridal party's colors or embellishment level: no white, no ivory, and embellishment kept concentrated rather than all-over. This sits apart from our bridal categories on purpose, since those are built for the bride and her immediate party rather than the wider guest list. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-occasion-wedding-guest-1", "Close-up of a black beaded evening gown with intricate embroidery and hijab"),
          placeholder("subcat-occasion-wedding-guest-2", "Woman wearing a navy beaded gown with a satin hijab at an event"),
        ],
        colors: [
          { name: "Navy", hex: "#202a44" },
          { name: "Emerald", hex: "#175f4c" },
          { name: "Burgundy", hex: "#6d2130" },
        ],
      },
      {
        slug: "nikah",
        name: "Nikah Collection",
        shortDescription: "Formal gowns for the nikah ceremony itself, distinct from bridal reception wear.",
        description:
          "Our nikah collection is built for the ceremony itself, which in many of our buyers' markets is a separate event from the reception or walima, and often a more understated one. Styles here favor a modest, elegant gown silhouette over our fuller bridal abaya or kaftan cuts, in colors beyond pure white, since a lot of brides save white specifically for the reception look. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-occasion-nikah-1", "Woman wearing a navy lace gown with ruffled sleeves and hijab, seated"),
          placeholder("subcat-occasion-nikah-2", "Woman wearing a champagne glittered gown with a jeweled hijab pin"),
        ],
        colors: [
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Navy", hex: "#202a44" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "engagement",
        name: "Engagement Wear",
        shortDescription: "Statement gowns for engagement photography and celebration events.",
        description:
          "Engagement wear gets designed for a single, heavily photographed event, so we choose color saturation and embellishment placement for how they read in engagement photography, not just in person. It stays a distinct SKU from bridal styling too, since most customers want their engagement look to be visually different from whatever they'll wear on the wedding day. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-occasion-engagement-1", "Woman wearing a sky blue sequined gown with ruffle detail and hijab"),
          placeholder("subcat-occasion-engagement-2", "Woman wearing a champagne sequined gown with an embellished fascinator"),
        ],
        colors: [
          { name: "Sky Blue", hex: "#4a90c2" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
      {
        slug: "party",
        name: "Party Wear",
        shortDescription: "Shorter-lead, lower-embellishment formal dresses for general celebration occasions.",
        description:
          "Party wear covers general celebration dressing — birthdays, graduations, family gatherings — for customers who want a formal, photograph-ready look without the embellishment cost or production lead time of our bridal or nikah tiers. It's also our fastest-turnaround formal category, which is why we suggest it as an entry point for buyers who are new to occasion wear. Offered from 150 pieces per design.",
        images: [
          placeholder("subcat-occasion-party-1", "Woman wearing a blue sequin gown with a peplum ruffle and hijab"),
          placeholder("subcat-occasion-party-2", "Woman wearing a sequined pale yellow gown with a hijab"),
        ],
        colors: [
          { name: "Sky Blue", hex: "#4a90c2" },
          { name: "Gold", hex: "#c9a635" },
          { name: "Fuchsia", hex: "#c22a6d" },
        ],
      },
      {
        slug: "evening",
        name: "Evening Wear",
        shortDescription: "Fitted, floor-length silhouette for black-tie and formal evening events.",
        description:
          "Evening wear uses a fitted, floor-length silhouette built for black-tie and formal evening events, which sets it apart from our fuller party wear cuts. We build it in weighted satin or beaded mesh over a structured lining, so the gown holds its line through a full evening instead of losing shape while seated. It's our most formal non-bridal tier. Offered from 75 pieces per design.",
        images: [
          placeholder("subcat-occasion-evening-1", "Woman wearing a lavender embellished gown with a hijab"),
          placeholder("subcat-occasion-evening-2", "Woman wearing a fuchsia beaded gown with a taupe hijab"),
        ],
        colors: [
          { name: "Lavender", hex: "#c9b8e0" },
          { name: "Fuchsia", hex: "#c22a6d" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "luxury",
        name: "Luxury Modest Wear",
        shortDescription: "Our highest fabric and embellishment tier across the occasion wear range.",
        description:
          "Luxury modest wear sits above every other tier in this category, on both fabric quality and embellishment density, and holds to the same silk and hand-set stonework standards as our luxury hijab and bridal lines. We built it for boutique and department-store-adjacent placement rather than volume distribution, and every piece gets inspected individually before packaging. Produced from 50 pieces per design.",
        images: [
          placeholder("subcat-occasion-luxury-1", "Woman wearing a navy beaded gown with a satin hijab at an event"),
          placeholder("subcat-occasion-luxury-2", "Close-up of a black beaded evening gown with intricate embroidery and hijab"),
        ],
        colors: [
          { name: "Navy", hex: "#202a44" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
      {
        slug: "festive",
        name: "Festive Collection",
        shortDescription: "Bright, celebratory colorways and prints for regional festival dressing.",
        description:
          "Our festive collection runs brighter colorways and more pattern-forward embellishment than our other occasion tiers, built specifically for regional festival dressing beyond Eid and Ramadan. Most of the demand here has come from buyers serving South Asian and Southeast Asian markets, where festival dressing calls for a lot more color variety than the jewel-tone-and-neutral palette common in our Gulf-facing styles. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-occasion-festive-1", "Woman wearing a champagne glittered gown with a jeweled hijab pin"),
          placeholder("subcat-occasion-festive-2", "Woman wearing a navy lace gown with ruffled sleeves and hijab, seated"),
        ],
        colors: [
          { name: "Fuchsia", hex: "#c22a6d" },
          { name: "Gold", hex: "#c9a635" },
          { name: "Sky Blue", hex: "#4a90c2" },
        ],
      },
      {
        slug: "formal",
        name: "Formal Modest Wear",
        shortDescription: "Understated, minimal-embellishment formal dressing for corporate and civic events.",
        description:
          "Formal modest wear strips embellishment back to a minimum for corporate galas, award ceremonies, and civic events, where the venue calls for formalwear but heavy embellishment would read as overdressed. Clean lines and a restrained color palette take priority over sparkle or print here. Offered from 150 pieces per design.",
        images: [
          placeholder("subcat-occasion-formal-1", "Woman wearing a champagne sequined gown with an embellished fascinator"),
          placeholder("subcat-occasion-formal-2", "Woman wearing a sky blue sequined gown with ruffle detail and hijab"),
        ],
        colors: [
          { name: "Navy", hex: "#202a44" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
    ],
  },
  {
    slug: "formal-wear",
    name: "Modest Formal Wear",
    shortName: "Formal Wear",
    description:
      "Tailored blouses, structured skirts, blazer-style abayas, and coordinated sets built for office, corporate, and formal daytime dressing with full modest coverage.",
    content: `
      <p>Modest formal wear is our workwear and professional-dress line &mdash; the pieces a customer reaches for on a Monday morning, at a client meeting, or at a formal daytime event rather than an evening celebration. Where our occasion wear range leans into gowns and embellishment, this category is about clean tailoring: sharper shoulders, structured waistbands, crisp collars and cuffs, and fabrics like crepe, suiting-weight nida, and heavier satin that hold a pressed line through a full working day.</p>
      <p>Every style is cut for full coverage as standard &mdash; long sleeves, high necklines, and hemlines at or below the calf &mdash; so buyers can merchandise it alongside mainstream office wear without customers needing to layer or alter. Most buyers order this range as coordinated separates so blouses, skirts, and outer layers can be mixed across a single colour story. Production starts from 100 pieces per design, and private label options include custom buttons, lining, and woven neck labels.</p>
    `,
    heroImage: placeholder("cat-formal-wear-hero", "Model in a cream pintucked formal blouse and hijab beside a rail of tailored blouses"),
    cardImage: placeholder("cat-formal-wear-card", "Rail of tailored modest blouses in a neutral color range with a model in a cream blouse"),
    keywords: [
      "modest formal wear manufacturer",
      "modest office wear wholesale",
      "modest workwear supplier India",
      "hijab-friendly formal blouse manufacturer",
    ],
    subcategories: [
      {
        slug: "formal-blouses",
        name: "Formal Blouses",
        shortDescription: "Long-sleeved, high-neck tailored blouses with button plackets and structured cuffs.",
        description:
          "Our formal blouses are cut longer than a standard shirt, finishing at or below the hip, so they sit cleanly over a skirt or trousers without riding up. Each style has a high round or band collar, a full button placket, and gathered or buttoned cuffs that stay in place, with pintuck, pleat, or lace-panel detailing on the front rather than heavier embellishment. Fabrics are linen-look cotton blends, crepe, and lightweight satin. Produced from 150 pieces per design.",
        images: [
          placeholder("subcat-formal-wear-blouses-1", "Model wearing a cream long-sleeved blouse with pintucked lace panels and a hijab"),
          placeholder("subcat-formal-wear-blouses-2", "Close-up of linen-look blouse fabric texture"),
        ],
        colors: [
          { name: "Ivory", hex: "#f2ead8" },
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "tailored-skirts",
        name: "Tailored Straight-Cut Skirts",
        shortDescription: "Structured, fully lined straight and pencil-cut skirts for office wear.",
        description:
          "Tailored straight-cut skirts are built on a fitted waistband with a lined, structured body, finishing at mid-calf or longer with a modest back or side slit for ease of movement. We cut them in a medium-weight crepe or suiting fabric that holds a clean line and doesn't cling, which matters more on a fitted silhouette than on a fuller one. Lengths and slit placement can be adjusted per buyer. Produced from 150 pieces per design.",
        images: [
          placeholder("subcat-formal-wear-tailored-skirts-1", "Model wearing a black straight-cut midi skirt with a cream blouse"),
          placeholder("subcat-formal-wear-tailored-skirts-2", "Close-up of crepe suiting fabric texture"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#b08a5a" },
        ],
      },
      {
        slug: "skirt-sets",
        name: "Blouse & Skirt Sets",
        shortDescription: "Coordinated blouse and skirt pairings developed and sold as one formal look.",
        description:
          "Blouse and skirt sets pair one of our formal blouses with an A-line or pleated skirt in a coordinated or tonal colourway, developed together so the proportions and fabric weights work as a single outfit. Buyers can take them as a fixed set SKU or split them into separates on the shop floor. It's the easiest way into this category for retailers who want a complete look without building one from separate lines. Produced from 100 sets per design.",
        images: [
          placeholder("subcat-formal-wear-skirt-sets-1", "Model wearing a burgundy A-line skirt with a cream knit top and handbag"),
          placeholder("subcat-formal-wear-skirt-sets-2", "Model wearing a pale yellow pleated skirt with a cream blouse"),
        ],
        colors: [
          { name: "Burgundy", hex: "#6d2130" },
          { name: "Butter", hex: "#f1dd9b" },
          { name: "Ivory", hex: "#f2ead8" },
        ],
      },
      {
        slug: "blazer-abayas",
        name: "Blazer-Style Abayas",
        shortDescription: "Open-front abayas with tailored lapels and structured shoulders, worn like a long coat.",
        description:
          "Blazer-style abayas borrow their construction from tailored outerwear &mdash; notched or shawl lapels, lightly structured shoulders, and a straight, open-front body &mdash; so they read as professional dress rather than a traditional abaya silhouette. They're designed to layer over a matching inner dress or a blouse and skirt, and are our most-requested style from buyers serving corporate customers. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-formal-wear-blazer-abayas-1", "Model wearing a black coat-style blazer abaya over a beige inner dress"),
          placeholder("subcat-formal-wear-blazer-abayas-2", "Model wearing a black front-open abaya over a beige inner layer"),
        ],
        colors: [
          { name: "Navy", hex: "#202a44" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Charcoal", hex: "#3d3d3d" },
          { name: "Camel", hex: "#b08a5a" },
        ],
      },
      {
        slug: "two-piece",
        name: "Formal Two-Piece Sets",
        shortDescription: "Matching tunic-and-skirt sets in a single suiting fabric for a polished, coordinated look.",
        description:
          "Formal two-piece sets combine a long, straight tunic top with a matching full-length skirt, cut from the same bolt so colour and texture match exactly. They give the coverage of an abaya with the flexibility of separates, and work well for customers who want something more structured than a single-layer dress for office and formal daytime wear. Produced from 100 sets per design.",
        images: [
          placeholder("subcat-formal-wear-two-piece-1", "Model wearing a chocolate brown two-piece tunic and skirt set with hijab"),
          placeholder("subcat-formal-wear-two-piece-2", "Model wearing a brown layered three-piece formal set with hijab"),
        ],
        colors: [
          { name: "Chocolate", hex: "#4a2c22" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Taupe", hex: "#8b7d6b" },
        ],
      },
      {
        slug: "closed-abayas",
        name: "Tailored Closed Abayas",
        shortDescription: "Minimal, closed-front abayas with a clean tailored line for everyday professional wear.",
        description:
          "Our tailored closed abayas strip back detailing to a clean, closed-front silhouette with set-in sleeves and a slightly shaped waist, so they look neat and professional on their own without a layer underneath. We cut them in premium nida and crepe, which resist creasing through a full working day. This is the volume style in the range, and the one most buyers re-order season after season. Produced from 150 pieces per design.",
        images: [
          placeholder("subcat-formal-wear-closed-abayas-1", "Model wearing a black closed-front tailored abaya with hijab"),
          placeholder("subcat-formal-wear-closed-abayas-2", "Close-up of matte nida fabric texture"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Charcoal", hex: "#3d3d3d" },
        ],
      },
      {
        slug: "satin-separates",
        name: "Satin Formal Separates",
        shortDescription: "Heavyweight satin skirts and blouses for formal daytime events and evening functions.",
        description:
          "Satin formal separates sit at the dressier end of this category &mdash; a fluted or bias-cut satin skirt paired with a crepe or satin blouse for award ceremonies, formal lunches, and corporate events. We use a heavier, lined satin here so the fabric drapes rather than clings and hides seam lines cleanly. They bridge the gap between office wear and our Modest Occasion Wear gowns. Produced from 100 pieces per design.",
        images: [
          placeholder("subcat-formal-wear-satin-1", "Model wearing a champagne satin skirt with a cream blouse"),
          placeholder("subcat-formal-wear-satin-2", "Close-up of satin fabric sheen"),
        ],
        colors: [
          { name: "Champagne", hex: "#e8d9b5" },
          { name: "Emerald", hex: "#175f4c" },
          { name: "Black", hex: "#1a1a1a" },
        ],
      },
      {
        slug: "embellished",
        name: "Embellished Formal Abayas",
        shortDescription: "Open abayas with restrained lace or embroidery panels for formal events.",
        description:
          "Embellished formal abayas add lace, appliqué, or tonal embroidery to the sleeves and front panels while keeping the silhouette clean and the colour palette muted, so they stay appropriate for formal daytime and corporate occasions rather than reading as party or bridal wear. The embellishment is placed on the outer layer only, with a plain inner dress underneath. Produced from 75 pieces per design.",
        images: [
          placeholder("subcat-formal-wear-embellished-1", "Model wearing a taupe open abaya with lace embroidery over a matching dress"),
          placeholder("subcat-formal-wear-embellished-2", "Close-up of tonal embroidery detail on abaya fabric"),
        ],
        colors: [
          { name: "Taupe", hex: "#8b7d6b" },
          { name: "Black", hex: "#1a1a1a" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
    ],
  },
  {
    slug: "kids-modest-wear",
    name: "Kids Modest Wear",
    shortName: "Kids Wear",
    description:
      "Junior-graded hijabs, abayas, and instant hijabs, scaled down from our adult pattern blocks and fabric library for family and gifting ranges.",
    content: `
      <p>Kids modest wear is graded down from our existing adult pattern blocks and fabric library rather than designed as its own separate junior collection. That keeps the fabric and colorway consistent between a mother's piece and her daughter's, which matters for family and gifting orders.</p>
      <p>Sizing runs in age-banded junior sizes rather than adult numeric sizing, and construction follows the same standards as our adult lines: reinforced seams, tested fabric, the same library buyers already know from the rest of our catalog. Most styles here are made-to-order rather than standing stock, simply because the volume runs lower than our adult ranges.</p>
    `,
    heroImage: placeholder("cat-kids-hero", "Mannequin head displaying a hijab, styled for the kids modest wear range"),
    cardImage: placeholder("cat-kids-card", "Mannequins displaying modest outerwear on a street market display"),
    keywords: [
      "kids hijab manufacturer",
      "girls abaya wholesale supplier",
      "junior modest wear manufacturer India",
      "kids Islamic clothing wholesale",
    ],
    subcategories: [
      {
        slug: "girls-hijabs",
        name: "Girls' Hijabs",
        shortDescription: "Junior-graded chiffon and jersey hijabs from our adult fabric library.",
        description:
          "Girls' hijabs come from the same chiffon and jersey patterns as our adult hijabs, graded down to a smaller junior size with a lighter overall fabric weight to suit smaller frames. Since the fabric and color range matches our adult library exactly, a girls' hijab can be shade-matched to an adult family member's piece without any guesswork. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-kids-girls-hijabs-1", "Mannequin head displaying a hijab in a shop"),
          placeholder("subcat-kids-girls-hijabs-2", "Rows of mannequin heads displaying hijabs in a range of colors"),
          placeholder("subcat-kids-girls-hijabs-3", "Girl wearing a chiffon hijab"),
        ],
        colors: [
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "girls-abayas",
        name: "Girls' Abayas",
        shortDescription: "Junior-graded everyday abaya cut from our matte Nida fabric base.",
        description:
          "Girls' abayas scale our everyday closed abaya pattern down to a junior size run. We keep the same matte Nida base and concealed closures as the adult line here rather than simplifying the construction. Most buyers order this alongside an adult abaya in a matching or coordinating color for family orders. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-kids-girls-abayas-1", "Mannequins displaying abayas and headscarves on a street market display"),
          placeholder("subcat-kids-girls-abayas-2", "Mannequin displaying a black embroidered abaya in a shop window"),
          placeholder("subcat-kids-girls-abayas-3", "Girl wearing an embellished abaya with a matching hijab"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "instant-hijabs",
        name: "Kids Instant Hijabs",
        shortDescription: "Pull-on instant hijab construction for children, no pinning or styling required.",
        description:
          "Kids instant hijabs use the same pull-on, attached-underscarf construction as our adult instant hijab line — and honestly, it matters even more here, since a young child can't be expected to style or re-pin a hijab through a school or activity day. If you're new to this category, this is the SKU we'd suggest starting with. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-kids-instant-hijabs-1", "Rows of mannequin heads displaying hijabs in a range of colors"),
          placeholder("subcat-kids-instant-hijabs-2", "Mannequin head displaying a hijab in a shop"),
          placeholder("subcat-kids-instant-hijabs-3", "Girl wearing a pull-on instant hijab with a bow accent"),
        ],
        colors: [
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Blush", hex: "#f2c4c4" },
          { name: "Ivory", hex: "#f0e9db" },
        ],
      },
      {
        slug: "prayer-dresses",
        name: "Kids Prayer Dresses",
        shortDescription: "Same construction as our Kids Prayer Set, listed here as part of the kids wear range.",
        description:
          "Kids prayer dresses are the same two-piece construction as the Kids Prayer Set in our Prayer Wear category — we just cross-list it here for buyers browsing kids modest wear specifically. Fabric, elastic placement, and finishing all match our adult prayer wear line, scaled down to a junior pattern. Offered from 200 sets per color.",
        images: [
          placeholder("subcat-kids-prayer-dresses-1", "Dress form displaying a modest wrapped garment with a headscarf"),
          placeholder("subcat-kids-prayer-dresses-2", "Mannequins displaying robes in a shop doorway"),
          placeholder("subcat-kids-prayer-dresses-3", "Girl in a two-piece embroidered prayer set"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Dusty Rose", hex: "#c98f8f" },
        ],
      },
      {
        slug: "khimars",
        name: "Kids Khimars",
        shortDescription: "Junior-graded cape-style khimar, pulled on in one piece with no wrapping required.",
        description:
          "Kids khimars scale our one-tier khimar construction down to a junior size, and keep the pull-on, no-wrap simplicity that made this silhouette practical for children to begin with. For customers who want a young child to manage their own head covering without much adjustment through the day, this is a lower-maintenance alternative to a girls' hijab. Offered from 200 pieces per color.",
        images: [
          placeholder("subcat-kids-khimars-1", "Mannequin head displaying a hijab in a shop"),
          placeholder("subcat-kids-khimars-2", "Dress form displaying a modest wrapped garment with a headscarf"),
          placeholder("subcat-kids-khimars-3", "Girl wearing a multi-tier cape-style khimar"),
        ],
        colors: [
          { name: "Sky Blue", hex: "#a9cce3" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Blush", hex: "#f2c4c4" },
        ],
      },
      {
        slug: "girls-jilbabs",
        name: "Girls' Jilbabs",
        shortDescription: "Junior-graded two-piece jilbab set from our value-tier fabric base.",
        description:
          "Girls' jilbabs grade our two-piece top-and-skirt jilbab construction down to a junior size, on the same value-tier Nida and crepe bases as our adult jilbab range. For customers who prioritize value over structure, we position this as a practical, lower-cost alternative to a girls' abaya. Sold as coordinated sets from 200 sets per color.",
        images: [
          placeholder("subcat-kids-girls-jilbabs-1", "Mannequins displaying robes in a shop doorway"),
          placeholder("subcat-kids-girls-jilbabs-2", "Dress form displaying a modest wrapped garment with a headscarf"),
          placeholder("subcat-kids-girls-jilbabs-3", "Girl wearing a two-piece jilbab set with embroidered cape"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Olive", hex: "#6b6f52" },
        ],
      },
      {
        slug: "kaftans",
        name: "Kids Kaftans",
        shortDescription: "Junior-graded occasion kaftan for Eid and family celebration dressing.",
        description:
          "Kids kaftans scale our printed and lightly embellished kaftan styles down to a junior pattern, built for Eid and family celebration dressing rather than daily wear. Most buyers order it as part of a family matching set, paired with an adult kaftan or abaya in a coordinating colorway. Offered from 100 pieces per design.",
        images: [
          placeholder("subcat-kids-kaftans-1", "Colorful kaftans displayed on mannequins at a market stall"),
          placeholder("subcat-kids-kaftans-2", "Mannequins displaying abayas and headscarves on a street market display"),
          placeholder("subcat-kids-kaftans-3", "Girl wearing an embellished occasion kaftan with butterfly sleeves"),
        ],
        colors: [
          { name: "Gold", hex: "#c9a635" },
          { name: "Sky Blue", hex: "#a9cce3" },
        ],
      },
      {
        slug: "mother-daughter",
        name: "Matching Mother-Daughter Set",
        shortDescription: "Adult and junior sizing paired in one coordinated colorway across hijab and abaya.",
        description:
          "Matching mother-daughter sets pair an adult hijab or abaya with the equivalent junior-graded piece, cut from the same fabric lot and colorway, and sold as a single coordinated order rather than two separate purchases. This is our most-requested kids-adjacent SKU by far, driven almost entirely by gifting occasions and family photography around Eid and other celebrations. Sold as coordinated sets from 150 sets per palette.",
        images: [
          placeholder("subcat-kids-mother-daughter-1", "Rows of mannequin heads displaying hijabs in a range of colors"),
          placeholder("subcat-kids-mother-daughter-2", "Mannequins displaying abayas and headscarves on a street market display"),
        ],
        colors: [
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Sage", hex: "#9caf88" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
    ],
  },
  {
    slug: "matching-sets",
    name: "Matching & Coordinated Sets",
    shortName: "Matching Sets",
    description:
      "Cross-category coordinated bundles: hijab and cap, hijab and abaya, mother and daughter, full family, pulled together into one merchandised set per occasion.",
    content: `
      <p>This isn't really a new product line, more of a merchandising index. Every set here pairs items that already exist individually somewhere else in our catalog, bundled because our accounts have told us that a matched, coordinated presentation just sells better at retail than the same pieces hung as separates. If you've landed on a specific pairing here, the individual items are also documented on their own with full specs.</p>
      <p>Every coordinated set is cut and dyed from the same fabric lots across all its pieces, which is really the detail that makes a "matching" set actually look matched, rather than just approximately similar shades from different production runs. If you need a pairing beyond what's listed here, custom combinations are available on request for private label buyers building a specific bundle.</p>
    `,
    heroImage: placeholder("cat-matching-sets-hero", "Coordinated abaya and hijab styled as a matching set"),
    cardImage: placeholder("cat-matching-sets-card", "Coordinated hijab styled as part of a matching set"),
    keywords: [
      "matching hijab abaya set wholesale",
      "mother daughter matching hijab supplier",
      "coordinated modest wear sets manufacturer",
      "family matching Islamic wear wholesale",
    ],
    subcategories: [
      {
        slug: "hijab-cap",
        name: "Hijab + Cap Sets",
        shortDescription: "A hijab bundled with its matching or coordinating inner cap as one SKU.",
        description:
          "Hijab and cap sets bundle a hijab from our core range with a coordinating inner cap from our Caps/Underscarves category, sold as one SKU instead of two separate line items. For retailers who'd otherwise stock the two categories independently, this just gives them a simpler reorder unit. You'll find the individual pieces documented in our Hijabs and Caps/Underscarves categories. Sold as coordinated sets from 300 sets per color.",
        images: [
          placeholder("subcat-matching-hijab-cap-1", "Model wearing a hijab from a coordinated hijab and cap set"),
          placeholder("subcat-matching-hijab-cap-2", "Model wearing an inner cap from a coordinated hijab and cap set"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Nude", hex: "#d9b99b" },
          { name: "Navy", hex: "#202a44" },
        ],
      },
      {
        slug: "hijab-abaya",
        name: "Hijab + Abaya Sets",
        shortDescription: "Matched hijab and abaya cut from the same fabric lot for a guaranteed shade match.",
        description:
          "Hijab and abaya sets pair pieces from our Hijabs and Abayas categories in the same fabric lot, which guarantees a shade match that ordering the two separately from standard stock simply can't. This ends up being our most-ordered coordinated set overall — it's the base combination most retail customers actually buy together. Sold as coordinated sets from 300 sets per color.",
        images: [
          placeholder("subcat-matching-hijab-abaya-1", "Model wearing a hijab from a coordinated hijab and abaya set"),
          placeholder("subcat-matching-hijab-abaya-2", "Model wearing an abaya from a coordinated hijab and abaya set"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "abaya-belt",
        name: "Abaya + Belt Sets",
        shortDescription: "An abaya bundled with a coordinating waist belt from our Belts category.",
        description:
          "Abaya and belt sets pair a style from our Abayas category with a coordinating piece from Belts & Waist Accessories. We pre-select the pairing so the belt's width and finish genuinely suit that abaya's silhouette, rather than leaving it to guesswork at retail. If you're introducing belts as a new accessory category alongside an existing abaya range, this is the bundle we'd recommend. Sold as coordinated sets from 200 sets per color.",
        images: [
          placeholder("subcat-matching-abaya-belt-1", "Model wearing an abaya styled with a coordinating waist belt"),
          placeholder("subcat-matching-abaya-belt-2", "Close-up of a tie belt styled as part of a coordinated abaya and belt set"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "bridal-veil",
        name: "Bridal Hijab + Veil Sets",
        shortDescription: "A bridal hijab bundled with a matching veil from Bridal Accessories.",
        description:
          "Bridal hijab and veil sets pair a style from our Bridal Hijabs category with a coordinating veil from Bridal Accessories, sold as one complete bridal headpiece rather than making the buyer match a veil separately. Length, lace detail, and embellishment level are all coordinated across both pieces. Produced from 25 pieces per design.",
        images: [
          placeholder("subcat-matching-bridal-veil-1", "Close-up of hand-set faceted crystals on bridal hijab fabric"),
          placeholder("subcat-matching-bridal-veil-2", "Bride wearing a crystal-embellished hijab crown and veil"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "White", hex: "#faf8f5" },
          { name: "Champagne", hex: "#e8d9b5" },
        ],
      },
      {
        slug: "mother-daughter",
        name: "Mother-Daughter Matching Sets",
        shortDescription: "Adult and junior-graded pieces in the same fabric lot, cross-listed from Kids Modest Wear.",
        description:
          "Mother-daughter matching sets are the same coordinated adult-and-junior pairing we document in our Kids Modest Wear category — we just cross-list it here for buyers browsing by set type rather than by garment category. Sold as coordinated sets from 150 sets per palette.",
        images: [
          placeholder("subcat-matching-mother-daughter-1", "Mother and daughter wearing matching mauve embellished abayas and hijabs, holding hands"),
          placeholder("subcat-matching-mother-daughter-2", "Mannequins displaying abayas and headscarves on a street market display"),
        ],
        colors: [
          { name: "Dusty Rose", hex: "#c98f8f" },
          { name: "Sage", hex: "#9caf88" },
        ],
      },
      {
        slug: "family",
        name: "Family Matching Sets",
        shortDescription: "Coordinated colorway across multiple family members' pieces, cross-listed from Ramadan.",
        description:
          "Family matching sets coordinate one colorway across abaya and hijab styles for multiple family members dressing together. It's the same format as our Family Matching Ramadan Sets, just offered here year-round instead of tied to a specific season. Sold as coordinated sets from 200 sets per palette.",
        images: [
          placeholder("subcat-matching-family-1", "Rows of mannequin heads displaying hijabs in a range of colors"),
          placeholder("subcat-matching-family-2", "Mannequin displaying a black embroidered abaya in a shop window"),
        ],
        colors: [
          { name: "Navy", hex: "#202a44" },
          { name: "Camel", hex: "#c19a6b" },
        ],
      },
      {
        slug: "prayer",
        name: "Prayer Wear Sets",
        shortDescription: "Two and three-piece prayer sets, cross-listed from our Prayer Wear category.",
        description:
          "Prayer wear sets are the same two- and three-piece coordinated sets we document in our Prayer Wear category, cross-listed here for buyers browsing by set format. Every piece in a set is cut and dyed from the same fabric lot. Sold as coordinated sets from 300 sets per color.",
        images: [
          placeholder("subcat-matching-prayer-1", "Model wearing a two-piece prayer set top and skirt"),
          placeholder("subcat-matching-prayer-2", "Model wearing a one-piece prayer dress with elasticated cuffs"),
        ],
        colors: [
          { name: "Ivory", hex: "#f0e9db" },
          { name: "Sky Blue", hex: "#a9cce3" },
        ],
      },
      {
        slug: "eid",
        name: "Eid Matching Sets",
        shortDescription: "Coordinated Eid-season abaya and hijab pairing, cross-listed from our Eid Collection.",
        description:
          "Eid matching sets are the same coordinated abaya-and-hijab pairing documented in our Eid Collection — cross-listed here for buyers browsing coordinated sets generally, rather than by season. Sold as coordinated sets from 200 sets per palette.",
        images: [
          placeholder("subcat-matching-eid-1", "Model wearing an abaya in a coordinated Eid matching palette"),
          placeholder("subcat-matching-eid-2", "Model wearing a hijab in a matching coordinated Eid tone"),
        ],
        colors: [
          { name: "Emerald", hex: "#175f4c" },
          { name: "Gold", hex: "#c9a635" },
        ],
      },
      {
        slug: "co-ord",
        name: "Co-Ord Modest Sets",
        shortDescription: "Mix-and-match coordinating (not identical) pieces, cross-listed from Modest Activewear.",
        description:
          "Co-ord modest sets bundle pieces in coordinating rather than identical colorways — the same curated approach we use for our Activewear Co-Ord Sets, applied here across the broader catalog for buyers who want a styled, color-blocked look rather than a single-color matched set. Sold as coordinated sets from 200 sets per color story.",
        images: [
          placeholder("subcat-matching-co-ord-1", "Model wearing a coordinated co-ord set in complementary tones"),
          placeholder("subcat-matching-co-ord-2", "Close-up of coordinated co-ord set fabric in a complementary colorway"),
        ],
        colors: [
          { name: "Black", hex: "#1a1a1a" },
          { name: "Teal", hex: "#1f7a6c" },
        ],
      },
      {
        slug: "gift-box",
        name: "Gift Box Sets",
        shortDescription: "Any coordinated set above packaged in a branded retail gift box.",
        description:
          "Gift box sets take any of the coordinated pairings above and package them in a rigid branded gift box instead of standard poly-bag packaging — useful for buyers building a retail gifting display or a seasonal promotional range. Box branding, insert cards, and ribbon finish can all be customized for private label orders. Configured from 100 sets per bundle.",
        images: [
          placeholder("subcat-matching-gift-box-1", "Fabric swatch cards arranged for a gift box set color selection"),
          placeholder("subcat-matching-gift-box-2", "Warehouse cartons packed for a gift box set shipment"),
        ],
        colors: [
          { name: "Assorted", hex: "#8a8a8a" },
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
