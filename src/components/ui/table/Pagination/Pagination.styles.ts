import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.surfaces.light};
  border-top: 1px solid ${({ theme }) => theme.surfaces.onLight};
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  position: sticky;
  bottom: 0;
  margin-top: -1px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.surfaces.light};
  color: ${({ theme }) => theme.surfaces.onLight};
  border: 2px solid ${({ theme }) => theme.surfaces.onLight};
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.border.radius};
  transition: ${({ theme }) => theme.ease(['background-color', 'color'])};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.surfaces.onLight};
    color: ${({ theme }) => theme.surfaces.light};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageOf = styled.div`
  padding: ${({ theme }) => theme.spacing(0, 1)};
  ${({ theme }) => theme.typography.label[10]};
`;
