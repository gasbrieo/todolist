import { fakeResetPasswordData } from "~/testing/data/auth";
import { renderWithProviders, screen, userEvent } from "~/testing/TestUtils";

import { resetPassword } from "../../api/serverFns";

import { ResetPasswordForm } from "./ResetPasswordForm";

describe("ResetPasswordForm", () => {
  it("shows validation error if email is empty", async () => {
    renderWithProviders(<ResetPasswordForm />);

    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(resetPassword).not.toHaveBeenCalled();
  });

  it("shows validation error if email is invalid", async () => {
    renderWithProviders(<ResetPasswordForm />);

    await userEvent.type(screen.getByLabelText(/email/i), "invalid-email");
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText("Email is invalid")).toBeInTheDocument();
    expect(resetPassword).not.toHaveBeenCalled();
  });

  it("calls resetPassword with valid email", async () => {
    const { email } = fakeResetPasswordData();

    vi.mocked(resetPassword).mockResolvedValueOnce();

    renderWithProviders(<ResetPasswordForm />);

    await userEvent.type(screen.getByLabelText(/email/i), email);
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(resetPassword).toHaveBeenCalledWith({
      data: { email },
    });

    expect(await screen.findByText(/check your email for reset instructions/i)).toBeInTheDocument();
  });

  it("shows error alert if reset fails", async () => {
    const { email } = fakeResetPasswordData();

    vi.mocked(resetPassword).mockRejectedValueOnce(new Error("Email not found"));

    renderWithProviders(<ResetPasswordForm />);

    await userEvent.type(screen.getByLabelText(/email/i), email);
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText(/email not found/i)).toBeInTheDocument();
  });

  it("renders link to login page", () => {
    renderWithProviders(<ResetPasswordForm />);

    const link = screen.getByRole("link", { name: /login/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/auth/login");
  });
});
