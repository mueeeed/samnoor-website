import type { Certification } from "./types";

export const certifications: Certification[] = [
  {
    name: "ISO 9001:2015",
    issuer: "International Organization for Standardization",
    description: "Quality management system certification covering our production planning, manufacturing, and inspection processes.",
    year: "2016",
  },
  {
    name: "OEKO-TEX Standard 100",
    issuer: "OEKO-TEX Association",
    description: "Independent testing confirming our fabrics are free from harmful substance levels above regulated limits.",
    year: "2018",
  },
  {
    name: "WRAP Certified",
    issuer: "Worldwide Responsible Accredited Production",
    description: "Certification of ethical, humane, and lawful manufacturing practices across our facility and workforce.",
    year: "2019",
  },
  {
    name: "SEDEX / SMETA Audited",
    issuer: "Sedex Members Ethical Trade Audit",
    description: "Regular third-party audits covering labor standards, health and safety, environment, and business ethics.",
    year: "2020",
  },
  {
    name: "BSCI Compliant",
    issuer: "Business Social Compliance Initiative",
    description: "Compliance with the amfori BSCI Code of Conduct for responsible supply chain practices.",
    year: "2021",
  },
  {
    name: "ISO 14001:2015",
    issuer: "International Organization for Standardization",
    description: "Environmental management system certification governing waste reduction and resource efficiency in production.",
    year: "2022",
  },
];

export const testingCapabilities = [
  "Colorfastness to washing and rubbing",
  "Fabric weight and composition verification",
  "Seam strength and tear resistance",
  "Dimensional stability after wash",
  "Third-party pre-shipment inspection on request",
];
