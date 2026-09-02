import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/schema";
import { insertInquiry } from "@/lib/db";
import { sendInquiryConfirmation, sendSalesNotification } from "@/lib/mail";
import { hashIp } from "@/lib/utils";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const ipHash = hashIp(ip);

  if (isRateLimited(ipHash)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form for errors.", issues: parsed.error.flatten() }, { status: 422 });
  }

  // Honeypot: a filled hidden field means a bot filled every field it could find.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const userAgent = request.headers.get("user-agent");
  insertInquiry(parsed.data, { ipHash, userAgent });

  await Promise.allSettled([sendInquiryConfirmation(parsed.data), sendSalesNotification(parsed.data)]);

  return NextResponse.json({ ok: true });
}
