interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  message = "We're having trouble retrieving the latest collection. Please try refreshing your view.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 lg:py-32 text-center bg-destructive/10 rounded-xl outline-1 outline-border/10">
      <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
        <span 
          className="material-symbols-outlined text-[20px] text-destructive" 
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          error
        </span>
      </div>
      <h3 className="font-headline text-lg font-extrabold tracking-tight text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground font-body mb-8 max-w-[280px] mx-auto text-xs leading-[1.6]">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-8 py-3 bg-muted hover:bg-primary transition-colors rounded-none font-headline text-[10px] font-bold text-white tracking-[0.2em] uppercase"
        >
          Retry
        </button>
      )}
    </div>
  );
}
