import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { SwitchSize, SwitchSizes } from 'types/switch';

import {
  Label,
  SwitchHolder,
  Switch,
  LabelRight,
  LabelLeft,
  Input
} from '../Switch.styles';

export const generateSize = ({
  labelTypography,
  trackWidth,
  trackHeight,
  knobSize,
  labelGap
}: SwitchSize) => {
  return css`
    ${Label} {
      ${labelTypography};
    }

    ${SwitchHolder} {
      min-width: ${trackWidth};
      max-width: ${trackWidth};
      min-height: ${trackHeight};
      max-height: ${trackHeight};
      border-radius: calc(${trackHeight} / 2);
    }

    ${Switch} {
      width: ${trackHeight};
      height: ${trackHeight};
      border-radius: calc(${trackHeight} / 2);

      &::after {
        width: ${knobSize};
        height: ${knobSize};
      }
    }

    ${Input}:checked ~ ${SwitchHolder} ${Switch} {
      transform: translateX(calc(${trackWidth} - ${trackHeight}));
    }

    ${LabelRight} {
      padding-left: ${labelGap};
    }

    ${LabelLeft} {
      padding-right: ${labelGap};
    }
  `;
};

/**
 * When defining sizes, make sure every size has the same type of styles so they
 * can overwrite each other.
 */
export const sizes: {
  [key in SwitchSizes]: (
    theme: DefaultTheme
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  small: (theme) =>
    generateSize({
      trackWidth: '44px',
      trackHeight: '22px',
      knobSize: '14px',
      labelTypography: theme.typography.body[10],
      labelGap: theme.spacing(0.75)
    }),
  medium: (theme) =>
    generateSize({
      trackWidth: '52px',
      trackHeight: '26px',
      knobSize: '18px',
      labelTypography: theme.typography.body[20],
      labelGap: theme.spacing(1)
    }),
  large: (theme) =>
    generateSize({
      trackWidth: '60px',
      trackHeight: '30px',
      knobSize: '20px',
      labelTypography: theme.typography.body[30],
      labelGap: theme.spacing(1.25)
    })
};
