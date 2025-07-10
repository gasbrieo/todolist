import { queryOptions } from "@tanstack/react-query";

import { getTodos } from "./serverFns";

export const todosQueries = {
  all: ["todos"],
  list: () =>
    queryOptions({
      queryKey: [...todosQueries.all, "list"],
      queryFn: () => getTodos(),
    }),
};
