import styled, { css } from 'styled-components';

import { isTabbing } from 'styles/tools';

import { colors } from './styles';
import { SwitchProps } from './Switch';

export const defaultValues: {
  color: NonNullable<SwitchProps['color']>;
} = {
  color: 'primary'
};

const size = {
  trackWidth: '48px',
  trackHeight: '24px',
  knobSize: '18px'
};

export const Root = styled.div<{
  $color: SwitchProps['color'];
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
  min-width: ${size.trackWidth};
  max-width: ${size.trackWidth};
  min-height: ${size.trackHeight};
  max-height: ${size.trackHeight};
  border-radius: calc(${size.trackHeight} / 2);
  transition: ${({ theme }) => theme.ease(['background-color'])};

  .is-tabbing ${Input}:focus ~ & {
    ${isTabbing};
  }
`;

export const Switch = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${size.trackHeight};
  height: ${size.trackHeight};
  border-radius: calc(${size.trackHeight} / 2);
  background-color: transparent;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${size.knobSize};
    height: ${size.knobSize};
    border-radius: 50%;
    transition: ${({ theme }) => theme.ease(['background-color'])};
  }

  ${Input}:checked ~ ${SwitchHolder} & {
    transform: translateX(calc(${size.trackWidth} - ${size.trackHeight}));
  }
`;

export const LabelRight = styled.span`
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

export const LabelLeft = styled.span`
  padding-right: ${({ theme }) => theme.spacing(1)};
`;
