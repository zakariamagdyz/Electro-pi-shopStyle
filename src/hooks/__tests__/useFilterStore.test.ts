import { useFilterStore } from "@/hooks/useFilterStore";

describe("useFilterStore", () => {
  it("should have correct default state", () => {
    const state = useFilterStore.getState();
    expect(state.searchQuery).toBe("");
    expect(state.selectedCategory).toBe("All");
    expect(state.priceRange).toEqual([0, 1000]);
    expect(state.maxAvailablePrice).toBe(1000);
  });

  it("should correctly update searchQuery", () => {
    useFilterStore.getState().setSearchQuery("laptop");
    expect(useFilterStore.getState().searchQuery).toBe("laptop");
  });

  it("should correctly update selectedCategory", () => {
    useFilterStore.getState().setSelectedCategory("Electronics");
    expect(useFilterStore.getState().selectedCategory).toBe("Electronics");
  });

  it("should correctly update priceRange", () => {
    useFilterStore.getState().setPriceRange([100, 500]);
    expect(useFilterStore.getState().priceRange).toEqual([100, 500]);
  });

  it("should correctly reset filters and use current max price as upper range", () => {
    const store = useFilterStore.getState();
    
    // Setup some non-default states
    store.setMaxAvailablePrice(2500);
    store.setSearchQuery("phone");
    store.setSelectedCategory("Mobile Phones");
    store.setPriceRange([500, 1500]);

    // Perform reset
    useFilterStore.getState().resetFilters();

    const newState = useFilterStore.getState();
    expect(newState.searchQuery).toBe("");
    expect(newState.selectedCategory).toBe("All");
    expect(newState.priceRange).toEqual([0, 2500]);
  });
});
