import { ChangeEvent, MutableRefObject, ReactNode, useMemo } from 'react';

import { ResponsiveBreakpoints } from '@entire.se/components';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form';

import { FormError } from 'components/ui/forms';
import { RadioSelectors } from 'consts/cypress';
import { RadioSizes } from 'types/radio';

import * as styles from './Radio.styles';

export interface RadioProps {
  register: UseFormRegister<any>;
  name: string;
  color?: 'light';
  size?:
    | RadioSizes
    | {
        [key in ResponsiveBreakpoints]?: RadioSizes;
      };
  value?: string;
  validation?: RegisterOptions;
  disabled?: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  defaultChecked?: boolean;
  radioRef?: MutableRefObject<HTMLInputElement | null>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: ReactNode;
}

export const Radio = ({
  register,
  name,
  color,
  size,
  value,
  validation,
  disabled,
  error,
  defaultChecked,
  radioRef,
  onChange,
  onBlur,
  label
}: RadioProps) => {
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
      $size={size}
      $hasError={!!error}
      $isDisabled={disabled}
      data-cy={RadioSelectors.Root}
    >
      <styles.Label>
        <styles.Input
          type="radio"
          value={value}
          disabled={disabled}
          defaultChecked={defaultChecked}
          data-cy={RadioSelectors.Input}
          {...registerHolder}
          ref={(event) => {
            if (radioRef) radioRef.current = event;
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
        <styles.RadioHolder>
          <styles.RadioNotChecked />
          <styles.RadioChecked />
        </styles.RadioHolder>
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
