import cors from "cors";
import express, { type Express, type NextFunction, type Request, type Response } from "express";
import helmet from "helmet";

export function createApp(): Express {
  const app: Express = express();

  // Security headers
  app.use(helmet());

  // CORS configuration
  const allowedOrigin = process.env.CORS_ORIGIN ?? "http://localhost:3000";
  app.use(
    cors({
      origin: allowedOrigin,
      credentials: true,
    })
  );

  // Body parsing
  app.use(express.json());

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
