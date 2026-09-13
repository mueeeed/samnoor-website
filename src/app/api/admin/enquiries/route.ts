import { NextResponse } from "next/server";
import { getAllEnquiries } from "@/lib/enquiry-store";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ enquiries: getAllEnquiries() });
}
