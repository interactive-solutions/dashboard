import { ReactNode } from 'react';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
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

export type SelectProps = {
  name: string;
  control: Control<any, any>;
  children: ReactNode;
  validation?: RegisterOptions;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  helperText?: ReactNode;
} & Omit<MuiSelectProps, 'name' | 'error' | 'required' | 'children'>;

export const Select = ({
  name,
  control,
  children,
  validation,
  error,
  helperText,
  defaultValue,
  label,
  fullWidth,
  disabled,
  variant,
  size,
  margin,
  onChange,
  onBlur,
  multiple,
  ...rest
}: SelectProps) => {
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
        <FormControl
          fullWidth={fullWidth}
          error={hasError}
          disabled={disabled}
          variant={variant}
          size={size}
          margin={margin}
        >
          {!!getLabel && <InputLabel>{getLabel}</InputLabel>}
          <MuiSelect
            {...rest}
            name={fieldName}
            value={fieldValue || (multiple ? [] : '')}
            onChange={(event, child) => {
              fieldOnChange(event, child);
              onChange?.(event, child);
            }}
            onBlur={(event) => {
              fieldOnBlur();
              onBlur?.(event);
            }}
            inputRef={fieldRef}
            label={getLabel}
            multiple={multiple}
          >
            {children}
          </MuiSelect>
          {hasError && (
            <FormHelperText>
              <FormError error={error} />
            </FormHelperText>
          )}
          {!hasError && !!helperText && (
            <FormHelperText>{helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
