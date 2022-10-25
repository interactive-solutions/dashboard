import { css } from 'styled-components';

export const links = css`
  a {
    color: ${({ theme }) => theme.surfaces.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.ease(['color'])};

    &:hover {
      color: ${({ theme }) => theme.palettes.primary[700]};
    }
  }
`;
