import styled from 'styled-components';

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.surfaces.onLight};
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
`;
