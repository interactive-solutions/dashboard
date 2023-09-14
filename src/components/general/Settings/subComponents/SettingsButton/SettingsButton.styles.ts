import { styled, IconButton } from '@mui/material';

export const Button = styled(IconButton)<{
  isRendered: boolean;
}>`
  background: ${({ isRendered, theme }) =>
    isRendered
      ? theme.palette.brandColors.entireOrange
      : theme.palette.brandColors.burgundy};
`;
