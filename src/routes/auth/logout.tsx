import { createFileRoute, redirect } from "@tanstack/react-router";

import { logout } from "~/features/auth";

export const Route = createFileRoute("/auth/logout")({
  preload: false,
  beforeLoad: ({ context }) => {
    if (!context.sessionState.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  loader: async ({ context }) => {
    await logout();
    context.queryClient.clear();
    throw redirect({ to: "/auth/login" });
  },
});
