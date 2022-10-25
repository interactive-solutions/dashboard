import { css } from 'styled-components';

export const headings = css`
  h1 {
    ${({ theme }) => theme.typography.display[10]};
  }

  h2 {
    ${({ theme }) => theme.typography.headline[20]};
  }

  h3 {
    ${({ theme }) => theme.typography.title[40]};
  }

  h4 {
    ${({ theme }) => theme.typography.title[30]};
  }

  h5 {
    ${({ theme }) => theme.typography.title[20]};
  }

  h6 {
    ${({ theme }) => theme.typography.title[10]};
  }
`;
