"use client";

import { useProducts } from "@/hooks/useProducts";
import React from "react";
import ProductCard from "./ProductCard";

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
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProducts();

  if (!data) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {data.pages.map((group, groupIndex) => (
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
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Loading...
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
