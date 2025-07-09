import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email("Invalid email"),
  password: z.string({ required_error: "Password is required" }).min(1, "Password is required"),
});

export type LoginSchema = z.infer<typeof LoginSchema>;

export const LoginOAuthSchema = z.object({
  provider: z.enum(["github", "google"]),
});

export type LoginOAuthSchema = z.infer<typeof LoginOAuthSchema>;

export type LoginOAuthProvider = z.infer<typeof LoginOAuthSchema.shape.provider>;
