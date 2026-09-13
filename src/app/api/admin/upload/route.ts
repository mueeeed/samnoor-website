import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { rejectIfCrossOrigin } from "@/lib/request-guards";

export const dynamic = "force-dynamic";

const MAX_BYTES = 8 * 1024 * 1024; // 8MB raw upload cap
const MAX_DIMENSION = 2400; // re-encoded output is capped to this on the long edge
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "blog");

/**
 * Cover/inline image upload for the blog CMS. This is the highest-risk
 * endpoint in the admin panel, so it does not trust anything about the
 * incoming file except its decoded pixel data:
 *  - the client-supplied filename and MIME type are ignored entirely —
 *    the output filename is a random UUID, never user input, which rules
 *    out path traversal and overwrite attacks;
 *  - the file is decoded and re-encoded through sharp, which both proves
 *    it's a genuine, well-formed raster image (a polyglot or malformed
 *    file fails to decode and is rejected) and strips any embedded EXIF,
 *    scripts, or other payload riding along in the original bytes;
 *  - output is always JPEG, so even an uploaded SVG/HTML/script disguised
 *    with an image extension can never be served back as anything but a
 *    flat raster image.
 */
export async function POST(req: NextRequest) {
  const originError = rejectIfCrossOrigin(req);
  if (originError) return originError;

  const ip = getClientIp(req.headers);
  const limit = rateLimit(`upload:${ip}`, 20, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json({ error: "Too many uploads. Try again later." }, { status: 429 });
  }

  const formData = await req.formData().catch(() => null);
  const file = formData?.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File too large. Maximum size is 8MB." }, { status: 413 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  let output: Buffer;
  try {
    output = await sharp(buffer)
      .rotate() // apply EXIF orientation before stripping it
      .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toBuffer();
  } catch {
    return NextResponse.json({ error: "File is not a valid image." }, { status: 400 });
  }

  const filename = `${crypto.randomUUID()}.jpg`;
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOAD_DIR, filename), output);

  return NextResponse.json({ url: `/uploads/blog/${filename}` }, { status: 201 });
}
