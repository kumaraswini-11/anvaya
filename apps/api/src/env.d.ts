// biome-ignore lint/style/useNamingConvention: Node.js requires this namespace name.
declare namespace NodeJS {
  interface ProcessEnv {
    // biome-ignore lint/style/useNamingConvention: Environment variables are conventionally uppercase.
    PORT?: string;
    // biome-ignore lint/style/useNamingConvention: Environment variables are conventionally uppercase.
    NODE_ENV?: "development" | "production" | "test";
    // biome-ignore lint/style/useNamingConvention: Environment variables are conventionally uppercase.
    CORS_ORIGIN?: string;
  }
}
