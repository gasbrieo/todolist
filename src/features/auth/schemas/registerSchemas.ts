import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z.string().min(1, "Password is required"),
});

export type RegisterSchema = z.infer<typeof RegisterSchema>;
