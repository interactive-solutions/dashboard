import { ReactNode } from 'react';

import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers';
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue';
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
} from 'react-hook-form';

import { FormError } from 'components/ui/forms';

export type DatePickerProps<TDate = any> = {
  name: string;
  control: Control<any, any>;
  validation?: RegisterOptions;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  onChange?: (
    value: TDate,
    context?: PickerChangeHandlerContext<TDate>
  ) => void;
  helperText?: ReactNode;
} & Omit<MuiDatePickerProps<TDate>, 'value' | 'onChange'>;

export const DatePicker = ({
  name,
  control,
  validation,
  error,
  defaultValue,
  onChange,
  onClose,
  helperText,
  label,
  disabled,
  ...rest
}: DatePickerProps) => {
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
      defaultValue={defaultValue || null}
      render={({
        field: {
          value: fieldValue,
          onChange: fieldOnChange,
          onBlur: fieldOnBlur,
          ref: fieldRef,
        },
      }) => {
        return (
          <MuiDatePicker
            {...rest}
            onClose={(...args) => {
              fieldOnBlur();
              onClose?.(...args);
            }}
            onChange={(value, context) => {
              fieldOnChange(value, context);
              onChange?.(value, context);
            }}
            value={fieldValue}
            label={getLabel}
            disabled={disabled}
            inputRef={fieldRef}
            slotProps={{
              ...rest.slotProps,
              textField: {
                ...rest.slotProps?.textField,
                error: hasError,
                helperText: hasError ? <FormError error={error} /> : helperText,
              },
            }}
          />
        );
      }}
    />
  );
};
