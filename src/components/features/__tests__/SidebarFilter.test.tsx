import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SidebarFilter from "../SidebarFilter";
import { useFilterStore } from "@/hooks/useFilterStore";
import { useProducts } from "@/hooks/useProducts";

// Mock the product hook that fetches data
jest.mock("@/hooks/useProducts", () => ({
  useProducts: jest.fn(),
}));

describe("SidebarFilter - Search Input integration", () => {
  beforeEach(() => {
    // Default mock implementation
    (useProducts as jest.Mock).mockReturnValue({ data: null });
    // fake timers to bypass debounce
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it("should update search query in filter store when expected", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<SidebarFilter />);

    // Get the search input
    const searchInput = screen.getByPlaceholderText(/search product/i);
    expect(searchInput).toBeInTheDocument();

    // Type the query
    await user.type(searchInput, "headphones");

    // Fast-forward the debounce timer
    act(() => {
      jest.advanceTimersByTime(400);
    });

    // We expect the global store to hold the typed value
    expect(useFilterStore.getState().searchQuery).toBe("headphones");
  });
});
