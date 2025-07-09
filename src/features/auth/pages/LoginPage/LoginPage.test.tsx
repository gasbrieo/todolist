import { renderWithProviders, screen } from "~/testing/TestUtils";

import { LoginPage } from "./LoginPage";

describe("LoginPage", () => {
  it("renders title, description and essential layout", () => {
    renderWithProviders(<LoginPage />);

    expect(screen.getByText("Login to Todolist")).toBeInTheDocument();
    expect(screen.getByText("Welcome back! Please login to continue")).toBeInTheDocument();
    expect(screen.getByText("Or continue with")).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    expect(screen.getByText("Register")).toHaveAttribute("href", "/auth/register");
    expect(screen.getByText(/By clicking continue, you agree to our/i)).toBeInTheDocument();
  });
});
