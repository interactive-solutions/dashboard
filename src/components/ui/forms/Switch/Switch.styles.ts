import { SwitchColor, SwitchSize, SwitchSizes } from '@entire.se/components';
import { DefaultTheme } from 'styled-components';

import { SwitchProps } from './Switch';

export const getColors = (
  theme: DefaultTheme
): {
  [key in NonNullable<SwitchProps['color']>]: SwitchColor;
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
    switch: {
      idle: {
        trackBackgroundColor: theme.palettes.dark[700],
        trackBackgroundColorWhenChecked: theme.surfaces.primary,
        knobBackgroundColor: theme.palettes.light[100]
      },
      disabled: {
        trackBackgroundColor: theme.palettes.light[400],
        trackBackgroundColorWhenChecked: theme.palettes.light[400],
        knobBackgroundColor: theme.palettes.dark[400]
      }
    }
  }
});

export const getSizes = (
  theme: DefaultTheme
): {
  [key in SwitchSizes]: SwitchSize;
} => ({
  small: {
    trackWidth: '44px',
    trackHeight: '22px',
    knobSize: '14px',
    labelTypography: theme.typography.body[10],
    labelGap: theme.spacing(0.75)
  },
  medium: {
    trackWidth: '52px',
    trackHeight: '26px',
    knobSize: '18px',
    labelTypography: theme.typography.body[20],
    labelGap: theme.spacing(1)
  },
  large: {
    trackWidth: '60px',
    trackHeight: '30px',
    knobSize: '20px',
    labelTypography: theme.typography.body[30],
    labelGap: theme.spacing(1.25)
  }
});
