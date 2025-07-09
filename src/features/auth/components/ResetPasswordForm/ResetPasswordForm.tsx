import { useMutation } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";

import { Alert, AlertDescription } from "~/components/ui/Alert";
import { useAppForm } from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";

import { resetPassword } from "../../api/serverFns";
import { ResetPasswordSchema } from "../../schemas/passwordSchemas";

export const ResetPasswordForm = () => {
  const mutation = useMutation({
    mutationFn: useServerFn(resetPassword),
  });

  const form = useAppForm({
    validators: { onChange: ResetPasswordSchema },
    defaultValues: {
      email: "",
    },
    onSubmit: ({ value }) => {
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

        {mutation.isError && (
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertDescription>{mutation.error.message}</AlertDescription>
          </Alert>
        )}

        {mutation.isSuccess && (
          <Alert variant="default">
            <CheckCircle2Icon />
            <AlertDescription>Check your email for reset instructions.</AlertDescription>
          </Alert>
        )}

        <form.AppForm>
          <form.SubmitButton>Continue</form.SubmitButton>
        </form.AppForm>

        <div className="text-sm">
          Remembered your password?{" "}
          <Link className="hover:underline underline-offset-4" to="/auth/login">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};
