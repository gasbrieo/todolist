import { Link } from "@tanstack/react-router";
import { GalleryVerticalEndIcon } from "lucide-react";

import { GitHubIcon, GoogleIcon } from "~/components/icons";
import { Button } from "~/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/Card";

import { LegalNotice } from "../../components/LegalNotice";
import { LoginForm } from "../../components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEndIcon className="size-4" />
          </div>
          Todolist
        </div>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Sign in to Acme Co</CardTitle>
              <CardDescription>Welcome back! Please sign in to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex justify-center gap-2">
                  <Button variant="outline" size="icon" aria-label="Login with Google">
                    <GoogleIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Login with Google">
                    <GitHubIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">Or continue with</span>
                </div>
                <LoginForm />
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link className="underline underline-offset-4" to="/auth/signup">
                    Sign up
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
          <LegalNotice />
        </div>
      </div>
    </div>
  );
};
