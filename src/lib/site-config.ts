export const siteConfig = {
  name: "SamNoor",
  legalName: "SamNoor Textiles & Garments Pvt. Ltd.",
  tagline: "Crafting Modesty with Excellence",
  description:
    "SamNoor is a hijab and abaya manufacturer based in Mumbai, India, producing wholesale modest wear for distributors, boutiques, and private label brands in over 40 countries.",
  url: "https://samnoor.in",
  ogImage: "https://images.pexels.com/photos/10898230/pexels-photo-10898230.jpeg?auto=compress&cs=tinysrgb&w=1600",
  founded: 2009,
  contact: {
    email: "export@samnoor.in",
    salesEmail: "sales@samnoor.in",
    phone: "+91 22 4012 5678",
    whatsapp: "919820045678",
    address: {
      line1: "Marol Industrial Estate",
      line2: "Plot 42, MIDC Road No. 3, Andheri (East)",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      postalCode: "400093",
    },
    hours: "Monday – Saturday, 10:00 AM – 7:00 PM (IST)",
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
