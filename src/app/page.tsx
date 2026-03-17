import SidebarFilter from "@/components/features/SidebarFilter";
import ProductGrid from "@/components/features/ProductGrid";
import ProductGridSkeleton from "@/components/features/ProductGridSkeleton";
import { Suspense } from "react";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Footer from "@/components/layout/Footer";
import TopNavigation from "@/components/layout/TopNavigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { fetchProducts } from "@/lib/api";

async function PrefetchedProductGrid() {
  const queryClient = getQueryClient();

  // Prefetch the first page server-side
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 0,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductGrid />
    </HydrationBoundary>
  );
}

export default function Home() {
  return (
    <div className="bg-background text-foreground antialiased min-h-screen">
      <TopNavigation />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16">
        <header className="mb-12 lg:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl lg:text-6xl font-headline font-extrabold tracking-tight text-foreground mb-2">
              The Collection
            </h1>
            <p className="text-muted-foreground font-body text-sm lg:text-base max-w-md">
              A curated selection of intentional pieces designed for the modern
              aesthetic.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm font-label text-muted-foreground">
            <span>Live Inventory</span>
            <div className="h-4 w-px bg-border"></div>
            <button className="flex items-center gap-2 hover:text-foreground transition-colors">
              Sort by: Recommended
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            </button>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <SidebarFilter />

          <div className="flex-1 min-w-0">
            <Suspense fallback={<ProductGridSkeleton />}>
              <PrefetchedProductGrid />
            </Suspense>
          </div>
        </div>
      </main>

      <BottomNavigation />
      <Footer />
    </div>
  );
}
