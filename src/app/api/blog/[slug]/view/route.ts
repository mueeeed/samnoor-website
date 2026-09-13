import { NextRequest, NextResponse } from "next/server";
import { incrementViewCount } from "@/lib/blog-store";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

const SLUG_PATTERN = /^[a-z0-9-]{1,100}$/;

type RouteParams = { params: Promise<{ slug: string }> };

export async function POST(req: NextRequest, { params }: RouteParams) {
  const { slug } = await params;
  if (!SLUG_PATTERN.test(slug)) {
    return NextResponse.json({ error: "Invalid slug." }, { status: 400 });
  }

  const ip = getClientIp(req.headers);

  // One counted view per IP per post per 30 minutes — stops trivial
  // refresh-spam from inflating counts without needing visitor accounts.
  const dedupe = rateLimit(`view:${ip}:${slug}`, 1, 30 * 60 * 1000);
  if (!dedupe.allowed) {
    return NextResponse.json({ counted: false });
  }

  // Separate, higher-ceiling limit per IP across all posts, so one visitor
  // browsing many articles quickly still can't be used to hammer the store.
  const burst = rateLimit(`view-burst:${ip}`, 60, 60 * 1000);
  if (!burst.allowed) {
    return NextResponse.json({ counted: false });
  }

  const views = await incrementViewCount(slug);
  if (views === null) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ counted: true, views });
}
