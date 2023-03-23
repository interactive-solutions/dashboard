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
} & Omit<MuiTextFieldProps, 'error' | 'required'>;

export const TextField = ({
  name,
  control,
  validation,
  error,
  defaultValue,
  ...rest
}: TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      defaultValue={defaultValue}
      render={({
        field: {
          name: fieldName,
          value: fieldValue,
          onChange: fieldOnChange,
          onBlur: fieldOnBlur,
          ref: fieldRef,
        },
      }) => {
        return (
          <MuiTextField
            {...rest}
            name={fieldName}
            value={fieldValue || ''}
            onChange={(event) => {
              fieldOnChange(event);
              rest.onChange?.(event);
            }}
            onBlur={(event) => {
              fieldOnBlur();
              rest.onBlur?.(event);
            }}
            error={!!error}
            helperText={error ? <FormError error={error} /> : rest.helperText}
            inputRef={fieldRef}
            label={
              rest.label
                ? `${rest.label}${validation?.required ? ' *' : ''}`
                : null
            }
          />
        );
      }}
    />
  );
};
