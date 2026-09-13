#!/usr/bin/env node
// Generates an ADMIN_PASSWORD_HASH value for .env — run with:
//   npm run hash-password -- "your-strong-password-here"
// eslint-disable-next-line @typescript-eslint/no-require-imports -- plain CJS utility script, not part of the app bundle
const crypto = require("node:crypto");

const password = process.argv[2];
if (!password) {
  console.error('Usage: npm run hash-password -- "your-strong-password-here"');
  process.exit(1);
}
if (password.length < 8) {
  console.error("Password should be at least 8 characters.");
  process.exit(1);
}

const salt = crypto.randomBytes(16);
const hash = crypto.scryptSync(password, salt, 64);
console.log(`scrypt:${salt.toString("hex")}:${hash.toString("hex")}`);
