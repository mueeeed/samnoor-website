export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  heroImage: ImageAsset;
  cardImage: ImageAsset;
  keywords: string[];
};

export type ProductVariant = {
  name: string;
  hex?: string;
};

export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  shortDescription: string;
  description: string;
  images: ImageAsset[];
  fabrics: string[];
  colors: ProductVariant[];
  sizes: string[];
  moq: string;
  leadTime: string;
  customizationOptions: string[];
  privateLabelAvailable: boolean;
  specifications: { label: string; value: string }[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
};

export type Fabric = {
  slug: string;
  name: string;
  origin: string;
  description: string;
  properties: string[];
  careInstructions: string[];
  bestFor: string[];
  image: ImageAsset;
};

export type Certification = {
  name: string;
  issuer: string;
  description: string;
  year: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
};

export type Country = {
  name: string;
  region: string;
  code: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: ImageAsset;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  category: string;
  tags: string[];
  content: string;
  faqs?: { question: string; answer: string }[];
};
