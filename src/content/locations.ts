import { countries } from "./countries";

export type Location = {
  slug: string;
  name: string;
  kind: "country" | "city";
  region: string;
  nearestPort: string;
  typicalFreight: string;
  recommendedIncoterm: string;
  popularCategories: string[];
  intro: string;
  leadTimeNote: string;
};

export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

type RegionProfile = {
  nearestPort: string;
  typicalFreight: string;
  recommendedIncoterm: string;
  popularCategories: string[];
  introTemplate: (country: string) => string;
  leadTimeNote: string;
};

const REGION_PROFILES: Record<string, RegionProfile> = {
  "Middle East": {
    nearestPort: "Jebel Ali (Dubai) or the nearest regional port to your import hub",
    typicalFreight: "Sea freight (FCL or LCL) for standing wholesale volume, with air freight available for fast replenishment on best-sellers",
    recommendedIncoterm: "FOB from Nhava Sheva for established accounts, or DDP for a first order while you confirm your import broker",
    popularCategories: ["abayas", "khimars", "luxury-hijabs", "jilbabs"],
    introTemplate: (country) =>
      `${country} is one of our most established export markets, with abaya, khimar, and premium hijab ranges accounting for the largest share of wholesale volume we ship into the region.`,
    leadTimeNote: "Sea freight to Gulf ports typically transits in 10 to 16 days from Nhava Sheva; air freight lands in 2 to 4 days for urgent orders.",
  },
  Europe: {
    nearestPort: "Rotterdam, Hamburg, or Southampton, depending on your distribution hub",
    typicalFreight: "Sea freight for standing private label volume, with air freight commonly used for first test orders under 500 pieces",
    recommendedIncoterm: "DDP for a first order while you're still building an import customs relationship, moving to FOB once volume is established",
    popularCategories: ["hijabs", "instant-hijabs", "scarves", "sports-hijabs"],
    introTemplate: (country) =>
      `Buyers in ${country} most often start with our chiffon and jersey hijab ranges before expanding into instant hijabs and scarves as their private label catalog grows.`,
    leadTimeNote: "Sea freight to major European ports typically transits in 18 to 28 days from Nhava Sheva; air freight lands in 3 to 5 days.",
  },
  "North America": {
    nearestPort: "Los Angeles, New York/Newark, or Vancouver, depending on your coast",
    typicalFreight: "Sea freight (FCL/LCL) for wholesale volume, air freight for sample runs and fast-moving reorders",
    recommendedIncoterm: "DDP or CIF for first-time importers without an established customs broker",
    popularCategories: ["hijabs", "sports-hijabs", "instant-hijabs", "islamic-inner-caps"],
    introTemplate: (country) =>
      `Wholesale and e-commerce buyers in ${country} typically lead with everyday jersey and instant hijab styles, expanding into abayas and occasion wear as their customer base grows.`,
    leadTimeNote: "Sea freight to North American west coast ports typically transits in 22 to 32 days from Nhava Sheva; air freight lands in 3 to 5 days.",
  },
  Oceania: {
    nearestPort: "Sydney, Melbourne, or Auckland",
    typicalFreight: "Sea freight for standing volume, air freight for smaller or time-sensitive orders",
    recommendedIncoterm: "DDP or CIF for a first order",
    popularCategories: ["hijabs", "abayas", "scarves"],
    introTemplate: (country) =>
      `${country} accounts are typically smaller-volume, higher-frequency wholesale orders, which makes air freight a practical option even outside of sample shipments.`,
    leadTimeNote: "Sea freight typically transits in 25 to 35 days from Nhava Sheva; air freight lands in 4 to 6 days.",
  },
  Africa: {
    nearestPort: "Durban, Mombasa, or Lagos, depending on your region",
    typicalFreight: "Sea freight (FCL/LCL) for bulk wholesale volume, with air freight available for smaller urgent orders",
    recommendedIncoterm: "FOB for established freight forwarder relationships, DDP for first-time buyers",
    popularCategories: ["abayas", "jilbabs", "prayer-dresses", "hijabs"],
    introTemplate: (country) =>
      `${country} buyers most commonly order abaya, jilbab, and prayer dress ranges at volume, alongside a standing hijab program for retail distribution.`,
    leadTimeNote: "Sea freight to African ports typically transits in 14 to 24 days from Nhava Sheva depending on destination; air freight lands in 3 to 5 days.",
  },
  Asia: {
    nearestPort: "Singapore, Port Klang, or Colombo, depending on your region",
    typicalFreight: "Sea freight for standing wholesale volume, air freight for fast-turn replenishment given the shorter regional transit time",
    recommendedIncoterm: "FOB from Nhava Sheva is the most common arrangement for regional accounts",
    popularCategories: ["hijabs", "prayer-dresses", "instant-hijabs", "sports-hijabs"],
    introTemplate: (country) =>
      `${country} is a short-transit market for us, which makes both sea and air freight practical even for smaller test orders before committing to standing volume.`,
    leadTimeNote: "Sea freight within the region typically transits in 6 to 14 days from Nhava Sheva; air freight lands in 1 to 3 days.",
  },
};

const INDIA_PROFILE: Omit<RegionProfile, "introTemplate"> & { introTemplate: (city: string) => string } = {
  nearestPort: "N/A — domestic road and rail freight direct from our Mumbai facility",
  typicalFreight: "Domestic road freight for standard orders, with rail freight available for larger consolidated shipments",
  recommendedIncoterm: "Ex-factory (Mumbai) or delivered pricing to your warehouse, quoted on request",
  popularCategories: ["hijabs", "abayas", "scarves", "islamic-inner-caps"],
  introTemplate: (city) =>
    `We supply wholesale and retail distribution partners in ${city} directly from our Marol, Mumbai facility, with domestic transit typically faster and lower-cost than any import route.`,
  leadTimeNote: "Domestic road freight to most major Indian cities transits in 2 to 5 days from dispatch.",
};

const INDIAN_CITIES = ["Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat", "Lucknow"];

export const locations: Location[] = [
  ...countries.map((country): Location => {
    const profile = REGION_PROFILES[country.region];
    return {
      slug: slugify(country.name),
      name: country.name,
      kind: "country",
      region: country.region,
      nearestPort: profile.nearestPort,
      typicalFreight: profile.typicalFreight,
      recommendedIncoterm: profile.recommendedIncoterm,
      popularCategories: profile.popularCategories,
      intro: profile.introTemplate(country.name),
      leadTimeNote: profile.leadTimeNote,
    };
  }),
  ...INDIAN_CITIES.map((city): Location => ({
    slug: slugify(city),
    name: city,
    kind: "city",
    region: "India (Domestic)",
    nearestPort: INDIA_PROFILE.nearestPort,
    typicalFreight: INDIA_PROFILE.typicalFreight,
    recommendedIncoterm: INDIA_PROFILE.recommendedIncoterm,
    popularCategories: INDIA_PROFILE.popularCategories,
    intro: INDIA_PROFILE.introTemplate(city),
    leadTimeNote: INDIA_PROFILE.leadTimeNote,
  })),
];

export const locationRegions = Array.from(new Set(locations.map((l) => l.region)));

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
