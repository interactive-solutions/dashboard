import { ThemeOptions, LinkProps } from '@mui/material';

import { NextLinkStyled } from 'components/tools';

export const components: ThemeOptions['components'] = {
  MuiLink: {
    defaultProps: {
      component: NextLinkStyled
    } as LinkProps
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      LinkComponent: NextLinkStyled
    }
  },
  MuiButtonGroup: {
    defaultProps: {
      disableRipple: true
    }
  }
};
