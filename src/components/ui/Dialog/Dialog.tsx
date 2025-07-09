import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { DialogProps } from "./Dialog.types";

export const Dialog = ({ ...props }: DialogProps) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
};
