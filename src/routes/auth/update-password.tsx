import { createFileRoute } from "@tanstack/react-router";

import { UpdatePasswordPage, verifyOtp } from "~/features/auth";

export const Route = createFileRoute("/auth/update-password")({
  beforeLoad: async ({ location }) => {
    const search = new URLSearchParams(location.search);
    const tokenHash = search.get("token_hash");
    const type = search.get("type");

    if (!tokenHash || type !== "recovery") {
      throw new Error("Invalid password reset link.");
    }

    await verifyOtp({ data: { type, tokenHash } });
  },
  component: UpdatePasswordPage,
});
