import type { FaqItem } from "./types";

export const faqs: FaqItem[] = [
  {
    category: "Ordering & MOQ",
    question: "What is the minimum order quantity for Samnoor products?",
    answer:
      "Minimum order quantities vary by product and fabric. Standard hijab styles typically start at 300 pieces per color, abayas at 200 pieces per color and size run, and embellished occasion pieces at 50 units per design. Custom private label programs with new fabric development carry higher minimums due to mill order thresholds. Exact MOQs are confirmed at quotation stage based on your specification.",
  },
  {
    category: "Ordering & MOQ",
    question: "Can I order a sample before placing a bulk order?",
    answer:
      "Yes. We produce pre-production samples for every new style or customization before bulk cutting begins. Sample lead time is typically 7 to 12 business days, and sample costs are credited back against a confirmed bulk order in most cases. Sampling policy is confirmed in writing at quotation.",
  },
  {
    category: "Ordering & MOQ",
    question: "What is the typical production lead time?",
    answer:
      "Standard styles in existing fabrics ship 18 to 30 days after sample approval, depending on order volume and current production schedule. Custom fabric development, embellishment work, or first-time private label setup extends this to 30 to 45 days. We confirm a specific date in your production schedule once the purchase order and deposit are finalized.",
  },
  {
    category: "Private Label & OEM",
    question: "Does Samnoor offer private label and white label manufacturing?",
    answer:
      "Yes. We support full private label programs including custom woven or printed labels, hang tags, poly bag or box branding, and custom care labels. Our OEM service covers manufacturing to your design specification, and our ODM service includes design development support if you are building a range from a concept rather than a finished tech pack.",
  },
  {
    category: "Private Label & OEM",
    question: "Can Samnoor develop a custom fabric or color for my brand?",
    answer:
      "Yes. Custom Pantone color matching is available from 500 pieces per color on existing fabric bases. Fully custom fabric development, including new weights, blends, or finishes, is available for partners with sufficient volume commitment to meet mill minimums, typically starting at 1,000 to 3,000 meters depending on the fabric type.",
  },
  {
    category: "Private Label & OEM",
    question: "Do you require a tech pack for custom manufacturing orders?",
    answer:
      "A tech pack speeds up quoting and sampling accuracy, but it is not required to start. If you have a reference image, sketch, or existing garment, our product development team can build a working tech pack with you during the sampling stage.",
  },
  {
    category: "Fabrics & Quality",
    question: "What fabrics does Samnoor manufacture with?",
    answer:
      "Our core fabric library includes Nida, Korean Nida, Zoom, chiffon, cotton, jersey, silk, linen blends, crepe, georgette, rayon, and viscose, along with custom-developed premium blends for private label partners. Full specifications, weights, and care requirements for each fabric are detailed on our fabrics page.",
  },
  {
    category: "Fabrics & Quality",
    question: "How does Samnoor manage quality control?",
    answer:
      "Every order passes through in-line inspection during cutting and stitching, a pre-final inspection before packing, and a randomized final audit before the shipment is released. Fabric batches are checked for colorfastness, weight, and composition against specification before cutting begins. Third-party pre-shipment inspection can be arranged on request.",
  },
  {
    category: "Fabrics & Quality",
    question: "Is Samnoor certified for ethical and quality manufacturing?",
    answer:
      "Samnoor holds ISO 9001:2015 quality management certification, OEKO-TEX Standard 100 fabric safety certification, WRAP ethical manufacturing certification, and is SEDEX/SMETA audited along with BSCI compliance. Full details are available on our certifications page.",
  },
  {
    category: "Shipping & Export",
    question: "Which countries does Samnoor export to?",
    answer:
      "We currently export to 42 countries across the Middle East, Europe, North America, Africa, Asia, and Oceania, including the United Arab Emirates, Saudi Arabia, the United Kingdom, the United States, Canada, and Australia. See our export page for a full list of markets served.",
  },
  {
    category: "Shipping & Export",
    question: "What shipping and Incoterms does Samnoor support?",
    answer:
      "We ship via air freight, sea freight (FCL and LCL), and express courier depending on order size and timeline. Standard Incoterms supported include EXW, FOB, CIF, and DDP, with FOB Dubai or FOB Jebel Ali being the most commonly used terms for our wholesale accounts.",
  },
  {
    category: "Shipping & Export",
    question: "Who handles export documentation and customs clearance?",
    answer:
      "Our export team prepares commercial invoices, packing lists, certificates of origin, and any additional documentation required by your destination market. For DDP shipments, we manage customs clearance on your behalf; for other terms, we provide complete documentation to your freight forwarder or customs broker.",
  },
  {
    category: "General",
    question: "How do I start a wholesale or bulk order inquiry with Samnoor?",
    answer:
      "Submit an inquiry through our contact form or product pages with your target products, estimated quantity, and target market. Our sales team responds within one business day with a quotation, and we typically schedule a call to confirm specifications before sampling begins.",
  },
  {
    category: "General",
    question: "Does Samnoor work with distributors as well as retail brands?",
    answer:
      "Yes. We supply both distributors purchasing our standard catalog for resale and brands building private label ranges. Distributor accounts benefit from published wholesale pricing tiers, while private label accounts work through our OEM/ODM program.",
  },
];

export function getFaqsByCategory(): Record<string, FaqItem[]> {
  return faqs.reduce<Record<string, FaqItem[]>>((acc, faq) => {
    acc[faq.category] = acc[faq.category] ? [...acc[faq.category], faq] : [faq];
    return acc;
  }, {});
}
