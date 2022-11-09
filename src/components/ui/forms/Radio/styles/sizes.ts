import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { RadioSize, RadioSizes } from 'types/radio';

import { Label, RadioNotChecked, LabelHolder } from '../Radio.styles';

export const generateSize = ({
  labelTypography,
  radioSize,
  radioBorderWidth,
  labelGap
}: RadioSize) => {
  return css`
    ${Label} {
      ${labelTypography};
    }

    ${RadioNotChecked} {
      border-width: ${radioBorderWidth};
      min-width: ${radioSize};
      max-width: ${radioSize};
      min-height: ${radioSize};
      max-height: ${radioSize};
    }

    ${LabelHolder} {
      padding-left: ${labelGap};
    }
  `;
};

/**
 * When defining sizes, make sure every size has the same type of styles so they
 * can overwrite each other.
 */
export const sizes: {
  [key in RadioSizes]: (
    theme: DefaultTheme
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  small: (theme) =>
    generateSize({
      labelTypography: theme.typography.body[10],
      radioSize: '16px',
      radioBorderWidth: '2px',
      labelGap: theme.spacing(0.75)
    }),
  medium: (theme) =>
    generateSize({
      labelTypography: theme.typography.body[20],
      radioSize: '18px',
      radioBorderWidth: '2px',
      labelGap: theme.spacing(1)
    }),
  large: (theme) =>
    generateSize({
      labelTypography: theme.typography.body[30],
      radioSize: '20px',
      radioBorderWidth: '2px',
      labelGap: theme.spacing(1.25)
    })
};
