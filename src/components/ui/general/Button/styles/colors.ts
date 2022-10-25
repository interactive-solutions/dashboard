import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { ButtonColor } from 'types/button';

import { ButtonProps } from '../Button';

export const generateColor = ({ isGhost, solid, ghost }: ButtonColor) => {
  return css`
    ${!!solid &&
    !isGhost &&
    `
      background-color: ${solid.default.backgroundColor};
      color: ${solid.default.color};
      border-color: ${solid.default.borderColor};

      &:disabled {
        background-color: ${solid.disabled.backgroundColor};
        color: ${solid.disabled.color};
        border-color: ${solid.disabled.borderColor};
      }

      &:not(:disabled):hover {
        background-color: ${solid.hover.backgroundColor};
        color: ${solid.hover.color};
        border-color: ${solid.hover.borderColor};
      }
    `}

    ${!!ghost &&
    isGhost &&
    `
      background-color: ${ghost.default.backgroundColor};
      color: ${ghost.default.color};
      border-color: ${ghost.default.borderColor};

      &:disabled {
        background-color: ${ghost.disabled.backgroundColor};
        color: ${ghost.disabled.color};
        border-color: ${ghost.disabled.borderColor};
      }

      &:not(:disabled):hover {
        background-color: ${ghost.hover.backgroundColor};
        color: ${ghost.hover.color};
        border-color: ${ghost.hover.borderColor};
      }
    `}
  `;
};

/**
 * When defining colors, make sure every color has the same type of styles so
 * they can overwrite each other.
 */
export const colors: {
  [key in NonNullable<ButtonProps['color']>]: (
    theme: DefaultTheme,
    color?: {
      isGhost?: boolean;
    }
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  primary: (theme, color = {}) =>
    generateColor({
      ...color,
      solid: {
        default: {
          backgroundColor: theme.surfaces.primary,
          color: theme.palettes.light[100],
          borderColor: theme.surfaces.primary
        },
        disabled: {
          backgroundColor: theme.palettes.light[400],
          color: theme.palettes.dark[400],
          borderColor: theme.palettes.light[400]
        },
        hover: {
          backgroundColor: theme.palettes.primary[700],
          color: theme.palettes.light[100],
          borderColor: theme.palettes.primary[700]
        }
      },
      ghost: {
        default: {
          backgroundColor: 'transparent',
          color: theme.palettes.dark[700],
          borderColor: theme.surfaces.primary
        },
        disabled: {
          backgroundColor: 'transparent',
          color: theme.palettes.dark[400],
          borderColor: theme.palettes.light[400]
        },
        hover: {
          backgroundColor: theme.surfaces.primary,
          color: theme.palettes.light[100],
          borderColor: theme.surfaces.primary
        }
      }
    })
};
