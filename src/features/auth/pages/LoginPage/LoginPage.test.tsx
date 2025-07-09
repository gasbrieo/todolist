import { useNavigate } from "@tanstack/react-router";
import type { Mock } from "vitest";

import { renderWithProviders, screen, userEvent } from "~/testing/TestUtils";

import { login } from "../../api/serverFns";

import { LoginPage } from "./LoginPage";

describe("LoginPage", () => {
  let mockNavigate: Mock;

  beforeEach(() => {
    mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
  });

  it("submits login and navigates on success", async () => {
    vi.mocked(login).mockResolvedValue();

    const fakeEmail = "test@example.com";
    const fakeP = "test1234";

    renderWithProviders(<LoginPage />);

    await screen.findByText(/welcome back! please login to continue/i);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole("button", { name: /continue/i });

    await userEvent.type(emailInput, fakeEmail);
    await userEvent.type(passwordInput, fakeP);
    await userEvent.click(submitBtn);

    expect(login).toHaveBeenCalledWith({
      data: {
        email: fakeEmail,
        password: fakeP,
      },
    });

    expect(mockNavigate).toHaveBeenCalledOnce();
    expect(mockNavigate).toHaveBeenCalledWith({ to: "/" });
  });
});
