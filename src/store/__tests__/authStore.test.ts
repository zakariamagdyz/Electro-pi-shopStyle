import { useAuthStore } from "@/store/authStore";
import { User } from "@/types";

describe("useAuthStore", () => {
  it("should have correct default state", () => {
    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
    expect(state.isAuthenticated).toBe(false);
    expect(state.isLoading).toBe(false);
  });

  it("should set user correctly and update authentication state", () => {
    const mockUser: User = {
      id: "1",
      name: "Test User",
      email: "test@example.com",
      createdAt: new Date().toISOString(),
    };

    useAuthStore.getState().setUser(mockUser);

    const state = useAuthStore.getState();
    expect(state.user).toEqual(mockUser);
    expect(state.isAuthenticated).toBe(true);
    expect(state.isLoading).toBe(false);
  });

  it("should correctly clear state on logout", () => {
    const mockUser: User = {
      id: "1",
      name: "Test User",
      email: "test@example.com",
      createdAt: new Date().toISOString(),
    };

    useAuthStore.getState().setUser(mockUser);
    expect(useAuthStore.getState().isAuthenticated).toBe(true);

    useAuthStore.getState().logout();

    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
    expect(state.isAuthenticated).toBe(false);
    expect(state.isLoading).toBe(false);
  });
});
