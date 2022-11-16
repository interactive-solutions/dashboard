import {
  TextFieldColor,
  TextFieldSize,
  TextFieldSizes
} from '@entire.se/components';
import { DefaultTheme } from 'styled-components';

import { TextFieldProps } from './TextField';

export const getColors = (
  theme: DefaultTheme
): {
  [key in NonNullable<TextFieldProps['color']>]: TextFieldColor;
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
    field: {
      idle: {
        backgroundColor: theme.palettes.light[100],
        color: theme.palettes.dark[700],
        borderColor: theme.palettes.dark[700],
        placeholder: theme.palettes.dark[700]
      },
      disabled: {
        backgroundColor: theme.palettes.light[400],
        color: theme.palettes.dark[400],
        borderColor: theme.palettes.dark[400],
        placeholder: theme.palettes.dark[400]
      },
      readOnly: {
        backgroundColor: theme.palettes.light[400],
        color: theme.palettes.dark[400],
        borderColor: theme.palettes.dark[400],
        placeholder: theme.palettes.dark[400]
      },
      hover: {
        borderColor: theme.surfaces.primary
      },
      focus: {
        borderColor: theme.surfaces.primary
      }
    },
    addon: {
      idle: {
        backgroundColor: theme.palettes.dark[700],
        color: theme.palettes.light[100],
        borderColor: theme.palettes.dark[700]
      },
      disabled: {
        backgroundColor: theme.palettes.light[400],
        color: theme.palettes.dark[400],
        borderColor: theme.palettes.dark[400]
      },
      readOnly: {
        backgroundColor: theme.palettes.light[400],
        color: theme.palettes.dark[400],
        borderColor: theme.palettes.dark[400]
      }
    }
  }
});

export const getSizes = (
  theme: DefaultTheme
): {
  [key in TextFieldSizes]: TextFieldSize;
} => ({
  small: {
    paddingTopAndBottom: theme.spacing(0.75),
    paddingRightAndLeft: theme.spacing(1.25),
    fieldTypography: theme.typography.body[20],
    labelTypography: theme.typography.title[10],
    labelGap: theme.spacing(0.5),
    borderWidth: '2px',
    borderRadius: theme.border.radius,
    textareaMinHeight: '78px',
    addonTypography: theme.typography.body[10],
    addonPaddingRightAndLeft: theme.spacing(1)
  },
  medium: {
    paddingTopAndBottom: theme.spacing(1),
    paddingRightAndLeft: theme.spacing(1.5),
    fieldTypography: theme.typography.body[20],
    labelTypography: theme.typography.title[10],
    labelGap: theme.spacing(0.5),
    borderWidth: '2px',
    borderRadius: theme.border.radius,
    textareaMinHeight: '86px',
    addonTypography: theme.typography.body[10],
    addonPaddingRightAndLeft: theme.spacing(1)
  },
  large: {
    paddingTopAndBottom: theme.spacing(1.25),
    paddingRightAndLeft: theme.spacing(1.75),
    fieldTypography: theme.typography.body[20],
    labelTypography: theme.typography.title[10],
    labelGap: theme.spacing(0.5),
    borderWidth: '2px',
    borderRadius: theme.border.radius,
    textareaMinHeight: '94px',
    addonTypography: theme.typography.body[10],
    addonPaddingRightAndLeft: theme.spacing(1)
  }
});
