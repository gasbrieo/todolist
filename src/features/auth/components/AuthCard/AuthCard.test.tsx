import { render, screen } from "~/testing/TestUtils";

import { AuthCard } from "./AuthCard";

describe("AuthCard", () => {
  it("renders the title and children content", () => {
    render(
      <AuthCard>
        <p>Test content</p>
      </AuthCard>,
    );

    expect(screen.getByText("Todolist")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});
