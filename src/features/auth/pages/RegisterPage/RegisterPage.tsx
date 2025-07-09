import { Link } from "@tanstack/react-router";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/Card";

import { AuthCard } from "../../components/AuthCard";
import { LegalNotice } from "../../components/LegalNotice";
import { RegisterForm } from "../../components/RegisterForm";
import { SocialButtons } from "../../components/SocialButtons";

export const RegisterPage = () => {
  return (
    <AuthCard>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>Welcome! Please fill in the details to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <SocialButtons />
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-card text-muted-foreground relative z-10 px-2">Or continue with</span>
            </div>
            <RegisterForm />
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link className="hover:underline underline-offset-4" to="/auth/login">
                Login
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <LegalNotice />
    </AuthCard>
  );
};
