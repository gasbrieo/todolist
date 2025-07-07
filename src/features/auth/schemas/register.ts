import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(1),
  email: z.string().min(1).email(),
  password: z.string().min(1),
});

export type RegisterSchema = z.infer<typeof RegisterSchema>;
