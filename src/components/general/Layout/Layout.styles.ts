import { styled } from '@mui/material';

import { theme } from 'styles';

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: ${theme.spacing(12)};
`;

export const Content = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
