import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
} from 'react-hook-form';

import { FormError } from 'components/ui/forms';

export type TextFieldProps = {
  name: string;
  control: Control<any, any>;
  validation?: RegisterOptions;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
} & Omit<MuiTextFieldProps, 'name' | 'error' | 'required'>;

export const TextField = ({
  name,
  control,
  validation,
  error,
  defaultValue,
  onChange,
  onBlur,
  helperText,
  label,
  disabled,
  ...rest
}: TextFieldProps) => {
  const getValidation = !disabled ? validation : {};
  const hasError = !!error;
  const getLabel = !!label ? (
    <>
      {label}
      {!!getValidation?.required && ' *'}
    </>
  ) : null;

  return (
    <Controller
      name={name}
      control={control}
      rules={getValidation}
      defaultValue={defaultValue}
      render={({
        field: {
          name: fieldName,
          value: fieldValue,
          onChange: fieldOnChange,
          onBlur: fieldOnBlur,
          ref: fieldRef,
        },
      }) => (
        <MuiTextField
          {...rest}
          name={fieldName}
          value={fieldValue || ''}
          onChange={(event) => {
            fieldOnChange(event);
            onChange?.(event);
          }}
          onBlur={(event) => {
            fieldOnBlur();
            onBlur?.(event);
          }}
          error={hasError}
          helperText={hasError ? <FormError error={error} /> : helperText}
          inputRef={fieldRef}
          label={getLabel}
          disabled={disabled}
        />
      )}
    />
  );
};
