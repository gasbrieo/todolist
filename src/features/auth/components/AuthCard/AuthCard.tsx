import { ListTodoIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

export const AuthCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <ListTodoIcon className="size-4" />
          </div>
          Todolist
        </div>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </div>
  );
};
