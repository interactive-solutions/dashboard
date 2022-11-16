import { ButtonColor, ButtonSize, ButtonSizes } from '@entire.se/components';
import { DefaultTheme } from 'styled-components';

import { ButtonProps } from './Button';

export const getColors = (
  theme: DefaultTheme
): {
  [key in NonNullable<ButtonProps['color']>]: ButtonColor;
} => ({
  primary: {
    solid: {
      idle: {
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
      idle: {
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
  }
});

export const getSizes = (
  theme: DefaultTheme
): {
  [key in ButtonSizes]: ButtonSize;
} => ({
  small: {
    paddingTopAndBottom: theme.spacing(0.75),
    paddingRightAndLeft: theme.spacing(2),
    typography: theme.typography.body[20],
    borderWidth: '2px',
    borderRadius: theme.border.radius,
    iconGap: theme.spacing(1)
  },
  medium: {
    paddingTopAndBottom: theme.spacing(1),
    paddingRightAndLeft: theme.spacing(3),
    typography: theme.typography.body[20],
    borderWidth: '2px',
    borderRadius: theme.border.radius,
    iconGap: theme.spacing(1)
  },
  large: {
    paddingTopAndBottom: theme.spacing(1.25),
    paddingRightAndLeft: theme.spacing(4),
    typography: theme.typography.body[20],
    borderWidth: '2px',
    borderRadius: theme.border.radius,
    iconGap: theme.spacing(1)
  }
});
