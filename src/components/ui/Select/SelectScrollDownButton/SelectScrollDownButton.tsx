import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "~/utils/cn";

import type { SelectScrollDownButtonProps } from "./SelectScrollDownButton.types";

export const SelectScrollDownButton = ({ className, ...props }: SelectScrollDownButtonProps) => {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
};
