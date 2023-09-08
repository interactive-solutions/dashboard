import { styled, IconButton } from '@mui/material';

export const SettingsButton = styled(IconButton)<{
  isRendered: boolean;
}>`
  background: ${({ isRendered, theme }) =>
    isRendered
      ? theme.palette.brandColors.entireOrange
      : theme.palette.brandColors.burgundy};
`;
