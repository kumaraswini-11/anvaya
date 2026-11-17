"use client";

import { useEffect } from "react";

// Catches errors in the root layout itself. It replaces the root layout when active, so it must render its own <html> and <body> tags. Without it, a failure in the root layout would crash the entire application with an unstyled browser error page.
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled root application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
        <h2 className="text-2xl font-bold text-gray-900">Critical Error</h2>
        <p className="mt-2 text-gray-600">A critical error occurred. Please refresh the page.</p>
        <button
          type="button"
          className="mt-6 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
          onClick={retry}
        >
          Refresh Page
        </button>
      </body>
    </html>
  );
}
