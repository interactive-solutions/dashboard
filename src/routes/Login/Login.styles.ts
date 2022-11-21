import styled from 'styled-components';

import { Container as ContainerComponent } from 'components/ui/general';

export const Root = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

export const Container = styled(ContainerComponent)`
  max-width: 375px;
`;

export const Heading = styled.h1`
  text-align: center;
`;
