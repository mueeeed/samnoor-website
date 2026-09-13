export type GlossaryTerm = {
  slug: string;
  term: string;
  shortDefinition: string;
  longDefinition: string;
  category: "Trade & Logistics" | "Quality & Compliance" | "Manufacturing" | "Fabric" | "Product";
  relatedSlugs: string[];
  relatedLinks?: { label: string; href: string }[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "moq",
    term: "MOQ (Minimum Order Quantity)",
    shortDefinition: "The smallest quantity a manufacturer will produce per style, color, or order.",
    longDefinition:
      "MOQ, or Minimum Order Quantity, is the smallest number of units a manufacturer is willing to produce in a single run. MOQ is usually set per style and color combination rather than per order overall — a single style split across five colors typically carries a per-color MOQ, not a per-style one, since each color requires its own cutting lay and, if custom, its own dye lot. MOQ exists because production has fixed setup costs (marker making, machine changeover, dye-lot minimums) that only become economical above a certain volume. Standard-fabric, standard-color styles carry lower MOQs than custom fabric or custom Pantone-matched colors, since the latter are also bound by the mill's own minimum dye-lot or weaving run.",
    category: "Trade & Logistics",
    relatedSlugs: ["private-label", "tech-pack", "pantone-matching"],
    relatedLinks: [
      { label: "How to Start a Hijab or Abaya Wholesale Business", href: "/blog/how-to-start-a-hijab-abaya-wholesale-business" },
      { label: "Private Label & OEM", href: "/private-label" },
    ],
  },
  {
    slug: "fob",
    term: "FOB (Free on Board)",
    shortDefinition: "The seller delivers goods on board the vessel at the origin port; the buyer takes over from there.",
    longDefinition:
      "FOB (Free on Board) is an Incoterm under which the seller is responsible for export customs clearance and loading the goods onto the vessel at the named port of origin — for SamNoor, this is Nhava Sheva (Jawaharlal Nehru Port) near Mumbai. Once the goods are on board, risk and cost transfer to the buyer, who arranges and pays for ocean freight, insurance, and import customs at destination. FOB is the most common term across established wholesale accounts because it splits responsibility at a clean, universally understood handoff point that most freight forwarders quote against by default.",
    category: "Trade & Logistics",
    relatedSlugs: ["exw", "cif", "ddp", "incoterms"],
    relatedLinks: [{ label: "Understanding Incoterms for Modest Fashion Importers", href: "/blog/understanding-incoterms-for-modest-fashion-importers" }],
  },
  {
    slug: "exw",
    term: "EXW (Ex Works)",
    shortDefinition: "The buyer takes full responsibility for goods from the factory door onward.",
    longDefinition:
      "EXW (Ex Works) is the Incoterm that places the least responsibility on the seller and the most on the buyer. The seller's obligation ends the moment goods are made available at the factory — the buyer arranges and pays for export customs clearance, freight booking, and everything downstream. EXW typically produces the lowest quoted factory price, but it is only genuinely cost-effective for buyers who already have an established freight forwarder capable of managing origin-side pickup and export documentation. First-time importers without that relationship in place usually find EXW's apparent savings offset by higher costs and delays managing the logistics themselves.",
    category: "Trade & Logistics",
    relatedSlugs: ["fob", "cif", "ddp", "incoterms"],
    relatedLinks: [{ label: "Understanding Incoterms for Modest Fashion Importers", href: "/blog/understanding-incoterms-for-modest-fashion-importers" }],
  },
  {
    slug: "cif",
    term: "CIF (Cost, Insurance & Freight)",
    shortDefinition: "The seller books and pays freight and insurance to the destination port.",
    longDefinition:
      "CIF (Cost, Insurance & Freight) is an Incoterm under which the seller books and pays for ocean freight and marine insurance to the buyer's named destination port. The buyer takes over responsibility — including import customs clearance — once the goods arrive. CIF is useful for buyers who don't yet have an origin-side freight relationship but do have an import customs broker at destination, since it removes the freight-booking burden while keeping import formalities in the buyer's hands.",
    category: "Trade & Logistics",
    relatedSlugs: ["fob", "exw", "ddp", "incoterms"],
    relatedLinks: [{ label: "Understanding Incoterms for Modest Fashion Importers", href: "/blog/understanding-incoterms-for-modest-fashion-importers" }],
  },
  {
    slug: "ddp",
    term: "DDP (Delivered Duty Paid)",
    shortDefinition: "The seller manages the full chain, including destination duties, to the buyer's door.",
    longDefinition:
      "DDP (Delivered Duty Paid) places maximum responsibility on the seller, who manages freight, insurance, import customs clearance, and destination duties, delivering goods to the buyer's named address. It carries the highest quoted price of the four common Incoterms but the lowest operational burden for the buyer, which makes it the practical default for first-time importers who haven't yet built their own logistics and customs relationships at destination.",
    category: "Trade & Logistics",
    relatedSlugs: ["fob", "exw", "cif", "incoterms"],
    relatedLinks: [{ label: "Understanding Incoterms for Modest Fashion Importers", href: "/blog/understanding-incoterms-for-modest-fashion-importers" }],
  },
  {
    slug: "incoterms",
    term: "Incoterms",
    shortDefinition: "Standardized international trade terms defining who is responsible for shipping, insurance, and customs at each stage.",
    longDefinition:
      "Incoterms (International Commercial Terms) are a set of standardized, internationally recognized rules published by the International Chamber of Commerce that define exactly where cost and risk transfer from seller to buyer during a shipment. Common terms used in wholesale garment sourcing include EXW, FOB, CIF, and DDP, each shifting a different share of freight booking, insurance, and customs responsibility onto one party or the other. Choosing the right Incoterm for your experience level and freight capability matters more than chasing the lowest quoted price on paper.",
    category: "Trade & Logistics",
    relatedSlugs: ["fob", "exw", "cif", "ddp"],
    relatedLinks: [{ label: "Understanding Incoterms for Modest Fashion Importers", href: "/blog/understanding-incoterms-for-modest-fashion-importers" }],
  },
  {
    slug: "oeko-tex-standard-100",
    term: "OEKO-TEX Standard 100",
    shortDefinition: "A certification testing finished textiles for limits on harmful substances.",
    longDefinition:
      "OEKO-TEX Standard 100 is an independent certification that tests finished textiles against limits for regulated and banned substances — certain azo dyes, formaldehyde, heavy metals, pesticide residues, and chlorinated phenols among others. Limits scale by product class, with garments worn in direct, sustained contact with skin (like hijabs and inner caps) held to the strictest thresholds in the standard. It is a testable, specific standard rather than a general ethical label, and buyers should ask for the underlying test report, not just the certificate logo, when verifying a supplier's claim.",
    category: "Quality & Compliance",
    relatedSlugs: ["iso-9001", "aql"],
    relatedLinks: [{ label: "Fabric Testing: What OEKO-TEX Actually Checks", href: "/blog/fabric-testing-what-oeko-tex-actually-checks" }, { label: "Certifications", href: "/certifications" }],
  },
  {
    slug: "iso-9001",
    term: "ISO 9001",
    shortDefinition: "An international standard for quality management systems within a manufacturing organization.",
    longDefinition:
      "ISO 9001 is an internationally recognized standard for quality management systems. Certification confirms that a manufacturer has documented, consistently applied processes for production planning, inspection, corrective action, and continuous improvement — it certifies the manufacturer's process discipline rather than any single product or fabric. For a wholesale buyer, ISO 9001 certification is a reasonable signal that defects are more likely to be caught and traced to a root cause rather than treated as one-off incidents.",
    category: "Quality & Compliance",
    relatedSlugs: ["oeko-tex-standard-100", "aql"],
    relatedLinks: [{ label: "Certifications", href: "/certifications" }],
  },
  {
    slug: "wrap-certification",
    term: "WRAP Certification",
    shortDefinition: "A social compliance certification for ethical and legal manufacturing practices.",
    longDefinition:
      "WRAP (Worldwide Responsible Accredited Production) is a social compliance certification program that audits manufacturing facilities against standards covering labor practices, workplace health and safety, environmental practices, and legal compliance. It's one of several recognized social audits (alongside SEDEX/SMETA and BSCI) that buyers increasingly ask about alongside product quality certifications, particularly for brands building an ethical sourcing narrative into their own positioning.",
    category: "Quality & Compliance",
    relatedSlugs: ["sedex-smeta", "bsci"],
    relatedLinks: [{ label: "Certifications", href: "/certifications" }],
  },
  {
    slug: "sedex-smeta",
    term: "SEDEX / SMETA",
    shortDefinition: "A widely used ethical audit framework covering labor, health & safety, environment, and business ethics.",
    longDefinition:
      "SEDEX (Supplier Ethical Data Exchange) is a platform for sharing supply chain data, and SMETA (SEDEX Members Ethical Trade Audit) is the audit methodology most commonly run through it. Together they form one of the most widely requested social compliance frameworks in global apparel sourcing, assessing a facility against four pillars: labor standards, health and safety, environmental performance, and business ethics. Buyers building a socially responsible supply chain narrative frequently require a current SMETA audit report as a condition of onboarding a new supplier.",
    category: "Quality & Compliance",
    relatedSlugs: ["wrap-certification", "bsci"],
    relatedLinks: [{ label: "Certifications", href: "/certifications" }],
  },
  {
    slug: "bsci",
    term: "BSCI (Business Social Compliance Initiative)",
    shortDefinition: "A European-led social compliance auditing system for supply chain labor standards.",
    longDefinition:
      "BSCI (Business Social Compliance Initiative, now part of amfori) is a social compliance auditing system widely used by European retailers to assess supplier labor practices, working hours, wages, and workplace safety. It's frequently requested alongside or as an alternative to SEDEX/SMETA depending on which framework a buyer's own retail partners require.",
    category: "Quality & Compliance",
    relatedSlugs: ["sedex-smeta", "wrap-certification"],
    relatedLinks: [{ label: "Certifications", href: "/certifications" }],
  },
  {
    slug: "aql",
    term: "AQL (Acceptable Quality Limit)",
    shortDefinition: "A statistical sampling standard used to inspect a bulk shipment without checking every unit.",
    longDefinition:
      "AQL (Acceptable Quality Limit) is a statistical sampling standard used in garment quality inspection. Rather than inspecting every single unit in a bulk order — impractical at wholesale volume — a properly sized random sample is pulled and inspected against the standard; the shipment is rejected if the sample's defect count exceeds the threshold for the chosen AQL level (2.5 is the common level used for garments). It's standard, defensible industry practice, not a shortcut, provided the sample size and inspection criteria are agreed and documented before production runs.",
    category: "Quality & Compliance",
    relatedSlugs: ["oeko-tex-standard-100", "iso-9001"],
    relatedLinks: [{ label: "How Abayas Are Made: The Manufacturing Process", href: "/blog/how-abayas-are-made-manufacturing-process" }],
  },
  {
    slug: "private-label",
    term: "Private Label",
    shortDefinition: "Manufacturing an existing or lightly modified product under the buyer's own brand.",
    longDefinition:
      "Private label manufacturing means a buyer takes an existing base pattern from a manufacturer's catalog and applies their own branding — woven labels, hang tags, packaging, and sometimes a custom color or fabric upgrade — without developing a fully custom pattern from scratch. It sits between reselling an unbranded catalog style and full custom (OEM/ODM) development, offering meaningful differentiation at a moderate MOQ increase and without the longer lead time of ground-up pattern development.",
    category: "Manufacturing",
    relatedSlugs: ["oem", "odm", "moq"],
    relatedLinks: [{ label: "Private Label & OEM", href: "/private-label" }, { label: "A Private Label Abaya Launch Checklist", href: "/blog/private-label-abaya-launch-checklist" }],
  },
  {
    slug: "oem",
    term: "OEM (Original Equipment Manufacturer)",
    shortDefinition: "Production of a garment built to the buyer's own tech pack and specification.",
    longDefinition:
      "In apparel sourcing, OEM (Original Equipment Manufacturer) production means the manufacturer produces a garment exactly to the buyer's own design, pattern, and tech pack specification — the buyer owns the design; the manufacturer executes it. This differs from private label, where the manufacturer's own base pattern is used with the buyer's branding applied, and from ODM, where the manufacturer contributes design input alongside production.",
    category: "Manufacturing",
    relatedSlugs: ["private-label", "odm", "tech-pack"],
    relatedLinks: [{ label: "Private Label & OEM", href: "/private-label" }],
  },
  {
    slug: "odm",
    term: "ODM (Original Design Manufacturer)",
    shortDefinition: "A manufacturer that contributes design and development support alongside production.",
    longDefinition:
      "ODM (Original Design Manufacturer) describes a manufacturing arrangement where the manufacturer contributes design and product development expertise alongside production, rather than simply executing a buyer-supplied tech pack (as in OEM) or applying branding to an existing base style (as in private label). ODM support is useful for buyers who have a strong sense of their brand and market but limited in-house pattern-making or fabric-development capability.",
    category: "Manufacturing",
    relatedSlugs: ["oem", "private-label"],
    relatedLinks: [{ label: "Private Label & OEM", href: "/private-label" }],
  },
  {
    slug: "gsm",
    term: "GSM (Grams per Square Meter)",
    shortDefinition: "A standard measure of fabric weight and density.",
    longDefinition:
      "GSM (Grams per Square Meter) is the standard unit for measuring fabric weight. Higher GSM generally means a heavier, denser, more opaque fabric; lower GSM means lighter and more sheer. Hijab-weight chiffon typically falls in the 70–90 GSM range, while abaya-weight Nida fabric runs considerably heavier, often 180–230 GSM depending on finish. GSM is one of three essential figures — alongside weave structure and fiber composition — that should accompany any fabric under serious consideration, since a fabric name alone doesn't reliably indicate weight.",
    category: "Fabric",
    relatedSlugs: ["nida-fabric", "chiffon-fabric"],
    relatedLinks: [{ label: "Hijab Fabric Types Explained", href: "/blog/hijab-fabric-types-explained-complete-guide" }, { label: "Fabric Library", href: "/fabrics" }],
  },
  {
    slug: "nida-fabric",
    term: "Nida Fabric",
    shortDefinition: "A matte, medium-weight polyester weave and the standard base fabric for abayas.",
    longDefinition:
      "Nida is a matte, medium-weight polyester weave and the default base fabric for the large majority of abaya production. Its defining property is structure without stiffness — it holds a clean silhouette and resists creasing through transit and daily wear. Korean Nida is a finer, tighter-woven upgrade variant with a subtle sheen and better drape recovery, typically used for private label ranges positioned above entry-level pricing.",
    category: "Fabric",
    relatedSlugs: ["gsm", "chiffon-fabric"],
    relatedLinks: [{ label: "Nida Fabric", href: "/fabrics/nida" }, { label: "Hijab Fabric Types Explained", href: "/blog/hijab-fabric-types-explained-complete-guide" }],
  },
  {
    slug: "chiffon-fabric",
    term: "Chiffon Fabric",
    shortDefinition: "A lightweight, sheer-to-opaque fabric developed specifically for hijabs.",
    longDefinition:
      "Chiffon is a fine, lightweight woven fabric, and in modest wear it's developed specifically for headscarves — balancing sheerness with enough opacity that most customers can wear it without an underscarf. It's available in matte and satin-finish variants and is the base fabric for most best-selling hijab styles across the industry.",
    category: "Fabric",
    relatedSlugs: ["nida-fabric", "georgette-fabric", "gsm"],
    relatedLinks: [{ label: "Chiffon Fabric", href: "/fabrics/chiffon" }, { label: "Hijab Fabric Types Explained", href: "/blog/hijab-fabric-types-explained-complete-guide" }],
  },
  {
    slug: "georgette-fabric",
    term: "Georgette Fabric",
    shortDefinition: "A crinkled-texture polyester weave known for visible movement without added weight.",
    longDefinition:
      "Georgette is a polyester weave with a characteristic fine crinkle texture, giving visible movement and volume without adding weight. It's a steady-selling fabric for hijabs and layered occasion pieces specifically because that movement photographs and moves well on video, which matters directly for a buyer's own product marketing.",
    category: "Fabric",
    relatedSlugs: ["chiffon-fabric", "crepe-fabric"],
    relatedLinks: [{ label: "Georgette Fabric", href: "/fabrics/georgette" }],
  },
  {
    slug: "crepe-fabric",
    term: "Crepe Fabric",
    shortDefinition: "A textured occasion fabric that diffuses light attractively and holds embellishment well.",
    longDefinition:
      "Crepe is a slightly textured polyester fabric used widely across khimars and embellished occasion abayas. Its textured surface diffuses light more attractively than a flat weave, and it holds embroidery and stonework more securely, which is why it's the preferred base fabric for embellished garments. Satin-back crepe, a heavier variant, is commonly used for structured, tiered garments like three-tier khimars that need to hold a clean fold line.",
    category: "Fabric",
    relatedSlugs: ["georgette-fabric", "nida-fabric"],
    relatedLinks: [{ label: "Crepe Fabric", href: "/fabrics/crepe" }, { label: "What Is a Khimar?", href: "/blog/what-is-a-khimar-buyers-guide" }],
  },
  {
    slug: "abaya",
    term: "Abaya",
    shortDefinition: "A loose-fitting, full-length outer garment, typically worn open-front or closed over daily clothing.",
    longDefinition:
      "An abaya is a loose-fitting, full-length robe worn as an outer garment, typically open-front or closed, cut close enough through the shoulder and sleeve to show shape while remaining loose through the body. It's most commonly produced from Nida fabric at standard price tiers and crepe or premium blends for occasion and embellished ranges. Abaya is frequently confused with jilbab in cross-market sourcing, since regional naming conventions vary.",
    category: "Product",
    relatedSlugs: ["jilbab", "nida-fabric"],
    relatedLinks: [{ label: "Abayas", href: "/products/abayas" }, { label: "Jilbab vs Abaya: What Retailers Need to Know", href: "/blog/jilbab-vs-abaya-sourcing-guide" }],
  },
  {
    slug: "jilbab",
    term: "Jilbab",
    shortDefinition: "A looser-cut outer garment, often produced as a two-piece top-and-skirt set.",
    longDefinition:
      "A jilbab is cut looser through the body than an abaya, with more fabric ease, and is frequently produced as a two-piece set — a separate top and full-length skirt — though some markets use the term for any loose outer covering, abaya included. The looser cut, not the piece count, is the defining structural feature. Jilbab carries meaningfully higher search volume than several other modest-wear category terms, making it worth stocking as a distinctly labeled line.",
    category: "Product",
    relatedSlugs: ["abaya", "khimar"],
    relatedLinks: [{ label: "Jilbabs", href: "/products/jilbabs" }, { label: "Jilbab vs Abaya: What Retailers Need to Know", href: "/blog/jilbab-vs-abaya-sourcing-guide" }],
  },
  {
    slug: "khimar",
    term: "Khimar",
    shortDefinition: "A cape-style garment covering the head, neck, and shoulders in a single piece.",
    longDefinition:
      "A khimar is a cape-style garment that covers the head, neck, and shoulders in a single piece, extending down to somewhere between the waist and hip depending on tier count. Unlike a hijab, it isn't wrapped or pinned — it's pulled on pre-shaped. One-tier, two-tier, and three-tier cuts each use progressively more fabric and read as progressively more premium, with satin-back crepe the preferred fabric for holding a clean tiered silhouette.",
    category: "Product",
    relatedSlugs: ["hijab", "crepe-fabric"],
    relatedLinks: [{ label: "Khimars", href: "/products/khimars" }, { label: "What Is a Khimar?", href: "/blog/what-is-a-khimar-buyers-guide" }],
  },
  {
    slug: "hijab",
    term: "Hijab",
    shortDefinition: "A headscarf worn to cover the hair and neck, wrapped or pinned into place.",
    longDefinition:
      "A hijab is a headscarf, most commonly a rectangular or square length of fabric wrapped and pinned or tucked to cover the hair and neck. Chiffon is the most widely used base fabric, developed for a balance of sheerness and opacity, with jersey and modal blends used for stretch, no-pin wrap styles and silk reserved for premium ranges.",
    category: "Product",
    relatedSlugs: ["amira-hijab", "chiffon-fabric", "khimar"],
    relatedLinks: [{ label: "Hijabs", href: "/products/hijabs" }, { label: "Choosing the Right Hijab Fabric for Wholesale", href: "/blog/choosing-the-right-hijab-fabric-for-wholesale" }],
  },
  {
    slug: "niqab",
    term: "Niqab",
    shortDefinition: "A face veil, typically worn with a separate hijab, covering the face below the eyes.",
    longDefinition:
      "A niqab is a face veil covering the lower face, worn in combination with a separate hijab or khimar covering the head and neck. Fabric choice for niqabs prioritizes breathability alongside opacity, since the garment sits directly against the nose and mouth for extended periods — chiffon and lightweight crepe are the most common base fabrics.",
    category: "Product",
    relatedSlugs: ["hijab", "chiffon-fabric"],
    relatedLinks: [{ label: "Niqabs", href: "/products/niqabs" }],
  },
  {
    slug: "amira-hijab",
    term: "Amira Hijab",
    shortDefinition: "A two-piece pull-on instant hijab styled to look like a wrapped headscarf.",
    longDefinition:
      "An Amira hijab is a two-piece, pull-on instant hijab consisting of an underscarf cap and an outer layer, pre-styled to look like a traditionally wrapped headscarf without requiring pinning. It's a popular entry point for customers new to wearing hijab and a strong-reordering category for casual and everyday ranges due to its speed and ease of wear.",
    category: "Product",
    relatedSlugs: ["hijab", "khimar"],
    relatedLinks: [{ label: "Instant Hijabs", href: "/products/instant-hijabs" }],
  },
  {
    slug: "colorfastness",
    term: "Colorfastness",
    shortDefinition: "A fabric's resistance to fading or bleeding color during washing, light exposure, or rubbing.",
    longDefinition:
      "Colorfastness measures how well a dyed fabric resists fading or transferring color under washing, light exposure, or rubbing (crocking). It's tested as part of OEKO-TEX and standard fabric quality checks, and it matters especially for darker and more saturated shades, where dye transfer onto skin or lighter garments during wear is one of the more common post-shipment complaints from end customers if not properly tested before bulk production.",
    category: "Quality & Compliance",
    relatedSlugs: ["oeko-tex-standard-100", "aql"],
    relatedLinks: [{ label: "Fabric Testing: What OEKO-TEX Actually Checks", href: "/blog/fabric-testing-what-oeko-tex-actually-checks" }],
  },
  {
    slug: "tech-pack",
    term: "Tech Pack",
    shortDefinition: "A detailed specification document covering a garment's measurements, materials, and construction.",
    longDefinition:
      "A tech pack (technical package) is the detailed reference document a manufacturer builds a garment from — covering measurements and grading across the size run, fabric and trim specifications, construction details, and often a technical flat sketch. For OEM production, the buyer supplies the tech pack; for private label and ODM development, the manufacturer or a shared team develops it collaboratively before sampling begins.",
    category: "Manufacturing",
    relatedSlugs: ["oem", "odm", "moq"],
    relatedLinks: [{ label: "A Private Label Abaya Launch Checklist", href: "/blog/private-label-abaya-launch-checklist" }],
  },
  {
    slug: "lead-time",
    term: "Lead Time",
    shortDefinition: "The time from order confirmation to finished goods ready to ship.",
    longDefinition:
      "Lead time is the total time from a confirmed purchase order to finished, packed goods ready for dispatch — typically excluding the earlier sampling and approval cycle, which is quoted separately. Standard styles on standard fabric usually run 18 to 30 days; custom fabric, embellishment, or a larger order size extends this. Lead time is distinct from shipping transit time, which is added on top depending on freight method and destination.",
    category: "Manufacturing",
    relatedSlugs: ["moq", "tech-pack"],
    relatedLinks: [{ label: "How Abayas Are Made: The Manufacturing Process", href: "/blog/how-abayas-are-made-manufacturing-process" }],
  },
  {
    slug: "fcl-lcl",
    term: "FCL / LCL (Full / Less than Container Load)",
    shortDefinition: "Two sea freight shipping methods — a full dedicated container versus shared container space.",
    longDefinition:
      "FCL (Full Container Load) means a shipment fills, or is booked for, an entire dedicated shipping container — typically more cost-efficient per unit at high volume and faster to load and clear customs since no consolidation is needed. LCL (Less than Container Load) means a smaller shipment shares container space with other shippers' cargo, which is more economical for buyers not yet ordering at container-filling volume, at the cost of slightly longer transit and consolidation time.",
    category: "Trade & Logistics",
    relatedSlugs: ["incoterms", "lead-time"],
    relatedLinks: [{ label: "Export Markets", href: "/export" }],
  },
  {
    slug: "pantone-matching",
    term: "Pantone Matching",
    shortDefinition: "Custom-dyeing fabric to match a specific Pantone color reference for private label brands.",
    longDefinition:
      "Pantone matching is the process of custom-dyeing fabric to match a specific color from the Pantone Matching System, a standardized color reference used across design and manufacturing industries. It allows a private label brand to lock a signature color precisely rather than choosing from a standard library. Custom Pantone matching requires a minimum order per color and a dye-lot development and approval cycle of roughly 15 to 20 days before entering production scheduling.",
    category: "Manufacturing",
    relatedSlugs: ["private-label", "moq"],
    relatedLinks: [{ label: "Modest Fashion Color Forecasting for Buyers", href: "/blog/modest-fashion-color-forecasting-for-buyers" }],
  },
  {
    slug: "wholesale-pricing",
    term: "Wholesale Pricing",
    shortDefinition: "Bulk unit pricing offered to businesses buying for resale, distinct from retail pricing.",
    longDefinition:
      "Wholesale pricing is the per-unit price offered to businesses purchasing in bulk for resale, distribution, or private label branding, as distinct from retail pricing charged to an individual end consumer. Wholesale pricing typically scales down as order volume increases past MOQ thresholds, and is quoted net of the margin a retailer or distributor will add before their own resale.",
    category: "Trade & Logistics",
    relatedSlugs: ["moq", "private-label"],
    relatedLinks: [{ label: "Wholesale Catalog", href: "/products" }],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export const glossaryCategories = Array.from(new Set(glossaryTerms.map((t) => t.category)));
