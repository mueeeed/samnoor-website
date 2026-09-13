import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { addSubscriber } from "@/lib/newsletter-store";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { rejectIfTooLarge } from "@/lib/request-guards";

export const dynamic = "force-dynamic";

const schema = z.object({
  email: z.string().email().max(200),
  botField: z.string().max(500).optional(),
});

export async function POST(req: NextRequest) {
  const sizeError = rejectIfTooLarge(req, 5_000);
  if (sizeError) return sizeError;

  const ip = getClientIp(req.headers);
  const limit = rateLimit(`newsletter:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (parsed.data.botField) {
    return NextResponse.json({ ok: true });
  }

  await addSubscriber(parsed.data.email);
  return NextResponse.json({ ok: true }, { status: 201 });
}
