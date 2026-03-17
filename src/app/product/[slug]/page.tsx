import ProductDetails from "@/components/features/ProductDetails";
import ProductDetailsSkeleton from "@/components/features/ProductDetailsSkeleton";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Footer from "@/components/layout/Footer";
import TopNavigation from "@/components/layout/TopNavigation";
import { fetchProductBySlug } from "@/lib/api";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Link from "next/link";
import { Suspense } from "react";

async function PrefetchedProductDetails({ slug }: { slug: string }) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchProductBySlug(slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetails slug={slug} />
    </HydrationBoundary>
  );
}

export default async function ProductDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  return (
    <div className="bg-background text-foreground antialiased min-h-screen bg-secondary-l">
      <TopNavigation />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-12">
          <Link
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            href="/"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            <span className="font-label font-medium text-sm">
              Back to Products
            </span>
            <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-300"></div>
          </Link>
        </div>

        <Suspense fallback={<ProductDetailsSkeleton />}>
          <PrefetchedProductDetails slug={params.slug} />
        </Suspense>
      </main>

      <BottomNavigation />
      <Footer />
    </div>
  );
}
