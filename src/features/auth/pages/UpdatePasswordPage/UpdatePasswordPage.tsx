import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/Card";

import { AuthCard } from "../../components/AuthCard";
import { UpdatePasswordForm } from "../../components/UpdatePasswordForm";

export const UpdatePasswordPage = () => {
  return (
    <AuthCard>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Set a new password</CardTitle>
          <CardDescription>Enter your new password below</CardDescription>
        </CardHeader>
        <CardContent>
          <UpdatePasswordForm />
        </CardContent>
      </Card>
    </AuthCard>
  );
};
