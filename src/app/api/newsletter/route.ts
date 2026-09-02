import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schema";
import { insertSubscriber } from "@/lib/db";
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

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  insertSubscriber(parsed.data.email);
  return NextResponse.json({ ok: true });
}
