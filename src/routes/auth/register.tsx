import { createFileRoute, redirect } from "@tanstack/react-router";

import { RegisterPage } from "~/features/auth";

export const Route = createFileRoute("/auth/register")({
  beforeLoad: ({ context }) => {
    if (context.sessionState.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  component: RegisterPage,
});
