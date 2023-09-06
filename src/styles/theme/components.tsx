import { ThemeOptions, LinkProps } from '@mui/material';

import type {} from '@mui/lab/themeAugmentation';
import { NextLinkStyled } from 'components/tools';

const fontBase = 'fonts/TWKLausanne/TWKLausanne-';

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
  MuiCssBaseline: {
    styleOverrides: `
        @font-face {
            font-family: 'Twk Lausanne';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url('${fontBase}300.otf') format('otf'),
                url('${fontBase}300.ttf') format('ttf'), 
                url('${fontBase}300.woff') format('woff'), 
                url('${fontBase}300.woff2') format('woff2')
        },
         @font-face {
            font-family: 'Twk Lausanne';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url('${fontBase}500.otf') format('otf'),
                url('${fontBase}500.ttf') format('ttf'), 
                url('${fontBase}500.woff') format('woff'), 
                url('${fontBase}500.woff2') format('woff2')
        }
      `,
  },
};
