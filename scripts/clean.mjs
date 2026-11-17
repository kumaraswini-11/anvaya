// @ts-check
import { existsSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const targets = [
  resolve(rootDir, ".turbo"),
  resolve(rootDir, "node_modules/.cache"),
  resolve(rootDir, "apps/web/.turbo"),
  resolve(rootDir, "apps/web/.next"),
  resolve(rootDir, "apps/api/.turbo"),
  resolve(rootDir, "apps/api/dist"),
  resolve(rootDir, "packages/ui/.turbo"),
  resolve(rootDir, "packages/typescript-config/.turbo"),
];

console.log("➜ Cleaning monorepo build artifacts and caches...");

for (const target of targets) {
  if (existsSync(target)) {
    try {
      rmSync(target, { recursive: true, force: true });
      console.log(`  ✔ Removed: ${target.replace(rootDir, ".")}`);
    } catch (err) {
      console.warn(`  ⚠ Failed to remove ${target.replace(rootDir, ".")}:`, err);
    }
  }
}

console.log("✔ Clean completed.\n");
