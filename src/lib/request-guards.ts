import { NextRequest, NextResponse } from "next/server";

/** Rejects a request body above `maxBytes` before it's parsed, based on the declared Content-Length. */
export function rejectIfTooLarge(req: NextRequest, maxBytes: number): NextResponse | null {
  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > maxBytes) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }
  return null;
}

/**
 * Defense-in-depth CSRF check for state-changing admin requests. The
 * session cookie is SameSite=Lax, which already blocks the cookie from
 * being sent on a cross-site POST from another page — this adds a second,
 * independent check by confirming the request's own declared origin
 * matches the app's origin, so a request is rejected even in a scenario
 * where cookie SameSite behavior is bypassed or misconfigured upstream.
 */
export function rejectIfCrossOrigin(req: NextRequest): NextResponse | null {
  const origin = req.headers.get("origin");
  if (!origin) return null; // same-origin requests from same-site navigation may omit Origin; cookie SameSite still protects these
  const requestOrigin = req.nextUrl.origin;
  if (origin !== requestOrigin) {
    return NextResponse.json({ error: "Cross-origin request rejected." }, { status: 403 });
  }
  return null;
}
