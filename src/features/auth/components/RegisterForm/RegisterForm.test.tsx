import { fakeRegisterData } from "~/testing/data/auth";
import { renderWithProviders, screen, userEvent } from "~/testing/TestUtils";

import { register } from "../../api/serverFns";

import { RegisterForm } from "./RegisterForm";

describe("RegisterForm", () => {
  it("shows validation errors if fields are empty", async () => {
    renderWithProviders(<RegisterForm />);

    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText("Username is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
    expect(register).not.toHaveBeenCalled();
  });

  it("shows validation error if email is invalid", async () => {
    renderWithProviders(<RegisterForm />);

    await userEvent.type(screen.getByLabelText(/email/i), "not-an-email");
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText("Email is invalid")).toBeInTheDocument();
    expect(register).not.toHaveBeenCalled();
  });

  it("calls register mutation with valid data", async () => {
    const { username, email, password } = fakeRegisterData();

    vi.mocked(register).mockResolvedValueOnce();

    renderWithProviders(<RegisterForm />);

    await userEvent.type(screen.getByLabelText(/username/i), username);
    await userEvent.type(screen.getByLabelText(/email/i), email);
    await userEvent.type(screen.getByLabelText(/password/i), password);
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(register).toHaveBeenCalledWith({
      data: { username, email, password },
    });

    expect(await screen.findByText(/check your email/i)).toBeInTheDocument();
  });

  it("shows error alert on register failure", async () => {
    const { username, email, password } = fakeRegisterData();

    vi.mocked(register).mockRejectedValueOnce(new Error("Registration failed"));

    renderWithProviders(<RegisterForm />);

    await userEvent.type(screen.getByLabelText(/username/i), username);
    await userEvent.type(screen.getByLabelText(/email/i), email);
    await userEvent.type(screen.getByLabelText(/password/i), password);
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText(/registration failed/i)).toBeInTheDocument();
  });
});
