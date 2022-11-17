import { isTabbing } from '@entire.se/components';
import { css } from 'styled-components';

export const scaffolding = css`
  html {
    font-size: 100%;
    min-height: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    word-break: break-word;
    background-color: ${({ theme }) => theme.surfaces.light};
    color: ${({ theme }) => theme.surfaces.onLight};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    ${({ theme }) => theme.typography.body[20]};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  hr {
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.surfaces.dark};
  }

  ul,
  ol,
  dd {
    margin-left: ${({ theme }) => theme.spacing(4)};
  }

  a,
  area,
  button,
  [role='button'],
  input:not([type='range']),
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }

  body[class*='@entire.se__is-tabbing'] {
    a:focus,
    input:focus,
    button:focus,
    label:focus,
    select:focus,
    textarea:focus,
    [role='button']:focus,
    .react-select__control:focus {
      ${isTabbing};
    }
  }
`;
