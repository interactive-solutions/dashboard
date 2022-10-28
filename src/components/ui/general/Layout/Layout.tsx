import { ReactNode, useEffect } from 'react';

import { setUser as setUserSentry } from '@sentry/nextjs';

import { useMeQuery } from 'api/graphql';
import { Header, Footer } from 'components/ui/general';
import { useIsTabbing } from 'hooks';
import { useAuthenticationStore } from 'store/authentication';

import * as styles from './Layout.styles';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const setUser = useAuthenticationStore((store) => store.setUser);
  const token = useAuthenticationStore((store) => store.token);
  const { data } = useMeQuery({ skip: !token });

  useEffect(() => {
    const user = data?.me || null;

    setUser(user);
    setUserSentry(
      user
        ? {
            id: String(user.id),
            email: user.email
          }
        : null
    );
  }, [data?.me, setUser]);

  useIsTabbing();

  return (
    <styles.Root>
      <Header />
      <styles.Content>{children}</styles.Content>
      <Footer />
    </styles.Root>
  );
};
