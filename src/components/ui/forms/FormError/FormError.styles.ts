import { styled } from '@mui/material';

export const Root = styled('div')`
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: ${({ theme }) => theme.spacing(0.5)};
`;
