import { ChangeEvent, MutableRefObject, ReactNode, useMemo } from 'react';

import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form';

import { FormError } from 'components/ui/forms';
import { CheckboxSelectors } from 'consts/cypress';

import * as styles from './Checkbox.styles';

export interface CheckboxProps {
  register: UseFormRegister<any>;
  name: string;
  color?: 'light';
  value?: string;
  validation?: RegisterOptions;
  disabled?: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  defaultChecked?: boolean;
  checkboxRef?: MutableRefObject<HTMLInputElement | null>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: ReactNode;
}

export const Checkbox = ({
  register,
  name,
  color,
  value,
  validation,
  disabled,
  error,
  defaultChecked,
  checkboxRef,
  onChange,
  onBlur,
  label
}: CheckboxProps) => {
  const getValidation = useMemo(
    () => (!disabled ? validation : {}),
    [disabled, validation]
  );

  const registerHolder = useMemo(
    () => register(name, getValidation),
    [name, register, getValidation]
  );

  return (
    <styles.Root
      $color={color}
      $hasError={!!error}
      $isDisabled={disabled}
      data-cy={CheckboxSelectors.Root}
    >
      <styles.Label>
        <styles.Input
          type="checkbox"
          value={value}
          disabled={disabled}
          defaultChecked={defaultChecked}
          data-cy={CheckboxSelectors.Input}
          {...registerHolder}
          ref={(event) => {
            if (checkboxRef) checkboxRef.current = event;
            registerHolder.ref(event);
          }}
          onChange={(event) => {
            registerHolder.onChange(event);
            onChange?.(event);
          }}
          onBlur={(event) => {
            registerHolder.onBlur(event);
            onBlur?.(event);
          }}
        />
        <styles.CheckboxHolder>
          <styles.CheckboxNotChecked />
          <styles.CheckboxChecked />
        </styles.CheckboxHolder>
        {!!label && (
          <styles.LabelHolder>
            {label}
            {getValidation?.required ? ' *' : ''}
          </styles.LabelHolder>
        )}
      </styles.Label>
      <FormError error={error} />
    </styles.Root>
  );
};
