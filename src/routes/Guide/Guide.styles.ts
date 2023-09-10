import { styled, Typography } from '@mui/material';

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  max-width: 1400px;
  width: 100%;
  padding: ${({ theme }) =>
    `0 ${theme.spacing(12)} ${theme.spacing(12)} ${theme.spacing(12)}`};
`;

export const HeroContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
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

export const HeroText = styled(Typography)`
  align-self: center;
  width: 70%;
  margin-top: ${({ theme }) => theme.spacing(8)};

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

export const Code = styled('p')`
  font-family: 'Courier New'; /* stylelint-disable-line font-family-no-missing-generic-family-keyword */
  white-space: pre-line;
`;

export const List = styled('ul')`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled('li')`
  padding: ${({ theme }) => theme.spacing(5)} 0;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 2px solid ${({ theme }) => theme.palette.brandColors.gray};

  @media (max-width: 1100px) {
    grid-template-columns: 100%;
  }
`;

export const ListItemLeft = styled('div')`
  width: 100%;
  padding-right: 32px;
`;

export const Link = styled('a')`
  color: ${({ theme }) => theme.palette.brandColors.darkGray};
`;

export const SectionHeader = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(5)};
`;
