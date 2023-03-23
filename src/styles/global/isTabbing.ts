import { css } from '@mui/material';

export const isTabbing = css`
  body[class*='@entire.se__is-tabbing'] {
    a:focus,
    input:focus,
    button:focus,
    label:focus,
    select:focus,
    textarea:focus,
    [role='button']:focus {
      outline: auto 5px !important;
      outline: auto 5px -webkit-focus-ring-color !important;
    }
  }
`;
