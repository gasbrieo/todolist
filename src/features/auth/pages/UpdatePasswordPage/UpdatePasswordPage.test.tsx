import { renderWithProviders, screen } from "~/testing/TestUtils";

import { UpdatePasswordPage } from "./UpdatePasswordPage";

describe("UpdatePasswordPage", () => {
  it("renders title and description", () => {
    renderWithProviders(<UpdatePasswordPage />);

    expect(screen.getByText("Set a new password")).toBeInTheDocument();
    expect(screen.getByText("Enter your new password below")).toBeInTheDocument();
  });
});
