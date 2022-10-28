import styled from 'styled-components';

export const Thead = styled.thead`
  user-select: none;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.surfaces.onLight};
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing(0, 2, 1.5, 2)};
`;

export const ToggleSorting = styled.button`
  background-color: transparent;
  ${({ theme }) => theme.typography.label[20]};
`;
