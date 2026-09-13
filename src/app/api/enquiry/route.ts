import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createEnquiry } from "@/lib/enquiry-store";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { rejectIfTooLarge } from "@/lib/request-guards";

export const dynamic = "force-dynamic";

const enquirySchema = z.object({
  fullName: z.string().min(1).max(150),
  companyName: z.string().min(1).max(150),
  email: z.string().email().max(200),
  phone: z.string().min(1).max(50),
  whatsapp: z.string().max(50).optional(),
  country: z.string().min(1).max(100),
  productCategory: z.string().min(1).max(100),
  interestedProducts: z.string().min(1).max(500),
  quantity: z.string().min(1).max(100),
  targetMarket: z.string().min(1).max(150),
  businessType: z.string().min(1).max(100),
  preferredContactMethod: z.string().min(1).max(50),
  privateLabelRequired: z.boolean().default(false),
  oemRequired: z.boolean().default(false),
  customBranding: z.boolean().default(false),
  message: z.string().max(2000).optional(),
  sourcePage: z.string().max(300).optional().default("unknown"),
  // Honeypot — real users never see or fill this field (hidden via CSS).
  // Any non-empty value here means the submission is automated. Deliberately
  // not constrained to an empty string so a filled-in value doesn't fail
  // validation before the honeypot check below ever runs.
  botField: z.string().max(500).optional(),
});

export async function POST(req: NextRequest) {
  const sizeError = rejectIfTooLarge(req, 20_000);
  if (sizeError) return sizeError;

  const ip = getClientIp(req.headers);
  const limit = rateLimit(`enquiry:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  // Silently "succeed" for bot submissions so scrapers don't learn the honeypot exists.
  if (parsed.data.botField) {
    return NextResponse.json({ ok: true });
  }

  const d = parsed.data;
  await createEnquiry({
    fullName: d.fullName,
    companyName: d.companyName,
    email: d.email,
    phone: d.phone,
    whatsapp: d.whatsapp,
    country: d.country,
    productCategory: d.productCategory,
    interestedProducts: d.interestedProducts,
    quantity: d.quantity,
    targetMarket: d.targetMarket,
    businessType: d.businessType,
    preferredContactMethod: d.preferredContactMethod,
    privateLabelRequired: d.privateLabelRequired,
    oemRequired: d.oemRequired,
    customBranding: d.customBranding,
    message: d.message,
    sourcePage: d.sourcePage,
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
