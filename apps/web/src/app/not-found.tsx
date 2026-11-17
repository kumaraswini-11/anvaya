import Link from "next/link";

// This file is rendered when a route is not matched or when the notFound() function is called. It takes precedence over error.tsx for missing resources.
export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <h2 className="text-4xl font-extrabold text-gray-900">404</h2>
      <p className="mt-2 text-lg text-gray-600">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Return Home
      </Link>
    </div>
  );
}
