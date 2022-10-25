import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-align: left;
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;
