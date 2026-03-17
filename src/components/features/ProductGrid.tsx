"use client";

import { useProducts } from "@/hooks/useProducts";
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "sonner";
import ErrorState from "./ErrorState";
import ProductCard from "./ProductCard";
import ProductGridSkeleton from "./ProductGridSkeleton";

// Clean image URLs to handle malformed data from the remote fake store
function getCleanImageString(imageStrings: string[]): string {
  if (!imageStrings || imageStrings.length === 0)
    return "https://via.placeholder.com/640x480";
  let firstImg = imageStrings[0];
  // Platzi API sometimes double-encodes or keeps array syntax within the string
  if (firstImg.startsWith('["')) {
    try {
      const parsed = JSON.parse(firstImg);
      firstImg = Array.isArray(parsed) ? parsed[0] : parsed;
    } catch {
      // ignore
    }
  }
  return firstImg;
}

export default function ProductGrid() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    refetch,
    isFetching,
  } = useProducts();

  // Alert the user if a *background* load more fails but we already have data
  useEffect(() => {
    if (isError && data) {
      toast.error("Failed to load more products", {
        description:
          error?.message || "Please check your connection and try again.",
        action: {
          label: "Retry",
          onClick: () => fetchNextPage(),
        },
      });
    }
  }, [isError, data, error, fetchNextPage]);

  // If there's an error and NO data exists yet, show full ErrorState
  if (isError && !data) {
    return (
      <ErrorState
        message={
          error?.message ||
          "Unable to retrieve the products catalog. Please try again."
        }
        onRetry={() => refetch()}
        className="col-span-full"
      />
    );
  }

  if (isFetching && !data) return <ProductGridSkeleton />;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {data?.pages.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {group.data.map((product) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                imageSrc={getCleanImageString(product.images)}
                imageAlt={product.title}
                title={product.title}
                subtitle={product.category.name}
                price={`$${product.price.toFixed(2)}`}
              />
            ))}
          </React.Fragment>
        ))}
      </div>

      {hasNextPage && (
        <div className="mt-24 text-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="btn-gradient text-white py-4 px-12 rounded font-headline font-bold tracking-widest text-sm custom-shadow active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center mx-auto gap-3"
          >
            {isFetchingNextPage ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                <span>Loading more...</span>
              </>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </>
  );
}
