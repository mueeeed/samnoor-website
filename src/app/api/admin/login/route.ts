import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyCredentials, createSessionToken, SESSION_COOKIE } from "@/lib/auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { rejectIfTooLarge } from "@/lib/request-guards";

export const dynamic = "force-dynamic";

const loginSchema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(200),
});

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);

  // 5 attempts per 10 minutes per IP — enough for a real user who mistypes
  // a password, nowhere near enough for a brute-force attempt to matter.
  const limit = rateLimit(`login:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json({ error: "Too many login attempts. Try again later." }, { status: 429 });
  }

  const sizeError = rejectIfTooLarge(req, 10_000);
  if (sizeError) return sizeError;

  const body = await req.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { username, password } = parsed.data;
  if (!verifyCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const token = createSessionToken(username);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 8 * 60 * 60,
  });
  return res;
}
