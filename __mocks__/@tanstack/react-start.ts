/* eslint-disable @typescript-eslint/no-explicit-any */

export const useServerFn = <T extends (...args: any[]) => any>(fn: T): T => fn;

export * from "@tanstack/react-start";
