/* eslint-disable @calm/react-intl/missing-formatted-message */
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Button } from 'components/ui/general';

import { UpcomingWeather } from './components/UpcomingWeather';
import {
  getTemperature,
  getWeatherSymbol,
  getWeatherTime,
} from './weatherUtils';

import {
  Container,
  BottomRow,
  TemperatureContainer,
  TopRow,
  LocationRow,
} from './WeatherWidget.styles';

// SMHI API Docs: https://opendata.smhi.se/apidocs/metfcst/parameters.html

type TimeParam = {
  level: number;
  levelType: string;
  name: string;
  unit: string;
  values: number[];
};

export type TimePoint = {
  validTime: string;
  parameters: TimeParam[];
};

type SMHIResponse = {
  approvedTime: string;
  /** Not used */
  geometry: any;
  referenceTime: string;
  timeSeries: TimePoint[];
};

// [lat, long]
const locations = [
  { name: 'Uppsala', coordinates: [57.3081, 18.1489] },
  { name: 'Stockholm', coordinates: [59.3293, 18.0686] },
  { name: 'Örebro', coordinates: [59.2793, 15.2486] },
];

export const WeatherWidget = () => {
  const [data, setData] = useState<SMHIResponse | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [locationIndex, setLocationIndex] = useState(0);

  const location = useMemo(() => locations[locationIndex], [locationIndex]);

  const loadData = useCallback(() => {
    const url =
      'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/' +
      location.coordinates[1] +
      '/lat/' +
      location.coordinates[0] +
      '/data.json';
    fetch(url)
      .then((res) => res.json())
      .then((incomingData: SMHIResponse) => {
        console.log({ incomingData });
        setData(incomingData);
        setLoading(false);
      });
  }, [location]);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [loadData, location]);

  console.log({ data });
  const currentData = useMemo(() => data?.timeSeries?.[0].parameters, [data]);

  if (isLoading && !data) return <p>Loading...</p>;
  if (!data || !currentData)
    return <p>{`${location.name} has no weather at the moment`}</p>;

  const temperature = getTemperature(data?.timeSeries?.[0]);
  const Symbol = getWeatherSymbol(data?.timeSeries?.[0]);
  const time = getWeatherTime(data?.timeSeries?.[0]);

  return (
    <Container>
      <TopRow>
        <span>{time}</span>
        <TemperatureContainer>{temperature}°</TemperatureContainer>
        <span style={{ height: 50, width: 50 }}>
          <Symbol />
        </span>
      </TopRow>
      <LocationRow>
        <Button
          variant="text"
          onClick={() => setLocationIndex((v) => (v - 1) % locations.length)}
          size="small"
        >
          {'<'}
        </Button>
        <span>{location.name}</span>
        <Button
          variant="text"
          onClick={() => setLocationIndex((v) => (v + 1) % locations.length)}
          size="small"
        >
          {'>'}
        </Button>
      </LocationRow>
      <BottomRow>
        <UpcomingWeather timePoint={data?.timeSeries?.[3]} />
        <UpcomingWeather timePoint={data?.timeSeries?.[12]} />
        <UpcomingWeather timePoint={data?.timeSeries?.[24]} />
      </BottomRow>
    </Container>
  );
};
