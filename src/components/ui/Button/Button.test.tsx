import { render, screen } from "~/testing/testUtils";

import { Button } from ".";

describe("Button", () => {
  it("renders as a <button> by default", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });

  it("renders as a Slot when asChild=true", () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Link" });

    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
  });
});
