import { FilterState } from "@/types";
import { create } from "zustand";

export const useFilterStore = create<FilterState>((set) => ({
  searchQuery: "",
  selectedCategory: "All",
  priceRange: [0, 1000],
  maxAvailablePrice: 1000,

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setPriceRange: (range) => set({ priceRange: range }),
  setMaxAvailablePrice: (max) => set({ maxAvailablePrice: max }),
  resetFilters: () =>
    set((state) => ({
      searchQuery: "",
      selectedCategory: "All",
      priceRange: [0, state.maxAvailablePrice],
    })),
}));
