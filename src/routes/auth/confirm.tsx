import { createFileRoute } from "@tanstack/react-router";

import { ConfirmPage, verifyOtp } from "~/features/auth";

export const Route = createFileRoute("/auth/confirm")({
  beforeLoad: async ({ location }) => {
    const search = new URLSearchParams(location.search);
    const tokenHash = search.get("token_hash");
    const type = search.get("type");

    if (!tokenHash || type !== "email") {
      throw new Error("Invalid confirmation link.");
    }

    await verifyOtp({ data: { type, tokenHash } });
  },
  component: ConfirmPage,
});
