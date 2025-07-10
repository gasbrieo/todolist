import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import type { ColumnDef } from "@tanstack/react-table";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "~/components/ui/Button";
import { Checkbox } from "~/components/ui/Checkbox";
import { DataTable, DataTableColumnHeader } from "~/components/ui/DataTable";

import { todosQueries } from "../../api/queries";
import { deleteTodo, markTodoAsDone } from "../../api/serverFns";
import { TodoStatus, type Todo } from "../../types/todos";
import { TodoForm } from "../TodoForm";

import { TodosTableActions } from "./TodosTableActions";

interface TodosTableProps {
  data: Todo[];
}

export const TodosTable = ({ data }: TodosTableProps) => {
  const [isAddTodoOpen, setIsAddTodoOpen] = useState(false);

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: useServerFn(deleteTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todosQueries.all });
    },
  });

  const markAsDoneMutation = useMutation({
    mutationFn: useServerFn(markTodoAsDone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todosQueries.all });
    },
  });

  const columns: ColumnDef<Todo>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("title")}</div>,
      meta: {
        filter: {
          type: "text",
          title: "Title",
        },
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
      cell: ({ row }) => {
        const status = TodoStatus.find((status) => status.value === row.getValue("status"));

        if (!status) {
          return null;
        }

        return (
          <div className="flex w-[100px] items-center">
            {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
            <span>{status.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      meta: {
        filter: {
          type: "select",
          title: "Status",
          options: TodoStatus,
        },
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Created At" />,
      cell: ({ row }) => {
        const value = row.getValue("createdAt") as string;
        const date = value ? new Date(value) : null;

        return (
          <div className="w-[140px]">
            {date
              ? date.toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })
              : "-"}
          </div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <TodosTableActions
          row={row}
          onDelete={(todo) => deleteMutation.mutate({ data: todo })}
          onMarkAsDone={(todo) => markAsDoneMutation.mutate({ data: todo })}
        />
      ),
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        toolbarActions={
          <Button
            size="sm"
            onClick={() => {
              setIsAddTodoOpen(true);
            }}
          >
            <PlusCircleIcon />
            Add Todo
          </Button>
        }
      />
      <TodoForm open={isAddTodoOpen} onOpenChange={setIsAddTodoOpen} />
    </>
  );
};
