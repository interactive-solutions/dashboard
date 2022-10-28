import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { FormErrorSelectors } from 'consts/cypress';

import { texts } from './FormError.text';

import * as styles from './FormError.styles';

export interface FormErrorProps {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const FormError = ({ error }: FormErrorProps) => {
  if (!error) {
    return null;
  }

  return (
    <styles.Root data-cy={FormErrorSelectors.Root}>
      {error.message?.toString() || <FormattedMessage {...texts.message} />}
    </styles.Root>
  );
};
