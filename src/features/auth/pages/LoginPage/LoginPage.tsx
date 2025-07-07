import { Link } from "@tanstack/react-router";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/Card";

import { AuthCard } from "../../components/AuthCard/AuthCard";
import { LegalNotice } from "../../components/LegalNotice";
import { LoginForm } from "../../components/LoginForm";
import { SocialButtons } from "../../components/SocialButtons";

export const LoginPage = () => {
  return (
    <AuthCard>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Login to Acme Co</CardTitle>
          <CardDescription>Welcome back! Please login to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <SocialButtons />
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-card text-muted-foreground relative z-10 px-2">Or continue with</span>
            </div>
            <LoginForm />
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link className="hover:underline underline-offset-4" to="/auth/register">
                Register
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <LegalNotice />
    </AuthCard>
  );
};
