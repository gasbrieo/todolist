import { createFileRoute, redirect } from "@tanstack/react-router";

import { ResetPasswordPage } from "~/features/auth";

export const Route = createFileRoute("/auth/reset-password")({
  beforeLoad: ({ context }) => {
    if (context.sessionState.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  component: ResetPasswordPage,
});
