import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";

const renderWithProviders = (component: ReactNode) => {
  const queryClient = new QueryClient();

  return render(<QueryClientProvider client={queryClient}>{component}</QueryClientProvider>);
};

export { screen, userEvent, render, renderWithProviders, renderHook, waitFor };
