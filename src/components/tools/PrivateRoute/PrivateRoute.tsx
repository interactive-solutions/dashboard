import { ReactNode } from 'react';

import { useRouter } from 'next/router';

import { Paths } from 'consts/router';
import { useAuthenticationStore } from 'store/authentication';

export interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();
  const user = useAuthenticationStore((store) => store.user);

  if (!user) {
    router.replace(Paths.Landing);
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
