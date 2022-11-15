import { ResponsiveBreakpoints } from '@entire.se/components';
import styled, { css } from 'styled-components';

import { isTabbing } from 'styles/tools';
import { SwitchSizes } from 'types/switch';

import { sizes, colors } from './styles';
import { SwitchProps } from './Switch';

export const defaultValues: {
  color: NonNullable<SwitchProps['color']>;
  size: SwitchSizes;
} = {
  color: 'primary',
  size: 'medium'
};

export const Root = styled.div<{
  $color: SwitchProps['color'];
  $size: SwitchProps['size'];
  $hasError: boolean;
  $isDisabled?: SwitchProps['disabled'];
}>`
  display: inline-flex;
  flex-direction: column;
  text-align: left;

  ${({ $color = defaultValues.color, theme, $isDisabled }) => css`
    ${colors[$color](theme, {
      isDisabled: $isDisabled
    })}
  `}

  ${({ theme, $size = defaultValues.size }) => {
    if (typeof $size === 'string') {
      return css`
        ${sizes[$size](theme)}
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
            ${sizes[getSize](theme)}
          `}
        `;
      });
    }

    return '';
  }}

  ${({ $isDisabled }) =>
    !!$isDisabled &&
    `
      &, * {
        cursor: not-allowed;
      }
    `}

  ${({ $hasError, theme }) =>
    $hasError &&
    `
      ${Input}:not(:checked) ~ ${SwitchHolder} {
        background-color: ${theme.surfaces.error};
      }
    `}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  transition: ${({ theme }) => theme.ease(['color'])};
`;

export const Input = styled.input`
  position: absolute;
  left: -9999px;
`;

export const SwitchHolder = styled.div`
  position: relative;
  transition: ${({ theme }) => theme.ease(['background-color'])};

  .\\@entire\\.se__is-tabbing ${Input}:focus ~ & {
    ${isTabbing};
  }
`;

export const Switch = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: transparent;
  transition: ${({ theme }) => theme.ease(['transform'])};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: ${({ theme }) => theme.ease(['background-color'])};
  }
`;

export const LabelRight = styled.span``;

export const LabelLeft = styled.span``;
