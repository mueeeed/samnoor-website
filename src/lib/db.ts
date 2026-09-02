import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import fs from "node:fs";
import type { InquiryInput } from "./schema";

/**
 * Local-first persistence for v1. Uses Node's built-in sqlite module so no
 * native compilation or external service is required to run this project.
 * Swap this file for a Postgres client behind the same `insertInquiry` /
 * `listInquiries` interface when moving to production infrastructure.
 */

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "samnoor.sqlite");

let db: DatabaseSync | null = null;

function getDb(): DatabaseSync {
  if (db) return db;
  db = new DatabaseSync(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      company_name TEXT NOT NULL,
      country TEXT NOT NULL,
      phone TEXT NOT NULL,
      whatsapp TEXT,
      email TEXT NOT NULL,
      interested_products TEXT NOT NULL,
      quantity TEXT NOT NULL,
      target_market TEXT NOT NULL,
      business_type TEXT NOT NULL,
      private_label_required INTEGER NOT NULL DEFAULT 0,
      oem_required INTEGER NOT NULL DEFAULT 0,
      custom_branding INTEGER NOT NULL DEFAULT 0,
      message TEXT,
      preferred_contact_method TEXT NOT NULL,
      source TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      referrer TEXT,
      page_url TEXT,
      ip_hash TEXT,
      user_agent TEXT,
      attachment_path TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
  return db;
}

export function insertSubscriber(email: string): void {
  const database = getDb();
  const stmt = database.prepare(`INSERT OR IGNORE INTO newsletter_subscribers (email) VALUES (?)`);
  stmt.run(email);
}

export type StoredInquiry = InquiryInput & {
  id: number;
  ipHash: string | null;
  userAgent: string | null;
  createdAt: string;
};

export function insertInquiry(
  input: InquiryInput,
  meta: { ipHash: string | null; userAgent: string | null; attachmentPath?: string | null }
): number {
  const database = getDb();
  const stmt = database.prepare(`
    INSERT INTO inquiries (
      full_name, company_name, country, phone, whatsapp, email,
      interested_products, quantity, target_market, business_type,
      private_label_required, oem_required, custom_branding, message,
      preferred_contact_method, source, utm_source, utm_medium, utm_campaign,
      referrer, page_url, ip_hash, user_agent, attachment_path
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const result = stmt.run(
    input.fullName,
    input.companyName,
    input.country,
    input.phone,
    input.whatsapp || null,
    input.email,
    input.interestedProducts,
    input.quantity,
    input.targetMarket,
    input.businessType,
    input.privateLabelRequired ? 1 : 0,
    input.oemRequired ? 1 : 0,
    input.customBranding ? 1 : 0,
    input.message || null,
    input.preferredContactMethod,
    input.source || null,
    input.utmSource || null,
    input.utmMedium || null,
    input.utmCampaign || null,
    input.referrer || null,
    input.pageUrl || null,
    meta.ipHash,
    meta.userAgent,
    meta.attachmentPath || null
  );
  return Number(result.lastInsertRowid);
}

export function listInquiries(limit = 50): Record<string, unknown>[] {
  const database = getDb();
  const stmt = database.prepare(`SELECT * FROM inquiries ORDER BY created_at DESC LIMIT ?`);
  return stmt.all(limit) as Record<string, unknown>[];
}
