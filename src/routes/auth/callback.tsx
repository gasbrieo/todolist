import { createFileRoute, redirect } from "@tanstack/react-router";

import { exchangeCodeForSession } from "~/features/auth";

export const Route = createFileRoute("/auth/callback")({
  beforeLoad: async ({ location }) => {
    const search = new URLSearchParams(location.search);
    const code = search.get("code");

    if (!code) {
      throw new Error("Invalid confirmation link.");
    }

    await exchangeCodeForSession({ data: { code } });

    throw redirect({ to: "/" });
  },
});
