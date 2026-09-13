import "server-only";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

/**
 * File-based JSON store for wholesale enquiries submitted through
 * ContactForm/EnquiryForm across the site — same architecture as the blog
 * store (data lives on the Hostinger server itself, not in a hosted
 * database). Read from /admin/enquiries.
 */

export type Enquiry = {
  id: string;
  submittedAt: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  country: string;
  productCategory: string;
  interestedProducts: string;
  quantity: string;
  targetMarket: string;
  businessType: string;
  preferredContactMethod: string;
  privateLabelRequired: boolean;
  oemRequired: boolean;
  customBranding: boolean;
  message?: string;
  sourcePage: string;
  status: "new" | "contacted" | "closed";
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "enquiries.json");

function ensureFile(): void {
  if (fs.existsSync(DATA_FILE)) return;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, "[]", "utf8");
}

let writeQueue: Promise<void> = Promise.resolve();

function readAll(): Enquiry[] {
  ensureFile();
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8")) as Enquiry[];
  } catch {
    return [];
  }
}

function writeAll(entries: Enquiry[]): Promise<void> {
  writeQueue = writeQueue.then(() => {
    ensureFile();
    const tmpFile = `${DATA_FILE}.${process.pid}.${Date.now()}.tmp`;
    fs.writeFileSync(tmpFile, JSON.stringify(entries, null, 2), "utf8");
    fs.renameSync(tmpFile, DATA_FILE);
  });
  return writeQueue;
}

export type EnquiryInput = Omit<Enquiry, "id" | "submittedAt" | "status">;

export async function createEnquiry(input: EnquiryInput): Promise<Enquiry> {
  const entry: Enquiry = { ...input, id: crypto.randomUUID(), submittedAt: new Date().toISOString(), status: "new" };
  const all = readAll();
  all.push(entry);
  await writeAll(all);
  return entry;
}

export function getAllEnquiries(): Enquiry[] {
  return readAll().sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}

export async function updateEnquiryStatus(id: string, status: Enquiry["status"]): Promise<void> {
  const all = readAll();
  const index = all.findIndex((e) => e.id === id);
  if (index === -1) throw new Error("Enquiry not found.");
  all[index] = { ...all[index], status };
  await writeAll(all);
}

export async function deleteEnquiry(id: string): Promise<void> {
  const all = readAll();
  const next = all.filter((e) => e.id !== id);
  if (next.length === all.length) throw new Error("Enquiry not found.");
  await writeAll(next);
}
