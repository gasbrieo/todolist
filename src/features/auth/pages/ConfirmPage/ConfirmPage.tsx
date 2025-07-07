import { Link } from "@tanstack/react-router";

import { Button } from "~/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/Card";

import { AuthCard } from "../../components/AuthCard";

export const ConfirmPage = () => {
  return (
    <AuthCard>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Account confirmed</CardTitle>
          <CardDescription>Your account has been successfully confirmed. You can now loin</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link to="/auth/login">Go to Login</Link>
          </Button>
        </CardContent>
      </Card>
    </AuthCard>
  );
};
