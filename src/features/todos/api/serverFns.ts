import { createServerFn } from "@tanstack/react-start";

import { getSupabaseServerClient } from "~/lib/supabase/serverClient";

import { CreateTodoSchema, DeleteTodoSchema, MarkTodoAsDoneSchema } from "../schemas/todoFormSchemas";
import type { Todo } from "../types/todos";

export const getTodos = createServerFn().handler(async () => {
  const supabase = getSupabaseServerClient();

  const { data: todos, error } = await supabase.from("todo").select("*").order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (todos ?? []).map(
    (todo) =>
      ({
        id: todo.id,
        createdAt: todo.created_at,
        title: todo.title!,
        status: todo.is_done ? "done" : "pending",
      }) satisfies Todo,
  );
});

export const createTodo = createServerFn()
  .validator(CreateTodoSchema)
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      throw new Error(userError.message);
    }

    const { error } = await supabase.from("todo").insert({
      title: data.title,
      is_done: false,
      user_id: user?.id,
    });

    if (error) {
      throw new Error(error.message);
    }
  });

export const deleteTodo = createServerFn()
  .validator(DeleteTodoSchema)
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient();

    const { error } = await supabase.from("todo").delete().eq("id", data.id);

    if (error) {
      throw new Error(error.message);
    }
  });

export const markTodoAsDone = createServerFn()
  .validator(MarkTodoAsDoneSchema)
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient();

    const { error } = await supabase.from("todo").update({ is_done: true }).eq("id", data.id);

    if (error) {
      throw new Error(error.message);
    }
  });
