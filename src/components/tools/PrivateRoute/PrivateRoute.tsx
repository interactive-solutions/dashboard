import { ReactNode, useEffect } from 'react';

import { useRouter } from 'next/router';

import { Paths } from 'consts/router';
import { useAuthenticationStore } from 'store/authentication';

export type PrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();
  const user = useAuthenticationStore((store) => store.user);

  // Send user to login page if they are not already signed in
  useEffect(() => {
    if (!user) {
      router.replace(Paths.Login);
    }
  }, [router, user]);

  // Make sure nothing is visible if not signed in
  if (!user) {
    return null;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
