import { createServerFn } from "@tanstack/react-start";

import { getSupabaseServerClient } from "~/lib/supabase";

import { LoginSchema } from "../schemas/login";
import { RegisterSchema } from "../schemas/register";

export const register = createServerFn()
  .validator(RegisterSchema)
  .handler(async ({ data }) => {
    const { data: userData, error } = await getSupabaseServerClient().auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (userData.user) {
      return userData.user.id;
    }

    throw new Error("Something went wrong");
  });

export const login = createServerFn()
  .validator(LoginSchema)
  .handler(async ({ data }) => {
    const { error } = await getSupabaseServerClient().auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      throw new Error(error.message);
    }
  });

export const logout = createServerFn().handler(async () => {
  await getSupabaseServerClient().auth.signOut();
});

export const getSessionState = createServerFn().handler(async () => {
  const { data } = await getSupabaseServerClient().auth.getUser();

  if (!data.user) {
    return { isAuthenticated: false };
  }

  return {
    isAuthenticated: true,
    user: {
      email: data.user.email,
      meta: { username: data.user.user_metadata.username },
    },
  };
});
