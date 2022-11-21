import {
  CheckboxColor,
  CheckboxSize,
  CheckboxSizes
} from '@entire.se/components';
import { DefaultTheme } from 'styled-components';

import { CheckboxProps } from './Checkbox';

export const getColors = (
  theme: DefaultTheme
): {
  [key in NonNullable<CheckboxProps['color']>]: CheckboxColor;
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
    checkboxNotChecked: {
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
    checkboxChecked: {
      idle: {
        backgroundColor: theme.palettes.dark[700],
        color: theme.palettes.light[100],
        borderColor: theme.palettes.dark[700]
      },
      disabled: {
        backgroundColor: theme.palettes.light[100],
        color: theme.palettes.light[400],
        borderColor: theme.palettes.light[400]
      }
    }
  }
});

export const getSizes = (
  theme: DefaultTheme
): {
  [key in CheckboxSizes]: CheckboxSize;
} => ({
  small: {
    labelTypography: theme.typography.body[10],
    checkboxSize: '16px',
    checkboxBorderWidth: '2px',
    checkboxBorderRadius: theme.border.radius,
    labelGap: theme.spacing(0.75)
  },
  medium: {
    labelTypography: theme.typography.body[10],
    checkboxSize: '16px',
    checkboxBorderWidth: '2px',
    checkboxBorderRadius: theme.border.radius,
    labelGap: theme.spacing(0.75)
  },
  large: {
    labelTypography: theme.typography.body[30],
    checkboxSize: '20px',
    checkboxBorderWidth: '2px',
    checkboxBorderRadius: theme.border.radius,
    labelGap: theme.spacing(1.25)
  }
});
