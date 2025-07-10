import { createFileRoute } from "@tanstack/react-router";

import { TodosPage, todosQueries } from "~/features/todos";

export const Route = createFileRoute("/_private/todos")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(todosQueries.list());
  },
  component: TodosPage,
});
