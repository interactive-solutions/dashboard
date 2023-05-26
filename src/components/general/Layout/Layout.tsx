import { ReactNode } from 'react';

import * as styles from './Layout.styles';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <styles.Root>
      <styles.Content>{children}</styles.Content>
    </styles.Root>
  );
};
