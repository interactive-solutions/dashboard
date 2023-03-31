import { ThemeOptions, LinkProps } from '@mui/material';

import type {} from '@mui/lab/themeAugmentation';
import { NextLinkStyled } from 'components/tools';

export const components: ThemeOptions['components'] = {
  MuiLink: {
    defaultProps: {
      component: NextLinkStyled,
    } as LinkProps,
  },
  MuiButton: {
    styleOverrides: {
      root: () => ({
        textTransform: 'none',
      }),
      sizeSmall: ({ theme }) => ({
        padding: theme.spacing(0.5, 1.25),
        borderRadius: 16,
      }),
      sizeMedium: ({ theme }) => ({
        padding: theme.spacing(0.75, 2),
        borderRadius: 19,
      }),
      sizeLarge: ({ theme }) => ({
        padding: theme.spacing(1, 2.75),
        borderRadius: 22,
      }),
    },
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
      LinkComponent: NextLinkStyled,
      variant: 'contained',
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      LinkComponent: NextLinkStyled,
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
      variant: 'contained',
    },
  },
  MuiLoadingButton: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
      variant: 'contained',
    },
  },
};
