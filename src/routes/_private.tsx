import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { PrivateLayout } from "~/components/layout/PrivateLayout";
import type { AuthenticatedState } from "~/features/auth";

const RouteComponent = () => {
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export const Route = createFileRoute("/_private")({
  beforeLoad: ({ context }) => {
    if (!context.sessionState.isAuthenticated) {
      throw redirect({
        to: "/auth/login",
      });
    }

    return { sessionState: context.sessionState as AuthenticatedState };
  },
  component: RouteComponent,
});
