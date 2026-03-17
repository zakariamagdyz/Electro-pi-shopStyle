"use client";

import { useProducts } from "@/hooks/useProducts";
import { useFilterStore } from "@/hooks/useFilterStore";
import { Loader2, SearchX } from "lucide-react";
import React, { useEffect, useMemo } from "react";
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

  const { searchQuery, selectedCategory, priceRange } = useFilterStore();

  // Compute the locally filtered product list
  const filteredProducts = useMemo(() => {
    if (!data) return [];
    
    // Flatten the paginated pages array into single flat list
    const allProducts = data.pages.flatMap((page) => page.data);
    
    return allProducts.filter((product) => {
      // 1. Filter by category
      if (selectedCategory !== "All" && product.category.name !== selectedCategory) {
        return false;
      }
      
      // 2. Filter by search text
      if (
        searchQuery && 
        !product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      
      // 3. Filter by price
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      
      return true;
    });
  }, [data, searchQuery, selectedCategory, priceRange]);

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

  // Display empty state if filtering yielded 0 items
  if (data && filteredProducts.length === 0) {
    return (
       <div className="flex flex-col items-center justify-center py-24 text-center">
         <SearchX className="w-16 h-16 text-muted-foreground/30 mb-6" />
         <h3 className="text-xl font-headline font-bold text-foreground mb-2">
            No products match your filters
         </h3>
         <p className="text-muted-foreground font-body max-w-sm mx-auto">
            Try broadening your search, adjusting the price range, or clearing the selected category.
         </p>
       </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map((product) => (
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
      </div>

      {hasNextPage && filteredProducts.length > 0 && searchQuery === "" && (
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
