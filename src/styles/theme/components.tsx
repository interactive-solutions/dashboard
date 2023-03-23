import { ThemeOptions, LinkProps } from '@mui/material';

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
        padding: theme.spacing(0.5, 1),
        borderRadius: 15,
      }),
      sizeMedium: ({ theme }) => ({
        padding: theme.spacing(1, 2),
        borderRadius: 20,
      }),
      sizeLarge: ({ theme }) => ({
        padding: theme.spacing(1.5, 3),
        borderRadius: 25,
      }),
    },
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
      LinkComponent: NextLinkStyled,
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
    },
  },
};
