export default function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-4/5 bg-accent/50 mb-6 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-accent/50 rounded w-3/4"></div>
            <div className="h-3 bg-accent/50 rounded w-1/2"></div>
            <div className="h-5 bg-accent/50 rounded w-1/4 pt-2 mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
