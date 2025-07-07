import { logout } from "~/features/auth";
import { Route } from "~/routes/_private/index";

export const HomePage = () => {
  const { sessionState } = Route.useRouteContext();

  return (
    <div>
      <p>Hello!</p>
      <p>{sessionState.isAuthenticated}</p>
      <p>{sessionState.user?.email}</p>
      <button onClick={async () => await logout()}>Logout</button>
    </div>
  );
};
