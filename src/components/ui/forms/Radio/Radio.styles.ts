import { ResponsiveBreakpoints } from '@entire.se/components';
import styled, { css } from 'styled-components';

import { isTabbing } from 'styles/tools';
import { RadioSizes } from 'types/radio';

import { RadioProps } from './Radio';
import { sizes, colors } from './styles';

export const defaultValues: {
  color: NonNullable<RadioProps['color']>;
  size: RadioSizes;
} = {
  color: 'light',
  size: 'medium'
};

export const Root = styled.div<{
  $color: RadioProps['color'];
  $size: RadioProps['size'];
  $hasError: boolean;
  $isDisabled?: RadioProps['disabled'];
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
      ${Input}:not(:checked) ~ ${RadioHolder} ${RadioNotChecked} {
        border-color: ${theme.surfaces.error};
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

export const RadioHolder = styled.div`
  position: relative;

  .is-tabbing ${Input}:focus ~ & {
    ${isTabbing};
  }
`;

export const RadioNotChecked = styled.div`
  border-style: solid;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  transition: ${({ theme }) =>
    theme.ease(['opacity', 'border-color', 'color', 'background-color'])};

  ${Input}:checked ~ ${RadioHolder} & {
    opacity: 0;
  }
`;

export const RadioChecked = styled(RadioNotChecked)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;

  ${Input}:checked ~ ${RadioHolder} & {
    opacity: 1;
  }
`;

export const LabelHolder = styled.span``;
