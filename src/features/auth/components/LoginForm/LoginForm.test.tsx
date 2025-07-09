import { useNavigate } from "@tanstack/react-router";

import { fakeLoginData } from "~/testing/data/auth";
import { renderWithProviders, screen, userEvent } from "~/testing/TestUtils";

import { login } from "../../api/serverFns";

import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    mockNavigate.mockClear();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
  });

  it("shows validation errors if fields are empty", async () => {
    renderWithProviders(<LoginForm />);

    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
    expect(login).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("shows validation error if email is invalid", async () => {
    renderWithProviders(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/email/i), "not-an-email");
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText("Invalid email")).toBeInTheDocument();
    expect(login).not.toHaveBeenCalled();
  });

  it("calls login mutation with valid form data", async () => {
    const { email, password } = fakeLoginData();

    vi.mocked(login).mockResolvedValueOnce();

    renderWithProviders(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/email/i), email);
    await userEvent.type(screen.getByLabelText(/password/i), password);
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(login).toHaveBeenCalledWith({
      data: {
        email,
        password,
      },
    });

    expect(mockNavigate).toHaveBeenCalledWith({ to: "/" });
  });

  it("displays server error when login fails", async () => {
    const { email, password } = fakeLoginData();

    vi.mocked(login).mockRejectedValueOnce(new Error("Invalid credentials"));

    renderWithProviders(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/email/i), email);
    await userEvent.type(screen.getByLabelText(/password/i), password);
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
    expect(login).toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("renders link to reset password page", () => {
    renderWithProviders(<LoginForm />);

    const link = screen.getByRole("link", { name: /forgot your password\?/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/auth/reset-password");
  });
});
