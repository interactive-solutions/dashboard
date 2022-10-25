import styled from 'styled-components';

export const Item = styled.div`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
`;
