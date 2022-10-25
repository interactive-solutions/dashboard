import { ForwardedRef, forwardRef } from 'react';

import { ResponsiveBreakpoints } from '@entire.se/components';
import ReactTextareaAutosize from 'react-textarea-autosize';
import styled, { css } from 'styled-components';

import { TextFieldSizes } from 'types/textField';

import { sizes, colors } from './styles';
import { TextFieldProps } from './TextField';

export const defaultValues: {
  rounded: NonNullable<TextFieldProps['rounded']>;
  color: NonNullable<TextFieldProps['color']>;
  size: TextFieldSizes;
} = {
  rounded: false,
  color: 'light',
  size: 'medium'
};

export const Root = styled.div<{
  $fullWidth: TextFieldProps['fullWidth'];
  $color: TextFieldProps['color'];
  $size: TextFieldProps['size'];
  $rounded: TextFieldProps['rounded'];
  $hasIconRight: boolean;
  $hasIconLeft: boolean;
  $hasError: boolean;
  $isDisabled?: boolean;
}>`
  display: inline-flex;
  flex-direction: column;
  text-align: left;

  ${({ $fullWidth }) =>
    !!$fullWidth &&
    `
      display: flex;
    `}

  ${({ $color = defaultValues.color, theme }) => css`
    ${colors[$color](theme)}
  `}

  ${({
    theme,
    $size = defaultValues.size,
    $rounded = defaultValues.rounded,
    $hasIconRight,
    $hasIconLeft
  }) => {
    if (typeof $size === 'string') {
      return css`
        ${sizes[$size](theme, {
          rounded: $rounded,
          hasIconRight: $hasIconRight,
          hasIconLeft: $hasIconLeft
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
              rounded: $rounded,
              hasIconRight: $hasIconRight,
              hasIconLeft: $hasIconLeft
            })}
          `}
        `;
      });
    }

    return '';
  }}

  ${({ $hasError, theme }) =>
    $hasError &&
    `
      ${Field} {
        border-color: ${theme.surfaces.error};
      }
    `}
  
  ${({ $isDisabled }) =>
    !!$isDisabled &&
    `
      &, * {
        cursor: not-allowed;
      }
    `}
`;

export const Content = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
`;

export const FieldHolder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Field = styled(
  forwardRef(
    (
      {
        textarea,
        type,
        ...rest
      }: {
        textarea: TextFieldProps['textarea'];
        type: TextFieldProps['type'];
        autoComplete: string;
        disabled: TextFieldProps['disabled'];
        placeholder: TextFieldProps['placeholder'];
        defaultValue: TextFieldProps['defaultValue'];
        onChange: TextFieldProps['onChange'];
        onBlur: TextFieldProps['onBlur'];
      },
      ref: ForwardedRef<any>
    ) => {
      if (textarea) {
        return <ReactTextareaAutosize ref={ref} {...textarea} {...rest} />;
      }

      return <input ref={ref} type={type || 'text'} {...rest} />;
    }
  )
)`
  display: flex;
  border-style: solid;
  appearance: none;
  outline: none;
  transition: ${({ theme }) =>
    theme.ease(['color', 'background-color', 'border-color'])};

  ${({ textarea }) =>
    !!textarea &&
    `
      resize: none;
    `};
`;

export const IconRight = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  aspect-ratio: 1 / 1;
  user-select: none;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLeft = styled(IconRight)`
  right: auto;
  left: 0;
`;
