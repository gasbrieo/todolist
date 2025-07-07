import { z } from "zod";

export const LoginOAuthSchema = z.object({
  provider: z.enum(["github", "google"]),
});

export type LoginOAuthSchema = z.infer<typeof LoginOAuthSchema>;

export type LoginOAuthProvider = z.infer<typeof LoginOAuthSchema.shape.provider>;
