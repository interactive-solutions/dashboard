import { styled } from '@mui/material';

export const Root = styled('div')`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;
