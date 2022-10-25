import styled from 'styled-components';

export const Items = styled.div`
  margin: ${({ theme }) => theme.spacing(2, 0)};
`;

export const Item = styled.div`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.surfaces.light};
  text-shadow: -1px -1px 0 ${({ theme }) => theme.surfaces.onLight},
    1px -1px 0 ${({ theme }) => theme.surfaces.onLight},
    -1px 1px 0 ${({ theme }) => theme.surfaces.onLight},
    1px 1px 0 ${({ theme }) => theme.surfaces.onLight};
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
`;
