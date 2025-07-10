import { useSuspenseQuery } from "@tanstack/react-query";

import { Separator } from "~/components/ui/Separator";

import { todosQueries } from "../../api/queries";
import { TodosTable } from "../../components/TodosTable";

export const TodosPage = () => {
  const { data } = useSuspenseQuery(todosQueries.list());

  return (
    <>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Todos</h2>
            <p className="text-muted-foreground text-sm">Manage your todos</p>
          </div>
        </div>
        <Separator />
        <TodosTable data={data} />
      </div>
    </>
  );
};
