import { styled } from '@mui/material';

import { theme } from 'styles';

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  max-width: 1200px;
  width: 100vw;
  padding: ${theme.spacing(12)};
`;

export const HeroContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing(4)};
  width: 100%;
`;

export const HeroInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const HeaderFirstLine = styled('span')`
  font-size: ${theme.spacing(15)};
  color: ${theme.palette.brandColors.burgundy};
  font-weight: 500;
  line-height: 1;
  letter-spacing: -2px;
`;

export const HeaderSecondLine = styled('span')`
  font-size: ${theme.spacing(15)};
  color: ${theme.palette.brandColors.entireOrange};
  font-weight: 500;
  line-height: 1;
  letter-spacing: -2px;
`;

export const HeroText = styled('div')`
  align-self: center;
  width: 70%;
  margin-top: ${theme.spacing(8)};
  color: ${theme.palette.brandColors.black};

  @media (max-width: 1100px) {
    align-self: flex-start;
  }
`;

export const Image = styled('img')`
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const HeadLine = styled('div')`
  font-weight: 500;
  font-size: ${theme.spacing(3)};
  color: ${theme.palette.brandColors.entireOrange};
  border-bottom: 1px solid ${theme.palette.brandColors.entireOrange};
  margin-bottom: ${theme.spacing(5)};
  width: 100%;
`;

export const Text = styled('div')`
  width: 40%;
  margin-right: 10%;
  padding-top: ${theme.spacing(2)};
  padding-bottom: ${theme.spacing(2)};
  color: ${theme.palette.brandColors.darkGray};
`;

export const Code = styled('div')`
  font-family: 'Courier New'; /* stylelint-disable-line font-family-no-missing-generic-family-keyword */
  font-size: ${theme.spacing(2)};
  white-space: pre-line;
  color: ${theme.palette.brandColors.black};
`;

export const ListItem = styled('div')`
  margin-bottom: ${theme.spacing(5)};
  padding-bottom: ${theme.spacing(5)};
  padding-top: ${theme.spacing(5)};
  border-bottom: 2px solid ${theme.palette.brandColors.gray};
  width: 100%;
`;

export const ListItemHeadline = styled('div')`
  letter-spacing: -1px;
  font-size: ${theme.spacing(5)};
  font-weight: 500;
  color: ${theme.palette.brandColors.black};
  width: 50%;
  margin-right: ${theme.spacing(5)};
`;

export const ListItemContainer = styled('div')`
  display: flex;
  align-items: flex-start;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Link = styled('a')`
  color: ${theme.palette.brandColors.darkGray};
`;
