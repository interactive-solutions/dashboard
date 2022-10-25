import styled from 'styled-components';

export const Root = styled.header`
  background-color: ${({ theme }) => theme.surfaces.dark};
  text-align: center;
  padding: ${({ theme }) => theme.spacing(2)};

  &,
  * {
    color: ${({ theme }) => theme.surfaces.onDark};
  }
`;
