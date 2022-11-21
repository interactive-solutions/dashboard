import {
  Radio as EntireRadio,
  RadioProps as EntireRadioProps
} from '@entire.se/components';
import { useTheme } from 'styled-components';

import { FormError } from 'components/ui/forms';

import * as styles from './Radio.styles';

export interface RadioProps extends EntireRadioProps {
  color?: 'light';
}

export const Radio = (props: RadioProps) => {
  const theme = useTheme();

  return (
    <EntireRadio
      {...props}
      color={props.color || 'light'}
      colors={styles.getColors(theme)}
      sizes={styles.getSizes(theme)}
      errorComponent={<FormError />}
    />
  );
};
