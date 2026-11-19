import cors from "cors";
import express, { type Express, type NextFunction, type Request, type Response } from "express";
import helmet from "helmet";

export function createApp(): Express {
  const app: Express = express();

  // Security headers. Helmet removes X-Powered-By by default.
  app.use(helmet());

  // CORS configuration
  const allowedOrigins = (process.env.CORS_ORIGIN ?? "http://localhost:3000")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
      allowedHeaders: ["Authorization", "Content-Type", "Accept"],
      maxAge: 600,
    })
  );

  // Body parsing
  app.use(express.json({ limit: "1mb" }));

  // Health checks for orchestration / monitoring
  app.get("/health/live", (_req: Request, res: Response) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.get("/health/ready", (_req: Request, res: Response) => {
    res.status(200).json({
      status: "ready",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    });
  });

  // Base API index
  app.get("/api/v1", (_req: Request, res: Response) => {
    res.status(200).json({
      name: "ANVAYA School Management ERP API",
      version: "1.0.0",
      status: "running",
    });
  });

  // 404 handler
  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: "NotFound", message: "Resource not found" });
  });

  // Centralized error handling middleware
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error("Unhandled API error:", err);
    res.status(500).json({
      error: "InternalServerError",
      message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message,
    });
  });

  return app;
}
