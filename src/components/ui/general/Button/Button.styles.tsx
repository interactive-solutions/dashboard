import { Link, ResponsiveBreakpoints } from '@entire.se/components';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button';
import { sizes, colors } from './styles';

export const defaultValues: {
  ghost: NonNullable<ButtonProps['ghost']>;
  rounded: NonNullable<ButtonProps['rounded']>;
  color: NonNullable<ButtonProps['color']>;
  size: NonNullable<ButtonProps['size']>;
} = {
  ghost: false,
  rounded: false,
  color: 'primary',
  size: 'medium'
};

export const Root = styled(
  ({
    children,
    type,
    disabled,
    link,
    ...rest
  }: Omit<ButtonProps, 'as'> & {
    $fullWidth: ButtonProps['fullWidth'];
    $color: ButtonProps['color'];
    $size: ButtonProps['size'];
    $rounded: ButtonProps['rounded'];
    $ghost: ButtonProps['ghost'];
    $loading: ButtonProps['loading'];
  }) => {
    if (link?.href) {
      return (
        <Link {...link} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      // eslint-disable-next-line react/button-has-type
      <button type={type || 'button'} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
)`
  position: relative;
  text-decoration: none;
  background-color: transparent;
  display: inline-flex;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border: solid transparent;
  transition: ${({ theme }) =>
    theme.ease(['color', 'background-color', 'border-color'])};

  &:disabled {
    cursor: not-allowed;
    opacity: 1;
  }

  ${({ $fullWidth }) =>
    !!$fullWidth &&
    `
      width: 100%;
      display: flex;
      justify-content: center;
    `}

  ${({
    $color = defaultValues.color,
    $ghost = defaultValues.ghost,
    theme
  }) => css`
    ${colors[$color](theme, {
      isGhost: $ghost
    })}
  `}

  ${({
    theme,
    $size = defaultValues.size,
    $rounded = defaultValues.rounded
  }) => {
    if (typeof $size === 'string') {
      return css`
        ${sizes[$size](theme, {
          rounded: $rounded
        })}
      `;
    }

    if (typeof $size === 'object' && !Array.isArray($size)) {
      return Object.keys($size).map((breakpoint) => {
        const getBreakpoint = breakpoint as ResponsiveBreakpoints;
        const getSize = $size[getBreakpoint];

        if (!getSize) {
          return '';
        }

        return css`
          ${theme.respondTo[getBreakpoint]`
            ${sizes[getSize](theme, {
              rounded: $rounded
            })}
          `}
        `;
      });
    }

    return '';
  }}

  ${({ $loading }) =>
    !!$loading &&
    `
      ${Content} {
        opacity: 0;
      }
    `}
`;

export const Content = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: currentColor;
`;

export const IconRight = styled(Content)`
  white-space: nowrap;
`;

export const IconLeft = styled(Content)`
  white-space: nowrap;
`;

export const Loading = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
