import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/Card";

import { AuthCard } from "../../components/AuthCard";
import { ResetPasswordForm } from "../../components/ResetPasswordForm";

export const ResetPasswordPage = () => {
  return (
    <AuthCard>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Reset your password</CardTitle>
          <CardDescription>We&apos;ll email you a link to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordForm />
        </CardContent>
      </Card>
    </AuthCard>
  );
};
