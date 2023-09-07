import { styled } from '@mui/material';

export const Root = styled('div')`
  position: absolute;
  width: 100vw;
  height: 100vw;
`;

export const WidgetHolder = styled('div')`
  background-color: ${({ theme }) => theme.palette.brandColors.white};
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.palette.grey[200]};
`;
