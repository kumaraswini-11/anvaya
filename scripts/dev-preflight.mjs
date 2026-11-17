// @ts-check
import { copyFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const apps = [
  { name: "web", path: resolve(rootDir, "apps/web") },
  { name: "api", path: resolve(rootDir, "apps/api") },
];

console.log("\x1b[36m%s\x1b[0m", "➜ Running ANVAYA development preflight checks...");

let hasWarning = false;

for (const app of apps) {
  const envPath = resolve(app.path, ".env");
  const envExamplePath = resolve(app.path, ".env.example");

  if (!existsSync(envPath)) {
    if (existsSync(envExamplePath)) {
      copyFileSync(envExamplePath, envPath);
      console.log(
        "\x1b[33m%s\x1b[0m",
        `ℹ Generated ${app.name}/.env from ${app.name}/.env.example for local development.`
      );
    } else {
      console.warn(
        "\x1b[33m%s\x1b[0m",
        `⚠ Warning: ${app.name}/.env and .env.example are both missing.`
      );
      hasWarning = true;
    }
  }
}

if (!hasWarning) {
  console.log(
    "\x1b[32m%s\x1b[0m",
    "✔ Preflight checks passed. Starting applications with Turborepo...\n"
  );
}
