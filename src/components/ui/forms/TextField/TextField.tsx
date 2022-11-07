import { ChangeEvent, MutableRefObject, ReactNode, useMemo } from 'react';

import { ResponsiveBreakpoints } from '@entire.se/components';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form';
import { TextareaAutosizeProps } from 'react-textarea-autosize';

import { FormError } from 'components/ui/forms';
import { TextFieldSelectors } from 'consts/cypress';
import { TextFieldSizes } from 'types/textField';

import * as styles from './TextField.styles';

export interface TextFieldProps {
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  name: string;
  textarea?: TextareaAutosizeProps;
  color?: 'light';
  size?:
    | TextFieldSizes
    | {
        [key in ResponsiveBreakpoints]?: TextFieldSizes;
      };
  rounded?: boolean;
  type?: string;
  label?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  defaultValue?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  textFieldRef?: MutableRefObject<
    HTMLInputElement | HTMLTextAreaElement | null
  >;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  fullWidth?: boolean;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}

export const TextField = ({
  register,
  validation,
  name,
  textarea,
  color,
  size,
  rounded,
  type,
  label,
  disabled,
  readOnly,
  placeholder,
  defaultValue,
  error,
  textFieldRef,
  onChange,
  onBlur,
  fullWidth,
  iconRight,
  iconLeft,
  ...rest
}: TextFieldProps) => {
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
      data-cy={TextFieldSelectors.Root}
      $fullWidth={fullWidth}
      $color={color}
      $size={size}
      $rounded={rounded}
      $hasIconRight={!!iconRight}
      $hasIconLeft={!!iconLeft}
      $hasError={!!error}
      $isDisabled={disabled}
      $isReadOnly={readOnly}
      {...rest}
    >
      <styles.Content>
        {!!label && (
          <styles.Label data-cy={TextFieldSelectors.Label}>
            {label}
            {getValidation?.required ? ' *' : ''}
          </styles.Label>
        )}
        <styles.FieldHolder>
          <styles.Field
            data-cy={TextFieldSelectors.Field}
            textarea={textarea}
            type={type}
            autoComplete="off"
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...registerHolder}
            ref={(event: HTMLInputElement | HTMLTextAreaElement | null) => {
              if (textFieldRef) textFieldRef.current = event;
              registerHolder.ref(event);
            }}
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              registerHolder.onChange(event);
              onChange?.(event);
            }}
            onBlur={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              registerHolder.onBlur(event);
              onBlur?.(event);
            }}
          />
          {!!iconLeft && <styles.IconLeft>{iconLeft}</styles.IconLeft>}
          {!!iconRight && <styles.IconRight>{iconRight}</styles.IconRight>}
        </styles.FieldHolder>
      </styles.Content>
      <FormError error={error} />
    </styles.Root>
  );
};
