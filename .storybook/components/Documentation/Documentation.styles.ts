import styled from 'styled-components';

import { headings } from '../../../src/styles/elements';

export const Content = styled.div``;

export const Root = styled.div`
  ${Content} {
    ${headings};

    p,
    blockquote,
    dl,
    dd,
    ol,
    ul,
    li,
    a,
    form,
    fieldset,
    legend,
    table,
    figure,
    th,
    td,
    caption,
    hr {
      font-size: 16px;
      line-height: 22px;
      color: ${({ theme }) => theme.surfaces.onLight};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${({ theme }) => theme.surfaces.onLight};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    }

    h1 {
      border-bottom: 1px solid ${({ theme }) => theme.surfaces.onLight};
    }

    h2 {
      border-bottom: 1px solid ${({ theme }) => theme.surfaces.onLight};
    }

    a {
      color: #fe5b3c;

      &:hover {
        text-decoration: underline;
      }
    }

    code {
      background-color: #efefef;
      border-radius: ${({ theme }) => theme.border.radius};
      border-color: #efefef;
      padding: 1px 3px;
    }

    code,
    pre * {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  }
`;
