import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription } from "~/components/ui/Alert";
import { useAppForm } from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";

import { login } from "../../api/serverFns";
import { LoginSchema } from "../../schemas/loginSchemas";

export const LoginForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: useServerFn(login),
    onSuccess: () => {
      queryClient.resetQueries();
      navigate({ to: "/" });
    },
  });

  const form = useAppForm({
    validators: { onChange: LoginSchema },
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      mutation.mutate({ data: value });
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
        <form.AppField name="email">
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Email</field.FormLabel>
              <field.FormControl>
                <Input
                  type="email"
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

        <form.AppField name="password">
          {(field) => (
            <field.FormItem>
              <div className="flex items-center">
                <field.FormLabel>Password</field.FormLabel>
                <Link
                  to="/auth/reset-password"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
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
