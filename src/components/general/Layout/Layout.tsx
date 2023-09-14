import { ReactNode } from 'react';

import { Root } from './Layout.styles';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <Root>{children}</Root>;
};
