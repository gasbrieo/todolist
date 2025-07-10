import z from "zod";

export const CreateTodoSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required.",
  }),
});

export type CreateTodoSchema = z.infer<typeof CreateTodoSchema>;

export const DeleteTodoSchema = z.object({
  id: z.string(),
});

export type DeleteTodoSchema = z.infer<typeof DeleteTodoSchema>;

export const MarkTodoAsDoneSchema = z.object({
  id: z.string(),
});

export type MarkTodoAsDoneSchema = z.infer<typeof MarkTodoAsDoneSchema>;
