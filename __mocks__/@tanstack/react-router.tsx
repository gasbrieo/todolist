/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const Link = ({ to, children, ...rest }: any) => (
  <a href={to} {...rest}>
    {children}
  </a>
);

export const useNavigate = vi.fn().mockReturnValue(vi.fn());

export * from "@tanstack/react-router";
