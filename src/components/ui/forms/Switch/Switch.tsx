import { ReactNode } from 'react';

import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
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

export type SwitchProps = {
  name: string;
  control: Control<any, any>;
  validation?: RegisterOptions;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  label?: ReactNode;
  labelPlacement?: FormControlLabelProps['labelPlacement'];
  helperText?: ReactNode;
} & Omit<MuiSwitchProps, 'name' | 'required'>;

export const Switch = ({
  name,
  control,
  validation,
  error,
  defaultChecked,
  onChange,
  onBlur,
  helperText,
  label,
  labelPlacement,
  disabled,
  size,
  value,
  ...rest
}: SwitchProps) => {
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
      defaultValue={defaultChecked}
      render={({
        field: {
          name: fieldName,
          value: fieldValue,
          onChange: fieldOnChange,
          onBlur: fieldOnBlur,
          ref: fieldRef,
        },
      }) => (
        <FormControl error={hasError} disabled={disabled} size={size}>
          <FormControlLabel
            label={getLabel}
            disabled={disabled}
            defaultChecked={defaultChecked}
            checked={fieldValue || false}
            labelPlacement={labelPlacement}
            value={value}
            control={
              <MuiSwitch
                {...rest}
                name={fieldName}
                onChange={(event, checked) => {
                  fieldOnChange(event, checked);
                  onChange?.(event, checked);
                }}
                onBlur={(event) => {
                  fieldOnBlur();
                  onBlur?.(event);
                }}
                inputRef={fieldRef}
                size={size}
              />
            }
          />
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
