export const siteConfig = {
  name: "Samnoor",
  legalName: "Samnoor Textiles & Garments LLC",
  tagline: "Crafting Modesty with Excellence",
  description:
    "Samnoor is a premium manufacturer and exporter of hijabs, abayas, and Islamic clothing, supplying wholesalers, distributors, and private label brands across the Middle East, Europe, North America, and beyond.",
  url: "https://www.samnoor.com",
  ogImage: "https://images.pexels.com/photos/10898230/pexels-photo-10898230.jpeg?auto=compress&cs=tinysrgb&w=1600",
  founded: 2009,
  contact: {
    email: "export@samnoor.com",
    salesEmail: "sales@samnoor.com",
    phone: "+971 4 555 0182",
    whatsapp: "971555550182",
    address: {
      line1: "Al Quoz Industrial Area 4",
      line2: "Warehouse 17, Street 14",
      city: "Dubai",
      country: "United Arab Emirates",
      postalCode: "00000",
    },
    hours: "Sunday – Thursday, 9:00 AM – 6:00 PM (GST)",
  },
  social: {
    instagram: "https://instagram.com/samnoor",
    facebook: "https://facebook.com/samnoor",
    linkedin: "https://linkedin.com/company/samnoor",
    pinterest: "https://pinterest.com/samnoor",
    youtube: "https://youtube.com/@samnoor",
  },
  stats: {
    countriesServed: 42,
    yearsInBusiness: new Date().getFullYear() - 2009,
    monthlyCapacityUnits: 250000,
    factoryAreaSqFt: 180000,
    workforce: 620,
    clientsWorldwide: 1200,
  },
} as const;

export type SiteConfig = typeof siteConfig;
