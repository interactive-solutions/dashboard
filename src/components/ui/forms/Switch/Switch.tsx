import {
  Switch as EntireSwitch,
  SwitchProps as EntireSwitchProps
} from '@entire.se/components';
import { useTheme } from 'styled-components';

import { FormError } from 'components/ui/forms';

import * as styles from './Switch.styles';

export interface SwitchProps extends EntireSwitchProps {
  color?: 'light';
}

export const Switch = (props: SwitchProps) => {
  const theme = useTheme();

  return (
    <EntireSwitch
      {...props}
      color={props.color || 'light'}
      colors={styles.getColors(theme)}
      sizes={styles.getSizes(theme)}
      errorComponent={<FormError />}
    />
  );
};
