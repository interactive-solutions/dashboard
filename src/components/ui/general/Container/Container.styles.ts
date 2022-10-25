import styled from 'styled-components';

import { ContainerProps } from './Container';

export const Root = styled.div<{
  $fullWidth?: ContainerProps['fullWidth'];
}>`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  padding-right: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(2)};

  ${({ $fullWidth }) =>
    !!$fullWidth &&
    `
      max-width: none;
    `}
`;
