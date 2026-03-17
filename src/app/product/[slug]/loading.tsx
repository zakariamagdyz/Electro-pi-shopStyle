import ProductDetailsSkeleton from "@/components/features/ProductDetailsSkeleton";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Footer from "@/components/layout/Footer";
import TopNavigation from "@/components/layout/TopNavigation";
import Link from "next/link";

export default function Loading() {
  return (
    <div className="bg-background text-foreground antialiased min-h-screen bg-secondary-l pointer-events-none">
      <TopNavigation />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Skeleton Breadcrumb matching the exact layout */}
        <div className="mb-12 opacity-50 flex items-center gap-2">
          <div className="w-5 h-5 bg-accent/70 rounded-full animate-pulse"></div>
          <div className="w-24 h-4 bg-accent/40 rounded animate-pulse"></div>
        </div>

        {/* The main skeleton component we already built! */}
        <ProductDetailsSkeleton />
      </main>

      <BottomNavigation />
      <Footer />
    </div>
  );
}
