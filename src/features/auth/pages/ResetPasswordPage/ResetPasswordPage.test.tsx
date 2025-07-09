import { renderWithProviders, screen } from "~/testing/TestUtils";

import { ResetPasswordPage } from "./ResetPasswordPage";

describe("ResetPasswordPage", () => {
  it("renders title and description", () => {
    renderWithProviders(<ResetPasswordPage />);

    expect(screen.getByText("Reset your password")).toBeInTheDocument();
    expect(screen.getByText("We'll email you a link to reset your password")).toBeInTheDocument();
  });
});
