import { createServerFn } from "@tanstack/react-start";

import { getSupabaseServerClient } from "~/lib/supabase/serverClient";

import { LoginOAuthSchema, LoginSchema } from "../schemas/loginSchemas";
import { ExchangeCodeForSessionSchema, VerifyOtpSchema } from "../schemas/otpSchemas";
import { ResetPasswordSchema, UpdatePasswordSchema } from "../schemas/passwordSchemas";
import { RegisterSchema } from "../schemas/registerSchemas";

export const register = createServerFn()
  .validator(RegisterSchema)
  .handler(async ({ data }) => {
    const { error } = await getSupabaseServerClient().auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      throw new Error(error.message);
    }
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

export const resetPassword = createServerFn()
  .validator(ResetPasswordSchema)
  .handler(async ({ data }) => {
    const { error } = await getSupabaseServerClient().auth.resetPasswordForEmail(data.email);

    if (error) {
      throw new Error(error.message);
    }
  });

export const updatePassword = createServerFn()
  .validator(UpdatePasswordSchema)
  .handler(async ({ data }) => {
    const { error } = await getSupabaseServerClient().auth.updateUser({
      password: data.password,
    });

    if (error) {
      throw new Error(error.message);
    }
  });

export const verifyOtp = createServerFn()
  .validator(VerifyOtpSchema)
  .handler(async ({ data }) => {
    const { error } = await getSupabaseServerClient().auth.verifyOtp({
      type: data.type,
      token_hash: data.tokenHash,
    });

    if (error) {
      throw new Error(error.message);
    }
  });

export const loginWithOAuth = createServerFn()
  .validator(LoginOAuthSchema)
  .handler(async ({ data }) => {
    const { data: loginOAuthData, error } = await getSupabaseServerClient().auth.signInWithOAuth({
      provider: data.provider,
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return { url: loginOAuthData.url };
  });

export const exchangeCodeForSession = createServerFn()
  .validator(ExchangeCodeForSessionSchema)
  .handler(async ({ data }) => {
    const { error } = await getSupabaseServerClient().auth.exchangeCodeForSession(data.code);

    if (error) {
      throw new Error(error.message);
    }
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
      meta: {
        avatar: data.user.user_metadata.avatar_url,
        name: data.user.user_metadata.name,
        username: data.user.user_metadata.username,
      },
    },
  };
});
