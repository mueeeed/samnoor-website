import "server-only";
import fs from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "newsletter-subscribers.json");

function ensureFile(): void {
  if (fs.existsSync(DATA_FILE)) return;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, "[]", "utf8");
}

let writeQueue: Promise<void> = Promise.resolve();

function readAll(): { email: string; subscribedAt: string }[] {
  ensureFile();
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

export async function addSubscriber(email: string): Promise<"added" | "already-subscribed"> {
  writeQueue = writeQueue.then(() => {
    ensureFile();
    const all = readAll();
    if (all.some((s) => s.email.toLowerCase() === email.toLowerCase())) return;
    all.push({ email, subscribedAt: new Date().toISOString() });
    const tmpFile = `${DATA_FILE}.${process.pid}.${Date.now()}.tmp`;
    fs.writeFileSync(tmpFile, JSON.stringify(all, null, 2), "utf8");
    fs.renameSync(tmpFile, DATA_FILE);
  });
  const before = readAll();
  const alreadyIn = before.some((s) => s.email.toLowerCase() === email.toLowerCase());
  await writeQueue;
  return alreadyIn ? "already-subscribed" : "added";
}
