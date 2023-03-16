import { ReactNode, useEffect } from 'react';

import { useIsTabbing } from '@entire.se/hooks';
import { setUser as setUserSentry } from '@sentry/nextjs';

import { useMeQuery } from 'api/graphql';
import { Header } from 'components/ui/general';
import { useAuthenticationStore } from 'store/authentication';

import * as styles from './Layout.styles';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const setUser = useAuthenticationStore((store) => store.setUser);
  const token = useAuthenticationStore((store) => store.token);
  const { data } = useMeQuery({ skip: !token });

  useIsTabbing();

  // If "me" updates we want to update the global state
  useEffect(() => {
    const user = data?.me;
    if (user) setUser(user);
  }, [data?.me, setUser]);

  // Tell Sentry who's signed in
  useEffect(() => {
    const user = data?.me;

    setUserSentry(
      user
        ? {
            id: String(user.id),
            email: user.email,
          }
        : null
    );
  }, [data?.me]);

  return (
    <styles.Root>
      <Header />
      <styles.Content>{children}</styles.Content>
    </styles.Root>
  );
};
