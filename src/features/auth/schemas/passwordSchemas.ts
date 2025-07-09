import { z } from "zod";

export const ResetPasswordSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email("Email is invalid"),
});

export type ResetPasswordSchema = z.infer<typeof ResetPasswordSchema>;

export const UpdatePasswordSchema = z.object({
  password: z.string({ required_error: "Password is required" }).min(1, "Password is required"),
});

export type UpdatePasswordSchema = z.infer<typeof UpdatePasswordSchema>;
