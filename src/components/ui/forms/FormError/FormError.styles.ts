import styled from 'styled-components';

export const Root = styled.div`
  color: ${({ theme }) => theme.surfaces.error};
  margin-top: ${({ theme }) => theme.spacing(0.5)};
`;
