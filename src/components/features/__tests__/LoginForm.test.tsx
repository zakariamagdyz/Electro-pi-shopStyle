import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import { useAuthStore } from "@/store/authStore";
import { useRouter, useSearchParams } from "next/navigation";

// Mock Next.js routing hooks
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("LoginForm Integration", () => {
  let mockPush: jest.Mock;
  let mockLogin: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(null),
    });

    mockLogin = jest.fn().mockResolvedValue(undefined);
    // Override the login method directly in the store for this test
    useAuthStore.setState({ login: mockLogin });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should interact and trigger successful login flow", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    // Get the inputs
    const emailInput = screen.getByPlaceholderText("abc@example.com");
    const passwordInput = screen.getByPlaceholderText("••••••••");
    const submitBtn = screen.getByRole("button", { name: /sign in/i });

    // Ensure they are strictly present and accessible
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // Type valid credentials
    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "SecurePass123");

    // Click submit
    await user.click(submitBtn);

    // Verify loading state UI or simply wait for mock to be called
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("test@example.com", "SecurePass123");
    });

    // Verify routing was initiated on success
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });
});
