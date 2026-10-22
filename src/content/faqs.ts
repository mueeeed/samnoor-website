import type { FaqItem } from "./types";

export const faqs: FaqItem[] = [
  {
    category: "Ordering & MOQ",
    question: "What is the minimum order quantity for SamNoor products?",
    answer:
      "It depends on the product and fabric. Standard hijab styles typically start at 300 pieces per color, abayas at 200 pieces per color and size run, and embellished occasion pieces at 50 units per design. Custom private label programs that involve new fabric development usually carry higher minimums, since mill order thresholds come into play. We confirm the exact MOQ at quotation stage based on your specification.",
  },
  {
    category: "Ordering & MOQ",
    question: "Can I order a sample before placing a bulk order?",
    answer:
      "Yes — we produce a pre-production sample for every new style or customization before bulk cutting begins. Sample lead time typically runs 7 to 12 business days, and in most cases we credit the sample cost back against a confirmed bulk order. We put the sampling policy in writing at quotation.",
  },
  {
    category: "Ordering & MOQ",
    question: "What is the typical production lead time?",
    answer:
      "Standard styles in existing fabrics ship 18 to 30 days after sample approval, depending on order volume and where our production schedule stands at the time. Custom fabric development, embellishment work, or a first-time private label setup pushes that out to 30 to 45 days. We'll confirm a specific date once the purchase order and deposit are finalized.",
  },
  {
    category: "Private Label & OEM",
    question: "Does SamNoor offer private label and white label manufacturing?",
    answer:
      "Yes. Our private label programs cover custom woven or printed labels, hang tags, poly bag or box branding, and custom care labels. OEM means manufacturing to your design specification; ODM adds design development support on top, for when you're starting from a concept rather than a finished tech pack.",
  },
  {
    category: "Private Label & OEM",
    question: "Can SamNoor develop a custom fabric or color for my brand?",
    answer:
      "We can. Custom Pantone color matching is available from 500 pieces per color on our existing fabric bases. For fully custom fabric development — new weights, blends, or finishes — we'd need a volume commitment large enough to meet mill minimums, which typically starts at 1,000 to 3,000 meters depending on the fabric type.",
  },
  {
    category: "Private Label & OEM",
    question: "Do you require a tech pack for custom manufacturing orders?",
    answer:
      "A tech pack speeds up quoting and sampling accuracy, but you don't need one to get started. A reference image, a sketch, or even an existing garment is enough — our product development team can build a working tech pack with you during the sampling stage.",
  },
  {
    category: "Fabrics & Quality",
    question: "What fabrics does SamNoor manufacture with?",
    answer:
      "Our core library covers Nida, Korean Nida, Zoom, chiffon, cotton, jersey, silk, linen blends, crepe, georgette, rayon, and viscose, plus custom-developed premium blends for private label partners. You'll find full specifications, weights, and care requirements for each one on our fabrics page.",
  },
  {
    category: "Fabrics & Quality",
    question: "How does SamNoor manage quality control?",
    answer:
      "Every order goes through in-line inspection during cutting and stitching, a pre-final inspection before packing, and a randomized final audit before we release the shipment. We check fabric batches for colorfastness, weight, and composition against spec before cutting even begins, and we can arrange third-party pre-shipment inspection on request.",
  },
  {
    category: "Shipping & Export",
    question: "Which countries does SamNoor export to?",
    answer:
      "We currently export to 42 countries across the Middle East, Europe, North America, Africa, Asia, and Oceania — including the UAE, Saudi Arabia, the UK, the US, Canada, and Australia. Our export page has the full list of markets we serve.",
  },
  {
    category: "Shipping & Export",
    question: "What shipping and Incoterms does SamNoor support?",
    answer:
      "We ship by air freight, sea freight (FCL and LCL), or express courier, depending on order size and timeline. On Incoterms, we support EXW, FOB, CIF, and DDP — most of our wholesale accounts go with FOB Mumbai (Nhava Sheva/JNPT).",
  },
  {
    category: "Shipping & Export",
    question: "Who handles export documentation and customs clearance?",
    answer:
      "Our export team prepares commercial invoices, packing lists, certificates of origin, and whatever else your destination market requires. On DDP shipments, we handle customs clearance ourselves; on other terms, we hand off complete documentation to your freight forwarder or customs broker.",
  },
  {
    category: "General",
    question: "How do I start a wholesale or bulk order inquiry with SamNoor?",
    answer:
      "Send an inquiry through our contact form or product pages with your target products, estimated quantity, and target market. Our sales team gets back to you within one business day with a quotation, and we'll usually set up a call to confirm specifications before sampling starts.",
  },
  {
    category: "General",
    question: "Does SamNoor work with distributors as well as retail brands?",
    answer:
      "We do. Distributors buy from our standard catalog for resale, and brands come to us to build private label ranges. Distributor accounts work off our published wholesale pricing tiers, while private label accounts go through the OEM/ODM program.",
  },
];

export function getFaqsByCategory(): Record<string, FaqItem[]> {
  return faqs.reduce<Record<string, FaqItem[]>>((acc, faq) => {
    acc[faq.category] = acc[faq.category] ? [...acc[faq.category], faq] : [faq];
    return acc;
  }, {});
}
