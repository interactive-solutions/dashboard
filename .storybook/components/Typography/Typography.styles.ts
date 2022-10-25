import styled from 'styled-components';

export const Items = styled.div`
  margin: ${({ theme }) => theme.spacing(2, 0)};
  display: flex;
  flex-direction: column-reverse;
`;
