import { ResponsiveBreakpoints } from '@entire.se/components';
import styled, { css } from 'styled-components';

import { isTabbing } from 'styles/tools';
import { CheckboxSizes } from 'types/checkbox';

import { CheckboxProps } from './Checkbox';
import { sizes, colors } from './styles';

export const defaultValues: {
  color: NonNullable<CheckboxProps['color']>;
  size: CheckboxSizes;
} = {
  color: 'light',
  size: 'medium'
};

export const Root = styled.div<{
  $color: CheckboxProps['color'];
  $size: CheckboxProps['size'];
  $hasError: boolean;
  $isDisabled?: CheckboxProps['disabled'];
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
      ${Input}:not(:checked) ~ ${CheckboxHolder} ${CheckboxNotChecked} {
        border-color: ${theme.surfaces.error};
      }
    `}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
`;

export const Input = styled.input`
  position: absolute;
  left: -9999px;
`;

export const CheckboxHolder = styled.div`
  position: relative;

  .is-tabbing ${Input}:focus ~ & {
    ${isTabbing};
  }
`;

export const CheckboxNotChecked = styled.div`
  border-style: solid;
  border-radius: ${({ theme }) => theme.border.radius};
  transition: ${({ theme }) => theme.ease(['opacity', 'border-color'])};

  ${Input}:checked ~ ${CheckboxHolder} & {
    opacity: 0;
  }
`;

export const CheckboxChecked = styled(CheckboxNotChecked)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;

  ${Input}:checked ~ ${CheckboxHolder} & {
    opacity: 1;
  }
`;

export const LabelHolder = styled.span``;
