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

import * as styles from './Switch.styles';

export interface SwitchProps {
  register: UseFormRegister<any>;
  name: string;
  value?: string;
  type?: 'checkbox' | 'radio';
  validation?: RegisterOptions;
  disabled?: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  defaultChecked?: boolean;
  switchRef?: MutableRefObject<HTMLInputElement | null>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  labelRight?: ReactNode;
  labelLeft?: ReactNode;
}

export const Switch = ({
  register,
  name,
  value,
  type = 'checkbox',
  validation,
  disabled,
  error,
  defaultChecked,
  switchRef,
  onChange,
  onBlur,
  labelRight,
  labelLeft
}: SwitchProps) => {
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
      $hasError={!!error}
      $isDisabled={disabled}
      data-cy={CheckboxSelectors.Root}
    >
      <styles.Label>
        <styles.Input
          type={type}
          value={value}
          disabled={disabled}
          defaultChecked={defaultChecked}
          data-cy={CheckboxSelectors.Input}
          {...registerHolder}
          ref={(event) => {
            if (switchRef) switchRef.current = event;
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
        {!!labelLeft && (
          <styles.LabelLeft>
            {labelLeft}
            {getValidation?.required ? ' *' : ''}
          </styles.LabelLeft>
        )}
        <styles.SwitchHolder>
          <styles.Switch />
        </styles.SwitchHolder>
        {!!labelRight && (
          <styles.LabelRight>
            {labelRight}
            {getValidation?.required ? ' *' : ''}
          </styles.LabelRight>
        )}
      </styles.Label>
      <FormError error={error} />
    </styles.Root>
  );
};
