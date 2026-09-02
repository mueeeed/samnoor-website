import { placeholder } from "@/lib/placeholder-image";
import type { Fabric } from "./types";

export const fabrics: Fabric[] = [
  {
    slug: "nida",
    name: "Nida",
    origin: "Woven in-house from imported polyester filament yarn",
    description:
      "Nida is the workhorse fabric of our abaya program: a matte, medium-weight polyester weave with enough body to hold structure without stiffness. It resists creasing through transit and daily wear, which makes it the default base for volume wholesale orders.",
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
      "Korean Nida uses a finer, more tightly spun yarn than standard Nida, producing a fabric with a slightly higher sheen, smoother hand-feel, and better drape recovery. It is our recommended upgrade fabric for private label ranges positioned above entry-level pricing.",
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
      "Zoom fabric is a lightweight, breathable alternative to Nida, suited to warmer climates and everyday wear where a lighter hand-feel is preferred. It takes color well and is a common choice for value-tier abaya and khimar programs.",
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
      "Our chiffon is developed specifically for hijabs, balancing sheerness with sufficient opacity that most customers can wear it without an underscarf. It is available in matte and satin-finish variants and is the base fabric for our best-selling hijab styles.",
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
      "Cotton is used across our inner cap, underscarf, and lightweight hijab lines where breathability and skin comfort are the priority. We work with combed cotton for a smoother hand-feel than carded alternatives.",
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
      "Jersey knit gives stretch and recovery for no-pin, wrap-and-go hijab styles and casual modest wear. We produce both solid and heathered finishes, and the fabric's stretch percentage is tuned specifically for hijab applications rather than generic apparel jersey.",
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
      "Mulberry silk is reserved for our luxury tier: hand-rolled hem hijabs, premium scarves, and gift-ready ranges. It carries natural sheen and drape that synthetic fabrics cannot fully replicate, and every roll is inspected for consistency before cutting.",
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
      "Linen and linen-blend fabrics are used in our warm-climate and resort-adjacent modest wear lines. We finish our blends to reduce the extreme creasing associated with pure linen while retaining its characteristic texture and breathability.",
    properties: ["Highly breathable", "Textured hand-feel", "Naturally cooling", "Reduced-crease finish"],
    careInstructions: ["Machine wash cold", "Hang dry", "Iron while slightly damp"],
    bestFor: ["Resort modest dresses", "Warm-climate abayas"],
    image: placeholder("fabric-linen", "Textured linen-blend fabric close-up"),
  },
  {
    slug: "crepe",
    name: "Crepe",
    origin: "Polyester crepe, available in standard and satin-back weights",
    description:
      "Crepe is our most versatile occasion fabric, used across khimars, kaftans, and embellished abayas. Its slightly textured surface diffuses light attractively, which makes it a preferred base for embroidery and stonework.",
    properties: ["Textured matte finish", "Holds embellishment well", "Good structure", "Available satin-back"],
    careInstructions: ["Dry clean recommended for embellished pieces", "Machine wash cold for plain crepe"],
    bestFor: ["Khimars", "Kaftans", "Embellished abayas"],
    image: placeholder("fabric-crepe", "Crepe fabric with subtle textured surface"),
  },
  {
    slug: "georgette",
    name: "Georgette",
    origin: "Crinkled polyester weave",
    description:
      "Georgette's characteristic crinkle texture gives movement and volume without added weight, making it a popular choice for occasion abayas and kaftans that need to photograph with visible motion in product imagery.",
    properties: ["Crinkled texture", "Lightweight", "Good movement and flow", "Semi-sheer to opaque range"],
    careInstructions: ["Hand wash or dry clean", "Hang dry"],
    bestFor: ["Occasion abayas", "Kaftans", "Layered pieces"],
    image: placeholder("fabric-georgette", "Georgette fabric with crinkled texture"),
  },
  {
    slug: "rayon",
    name: "Rayon",
    origin: "Regenerated cellulose fiber, woven and finished locally",
    description:
      "Rayon offers a soft, slightly silky hand-feel at a more accessible price point than natural silk, and takes dye exceptionally well. It is used in select modest dress and scarf lines where a fluid drape is desired without the silk price premium.",
    properties: ["Soft hand-feel", "Excellent color depth", "Fluid drape", "Breathable"],
    careInstructions: ["Hand wash cold", "Hang dry", "Low iron"],
    bestFor: ["Modest dresses", "Printed scarves"],
    image: placeholder("fabric-rayon", "Rayon fabric with fluid drape"),
  },
  {
    slug: "viscose",
    name: "Viscose",
    origin: "Regenerated cellulose fiber, blended for stability",
    description:
      "Viscose blends give a cool, breathable hand-feel suited to warm-climate daywear. We blend viscose with small percentages of elastane or polyester to improve shape retention over the pure fiber's tendency to stretch out with wear.",
    properties: ["Cool hand-feel", "Breathable", "Good drape", "Blended for shape retention"],
    careInstructions: ["Hand wash cold", "Hang dry"],
    bestFor: ["Warm-climate hijabs", "Modest daywear"],
    image: placeholder("fabric-viscose", "Viscose blend fabric close-up"),
  },
  {
    slug: "premium-blends",
    name: "Premium Blends",
    origin: "Custom-developed blends milled to Samnoor specification",
    description:
      "For private label partners with specific performance or hand-feel requirements, we develop custom fiber blends in partnership with our mill network, typically combining two or three base fibers to hit a target weight, opacity, and drape profile that off-the-shelf fabric cannot match.",
    properties: ["Developed to specification", "Custom weight and opacity targets", "Minimum development run applies"],
    careInstructions: ["Varies by final blend composition"],
    bestFor: ["Custom private label programs", "Signature fabric development"],
    image: placeholder("fabric-blends", "Swatch cards of custom-developed fabric blends"),
  },
];

export function getFabricBySlug(slug: string): Fabric | undefined {
  return fabrics.find((f) => f.slug === slug);
}
