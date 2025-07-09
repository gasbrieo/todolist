import { Link, rootRouteId, useMatch, useRouter } from "@tanstack/react-router";

import { Button } from "~/components/ui/Button";

export const DefaultCatchBoundary = () => {
  const router = useRouter();

  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold tracking-tight">500!</h1>
        <p className="text-xl text-muted-foreground">We&apos;re sorry, but an unexpected error has occurred.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {isRoot ? (
          <Button asChild>
            <Link to="/">Go to Home</Link>
          </Button>
        ) : (
          <Button onClick={() => window.history.back()}>Go Back</Button>
        )}

        <Button variant="secondary" onClick={() => router.invalidate()}>
          Try Again
        </Button>
      </div>
    </div>
  );
};
