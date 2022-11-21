import {
  Checkbox as EntireCheckbox,
  CheckboxProps as EntireCheckboxProps
} from '@entire.se/components';
import { useTheme } from 'styled-components';

import { FormError } from 'components/ui/forms';

import * as styles from './Checkbox.styles';

export interface CheckboxProps extends EntireCheckboxProps {
  color?: 'light';
}

export const Checkbox = (props: CheckboxProps) => {
  const theme = useTheme();

  return (
    <EntireCheckbox
      {...props}
      color={props.color || 'light'}
      colors={styles.getColors(theme)}
      sizes={styles.getSizes(theme)}
      errorComponent={<FormError />}
    />
  );
};
