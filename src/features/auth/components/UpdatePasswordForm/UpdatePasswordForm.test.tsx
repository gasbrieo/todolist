import { useNavigate } from "@tanstack/react-router";

import { fakeUpdatePasswordData } from "~/testing/data/auth";
import { renderWithProviders, screen, userEvent } from "~/testing/TestUtils";

import { updatePassword } from "../../api/serverFns";

import { UpdatePasswordForm } from "./UpdatePasswordForm";

describe("UpdatePasswordForm", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    mockNavigate.mockClear();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
  });

  it("shows validation error if password is empty", async () => {
    renderWithProviders(<UpdatePasswordForm />);

    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText("Password is required")).toBeInTheDocument();
    expect(updatePassword).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("calls updatePassword with valid data and navigates on success", async () => {
    const { password } = fakeUpdatePasswordData();

    vi.mocked(updatePassword).mockResolvedValueOnce(undefined);

    renderWithProviders(<UpdatePasswordForm />);

    await userEvent.type(screen.getByLabelText(/password/i), password);
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(updatePassword).toHaveBeenCalledWith({
      data: { password },
    });

    expect(mockNavigate).toHaveBeenCalledWith({ to: "/auth/logout" });
  });

  it("shows error alert if update fails", async () => {
    const { password } = fakeUpdatePasswordData();

    vi.mocked(updatePassword).mockRejectedValueOnce(new Error("Update failed"));

    renderWithProviders(<UpdatePasswordForm />);

    await userEvent.type(screen.getByLabelText(/password/i), password);
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText(/update failed/i)).toBeInTheDocument();
  });
});
