import { ReactNode } from 'react';

import * as styles from './Documentation.styles';

export interface DocumentationProps {
  children: ReactNode;
}

export const Documentation = ({ children }: DocumentationProps) => {
  return (
    <styles.Root>
      <styles.Content>{children}</styles.Content>
    </styles.Root>
  );
};
