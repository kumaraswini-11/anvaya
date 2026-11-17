import "dotenv/config";
import type { Server } from "node:http";
import { createApp } from "./app.js";

const app = createApp();
const PORT = Number(process.env.PORT ?? 4000);

const server: Server = app.listen(PORT, () => {
  console.log(`➜ ANVAYA API listening on http://localhost:${PORT}`);
});

function gracefulShutdown(signal: string) {
  console.log(`\nReceived ${signal}. Gracefully shutting down ANVAYA API...`);
  server.close(() => {
    console.log("✔ HTTP server closed.");
    process.exit(0);
  });

  // Force close after 10s timeout
  setTimeout(() => {
    console.error("⚠ Forced shutdown after timeout.");
    process.exit(1);
  }, 10_000).unref();
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));
