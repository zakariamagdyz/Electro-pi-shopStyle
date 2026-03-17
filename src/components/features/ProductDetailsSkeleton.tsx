import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsSkeleton() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start transition-opacity duration-500 ease-in-out"
      aria-label="Loading product details"
      role="status"
    >
      <span className="sr-only">Loading product details...</span>
      <div className="lg:col-span-7 flex flex-col gap-6">
        <Skeleton className="aspect-4/5 w-full rounded-lg shadow-sm" />
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3].map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-lg shadow-sm" />
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 flex flex-col gap-6">
        <Skeleton className="h-6 w-1/4 rounded-full" />
        <Skeleton className="h-12 w-3/4 rounded-lg" />
        <Skeleton className="h-8 w-1/4 rounded-lg" />

        <div className="space-y-4 my-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>

        <Skeleton className="h-32 w-full rounded-lg mt-8" />
      </div>
    </div>
  );
}
