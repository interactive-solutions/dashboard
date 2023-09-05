import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export type FormErrorProps = {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

export const FormError = ({ error }: FormErrorProps) => {
  return (
    <span>
      {typeof error.message === 'string' && error.message.length
        ? error.message
        : 'Required field'}
    </span>
  );
};
