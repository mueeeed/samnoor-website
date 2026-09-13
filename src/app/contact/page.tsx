import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { ContactForm } from "@/components/forms/ContactForm";
import { placeholder } from "@/lib/placeholder-image";
import { siteConfig } from "@/lib/site-config";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SamNoor's export sales team for a wholesale quotation, private label inquiry, or general question.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's Start Your Order"
        description="Send your target products, estimated quantity, and market — our export sales team responds within one business day."
        image={placeholder("contact-hero", "Design desk with fabric swatches and a tech pack sketch")}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Kicker>Reach Us Directly</Kicker>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${siteConfig.contact.salesEmail}`} className="card-premium flex items-center gap-3 p-5 text-sm text-ink">
                <MailIcon width={18} height={18} className="shrink-0 text-accent" />
                <span>
                  <span className="block font-medium text-heading">Email</span>
                  {siteConfig.contact.salesEmail}
                </span>
              </a>
              <a href={`tel:${siteConfig.contact.phone}`} className="card-premium flex items-center gap-3 p-5 text-sm text-ink">
                <PhoneIcon width={18} height={18} className="shrink-0 text-accent" />
                <span>
                  <span className="block font-medium text-heading">Phone</span>
                  {siteConfig.contact.phone}
                </span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium flex items-center gap-3 p-5 text-sm text-ink"
              >
                <WhatsAppIcon width={18} height={18} className="shrink-0 text-accent" />
                <span>
                  <span className="block font-medium text-heading">WhatsApp</span>
                  +{siteConfig.contact.whatsapp}
                </span>
              </a>
              <div className="card-premium flex items-center gap-3 p-5 text-sm text-ink">
                <MapPinIcon width={18} height={18} className="shrink-0 text-accent" />
                <span>
                  <span className="block font-medium text-heading">Factory Address</span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
                  <br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.country}
                </span>
              </div>
              <div className="card-premium flex items-center gap-3 p-5 text-sm text-ink">
                <ClockIcon width={18} height={18} className="shrink-0 text-accent" />
                <span>
                  <span className="block font-medium text-heading">Hours</span>
                  {siteConfig.contact.hours}
                </span>
              </div>
            </div>
          </div>

          <div>
            <Kicker>Send an Inquiry</Kicker>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
