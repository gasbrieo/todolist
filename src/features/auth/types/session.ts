export type SessionUser = {
  email: string;
  meta: {
    avatar: string;
    name: string;
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
