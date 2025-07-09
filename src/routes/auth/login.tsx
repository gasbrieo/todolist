import { createFileRoute, redirect } from "@tanstack/react-router";

import { LoginPage } from "~/features/auth";

export const Route = createFileRoute("/auth/login")({
  beforeLoad: ({ context }) => {
    if (context.sessionState.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  component: LoginPage,
});
