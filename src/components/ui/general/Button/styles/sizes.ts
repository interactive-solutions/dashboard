import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { getFlattenSimpleInterpolationValue } from 'styles/tools';
import { ButtonSize, ButtonSizes } from 'types/button';

import { IconRight, IconLeft } from '../Button.styles';

export const generateSize = ({
  rounded,
  paddingTopAndBottom,
  paddingRightAndLeft,
  typography,
  borderWidth,
  iconMargin
}: ButtonSize) => {
  return css`
    padding: ${paddingTopAndBottom} ${paddingRightAndLeft};
    font-size: ${getFlattenSimpleInterpolationValue(typography, 'font-size')};
    line-height: ${getFlattenSimpleInterpolationValue(
      typography,
      'line-height'
    )};
    border-width: ${borderWidth};
    border-radius: ${({ theme }) => theme.border.radius};

    ${rounded === true &&
    `
      /* Padding ends + line height + border (divided by 2) */
      border-radius: calc(((${paddingTopAndBottom} * 2) + ${getFlattenSimpleInterpolationValue(
      typography,
      'line-height'
    )} + (${borderWidth} * 2)) / 2);
    `}

    ${IconRight} {
      margin-left: ${iconMargin};
    }

    ${IconLeft} {
      margin-right: ${iconMargin};
    }
  `;
};

/**
 * When defining sizes, make sure every size has the same type of styles so they
 * can overwrite each other.
 */
export const sizes: {
  [key in ButtonSizes]: (
    theme: DefaultTheme,
    size?: {
      rounded?: boolean;
    }
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  small: (theme, size = {}) =>
    generateSize({
      ...size,
      paddingTopAndBottom: theme.spacing(0.5),
      paddingRightAndLeft: theme.spacing(2),
      typography: theme.typography.body[20],
      borderWidth: '2px',
      iconMargin: theme.spacing(1)
    }),
  medium: (theme, size = {}) =>
    generateSize({
      ...size,
      paddingTopAndBottom: theme.spacing(1),
      paddingRightAndLeft: theme.spacing(3),
      typography: theme.typography.body[20],
      borderWidth: '2px',
      iconMargin: theme.spacing(1)
    }),
  large: (theme, size = {}) =>
    generateSize({
      ...size,
      paddingTopAndBottom: theme.spacing(1.5),
      paddingRightAndLeft: theme.spacing(4),
      typography: theme.typography.body[20],
      borderWidth: '2px',
      iconMargin: theme.spacing(1)
    })
};
