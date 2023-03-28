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
      {typeof error.message === 'string' && error.message.length ? (
        error.message
      ) : (
        <FormattedMessage {...texts.form_validationRequired} />
      )}
    </span>
  );
};
