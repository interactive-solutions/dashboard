import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { CheckboxSize, CheckboxSizes } from 'types/checkbox';

import { Label, CheckboxNotChecked, LabelHolder } from '../Checkbox.styles';

export const generateSize = ({
  labelTypography,
  checkboxSize,
  checkboxBorderWidth,
  labelGap
}: CheckboxSize) => {
  return css`
    ${Label} {
      ${labelTypography};
    }

    ${CheckboxNotChecked} {
      border-width: ${checkboxBorderWidth};
      min-width: ${checkboxSize};
      max-width: ${checkboxSize};
      min-height: ${checkboxSize};
      max-height: ${checkboxSize};
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
  [key in CheckboxSizes]: (
    theme: DefaultTheme
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  small: (theme) =>
    generateSize({
      labelTypography: theme.typography.body[10],
      checkboxSize: '16px',
      checkboxBorderWidth: '2px',
      labelGap: theme.spacing(0.75)
    }),
  medium: (theme) =>
    generateSize({
      labelTypography: theme.typography.body[20],
      checkboxSize: '18px',
      checkboxBorderWidth: '2px',
      labelGap: theme.spacing(1)
    }),
  large: (theme) =>
    generateSize({
      labelTypography: theme.typography.body[30],
      checkboxSize: '20px',
      checkboxBorderWidth: '2px',
      labelGap: theme.spacing(1.25)
    })
};
