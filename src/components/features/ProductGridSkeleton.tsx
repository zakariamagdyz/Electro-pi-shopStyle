import { Skeleton } from "@/components/ui/skeleton";

export default function ProductGridSkeleton() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 transition-opacity duration-500 ease-in-out"
      aria-label="Loading products"
      role="status"
    >
      <span className="sr-only">Loading products...</span>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex flex-col">
          <Skeleton className="aspect-4/5 w-full rounded-lg mb-6 shadow-sm" />
          <div className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <Skeleton className="h-6 w-1/4 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}
