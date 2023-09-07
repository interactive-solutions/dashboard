import { styled, Button } from '@mui/material';

import { SmallLogo } from 'assets/icons';
import { theme } from 'styles';

export const Header = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${theme.palette.brandColors.white};
`;

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing(7)} ${theme.spacing(12)};
  max-width: 1400px;
`;

export const NavBar = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0 2px 8px 1px rgb(0, 0, 0 / 8%); /* stylelint-disable-line color-function-notation */
  backdrop-filter: blur(10px);
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
`;

export const TextButton = styled(Button)`
  color: ${theme.palette.uiColors.lightBlack};
  padding: 0 ${theme.spacing(3)} 0 0;
  font-size: ${theme.spacing(2.25)};

  &:hover {
    color: ${theme.palette.brandColors.black};
    background-color: ${theme.palette.brandColors.white};
  }
`;

export const ContainedButton = styled(Button)`
  font-size: ${theme.spacing(2.25)};
`;

export const Logo = styled(SmallLogo)`
  margin-right: ${theme.spacing(3)};
`;
