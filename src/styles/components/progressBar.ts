import { css } from 'styled-components';

export const progressBar = css`
  .progress-bar {
    background: ${({ theme }) => theme.surfaces.primary};
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }
`;
