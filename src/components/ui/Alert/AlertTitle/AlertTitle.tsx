import { cn } from "~/utils/cn";

import type { AlertTitleProps } from "./AlertTitle.types";

export const AlertTitle = ({ className, ...props }: AlertTitleProps) => {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
      {...props}
    />
  );
};
