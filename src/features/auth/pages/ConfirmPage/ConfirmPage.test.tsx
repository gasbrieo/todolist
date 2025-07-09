import { render, screen } from "~/testing/TestUtils";

import { ConfirmPage } from "../ConfirmPage";

describe("ConfirmPage", () => {
  it("renders confirmation message and login link", () => {
    render(<ConfirmPage />);

    expect(screen.getByText(/account confirmed/i)).toBeInTheDocument();
    expect(screen.getByText(/your account has been successfully confirmed/i)).toBeInTheDocument();

    const loginLink = screen.getByRole("link", { name: /go to login/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/auth/login");
  });
});
