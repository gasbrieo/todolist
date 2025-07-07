import { z } from "zod";

export const ExchangeCodeForSessionSchema = z.object({
  code: z.string().min(1),
});

export type ExchangeCodeForSessionSchema = z.infer<typeof ExchangeCodeForSessionSchema>;
