import { describe, it, expect } from "vitest";

import { render, screen } from "~/testing/TestUtils";

import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("renders welcome heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", {
      name: /hi, welcome back/i,
      level: 2,
    });

    expect(heading).toBeInTheDocument();
  });
});
