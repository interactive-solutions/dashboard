import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Palette {
    brandColors: {
      burgundy: string;
      entireOrange: string;
      lightOrange: string;
      black: string;
      darkGray: string;
      deepPurple: string;
      lightPurple: string;
      gray: string;
      white: string;
    };
    textColors: {
      primary: string;
      secondary: string;
    };
    uiColors: {
      successGreen: string;
      errorRed: string;
      deepPurpleHover: string;
      entireOrangeHover: string;
      lightBlack: string;
      darkWhite: string;
    };
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface PaletteOptions {
    brandColors: {
      burgundy: string;
      entireOrange: string;
      lightOrange: string;
      black: string;
      darkGray: string;
      deepPurple: string;
      lightPurple: string;
      gray: string;
      white: string;
    };
    textColors: {
      primary: string;
      secondary: string;
    };
    uiColors: {
      successGreen: string;
      errorRed: string;
      deepPurpleHover: string;
      entireOrangeHover: string;
      lightBlack: string;
      darkWhite: string;
    };
  }
}
