import styled from 'styled-components';

import { isTabbing } from 'styles/tools';

import { SwitchProps } from './Switch';

const size = {
  trackWidth: '48px',
  trackHeight: '24px',
  knobSize: '18px'
};

export const Root = styled.div<{
  $hasError: boolean;
  $isDisabled?: SwitchProps['disabled'];
}>`
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  transition: ${({ theme }) => theme.ease(['opacity'])};

  ${({ $isDisabled }) =>
    !!$isDisabled &&
    `
      opacity: 0.5;

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
`;

export const Input = styled.input`
  position: absolute;
  left: -9999px;
`;

export const SwitchHolder = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palettes.dark[700]};
  min-width: ${size.trackWidth};
  max-width: ${size.trackWidth};
  min-height: ${size.trackHeight};
  max-height: ${size.trackHeight};
  border-radius: calc(${size.trackHeight} / 2);
  transition: ${({ theme }) => theme.ease(['background-color'])};

  ${Input}:checked ~ & {
    background-color: ${({ theme }) => theme.surfaces.success};
  }

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
  transition: ${({ theme }) => theme.ease(['transform'])};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.palettes.light[100]};
    width: ${size.knobSize};
    height: ${size.knobSize};
    border-radius: 50%;
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
