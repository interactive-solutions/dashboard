import { red } from '@mui/material/colors';

// brandColors, textColors and uiColors are defined in the design
const brandColors = {
  burgundy: '#3A0018',
  entireOrange: '#FE5B3C',
  lightOrange: '#FFE6E2',
  black: '#1B1B1B',
  darkGray: '#444444',
  deepPurple: '#9B96FF',
  lightPurple: '#ECECFF',
  gray: '#EFEFEF',
  white: '#FFFFFF',
};

const textColors = {
  primary: '#1B1B1B',
  secondary: '#444444',
};

const uiColors = {
  successGreen: '#4B9C54',
  errorRed: '#DC391B',
  deepPurpleHover: '#8B85F8',
  entireOrangeHover: '#D14E35',
  lightBlack: '#767676',
  darkWhite: '#D8CCD1',
};

export const palette = {
  primary: {
    main: brandColors.entireOrange,
    light: brandColors.lightOrange,
    dark: brandColors.burgundy,
  },
  secondary: {
    main: brandColors.deepPurple,
    light: brandColors.lightPurple,
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
  text: {
    primary: textColors.primary,
    secondary: textColors.secondary,
  },
  brandColors,
  uiColors,
};
