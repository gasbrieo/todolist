import { cn } from "~/utils/cn";

import type { CardProps } from "./Card.types";

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      data-slot="card"
      className={cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)}
      {...props}
    />
  );
};
