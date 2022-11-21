import styled from 'styled-components';

export const Root = styled.header`
  background-color: ${({ theme }) => theme.surfaces.dark};
  height: 54px;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  height: 54px;
`;

export const Logout = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.surfaces.light};
  transition: ${({ theme }) => theme.ease(['color'])};

  &:hover {
    color: ${({ theme }) => theme.surfaces.primary};
  }
`;
