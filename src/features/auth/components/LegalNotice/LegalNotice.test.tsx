import { render, screen } from "~/testing/TestUtils";

import { LegalNotice } from "./LegalNotice";

describe("LegalNotice", () => {
  it("renders the terms and privacy policy links", () => {
    render(<LegalNotice />);

    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/");
  });

  it("renders the full legal text", () => {
    render(<LegalNotice />);
    expect(screen.getByText(/By clicking continue, you agree to our/i)).toBeInTheDocument();
  });
});
