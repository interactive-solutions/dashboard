import { ThemeOptions } from '@mui/material';
import { red } from '@mui/material/colors';

export const palette: ThemeOptions['palette'] = {
  primary: {
    main: '#FD5A3B',
  },
  secondary: {
    main: '#390115',
  },
  grey: {
    100: '#ffffff',
    200: '#FAFAFA',
    300: '#F2F2F2',
    400: '#B2B2B2',
    500: '#262626',
    600: '#171717',
    700: '#000000',
  },
  error: {
    main: red.A400,
  },
};
