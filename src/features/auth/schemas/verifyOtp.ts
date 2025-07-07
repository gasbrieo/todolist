import { z } from "zod";

export const VerifyOtpSchema = z.object({
  type: z.enum(["email", "recovery"]),
  tokenHash: z.string().min(1),
});

export type VerifyOtpSchema = z.infer<typeof VerifyOtpSchema>;
