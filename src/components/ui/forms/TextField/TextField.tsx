import {
  TextField as EntireTextField,
  TextFieldProps as EntireTextFieldProps
} from '@entire.se/components';
import { useTheme } from 'styled-components';

import { FormError } from 'components/ui/forms';

import * as styles from './TextField.styles';

export interface TextFieldProps extends EntireTextFieldProps {
  color?: 'light';
}

export const TextField = (props: TextFieldProps) => {
  const theme = useTheme();

  return (
    <EntireTextField
      {...props}
      color={props.color || 'light'}
      colors={styles.getColors(theme)}
      sizes={styles.getSizes(theme)}
      errorComponent={<FormError />}
    />
  );
};
