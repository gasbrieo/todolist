import type { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "~/components/ui/Sidebar";
import { Route } from "~/routes/_private";

import { PrivateSidebar } from "./PrivateSidebar";
import { DashboardTopbar } from "./PrivateTopbar";

interface PrivateLayoutProps {
  children: ReactNode;
}

export const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const { sessionState } = Route.useRouteContext();

  return (
    <SidebarProvider>
      <PrivateSidebar user={sessionState.user} />
      <SidebarInset>
        <DashboardTopbar />
        <main className="flex flex-1 p-4 md:px-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};
