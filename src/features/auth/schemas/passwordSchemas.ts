import { z } from "zod";

export const ResetPasswordSchema = z.object({
  email: z.string().min(1).email(),
});

export type ResetPasswordSchema = z.infer<typeof ResetPasswordSchema>;

export const UpdatePasswordSchema = z.object({
  password: z.string().min(1),
});

export type UpdatePasswordSchema = z.infer<typeof UpdatePasswordSchema>;
