import {
  Button as EntireButton,
  ButtonProps as EntireButtonProps
} from '@entire.se/components';
import { useTheme } from 'styled-components';

import * as styles from './Button.styles';

export interface ButtonProps extends EntireButtonProps {
  color?: 'primary';
}

export const Button = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <EntireButton
      {...props}
      color={props.color || 'primary'}
      colors={styles.getColors(theme)}
      sizes={styles.getSizes(theme)}
    />
  );
};
