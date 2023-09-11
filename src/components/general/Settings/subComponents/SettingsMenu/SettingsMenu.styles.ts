import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { styled, Button, IconButton } from '@mui/material';

export const Root = styled('div')`
  position: absolute;
  bottom: -${({ theme }) => theme.spacing(2)};
  right: -${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.palette.brandColors.white};
  box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.palette.grey[200]};
  border-radius: 32px;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 300px;
`;

export const ButtonRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Line = styled('hr')`
  background: ${({ theme }) => theme.palette.brandColors.gray};
  width: 100%;
  height: 1px;
  border: none;
`;

export const WidgetList = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing(1)};
`;

export const ButtonContent = styled(Button)`
  display: flex;
  justify-content: space-between;
  background: none;
  align-items: center;
  width: 100%;
  border-radius: 32px;
  color: ${({ theme }) => theme.palette.uiColors.lightBlack};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  font-size: 16px;

  &:hover {
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 4px,
      ${({ theme }) => theme.palette.brandColors.lightPurple} 4px,
      ${({ theme }) => theme.palette.brandColors.lightPurple} 8px
    );
  }
`;

export const CloseButton = styled(IconButton)`
  background: ${({ theme }) => theme.palette.brandColors.burgundy};
`;

export const VisibilityIcon = styled(VisibilityOutlinedIcon)<{
  isActive: boolean;
}>`
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.palette.brandColors.entireOrange
      : theme.palette.brandColors.lightOrange};
`;
