import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import type { AuthenticatedState } from "~/features/auth";

export const Route = createFileRoute("/_private")({
  beforeLoad: ({ context }) => {
    if (!context.sessionState.isAuthenticated) {
      throw redirect({
        to: "/auth/login",
      });
    }

    return { authState: context.sessionState as AuthenticatedState };
  },
  component: Outlet,
});
