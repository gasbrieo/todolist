import type { Row } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";

import { Button } from "~/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";

import type { Todo } from "../../types/todos";

interface TodosTableActionsProps {
  row: Row<Todo>;
  onDelete: (todo: Todo) => void;
  onMarkAsDone: (todo: Todo) => void;
}

export const TodosTableActions = ({ row, onDelete, onMarkAsDone }: TodosTableActionsProps) => {
  const todo = row.original;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <MoreHorizontalIcon />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(todo.id)}>Copy ID</DropdownMenuItem>
        {todo.status == "pending" && (
          <DropdownMenuItem onClick={() => onMarkAsDone(todo)}>Mark as done</DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => onDelete(todo)} className="text-destructive">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
