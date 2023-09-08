import { styled } from '@mui/material';

export const Root = styled('div')`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(8)};
  right: ${({ theme }) => theme.spacing(12)};
`;
