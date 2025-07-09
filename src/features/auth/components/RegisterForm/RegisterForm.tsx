import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";

import { Alert, AlertDescription } from "~/components/ui/Alert";
import { useAppForm } from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";

import { register } from "../../api/serverFns";
import { RegisterSchema } from "../../schemas/registerSchemas";

export const RegisterForm = () => {
  const mutation = useMutation({
    mutationFn: useServerFn(register),
  });

  const form = useAppForm({
    validators: { onChange: RegisterSchema },
    defaultValues: {
      username: "",
      email: "",
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
        <form.AppField name="username">
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Username</field.FormLabel>
              <field.FormControl>
                <Input
                  type="text"
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

        {mutation.isSuccess && (
          <Alert variant="default">
            <CheckCircle2Icon />
            <AlertDescription>Check your email to confirm your account.</AlertDescription>
          </Alert>
        )}

        <form.AppForm>
          <form.SubmitButton>Continue</form.SubmitButton>
        </form.AppForm>
      </div>
    </form>
  );
};
