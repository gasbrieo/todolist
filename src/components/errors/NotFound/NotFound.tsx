import { Link } from "@tanstack/react-router";

import { Button } from "~/components/ui/Button";

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold tracking-tight">404!</h1>
        <p className="text-xl text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={() => window.history.back()}>Go Back</Button>
        <Button asChild variant="secondary">
          <Link to="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
};
