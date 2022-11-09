import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { getFlattenSimpleInterpolationValue } from 'styles/tools';
import { TextFieldSize, TextFieldSizes } from 'types/textField';

import {
  Field,
  FieldHolder,
  IconLeft,
  IconRight,
  Label,
  AddonRight,
  AddonLeft
} from '../TextField.styles';

export const generateSize = ({
  rounded,
  hasIconRight,
  hasIconLeft,
  paddingTopAndBottom,
  paddingRightAndLeft,
  fieldTypography,
  labelTypography,
  borderWidth,
  textareaMinHeight,
  hasAddonRight,
  hasAddonLeft,
  addonTypography,
  addonPaddingRightAndLeft
}: TextFieldSize) => {
  return css`
    ${Label} {
      ${labelTypography};
    }

    ${Field} {
      ${fieldTypography}
      padding: ${paddingTopAndBottom} ${paddingRightAndLeft};
      border-width: ${borderWidth};

      ${hasIconRight &&
      `
        /* Padding ends + line height + border */
        padding-right: calc((${paddingTopAndBottom} * 2) + ${getFlattenSimpleInterpolationValue(
        fieldTypography,
        'line-height'
      )} + (${borderWidth} * 2));
      `}

      ${hasIconLeft &&
      `
        /* Padding ends + line height + border */
        padding-left: calc((${paddingTopAndBottom} * 2) + ${getFlattenSimpleInterpolationValue(
        fieldTypography,
        'line-height'
      )} + (${borderWidth} * 2));
      `}
    }

    ${!!textareaMinHeight &&
    `
      textarea${Field} {
        min-height: ${textareaMinHeight};
      }
    `}

    ${Field}, ${FieldHolder} {
      border-radius: ${({ theme }) => theme.border.radius};
    }

    ${rounded === true &&
    `
      ${Field}, ${FieldHolder} {
        /* Padding ends + line height + border (divided by 2) */
        border-radius: calc(((${paddingTopAndBottom} * 2) + ${getFlattenSimpleInterpolationValue(
      fieldTypography,
      'line-height'
    )} + (${borderWidth} * 2)) / 2);
      }
    `}

    ${IconRight}, ${IconLeft} {
      /* Padding ends + line height + border */
      height: calc(
        (${paddingTopAndBottom} * 2) +
          ${getFlattenSimpleInterpolationValue(fieldTypography, 'line-height')} +
          (${borderWidth} * 2)
      );
    }

    ${Field}, ${FieldHolder} {
      ${hasAddonRight === true &&
      `
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `}

      ${hasAddonLeft === true &&
      `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `}
    }

    ${AddonRight}, ${AddonLeft} {
      ${addonTypography};
      padding-right: ${addonPaddingRightAndLeft};
      padding-left: ${addonPaddingRightAndLeft};
      border-width: ${borderWidth};
      border-style: solid;
    }

    ${AddonRight} {
      border-top-right-radius: ${({ theme }) => theme.border.radius};
      border-bottom-right-radius: ${({ theme }) => theme.border.radius};
      border-left: none;

      /* Padding ends + line height + border */
      ${rounded === true &&
      `
        border-top-right-radius: calc(((${paddingTopAndBottom} * 2) + ${getFlattenSimpleInterpolationValue(
        fieldTypography,
        'line-height'
      )} + (${borderWidth} * 2)) / 2);
        border-bottom-right-radius: calc(((${paddingTopAndBottom} * 2) + ${getFlattenSimpleInterpolationValue(
        fieldTypography,
        'line-height'
      )} + (${borderWidth} * 2)) / 2);
      `}
    }

    ${AddonLeft} {
      border-top-left-radius: ${({ theme }) => theme.border.radius};
      border-bottom-left-radius: ${({ theme }) => theme.border.radius};
      border-right: none;

      /* Padding ends + line height + border */
      ${rounded === true &&
      `
        border-top-left-radius: calc(((${paddingTopAndBottom} * 2) + ${getFlattenSimpleInterpolationValue(
        fieldTypography,
        'line-height'
      )} + (${borderWidth} * 2)) / 2);
        border-bottom-left-radius: calc(((${paddingTopAndBottom} * 2) + ${getFlattenSimpleInterpolationValue(
        fieldTypography,
        'line-height'
      )} + (${borderWidth} * 2)) / 2);
      `}
    }
  `;
};

/**
 * When defining sizes, make sure every size has the same type of styles so they
 * can overwrite each other.
 */
export const sizes: {
  [key in TextFieldSizes]: (
    theme: DefaultTheme,
    size?: {
      rounded?: boolean;
      hasIconRight?: boolean;
      hasIconLeft?: boolean;
      hasAddonRight?: boolean;
      hasAddonLeft?: boolean;
    }
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  small: (theme, size = {}) =>
    generateSize({
      ...size,
      paddingTopAndBottom: theme.spacing(0.75),
      paddingRightAndLeft: theme.spacing(1.25),
      fieldTypography: theme.typography.body[20],
      labelTypography: theme.typography.title[10],
      borderWidth: '2px',
      textareaMinHeight: '78px',
      addonTypography: theme.typography.body[10],
      addonPaddingRightAndLeft: theme.spacing(1)
    }),
  medium: (theme, size = {}) =>
    generateSize({
      ...size,
      paddingTopAndBottom: theme.spacing(1),
      paddingRightAndLeft: theme.spacing(1.5),
      fieldTypography: theme.typography.body[20],
      labelTypography: theme.typography.title[10],
      borderWidth: '2px',
      textareaMinHeight: '86px',
      addonTypography: theme.typography.body[10],
      addonPaddingRightAndLeft: theme.spacing(1)
    }),
  large: (theme, size = {}) =>
    generateSize({
      ...size,
      paddingTopAndBottom: theme.spacing(1.25),
      paddingRightAndLeft: theme.spacing(1.75),
      fieldTypography: theme.typography.body[20],
      labelTypography: theme.typography.title[10],
      borderWidth: '2px',
      textareaMinHeight: '94px',
      addonTypography: theme.typography.body[10],
      addonPaddingRightAndLeft: theme.spacing(1)
    })
};
