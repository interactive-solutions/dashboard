/* eslint-disable @calm/react-intl/missing-formatted-message */
import React from 'react';

import {
  getTemperature,
  getWeatherSymbol,
  getWeatherTime,
} from '../weatherUtils';
import { TimePoint } from '../WeatherWidget';

import {
  SmallWeatherBox,
  TemperatureContainer,
  TimeText,
} from './UpcomingWeather.styles';

export const UpcomingWeather = ({ timePoint }: { timePoint: TimePoint }) => {
  const Symbol = getWeatherSymbol(timePoint);

  const temperature = getTemperature(timePoint);
  const time = getWeatherTime(timePoint);

  return (
    <SmallWeatherBox>
      <TimeText>{time}</TimeText>
      <span style={{ width: 40, height: 40 }}>
        <Symbol />
      </span>
      <TemperatureContainer>{temperature}°</TemperatureContainer>
    </SmallWeatherBox>
  );
};
