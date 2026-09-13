import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Trade",
  description: `Wholesale ordering terms, MOQs, sampling, and shipping terms for buyers working with ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Legal</span>
          <h1 className="mt-3 font-heading text-3xl font-semibold text-heading sm:text-4xl">Terms of Trade</h1>
          <p className="mt-2 text-sm text-muted">Last updated August 2026</p>

          <div className="prose-samnoor mt-10">
            <p>
              These Terms of Trade govern wholesale, private label, and OEM orders placed with{" "}
              {siteConfig.legalName} (&ldquo;SamNoor&rdquo;). By submitting a purchase order, you agree to the terms
              below unless a separately signed agreement states otherwise.
            </p>

            <h2>Quotations &amp; Minimum Order Quantities</h2>
            <p>
              Quotations are valid for 30 days from issue unless stated otherwise. Minimum order quantities vary by
              product and fabric and are confirmed in writing at quotation stage. Custom fabric development carries
              higher minimums due to mill order thresholds.
            </p>

            <h2>Sampling</h2>
            <p>
              Pre-production samples are produced for every new style or customization before bulk cutting begins.
              Sample costs are credited against a confirmed bulk order in most cases, as agreed in writing at
              quotation.
            </p>

            <h2>Production &amp; Lead Times</h2>
            <p>
              Standard styles ship 18 to 30 days after sample approval; custom fabric development or first-time
              private label setup extends this to 30 to 45 days. A specific production date is confirmed in your
              order schedule once the purchase order and deposit are finalized.
            </p>

            <h2>Payment Terms</h2>
            <p>
              First orders are typically structured as a deposit on order confirmation with the balance due before
              shipment. Standing wholesale accounts may qualify for alternate terms after an established order
              history, at SamNoor&rsquo;s discretion.
            </p>

            <h2>Quality &amp; Inspection</h2>
            <p>
              Every order passes through in-line inspection, pre-final inspection before packing, and a randomized
              final audit before release. Third-party pre-shipment inspection can be arranged on request at the
              buyer&rsquo;s cost.
            </p>

            <h2>Shipping &amp; Incoterms</h2>
            <p>
              We ship via air freight, sea freight (FCL and LCL), and express courier. Supported Incoterms include
              EXW, FOB, CIF, and DDP, confirmed in writing before production begins. Risk transfers per the agreed
              Incoterm.
            </p>

            <h2>Cancellations</h2>
            <p>
              Orders may be cancelled without penalty prior to sample approval. Cancellations after bulk production
              has begun are subject to costs incurred for fabric, cutting, and labor to that point.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Disputes not resolved directly will be referred to
              arbitration in Mumbai, in accordance with the Arbitration and Conciliation Act, 1996.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to {siteConfig.contact.salesEmail}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
