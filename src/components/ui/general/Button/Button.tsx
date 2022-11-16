import { ElementType, MouseEventHandler, ReactNode } from 'react';

import {
  LinkProps,
  ResponsiveBreakpoints,
  Spinner
} from '@entire.se/components';

import { ButtonSelectors } from 'consts/cypress';
import { ButtonSizes } from 'types/button';

import * as styles from './Button.styles';

export interface ButtonProps {
  children?: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  fullWidth?: boolean;
  disabled?: boolean;
  link?: Omit<LinkProps, 'children'>;
  onClick?: MouseEventHandler;
  color?: 'primary';
  size?:
    | ButtonSizes
    | {
        [key in ResponsiveBreakpoints]?: ButtonSizes;
      };
  rounded?: boolean;
  ghost?: boolean;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  as?: ElementType;
  loading?: boolean;
}

export const Button = ({
  children,
  type,
  disabled,
  link,
  onClick,
  fullWidth,
  color,
  size,
  rounded,
  ghost,
  iconRight,
  iconLeft,
  as,
  loading,
  ...rest
}: ButtonProps) => {
  return (
    <styles.Root
      type={type}
      disabled={disabled}
      link={link}
      onClick={!!onClick && !disabled ? onClick : undefined}
      as={as}
      data-cy={ButtonSelectors.Root}
      $fullWidth={fullWidth}
      $color={color}
      $size={size}
      $rounded={rounded}
      $ghost={ghost}
      $loading={loading}
      {...rest}
    >
      <styles.Content>
        {!!iconLeft && <styles.IconLeft>{iconLeft}</styles.IconLeft>}
        {children}
        {!!iconRight && <styles.IconRight>{iconRight}</styles.IconRight>}
      </styles.Content>
      {!!loading && (
        <styles.Loading>
          <Spinner
            visible
            size={20}
            lineWidth={2}
            data-cy={ButtonSelectors.Spinner}
          />
        </styles.Loading>
      )}
    </styles.Root>
  );
};
