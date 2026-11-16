'use client';

import { useEffect } from 'react';

// Catches errors in the route segment and its children (e.g., app/page.tsx) but does not catch errors in its own layout.tsx. It renders inside the root layout, so the surrounding UI remains intact.
export default function RouteError({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <h2 className="text-2xl font-bold text-gray-900">Something went wrong!</h2>
      <p className="mt-2 text-gray-600">
        We encountered an unexpected error. Our team has been notified.
      </p>
      <button
        type="button"
        className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        onClick={retry}
      >
        Try again
      </button>
    </div>
  );
}
