import { placeholder } from "@/lib/placeholder-image";
import type { ImageAsset } from "./types";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: ImageAsset;
};

export const team: TeamMember[] = [
  {
    name: "Imran Sheikh",
    role: "Founder & CEO",
    bio: "Founded SamNoor in 2009 after a decade in Mumbai's garment export trade. Sets factory strategy and leads relationships with our largest distributor accounts.",
    photo: placeholder("leader-Imran Sheikh", "Portrait of Imran Sheikh, Founder and CEO of SamNoor"),
  },
  {
    name: "Sana Ansari",
    role: "Head of Product Development",
    bio: "Leads fabric sourcing and sampling across Mumbai's textile markets. Built SamNoor's core hijab and abaya ranges and oversees every private label tech pack before it reaches the cutting table.",
    photo: placeholder("leader-Sana Ansari", "Portrait of Sana Ansari, Head of Product Development at SamNoor"),
  },
  {
    name: "Zaid Khan",
    role: "Export & Logistics Manager",
    bio: "Manages freight, documentation, and customs clearance out of Nhava Sheva across all 42 export markets. The point of contact for Incoterms, shipping schedules, and DDP clearance.",
    photo: placeholder("leader-Zaid Khan", "Portrait of Zaid Khan, Export and Logistics Manager at SamNoor"),
  },
  {
    name: "Ayesha Merchant",
    role: "Head of Quality Assurance",
    bio: "Runs in-line inspection, fabric testing, and pre-shipment audits. Holds the factory to ISO 9001 and OEKO-TEX standards across every production run.",
    photo: placeholder("leader-Ayesha Merchant", "Portrait of Ayesha Merchant, Head of Quality Assurance at SamNoor"),
  },
];
