// For a scalable, enterprise-grade application, the type augmentation approach is strongly recommended. It centralizes your environment variable definitions, provides excellent developer experience with autocomplete, and prevents typos. The bracket notation fix is fine for a quick unblock, but the type declaration file is the more robust, long-term solution.
// TypeScript’s noPropertyAccessFromIndexSignature setting causes this error. Declare the variable explicitly to keep Next.js’s documented dot notation for "https://nextjs.org/docs/app/guides/environment-variables#bundling-environment-variables-for-the-browser".
// biome-ignore lint/style/useNamingConvention: Node.js requires this namespace name.
declare namespace NodeJS {
  interface ProcessEnv {
    // biome-ignore lint/style/useNamingConvention: Next.js requires this environment variable name.
    NEXT_PUBLIC_SITE_URL?: string;
  }
}
