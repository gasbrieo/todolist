import { type CSSProperties, useMemo } from "react";

import { cn } from "~/utils/cn";

import { Skeleton } from "../../Skeleton";

import type { SidebarMenuSkeletonProps } from "./SidebarMenuSkeleton.types";

export const SidebarMenuSkeleton = ({ className, showIcon = false, ...props }: SidebarMenuSkeletonProps) => {
  const width = useMemo(() => {
    // eslint-disable-next-line sonarjs/pseudo-random
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as CSSProperties
        }
      />
    </div>
  );
};
