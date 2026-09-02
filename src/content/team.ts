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
    name: "Yusuf Al Rashid",
    role: "Founder & CEO",
    bio: "Founded Samnoor in 2009 after a decade in Gulf textile trading. Sets factory strategy and leads relationships with our largest distributor accounts.",
    photo: placeholder("leader-Yusuf Al Rashid", "Portrait of Yusuf Al Rashid, Founder and CEO of Samnoor"),
  },
  {
    name: "Hana Qureshi",
    role: "Head of Product Development",
    bio: "Leads fabric sourcing and sampling. Built Samnoor's core hijab and abaya ranges and oversees every private label tech pack before it reaches the cutting table.",
    photo: placeholder("leader-Hana Qureshi", "Portrait of Hana Qureshi, Head of Product Development at Samnoor"),
  },
  {
    name: "Omar Siddiqui",
    role: "Export & Logistics Manager",
    bio: "Manages freight, documentation, and customs across all 42 export markets. The point of contact for Incoterms, shipping schedules, and DDP clearance.",
    photo: placeholder("leader-Omar Siddiqui", "Portrait of Omar Siddiqui, Export and Logistics Manager at Samnoor"),
  },
  {
    name: "Farida Noor",
    role: "Head of Quality Assurance",
    bio: "Runs in-line inspection, fabric testing, and pre-shipment audits. Holds the factory to ISO 9001 and OEKO-TEX standards across every production run.",
    photo: placeholder("leader-Farida Noor", "Portrait of Farida Noor, Head of Quality Assurance at Samnoor"),
  },
];
