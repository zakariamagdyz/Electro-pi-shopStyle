export default function ProductDetailsSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start animate-pulse">
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="aspect-4/5 w-full bg-accent/50 rounded-lg"></div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="aspect-square bg-secondary/70 rounded-lg"></div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 flex flex-col gap-4">
        <div className="h-6 w-1/4 bg-secondary/50 rounded-full mb-2"></div>
        <div className="h-12 w-3/4 bg-accent/50 rounded mb-4"></div>
        <div className="h-8 w-1/4 bg-accent/50 rounded mb-8"></div>
        
        <div className="space-y-3 mb-10">
          <div className="h-4 w-full bg-secondary/50 rounded"></div>
          <div className="h-4 w-5/6 bg-secondary/50 rounded"></div>
          <div className="h-4 w-4/6 bg-secondary/50 rounded"></div>
        </div>

        <div className="h-32 w-full bg-accent/30 rounded"></div>
      </div>
    </div>
  );
}
