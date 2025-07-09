import { cn } from "~/utils/cn";

import type { SidebarMenuSubProps } from "./SidebarMenuSub.types";

export const SidebarMenuSub = ({ className, ...props }: SidebarMenuSubProps) => {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
};
