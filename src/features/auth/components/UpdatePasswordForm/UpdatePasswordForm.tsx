import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription } from "~/components/ui/Alert";
import { useAppForm } from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";

import { updatePassword } from "../../api/serverFns";
import { UpdatePasswordSchema } from "../../schemas/passwordSchemas";

export const UpdatePasswordForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: useServerFn(updatePassword),
    onSuccess: () => {
      queryClient.resetQueries();
      navigate({ to: "/" });
    },
  });

  const form = useAppForm({
    validators: { onChange: UpdatePasswordSchema },
    defaultValues: {
      password: "",
    },
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync({ data: value });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="grid gap-6">
        <form.AppField name="password">
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Password</field.FormLabel>
              <field.FormControl>
                <Input
                  type="password"
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
          <form.SubmitButton>Continue</form.SubmitButton>
        </form.AppForm>
      </div>
    </form>
  );
};
