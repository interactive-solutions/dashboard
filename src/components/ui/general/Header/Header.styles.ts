import { styled } from '@mui/material';

export const Root = styled('header')`
  background-color: ${({ theme }) => theme.palette.grey[400]};
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;
