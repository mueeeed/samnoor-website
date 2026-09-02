import { placeholder } from "@/lib/placeholder-image";
import type { BlogPost } from "./types";

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const rest = blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-hijab-fabric-for-wholesale",
    title: "Choosing the Right Hijab Fabric for Wholesale Buying",
    excerpt:
      "Chiffon, jersey, and Nida each behave differently at wholesale volume. Here's how to match fabric to your market before you commit to an MOQ.",
    coverImage: placeholder("blog-1-cover", "Rolls of hijab fabric in a manufacturing warehouse"),
    author: "Hana Qureshi",
    authorRole: "Head of Product Development",
    publishedAt: "2026-06-02",
    readingTime: "6 min read",
    category: "Sourcing",
    tags: ["fabrics", "wholesale", "sourcing"],
    content: `
      <p>Every wholesale buyer eventually asks the same question at the sampling stage: which fabric should carry the range? The honest answer is that there isn't a single "best" hijab fabric &mdash; there's a best fabric for your customer's climate, price point, and how they intend to style it. Getting this decision wrong doesn't usually show up until reorder time, when a fabric that photographed well in a sample looks and feels different at three hundred pieces.</p>

      <h2>Start with climate, not aesthetics</h2>
      <p>Chiffon is the default recommendation for a reason: at 75 grams per square meter, it's opaque enough to wear without an underscarf in most conditions, breathes well in heat, and takes color consistently across large dye lots. It's the right starting point for buyers serving GCC, Southeast Asian, or Mediterranean markets.</p>
      <p>Jersey behaves differently. The stretch recovery that makes it a "wrap and go" style for customers also means it performs better in temperate and cold markets, where the extra structure and slight warmth of a cotton-modal blend is a feature rather than a drawback.</p>

      <h2>Match fabric to price tier deliberately</h2>
      <p>We see the most reorder friction when a buyer selects a fabric based on unit cost alone rather than where it sits in their own pricing ladder. A few guardrails that hold up across the accounts we work with:</p>
      <ul>
        <li><strong>Entry tier:</strong> chiffon or zoom fabric, solid colors, standard hem &mdash; keeps unit cost predictable at 300&ndash;500 piece MOQs.</li>
        <li><strong>Core tier:</strong> Korean Nida-adjacent chiffon upgrades, weighted hems, expanded color range &mdash; where most repeat wholesale volume lives.</li>
        <li><strong>Premium tier:</strong> mulberry silk or satin-back crepe, hand-finished hems, gift packaging &mdash; boutique and department store placement.</li>
      </ul>

      <h2>Ask for the fabric report before you ask for the sample</h2>
      <p>A pre-production sample tells you how a garment looks. A fabric report &mdash; weight, composition, and colorfastness testing &mdash; tells you how it will perform after the fortieth wash cycle in your customer's hands. Any manufacturer who can't produce one on request is a signal to keep looking, not a detail to skip past.</p>

      <h2>Where this leaves your first order</h2>
      <p>If you're placing a first order and unsure which fabric to lead with, start with a chiffon core style at standard MOQ, run it for one seasonal cycle, and use the reorder data to decide whether your customer base is asking for more structure (Nida), more stretch (jersey), or more shine (silk-adjacent). Fabric selection is a decision you refine with real sell-through, not one you need to get perfect on the first purchase order.</p>
    `,
    faqs: [
      {
        question: "Can I mix fabrics within one wholesale order to test the market?",
        answer: "Yes. Most of our standard styles allow mixed-fabric test orders above 300 pieces total, split across two or three fabric options, so you can gauge sell-through before committing to a single fabric at volume.",
      },
      {
        question: "How much does fabric choice affect lead time?",
        answer: "Standard fabrics already in our library (chiffon, Nida, jersey, cotton) don't add lead time. Custom fabric development adds 10 to 20 days depending on mill minimums and finishing requirements.",
      },
    ],
  },
  {
    slug: "private-label-abaya-launch-checklist",
    title: "A Private Label Abaya Launch Checklist",
    excerpt:
      "From tech pack to container: the eight decisions that determine whether your private label abaya line ships on time.",
    coverImage: placeholder("blog-2-cover", "Fabric swatch cards arranged for a private label review"),
    author: "Yusuf Al Rashid",
    authorRole: "Founder & CEO",
    publishedAt: "2026-05-14",
    readingTime: "8 min read",
    category: "Private Label",
    tags: ["private label", "OEM", "planning"],
    content: `
      <p>Most delays we see in a private label launch don't happen on our production floor &mdash; they happen upstream, in decisions that weren't finalized before cutting began. This checklist reflects the eight decisions we ask every new private label partner to lock in before we quote a firm delivery date.</p>

      <h2>1. Base silhouette</h2>
      <p>Are you launching on an existing base style (fastest, lowest MOQ) or a fully custom pattern (longer development, no MOQ ceiling on design)? Most first-time private label brands launch on a base style with custom branding rather than a from-scratch pattern.</p>

      <h2>2. Fabric and weight</h2>
      <p>Locking fabric early prevents the most common source of resampling. If you're unsure, request two fabric options on the first sample round rather than deciding blind from a swatch card.</p>

      <h2>3. Size run and grading</h2>
      <p>Confirm your size range and grading rules before bulk cutting, not after. A mid-production size change re-triggers pattern grading and can add a full production cycle.</p>

      <h2>4. Labeling and branding assets</h2>
      <p>Woven labels, printed care labels, and hang tags all have separate lead times from garment production &mdash; typically 10 to 15 days. Send artwork files during sampling, not after bulk approval, so branding arrives in parallel with production rather than after it.</p>

      <h2>5. Packaging specification</h2>
      <p>Poly bag, box, or branded dust bag &mdash; each has a different cost and lead time impact. Packaging decided late is the single most common reason a finished order sits in our warehouse waiting to ship.</p>

      <h2>6. Quality benchmark</h2>
      <p>Agree on your quality tolerance in writing at sampling stage: acceptable seam variance, stitch density, colorfastness rating. This becomes the standard our QA team inspects against, and it protects both sides from subjective disputes at final inspection.</p>

      <h2>7. Payment and Incoterm structure</h2>
      <p>First orders typically run on a deposit plus balance-before-shipment structure under FOB terms. Confirm this before sampling begins so it doesn't become a negotiation at the moment your order is production-ready.</p>

      <h2>8. Shipping method and destination port</h2>
      <p>Air freight for a fast first order, sea freight for standing volume &mdash; the earlier your logistics team confirms this, the more accurately we can quote total landed cost and set a realistic in-market date.</p>

      <p>Get these eight decisions locked before your purchase order is issued, and a private label abaya program typically moves from tech pack to container in 30 to 45 days, in line with the timeline we quote at first inquiry.</p>
    `,
  },
  {
    slug: "fabric-testing-what-oeko-tex-actually-checks",
    title: "Fabric Testing: What OEKO-TEX Actually Checks",
    excerpt:
      "OEKO-TEX certification gets cited on a lot of hang tags. Here's what the standard actually tests for, and why it matters for a modest fashion supply chain.",
    coverImage: placeholder("blog-3-cover", "Fabric roll being inspected under warehouse lighting"),
    author: "Farida Noor",
    authorRole: "Head of Quality Assurance",
    publishedAt: "2026-03-27",
    readingTime: "5 min read",
    category: "Fabrics & Quality",
    tags: ["quality", "certifications", "testing"],
    content: `
      <p>OEKO-TEX Standard 100 appears on more hang tags every season, but the certification is frequently misunderstood as a general "ethical" label. It isn't &mdash; it's a specific, testable standard covering harmful substance limits in finished textiles, and understanding what it actually measures helps buyers ask sharper sourcing questions.</p>

      <h2>What gets tested</h2>
      <p>Every fabric batch we submit for certification is tested against limits for regulated and banned substances: certain azo dyes, formaldehyde, heavy metals, pesticide residues, and chlorinated phenols, among others. The limits scale by product class &mdash; garments worn close to skin, like hijabs and inner caps, are held to the strictest thresholds in the standard.</p>

      <h2>Why this matters more for modest wear specifically</h2>
      <p>Hijabs, niqabs, and prayer garments spend more continuous time in direct contact with skin and hair than most apparel categories. Dye and finishing chemical exposure that would be a minor concern on outerwear becomes a more direct consideration on a fabric worn against the scalp for a full day.</p>

      <h2>How it fits into our quality process</h2>
      <p>OEKO-TEX testing sits alongside, not instead of, our in-line inspection. Fabric batches are tested before cutting begins; garments are inspected in-line during stitching, pre-final before packing, and randomly audited before release. Certification confirms what's <em>in</em> the fabric; inspection confirms the garment was <em>made correctly</em> from it. Buyers sourcing on certification alone, without confirming inspection practices, are only checking half the quality picture.</p>

      <h2>What to ask a manufacturer</h2>
      <ul>
        <li>Is the certificate current, and does it cover the specific fabric you're ordering, not just the factory in general?</li>
        <li>Can they provide the test report, not just the certificate logo?</li>
        <li>Is third-party pre-shipment inspection available for your specific order?</li>
      </ul>
      <p>A manufacturer that answers all three without hesitation is one whose quality claims are backed by paperwork you can actually verify.</p>
    `,
  },
  {
    slug: "understanding-incoterms-for-modest-fashion-importers",
    title: "Understanding Incoterms for Modest Fashion Importers",
    excerpt:
      "EXW, FOB, CIF, or DDP — what each term actually shifts onto you as the buyer, and how to pick the right one for your first order.",
    coverImage: placeholder("blog-4-cover", "Shipping containers at a export freight terminal"),
    author: "Omar Siddiqui",
    authorRole: "Export & Logistics Manager",
    publishedAt: "2026-04-21",
    readingTime: "5 min read",
    category: "Export",
    tags: ["export", "logistics", "incoterms"],
    content: `
      <p>Incoterms decide who is responsible for what, and at which point risk and cost transfer from us to you. Getting the term right for your experience level and freight capability matters more than getting the "best" price on paper &mdash; a cheaper EXW quote is not actually cheaper if you don't yet have a freight forwarder who can manage export customs.</p>

      <h2>EXW (Ex Works)</h2>
      <p>You take responsibility for the goods from our factory door: export customs, freight booking, everything. Lowest quoted price, highest operational responsibility. Suited to buyers with an established freight forwarder already handling origin pickup in the UAE.</p>

      <h2>FOB (Free on Board)</h2>
      <p>We handle export customs and deliver the goods on board the vessel at Jebel Ali port; you take over from there. This is the most common term across our wholesale accounts &mdash; it splits responsibility at a clean, well-understood handoff point and is the term most freight forwarders quote against by default.</p>

      <h2>CIF (Cost, Insurance, and Freight)</h2>
      <p>We book and pay for freight and insurance to your destination port; you handle import customs on arrival. Useful if you don't yet have origin-side freight relationships but do have an import customs broker at destination.</p>

      <h2>DDP (Delivered Duty Paid)</h2>
      <p>We manage the full chain, including destination import duties and customs clearance, delivering to your named address. Highest quoted price, lowest operational responsibility &mdash; the right choice for a first order while you're still building your own logistics relationships.</p>

      <h2>Which term should a first-time buyer choose?</h2>
      <p>If this is your first wholesale import from the UAE and you don't already have a customs broker at your destination, start with DDP or CIF. Once you've run two or three orders and understand your own logistics costs, FOB typically becomes the more economical standing arrangement. We quote all four terms on request so you can compare the real landed cost, not just the factory-gate price.</p>
    `,
    faqs: [
      {
        question: "Can I switch Incoterms between orders?",
        answer: "Yes, there's no lock-in. Many accounts start on DDP for their first one or two orders and move to FOB once their own freight forwarder relationship is established.",
      },
    ],
  },
  {
    slug: "modest-fashion-color-forecasting-for-buyers",
    title: "Modest Fashion Color Forecasting for Wholesale Buyers",
    excerpt:
      "How we plan our seasonal color range eighteen months out, and what it means for how far ahead you should be placing custom color orders.",
    coverImage: placeholder("blog-5-cover", "Layered khimar garments on a hanger rail"),
    author: "Hana Qureshi",
    authorRole: "Head of Product Development",
    publishedAt: "2026-02-09",
    readingTime: "7 min read",
    category: "Sourcing",
    tags: ["color", "trends", "planning"],
    content: `
      <p>Color range planning in modest fashion runs on a longer horizon than most buyers expect. Our standard 42-shade library gets revisited every eighteen months, and custom Pantone development for private label partners needs to be requested well ahead of the season it's meant to launch in. Here's the planning logic behind it, so you can time your own color orders against it.</p>

      <h2>Why eighteen months, not one season</h2>
      <p>A new color enters our standard library only after it clears dye-lot consistency testing across multiple production runs and mill batches. That process, plus colorfastness testing against our OEKO-TEX baseline, takes time we can't compress without risking the exact consistency our wholesale accounts rely on for repeat orders.</p>

      <h2>Seasonal versus perennial colors</h2>
      <p>Roughly two-thirds of our library is perennial &mdash; ivory, charcoal, sand, emerald, bronze &mdash; colors that sell consistently across regions and seasons with minimal fluctuation. The remaining third rotates seasonally, tracking regional preference shifts we monitor through our distributor network across the Middle East, Europe, and North America.</p>

      <h2>Regional color preference is not uniform</h2>
      <p>GCC accounts consistently favor deeper, richer tones &mdash; emerald, bronze, charcoal &mdash; especially for abaya and occasion ranges. European and North American accounts trend toward a broader neutral range with seasonal pastel additions. If you're building a range for a specific region, tell us at the sampling stage; it changes which shades we'd recommend leading with.</p>

      <h2>Custom Pantone timing for private label</h2>
      <p>Custom color matching is available from 500 pieces per color, but the dye-lot development and approval cycle needs 15 to 20 days before it enters production scheduling. If you're planning a seasonal private label launch, the color decision needs to be finalized roughly two months before you need finished goods, not two weeks.</p>

      <h2>What this means for your ordering calendar</h2>
      <p>Standard library colors can be ordered on our regular 18&ndash;30 day production timeline year-round. Custom colors need to be requested a full season ahead of launch. If you're not sure which category your order falls into, ask at quotation &mdash; it's a five-minute conversation that prevents a much longer delay later.</p>
    `,
  },
];
