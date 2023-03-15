import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { FormErrorSelectors } from 'consts/cypress';

import { texts } from './FormError.text';

export type FormErrorProps = {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

export const FormError = ({ error }: FormErrorProps) => {
  return (
    <span data-cy={FormErrorSelectors.Root}>
      {error.message?.toString() || <FormattedMessage {...texts.message} />}
    </span>
  );
};
