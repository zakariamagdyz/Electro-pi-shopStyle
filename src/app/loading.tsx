import ProductGridSkeleton from "@/components/features/ProductGridSkeleton";
import SidebarFilter from "@/components/features/SidebarFilter";
import TopNavigation from "@/components/layout/TopNavigation";
import Footer from "@/components/layout/Footer";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="bg-background text-foreground antialiased min-h-screen flex flex-col pointer-events-none">
      <TopNavigation />

      <main className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-8 lg:py-16 flex-1">
        <header className="mb-12 lg:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 animate-pulse opacity-50">
          <div>
            <div className="h-14 w-64 bg-accent/70 rounded-lg mb-4"></div>
            <div className="h-4 w-80 bg-accent/70 rounded-lg"></div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 opacity-80">
          <SidebarFilter />
          <div className="flex-1 min-w-0">
             <ProductGridSkeleton />
          </div>
        </div>
      </main>

      <BottomNavigation />
      <Footer />
    </div>
  );
}
