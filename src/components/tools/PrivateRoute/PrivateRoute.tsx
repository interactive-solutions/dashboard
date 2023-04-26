import { ReactNode } from 'react';
import { useAuthenticationStore } from 'store/authentication';

export type PrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const user = useAuthenticationStore((store) => store.user);

  // Make sure nothing is visible if not signed in
  if (!user) {
    return null;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
