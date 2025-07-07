import { createFileRoute, redirect } from "@tanstack/react-router";

import type { UnauthenticatedState } from "~/features/auth";
import { LoginPage } from "~/features/auth";

export const Route = createFileRoute("/auth/login")({
  beforeLoad: ({ context }) => {
    if (context.sessionState.isAuthenticated) {
      throw redirect({ to: "/" });
    }

    return { authState: context.sessionState as UnauthenticatedState };
  },
  component: LoginPage,
});
