import { render, screen, userEvent } from "~/testing/TestUtils";

import { loginWithOAuth } from "../../api/serverFns";

import { SocialButtons } from "./SocialButtons";

describe("SocialButtons", () => {
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { assign: vi.fn() },
    });
  });

  it("calls loginWithOAuth with 'google' and redirects", async () => {
    vi.mocked(loginWithOAuth).mockResolvedValueOnce({ url: "https://google.com/oauth" });

    render(<SocialButtons />);

    await userEvent.click(screen.getByRole("button", { name: /login with google/i }));

    expect(loginWithOAuth).toHaveBeenCalledWith({ data: { provider: "google" } });
    expect(window.location.href).toBe("https://google.com/oauth");
  });

  it("calls loginWithOAuth with 'github' and redirects", async () => {
    vi.mocked(loginWithOAuth).mockResolvedValueOnce({ url: "https://github.com/oauth" });

    render(<SocialButtons />);

    await userEvent.click(screen.getByRole("button", { name: /login with github/i }));

    expect(loginWithOAuth).toHaveBeenCalledWith({ data: { provider: "github" } });
    expect(window.location.href).toBe("https://github.com/oauth");
  });
});
