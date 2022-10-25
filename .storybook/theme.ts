import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // UI
  appBg: '#ffe6e2',
  appContentBg: '#fff',
  appBorderColor: '#ffc4bb',
  appBorderRadius: 4,
  colorPrimary: '#3a0018',
  colorSecondary: '#fe5b3c',

  // Typography
  fontBase: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  fontCode: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace`,

  // Text colors
  textColor: '#1b1b1b',
  textInverseColor: '#efefef',

  // Toolbar default and active colors
  barTextColor: '#444',
  barSelectedColor: '#fe5b3c',
  barBg: '#fff',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#efefef',
  inputTextColor: '#1b1b1b',
  inputBorderRadius: 4,

  // Brand
  brandTitle: 'Modo Hockey',
  brandUrl: 'https://www.modohockey.se/',
  brandImage: '/modo.png'
});
