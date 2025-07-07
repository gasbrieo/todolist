import { z } from "zod";

export const UpdatePasswordSchema = z.object({
  password: z.string().min(1),
});

export type UpdatePasswordSchema = z.infer<typeof UpdatePasswordSchema>;
