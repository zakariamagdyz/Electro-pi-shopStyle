export type FilterState = {
  searchQuery: string;
  selectedCategory: string | "All";
  priceRange: [number, number];
  maxAvailablePrice: number;

  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setMaxAvailablePrice: (max: number) => void;
  resetFilters: () => void;
};
