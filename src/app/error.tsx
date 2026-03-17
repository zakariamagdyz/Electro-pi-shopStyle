"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import ErrorState from "@/components/features/ErrorState";
import TopNavigation from "@/components/layout/TopNavigation";
import Footer from "@/components/layout/Footer";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Application Error Caught:", error);
  }, [error]);

  return (
    <div className="bg-background text-foreground antialiased min-h-screen flex flex-col">
      <TopNavigation />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16 flex-1 flex items-center justify-center w-full">
        <ErrorState
          title="Something went unexpectedly wrong!"
          message={
            error.message ||
            "We encountered a critical error while trying to process your request."
          }
          onRetry={reset}
          className="max-w-2xl mx-auto shadow-sm"
        />
      </main>

      <BottomNavigation />
      <Footer />
    </div>
  );
}
