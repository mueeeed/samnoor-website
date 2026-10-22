import { placeholder } from "@/lib/placeholder-image";
import type { Fabric } from "./types";

export const fabrics: Fabric[] = [
  {
    slug: "nida",
    name: "Nida",
    origin: "Woven in-house from imported polyester filament yarn",
    description:
      "Nida is the workhorse of our abaya program — a matte, medium-weight polyester weave with enough body to hold its structure without turning stiff. It resists creasing through transit and daily wear, which is exactly why it's our default base fabric for volume wholesale orders.",
    properties: ["Matte finish", "Wrinkle-resistant", "Opaque at standard weight", "Holds structured seams"],
    careInstructions: ["Machine wash cold", "Hang dry", "Cool iron if needed"],
    bestFor: ["Abayas", "Jilbabs", "Everyday outerwear"],
    image: placeholder("fabric-nida", "Roll of matte Nida fabric in deep emerald"),
  },
  {
    slug: "korean-nida",
    name: "Korean Nida",
    origin: "Imported filament yarn, finished to a tighter weave than standard Nida",
    description:
      "Korean Nida uses a finer, more tightly spun yarn than standard Nida, which gives it a slightly higher sheen, a smoother hand-feel, and better drape recovery. We recommend it as the upgrade fabric for private label ranges positioned above entry-level pricing.",
    properties: ["Smoother hand-feel", "Improved drape", "Subtle sheen", "Excellent color depth"],
    careInstructions: ["Machine wash cold", "Hang dry", "Cool iron if needed"],
    bestFor: ["Premium abayas", "Occasion jilbabs"],
    image: placeholder("fabric-korean-nida", "Korean Nida fabric with subtle sheen, draped"),
  },
  {
    slug: "zoom",
    name: "Zoom",
    origin: "Lightweight polyester weave, locally finished",
    description:
      "Zoom is a lightweight, breathable alternative to Nida, better suited to warmer climates and everyday wear where a lighter hand-feel matters more than structure. It takes color well too, which is part of why it's such a common choice for value-tier abaya and khimar programs.",
    properties: ["Lightweight", "Breathable", "Cost-efficient", "Wide color range"],
    careInstructions: ["Machine wash cold", "Hang dry"],
    bestFor: ["Everyday abayas", "Warm-climate garments"],
    image: placeholder("fabric-zoom", "Lightweight Zoom fabric roll"),
  },
  {
    slug: "chiffon",
    name: "Chiffon",
    origin: "Fine polyester filament, woven for a sheer-to-opaque range",
    description:
      "We developed our chiffon specifically for headscarves, balancing sheerness against enough opacity that most customers can wear it without an underscarf underneath. It comes in matte and satin-finish variants, and it's the base fabric behind our best-selling hijab styles.",
    properties: ["Soft drape", "Available matte or satin", "Breathable", "Consistent dye uptake"],
    careInstructions: ["Machine wash cold, gentle cycle", "Hang dry", "Do not wring"],
    bestFor: ["Hijabs", "Niqabs", "Scarves"],
    image: placeholder("fabric-chiffon", "Chiffon fabric flowing in soft drape"),
  },
  {
    slug: "cotton",
    name: "Cotton",
    origin: "Combed cotton, sourced from certified mills",
    description:
      "We use cotton across our inner cap, underscarf, and lightweight hijab lines, wherever breathability and skin comfort matter more than anything else. Specifically, we work with combed cotton, since it gives a smoother hand-feel than carded alternatives.",
    properties: ["Breathable", "Soft hand-feel", "Absorbent", "Hypoallergenic-friendly"],
    careInstructions: ["Machine wash warm", "Tumble dry low"],
    bestFor: ["Inner caps", "Underscarves", "Casual hijabs"],
    image: placeholder("fabric-cotton", "Combed cotton fabric texture close-up"),
  },
  {
    slug: "jersey",
    name: "Jersey",
    origin: "Cotton-modal and cotton-elastane knit blends",
    description:
      "Jersey and modal give the stretch and recovery behind our no-pin, wrap-and-go styles and casual modest wear. We produce both solid and heathered finishes, and we tune the stretch percentage specifically for hijab applications rather than borrowing it from generic apparel jersey.",
    properties: ["Four-way stretch", "Breathable", "Wrinkle-resistant", "No-pin wearability"],
    careInstructions: ["Machine wash cold", "Tumble dry low"],
    bestFor: ["Jersey hijabs", "Sports hijabs", "Casual wear"],
    image: placeholder("fabric-jersey", "Stretch jersey fabric being pulled to show recovery"),
  },
  {
    slug: "silk",
    name: "Silk",
    origin: "100% mulberry silk, sourced from certified suppliers",
    description:
      "We reserve mulberry silk for our luxury tier — hand-rolled hem hijabs, premium scarves, and gift-ready ranges. It carries a natural sheen and drape that synthetic fabrics just can't fully replicate, and we inspect every roll for consistency before it gets cut.",
    properties: ["Natural sheen", "Superior drape", "Temperature-regulating", "Hypoallergenic"],
    careInstructions: ["Dry clean only", "Store flat or on padded hangers"],
    bestFor: ["Luxury hijabs", "Premium scarves", "Gift collections"],
    image: placeholder("fabric-silk", "Mulberry silk fabric with natural sheen"),
  },
  {
    slug: "linen",
    name: "Linen",
    origin: "Cotton-linen blends finished for reduced creasing",
    description:
      "Linen and linen blends show up in our warm-climate and resort-adjacent modest wear lines. We finish our blends specifically to cut down on the extreme creasing pure linen is known for, while keeping its characteristic texture and breathability intact.",
    properties: ["Highly breathable", "Textured hand-feel", "Naturally cooling", "Reduced-crease finish"],
    careInstructions: ["Machine wash cold", "Hang dry", "Iron while slightly damp"],
    bestFor: ["Warm-climate abayas", "Resort modest wear"],
    image: placeholder("fabric-linen", "Textured linen-blend fabric close-up"),
  },
  {
    slug: "crepe",
    name: "Crepe",
    origin: "Polyester crepe, available in standard and satin-back weights",
    description:
      "Crepe is our most versatile occasion fabric, and we use it across khimars and embellished crepe abayas. The slightly textured surface diffuses light attractively, which is part of why it's a preferred base for embroidery and stonework.",
    properties: ["Textured matte finish", "Holds embellishment well", "Good structure", "Available satin-back"],
    careInstructions: ["Dry clean recommended for embellished pieces", "Machine wash cold for plain crepe"],
    bestFor: ["Khimars", "Embellished abayas"],
    image: placeholder("fabric-crepe", "Crepe fabric with subtle textured surface"),
  },
  {
    slug: "georgette",
    name: "Georgette",
    origin: "Crinkled polyester weave",
    description:
      "Georgette's crinkle texture gives movement and volume without adding weight, and that's largely why georgette hijab styles stay one of our steadier reorders — along with occasion abayas that need visible motion in product photography.",
    properties: ["Crinkled texture", "Lightweight", "Good movement and flow", "Semi-sheer to opaque range"],
    careInstructions: ["Hand wash or dry clean", "Hang dry"],
    bestFor: ["Georgette hijabs", "Occasion abayas", "Layered pieces"],
    image: placeholder("fabric-georgette", "Georgette fabric with crinkled texture"),
  },
  {
    slug: "rayon",
    name: "Rayon",
    origin: "Regenerated cellulose fiber, woven and finished locally",
    description:
      "Rayon offers a soft, slightly silky hand-feel at a more accessible price point than natural silk, and it takes dye exceptionally well. We use it in select hijab and scarf lines where a fluid drape matters but the silk price premium doesn't make sense.",
    properties: ["Soft hand-feel", "Excellent color depth", "Fluid drape", "Breathable"],
    careInstructions: ["Hand wash cold", "Hang dry", "Low iron"],
    bestFor: ["Printed scarves", "Fluid-drape hijabs"],
    image: placeholder("fabric-rayon", "Rayon fabric with fluid drape"),
  },
  {
    slug: "viscose",
    name: "Viscose",
    origin: "Regenerated cellulose fiber, blended for stability",
    description:
      "Viscose gives a cool, breathable hand-feel that suits warm-climate daywear well. On its own the fiber tends to stretch out with wear, so we blend in small percentages of elastane or polyester to improve shape retention.",
    properties: ["Cool hand-feel", "Breathable", "Good drape", "Blended for shape retention"],
    careInstructions: ["Hand wash cold", "Hang dry"],
    bestFor: ["Warm-climate hijabs", "Modest daywear"],
    image: placeholder("fabric-viscose", "Viscose blend fabric close-up"),
  },
  {
    slug: "premium-blends",
    name: "Premium Blends",
    origin: "Custom-developed blends milled to SamNoor specification",
    description:
      "When a private label partner has specific performance or hand-feel requirements, we develop custom fiber blends together with our mill network — usually combining two or three base fibers to hit a target weight, opacity, and drape that off-the-shelf fabric just can't match.",
    properties: ["Developed to specification", "Custom weight and opacity targets", "Minimum development run applies"],
    careInstructions: ["Varies by final blend composition"],
    bestFor: ["Custom private label programs", "Signature fabric development"],
    image: placeholder("fabric-blends", "Swatch cards of custom-developed fabric blends"),
  },
];

export function getFabricBySlug(slug: string): Fabric | undefined {
  return fabrics.find((f) => f.slug === slug);
}
