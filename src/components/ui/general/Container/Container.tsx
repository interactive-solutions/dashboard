import { ReactNode } from 'react';

import * as styles from './Container.styles';

export interface ContainerProps {
  children: ReactNode;
  fullWidth?: boolean;
}

export const Container = ({ children, fullWidth, ...rest }: ContainerProps) => {
  return (
    <styles.Root $fullWidth={fullWidth} {...rest}>
      {children}
    </styles.Root>
  );
};
