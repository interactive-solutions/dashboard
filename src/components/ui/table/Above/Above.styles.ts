import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(0, 2, 3, 2)};
`;
