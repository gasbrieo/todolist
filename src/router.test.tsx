import { RouterProvider } from "@tanstack/react-router";

import { render, screen } from "~/testing/testUtils";

import { createRouter } from "./router";

describe("Router", () => {
  it("renders the router without crashing", async () => {
    const router = createRouter();

    render(<RouterProvider router={router} />);

    await screen.findByText("Hello!");
  });
});
