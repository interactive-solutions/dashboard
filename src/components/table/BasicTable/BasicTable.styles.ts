import { styled } from '@mui/material';

export const LoadingContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(8, 0)};
`;

export const Error = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(8, 0)};
`;
