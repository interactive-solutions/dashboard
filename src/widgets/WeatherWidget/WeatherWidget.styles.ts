import { styled } from '@mui/material';

export const Container = styled('div')`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: ${({ theme }) => theme.spacing(1, 1)};
`;

export const BottomRow = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TopRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const LocationRow = styled('div')`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 5px;
  margin-top: -5px;
`;

export const TemperatureContainer = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.25rem;
  font-weight: 600;
`;
