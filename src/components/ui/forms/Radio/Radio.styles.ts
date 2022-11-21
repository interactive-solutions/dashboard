import { RadioColor, RadioSize, RadioSizes } from '@entire.se/components';
import { DefaultTheme } from 'styled-components';

import { RadioProps } from './Radio';

export const getColors = (
  theme: DefaultTheme
): {
  [key in NonNullable<RadioProps['color']>]: RadioColor;
} => ({
  light: {
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
  }
});

export const getSizes = (
  theme: DefaultTheme
): {
  [key in RadioSizes]: RadioSize;
} => ({
  small: {
    labelTypography: theme.typography.body[10],
    radioSize: '16px',
    radioBorderWidth: '2px',
    labelGap: theme.spacing(0.75)
  },
  medium: {
    labelTypography: theme.typography.body[20],
    radioSize: '18px',
    radioBorderWidth: '2px',
    labelGap: theme.spacing(1)
  },
  large: {
    labelTypography: theme.typography.body[30],
    radioSize: '20px',
    radioBorderWidth: '2px',
    labelGap: theme.spacing(1.25)
  }
});
