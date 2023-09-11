import { ThemeOptions } from '@mui/material';

import { palette } from './palette';

export const typography: ThemeOptions['typography'] = {
  fontFamily: 'Twk Lausanne',
  h1: {
    fontSize: '120px',
    fontWeight: '500',
    color: palette.brandColors.burgundy,
    lineHeight: '1',
    letterSpacing: '-2px',
  },
  h2: {
    fontWeight: '500',
    fontSize: '24px',
    color: palette.brandColors.entireOrange,
    borderBottom: `1px solid ${palette.brandColors.entireOrange}`,
    width: '100%',
  },
  h3: {
    letterSpacing: '-1px',
    color: palette.textColors.primary,
    fontSize: '40px',
    fontWeight: '500',
  },
};
