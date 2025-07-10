import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription } from "~/components/ui/Alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/Dialog";
import { useAppForm } from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";

import { todosQueries } from "../../api/queries";
import { createTodo } from "../../api/serverFns";
import { CreateTodoSchema } from "../../schemas/todoFormSchemas";

interface TodoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TodoForm = ({ open, onOpenChange }: TodoFormProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: useServerFn(createTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todosQueries.all });
      form.reset();
      onOpenChange(false);
    },
  });

  const form = useAppForm({
    validators: { onChange: CreateTodoSchema },
    defaultValues: {
      title: "",
    },
    onSubmit: ({ value }) => {
      mutation.mutate({ data: value });
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="grid gap-6">
            <form.AppField name="title">
              {(field) => (
                <field.FormItem>
                  <field.FormLabel>Title</field.FormLabel>
                  <field.FormControl>
                    <Input
                      type="title"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </field.FormControl>
                  <field.FormMessage />
                </field.FormItem>
              )}
            </form.AppField>

            {mutation.isError && (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertDescription>{mutation.error.message}</AlertDescription>
              </Alert>
            )}

            <form.AppForm>
              <form.SubmitButton>Create Todo</form.SubmitButton>
            </form.AppForm>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
