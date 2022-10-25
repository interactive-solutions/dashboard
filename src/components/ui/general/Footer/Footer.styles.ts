import styled from 'styled-components';

export const Root = styled.footer`
  background-color: ${({ theme }) => theme.surfaces.dark};
  color: ${({ theme }) => theme.surfaces.onDark};
  text-align: center;
  padding: ${({ theme }) => theme.spacing(2)};
`;
