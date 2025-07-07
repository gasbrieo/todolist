export type SessionUser = {
  email?: string;
  meta: {
    username: string;
  };
};

export type UnauthenticatedState = {
  isAuthenticated: false;
};

export type AuthenticatedState = {
  isAuthenticated: true;
  user: SessionUser;
};

export type SessionState = UnauthenticatedState | AuthenticatedState;
