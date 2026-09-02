import { siteConfig } from "@/lib/site-config";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    foundingDate: String(siteConfig.founded),
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contact.salesEmail,
        telephone: siteConfig.contact.phone,
      },
    ],
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
