// This file automatically wraps the route segment in a React <Suspense> boundary. Best practice is to use a skeleton screen that matches the final layout, not a generic spinner.
export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col p-8">
      {/* Header Skeleton */}
      <div className="mb-8 h-12 w-64 animate-pulse rounded-md bg-gray-200" />

      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-32 w-full animate-pulse rounded-lg bg-gray-200" />
        <div className="h-32 w-full animate-pulse rounded-lg bg-gray-200" />
        <div className="h-32 w-full animate-pulse rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}
