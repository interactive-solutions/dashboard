import 'styled-components';
import { ThemeDefault, ThemePaletteRange } from '@entire.se/components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeDefault {
    palettes: ThemeDefault['palettes'] & {
      [name in 'primary' | 'error' | 'success' | 'info' | 'warning']: {
        [range in ThemePaletteRange]: string;
      };
    };
    surfaces: ThemeDefault['surfaces'] & {
      primary: string;
      onPrimary: string;
      error: string;
      onError: string;
      success: string;
      onSuccess: string;
      info: string;
      onInfo: string;
      warning: string;
      onWarning: string;
    };
  }
}
