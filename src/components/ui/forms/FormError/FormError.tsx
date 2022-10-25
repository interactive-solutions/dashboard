import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import { FormErrorSelectors } from 'consts/cypress';

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
      {error.message?.toString() || 'Obligatoriskt fält'}
    </styles.Root>
  );
};
