"use client";

import ErrorState from "@/components/features/ErrorState";
import TopNavigation from "@/components/layout/TopNavigation";
import Footer from "@/components/layout/Footer";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground antialiased min-h-screen flex flex-col">
      <TopNavigation />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16 flex-1 flex items-center justify-center w-full">
        <ErrorState
          title="404 - Page Not Found"
          message="We couldn't find the page you were looking for. The link might be broken or the item might have been removed."
          className="max-w-2xl mx-auto shadow-sm"
          onRetry={() => window.history.back()}
        />
      </main>

      <BottomNavigation />
      <Footer />
    </div>
  );
}
