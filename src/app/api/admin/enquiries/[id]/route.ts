import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { updateEnquiryStatus, deleteEnquiry } from "@/lib/enquiry-store";
import { rejectIfCrossOrigin } from "@/lib/request-guards";

export const dynamic = "force-dynamic";

const statusSchema = z.object({ status: z.enum(["new", "contacted", "closed"]) });

type RouteParams = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  const originError = rejectIfCrossOrigin(req);
  if (originError) return originError;

  const { id } = await params;
  const body = await req.json().catch(() => null);
  const parsed = statusSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid status." }, { status: 400 });

  try {
    await updateEnquiryStatus(id, parsed.data.status);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Enquiry not found." }, { status: 404 });
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  const originError = rejectIfCrossOrigin(req);
  if (originError) return originError;

  const { id } = await params;
  try {
    await deleteEnquiry(id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Enquiry not found." }, { status: 404 });
  }
}
