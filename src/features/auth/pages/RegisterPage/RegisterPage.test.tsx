import { renderWithProviders, screen } from "~/testing/TestUtils";

import { RegisterPage } from "./RegisterPage";

describe("RegisterPage", () => {
  it("renders title, description and essential layout", () => {
    renderWithProviders(<RegisterPage />);

    expect(screen.getByText("Create your account")).toBeInTheDocument();
    expect(screen.getByText("Welcome! Please fill in the details to get started")).toBeInTheDocument();
    expect(screen.getByText("Or continue with")).toBeInTheDocument();
    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
    expect(screen.getByText("Login")).toHaveAttribute("href", "/auth/login");
    expect(screen.getByText(/By clicking continue, you agree to our/i)).toBeInTheDocument();
  });
});
