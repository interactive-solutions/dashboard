import { createTheme } from '@mui/material';

import { breakpoints } from './breakpoints';
import { components } from './components';
import { direction } from './direction';
import { mixins } from './mixins';
import { palette } from './palette';
import { shadows } from './shadows';
import { shape } from './shape';
import { spacing } from './spacing';
import { transitions } from './transitions';
import { typography } from './typography';
import { zIndex } from './zIndex';

export const theme = createTheme({
  breakpoints,
  components,
  direction,
  mixins,
  palette,
  shadows,
  shape,
  spacing,
  transitions,
  typography,
  zIndex,
});
