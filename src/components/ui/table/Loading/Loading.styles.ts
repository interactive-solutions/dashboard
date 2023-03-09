import { styled } from '@mui/material';

export const Root = styled('div')`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(8, 0)};
`;
