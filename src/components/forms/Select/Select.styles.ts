import { styled } from '@mui/material';

export const Loading = styled('div')`
  display: flex;
  position: absolute;
  top: calc(50% - ${({ theme }) => theme.spacing(1.25)});
  right: ${({ theme }) => theme.spacing(0.75)};
`;

export const Empty = styled('div')`
  padding: ${({ theme }) => theme.spacing(1, 2)};
  text-align: center;
`;
