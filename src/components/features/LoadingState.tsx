export default function LoadingState() {
  return (
    <>
      <div className="block animate-pulse">
        <div className="aspect-[4/5] bg-muted mb-6 rounded"></div>
        <div className="space-y-3">
          <div className="h-4 w-3/4 bg-muted rounded"></div>
          <div className="h-3 w-1/2 bg-muted rounded"></div>
          <div className="h-5 w-1/4 bg-muted rounded"></div>
        </div>
      </div>
      <div className="hidden sm:block animate-pulse">
        <div className="aspect-[4/5] bg-muted mb-6 rounded"></div>
        <div className="space-y-3">
          <div className="h-4 w-3/4 bg-muted rounded"></div>
          <div className="h-3 w-1/2 bg-muted rounded"></div>
          <div className="h-5 w-1/4 bg-muted rounded"></div>
        </div>
      </div>
      <div className="hidden lg:block animate-pulse">
        <div className="aspect-[4/5] bg-muted mb-6 rounded"></div>
        <div className="space-y-3">
          <div className="h-4 w-3/4 bg-muted rounded"></div>
          <div className="h-3 w-1/2 bg-muted rounded"></div>
          <div className="h-5 w-1/4 bg-muted rounded"></div>
        </div>
      </div>
    </>
  );
}
