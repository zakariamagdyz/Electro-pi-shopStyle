"use client";

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterStore } from "@/hooks/useFilterStore";
import { useProducts } from "@/hooks/useProducts";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function SidebarFilter() {
  const { data } = useProducts();
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    maxAvailablePrice,
    setMaxAvailablePrice,
    searchQuery,
    setSearchQuery,
    resetFilters,
  } = useFilterStore();

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const debouncedSearch = useDebounce(localSearch, 400);

  // Sync debounced search to global store
  useEffect(() => {
    setSearchQuery(debouncedSearch);
  }, [debouncedSearch, setSearchQuery]);

  // Extract derived categories and max price
  const { categories, calculatedMaxPrice } = useMemo(() => {
    if (!data) return { categories: ["All"], calculatedMaxPrice: 1000 };

    const catSet = new Set<string>();
    let maxP = 0;

    data.pages.forEach((page) => {
      page.data.forEach((product) => {
        catSet.add(product.category.name);
        if (product.price > maxP) maxP = product.price;
      });
    });

    return {
      categories: ["All", ...Array.from(catSet).sort()],
      // Add a small buffer to max price
      calculatedMaxPrice: Math.ceil(maxP > 0 ? maxP : 1000),
    };
  }, [data]);

  // Initialize max price dynamically as products load
  useEffect(() => {
    if (
      calculatedMaxPrice > 0 &&
      maxAvailablePrice === 1000 &&
      calculatedMaxPrice !== 1000
    ) {
      setMaxAvailablePrice(calculatedMaxPrice);
      // Only set initial upper range to max if user hasn't changed it
      if (priceRange[1] === 1000) {
        setPriceRange([priceRange[0], calculatedMaxPrice]);
      }
    }
  }, [
    calculatedMaxPrice,
    maxAvailablePrice,
    setMaxAvailablePrice,
    priceRange,
    setPriceRange,
  ]);

  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-12 mb-10 lg:mb-0">
      <div className="flex items-center justify-between">
        <h2 className="font-headline font-bold text-lg hidden lg:block">
          Filters
        </h2>
        {(selectedCategory !== "All" ||
          priceRange[0] > 0 ||
          priceRange[1] < maxAvailablePrice ||
          searchQuery) && (
          <button
            onClick={() => {
              setLocalSearch("");
              resetFilters();
            }}
            className="text-xs font-label text-muted-foreground hover:text-primary transition-colors hover:underline"
          >
            Reset All
          </button>
        )}
      </div>

      <section>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Product..."
            className="pl-9 py-4 bg-accent/20 border-border font-body text-sm rounded transition-all focus-visible:ring-primary"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </div>

        <h3 className="font-headline text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Categories
        </h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm tracking-wide transition-colors ${
                  selectedCategory === cat
                    ? "font-semibold text-primary"
                    : "font-medium text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline text-xs uppercase tracking-widest text-muted-foreground">
            Price Range
          </h3>
          <span className="text-xs font-label font-medium text-primary">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>

        <div className="px-1">
          <Slider
            value={priceRange}
            max={maxAvailablePrice}
            min={0}
            step={1}
            onValueChange={(val) => {
              const arr = Array.isArray(val) ? val : [val];
              const start = arr[0] ?? 0;
              const end = arr[1] ?? start; // default to same
              setPriceRange([start, end]);
            }}
            className="**:[[role=slider]]:h-4 **:[[role=slider]]:w-4"
          />
        </div>
      </section>
    </aside>
  );
}
