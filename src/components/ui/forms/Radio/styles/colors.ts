import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { RadioColor } from 'types/radio';

import { RadioProps } from '../Radio';

import { Label, RadioNotChecked, RadioChecked } from '../Radio.styles';

export const generateColor = ({
  label,
  radioNotChecked,
  radioChecked,
  isDisabled
}: RadioColor & {
  isDisabled?: boolean;
}) => {
  return css`
    ${Label} {
      color: ${label.idle.color};

      ${isDisabled === true &&
      `
        color: ${label.disabled.color};
      `}
    }

    ${RadioNotChecked} {
      background-color: ${radioNotChecked.idle.backgroundColor};
      border-color: ${radioNotChecked.idle.borderColor};
      color: ${radioNotChecked.idle.color};

      ${isDisabled === true &&
      `
        background-color: ${radioNotChecked.disabled.backgroundColor};
        border-color: ${radioNotChecked.disabled.borderColor};
        color: ${radioNotChecked.disabled.color};
      `}
    }

    ${RadioChecked} {
      background-color: ${radioChecked.idle.backgroundColor};
      border-color: ${radioChecked.idle.borderColor};
      color: ${radioChecked.idle.color};

      ${isDisabled === true &&
      `
        background-color: ${radioChecked.disabled.backgroundColor};
        border-color: ${radioChecked.disabled.borderColor};
        color: ${radioChecked.disabled.color};
      `}
    }
  `;
};

/**
 * When defining colors, make sure every color has the same type of styles so
 * they can overwrite each other.
 */
export const colors: {
  [key in NonNullable<RadioProps['color']>]: (
    theme: DefaultTheme,
    color?: {
      isDisabled?: boolean;
    }
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  light: (theme, color = {}) =>
    generateColor({
      ...color,
      label: {
        idle: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      radioNotChecked: {
        idle: {
          backgroundColor: theme.palettes.light[100],
          color: theme.palettes.dark[700],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[100],
          color: theme.palettes.light[400],
          borderColor: theme.palettes.light[400]
        }
      },
      radioChecked: {
        idle: {
          backgroundColor: theme.palettes.dark[700],
          color: theme.palettes.light[100],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[400],
          color: theme.palettes.light[100],
          borderColor: theme.palettes.light[400]
        }
      }
    })
};
