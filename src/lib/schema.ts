import { z } from "zod";

export const businessTypes = [
  "Retailer",
  "Wholesaler / Distributor",
  "Boutique",
  "E-commerce Brand",
  "Department Store",
  "Other",
] as const;

export const contactMethods = ["Email", "WhatsApp", "Phone"] as const;

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  companyName: z.string().trim().min(2, "Please enter your company name").max(160),
  country: z.string().trim().min(2, "Please select your country").max(80),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  whatsapp: z.string().trim().max(30).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address"),
  interestedProducts: z.string().trim().min(2, "Please tell us which products you're interested in").max(300),
  quantity: z.string().trim().min(1, "Please provide an estimated quantity").max(100),
  targetMarket: z.string().trim().min(2, "Please tell us your target market").max(160),
  businessType: z.enum(businessTypes),
  privateLabelRequired: z.boolean().default(false),
  oemRequired: z.boolean().default(false),
  customBranding: z.boolean().default(false),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  preferredContactMethod: z.enum(contactMethods),
  consent: z.boolean().refine((v) => v === true, "Please accept our privacy policy to continue"),
  // Honeypot field — must stay empty. Real users never see or fill it.
  website: z.string().max(0).optional().or(z.literal("")),
  // Attribution, filled client-side, never shown to the user
  source: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  referrer: z.string().optional(),
  pageUrl: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
