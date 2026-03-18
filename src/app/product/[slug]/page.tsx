import ProductDetails from "@/components/features/ProductDetails";
import ProductDetailsSkeleton from "@/components/features/ProductDetailsSkeleton";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Footer from "@/components/layout/Footer";
import TopNavigation from "@/components/layout/TopNavigation";
import { fetchProductBySlug } from "@/lib/api";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  try {
    const product = await fetchProductBySlug(params.slug);
    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: product.images && product.images.length > 0 ? [product.images[0]] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: product.title,
        description: product.description,
        images: product.images && product.images.length > 0 ? [product.images[0]] : [],
      },
    };
  } catch {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }
}

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
        <div className="mb-12">
          <Link
            className="flex items-center gap-2 text-muted-foreground  transition-colors group"
            href="/"
          >
            <span className="material-symbols-outlined text-[18px]">
              <ArrowLeft />
            </span>
            <span className="font-label font-medium text-sm">
              Back to Products
            </span>
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
