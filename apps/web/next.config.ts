import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@anvaya/ui"],

  /* Core behaviour */
  reactStrictMode: true, // Recommended for development to catch unsafe lifecycle methods. It is enabled by default in the App Router since Next.js 13.5.1, but stating it explicitly follows the "explicit over implicit" configuration principle.
  poweredByHeader: false, // Removes the X-Powered-By: Next.js header, which is a minor but standard security hardening step.
  compress: true, // Enables gzip/brotli compression for responses.
  output: "standalone", // Generates a self-contained deployment bundle. This is essential for Docker and Vercel deployments because it avoids shipping the full node_modules to the runtime.

  /* Next.js 16 feature flags */
  experimental: {
    // agentFeedback is experimental and disabled by default.
    // Set explicitly to false for clarity and forward compatibility.
    agentFeedback: false,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true, // Enables the React Compiler for automatic memoization. This is a stable Next.js 16 feature.

  /* Security headers */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
