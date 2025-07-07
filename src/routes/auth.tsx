import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import type { UnauthenticatedState } from "~/features/auth";

export const Route = createFileRoute("/auth")({
  beforeLoad: ({ context }) => {
    if (context.sessionState.isAuthenticated) {
      throw redirect({ to: "/" });
    }

    return { authState: context.sessionState as UnauthenticatedState };
  },
  component: Outlet,
});
