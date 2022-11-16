import {
  Select as EntireSelect,
  SelectProps as EntireSelectProps
} from '@entire.se/components';
import { useTheme } from 'styled-components';

import { FormError } from 'components/ui/forms';

import * as styles from './Select.styles';

export interface SelectProps extends EntireSelectProps {
  color?: 'light';
}

export const Select = (props: SelectProps) => {
  const theme = useTheme();

  return (
    <EntireSelect
      {...props}
      color={props.color || 'light'}
      colors={styles.getColors(theme)}
      sizes={styles.getSizes(theme)}
      errorComponent={<FormError />}
    />
  );
};
