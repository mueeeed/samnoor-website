import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Legal</span>
          <h1 className="mt-3 font-heading text-3xl font-semibold text-heading sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated August 2026</p>

          <div className="prose-samnoor mt-10">
            <p>
              {siteConfig.legalName} (&ldquo;Samnoor,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy.
              This policy explains what information we collect through {siteConfig.url}, how we use it, and the
              choices available to you as a visitor, buyer, or private label partner.
            </p>

            <h2>Information We Collect</h2>
            <p>When you submit an inquiry, request a quotation, or subscribe to our trade newsletter, we collect:</p>
            <ul>
              <li>Contact details: name, company name, email, phone, and WhatsApp number</li>
              <li>Business information: country, target market, business type, and order details you provide</li>
              <li>Technical data: IP address (stored as a one-way hash, never in plain text), browser type, and referring page</li>
            </ul>

            <h2>How We Use It</h2>
            <ul>
              <li>To respond to inquiries and prepare quotations</li>
              <li>To send order-related correspondence and, if you subscribe, our trade newsletter</li>
              <li>To detect and prevent spam or abusive form submissions</li>
              <li>To understand aggregate site usage and improve our catalog and content</li>
            </ul>

            <h2>How We Protect It</h2>
            <p>
              Inquiry data is stored on infrastructure we control directly and is not sold or shared with third
              parties for marketing purposes. IP addresses are stored as irreversible hashes, not raw addresses.
              Access to stored inquiries is limited to our sales and export team.
            </p>

            <h2>Your Choices</h2>
            <p>
              You can unsubscribe from our trade newsletter at any time using the link in any newsletter email, or
              by contacting us directly. You may request a copy of, or deletion of, the information we hold about
              you by emailing {siteConfig.contact.email}.
            </p>

            <h2>Cookies</h2>
            <p>
              We use minimal, functional cookies necessary for the site to operate correctly (such as remembering
              your light/dark theme preference). We do not use third-party advertising trackers.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy can be sent to {siteConfig.contact.email} or by mail to{" "}
              {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, {siteConfig.contact.address.city},{" "}
              {siteConfig.contact.address.country}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
