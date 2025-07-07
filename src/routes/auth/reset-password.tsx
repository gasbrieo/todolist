import { createFileRoute, redirect } from "@tanstack/react-router";

import type { UnauthenticatedState } from "~/features/auth";
import { ResetPasswordPage } from "~/features/auth";

export const Route = createFileRoute("/auth/reset-password")({
  beforeLoad: ({ context }) => {
    if (context.sessionState.isAuthenticated) {
      throw redirect({ to: "/" });
    }

    return { authState: context.sessionState as UnauthenticatedState };
  },
  component: ResetPasswordPage,
});
