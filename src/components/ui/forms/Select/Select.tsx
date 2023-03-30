import { ReactNode } from 'react';

import {
  CircularProgress,
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
import { FormattedMessage } from 'react-intl';

import { FormError } from 'components/ui/forms';

import { texts } from './Select.text';

import * as styles from './Select.styles';

export type SelectProps = {
  name: string;
  control: Control<any, any>;
  children: ReactNode;
  validation?: RegisterOptions;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  helperText?: ReactNode;
  loading?: boolean;
} & Omit<MuiSelectProps, 'name' | 'error' | 'required' | 'children'>;

export const Select = ({
  name,
  control,
  children,
  validation,
  error,
  helperText,
  loading,
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
  color,
  ...rest
}: SelectProps) => {
  const isDisabled = disabled || loading;
  const getValidation = !isDisabled ? validation : {};
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
          disabled={isDisabled}
          variant={variant}
          size={size}
          margin={margin}
          color={color}
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
            IconComponent={
              loading
                ? () => (
                    <styles.Loading>
                      <CircularProgress size={20} />
                    </styles.Loading>
                  )
                : undefined
            }
          >
            {children || (
              <styles.Empty>
                <FormattedMessage {...texts.emptyMenuItems} />
              </styles.Empty>
            )}
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
