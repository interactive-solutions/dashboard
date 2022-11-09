import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { SwitchColor } from 'types/switch';

import { SwitchProps } from '../Switch';

import { Label, SwitchHolder, Input, Switch } from '../Switch.styles';

export const generateColor = ({
  label,
  switch: switchColor,
  isDisabled
}: SwitchColor) => {
  return css`
    ${Label} {
      color: ${label.default.color};
      transition: ${({ theme }) => theme.ease(['color'])};

      ${isDisabled === true &&
      `
        color: ${label.disabled.color};
      `}
    }

    ${SwitchHolder} {
      background-color: ${switchColor.default.switchHolderBackgroundColor};
      transition: ${({ theme }) => theme.ease(['background-color'])};

      ${isDisabled === true &&
      `
        background-color: ${switchColor.disabled.switchHolderBackgroundColor};
      `}
    }

    ${Input}:checked ~ ${SwitchHolder} {
      background-color: ${switchColor.default
        .switchHolderBackgroundColorWhenChecked};

      ${isDisabled === true &&
      `
        background-color: ${switchColor.disabled.switchHolderBackgroundColorWhenChecked};
      `}
    }

    ${Switch}::after {
      background-color: ${switchColor.default.switchBackgroundColor};
      transition: ${({ theme }) => theme.ease(['background-color'])};

      ${isDisabled === true &&
      `
        background-color: ${switchColor.disabled.switchBackgroundColor};
      `}
    }
  `;
};

/**
 * When defining colors, make sure every color has the same type of styles so
 * they can overwrite each other.
 */
export const colors: {
  [key in NonNullable<SwitchProps['color']>]: (
    theme: DefaultTheme,
    color?: {
      isDisabled?: boolean;
    }
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  primary: (theme, color = {}) =>
    generateColor({
      ...color,
      label: {
        default: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      switch: {
        default: {
          switchHolderBackgroundColor: theme.palettes.dark[700],
          switchHolderBackgroundColorWhenChecked: theme.surfaces.success,
          switchBackgroundColor: theme.palettes.light[100]
        },
        disabled: {
          switchHolderBackgroundColor: theme.palettes.light[400],
          switchHolderBackgroundColorWhenChecked: theme.palettes.light[400],
          switchBackgroundColor: theme.palettes.dark[400]
        }
      }
    })
};
