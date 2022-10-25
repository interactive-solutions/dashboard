import { css } from 'styled-components';

export const placeholder = css`
  ${({ theme }) =>
    theme.placeholder(`
      color: ${theme.palettes.dark[700]};
    `)};
`;
