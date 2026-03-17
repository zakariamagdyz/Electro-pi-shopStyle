import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export default function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load the products right now. Please try refreshing your view.",
  onRetry,
  className = "",
}: ErrorStateProps) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center py-20 lg:py-32 text-center bg-destructive/5 rounded-xl border border-destructive/10 transition-opacity duration-500 ease-in-out ${className}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
        <AlertCircle className="w-6 h-6 text-destructive" aria-hidden="true" />
      </div>
      <h3 className="font-headline text-lg font-extrabold tracking-tight text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground font-body mb-8 max-w-[280px] mx-auto text-sm leading-[1.6]">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-8 py-3 bg-amber-800 hover:bg-primary/80 transition-colors rounded font-headline text-xs font-bold text-white tracking-widest uppercase shadow-sm hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Try fetching the data again"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
