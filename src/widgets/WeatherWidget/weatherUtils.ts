import { format } from 'date-fns';

import { DateFormats } from 'consts/format';

import { iconMap } from './iconMapping';
import { TimePoint } from './WeatherWidget';

const SMHI_TEMPERATURE_PARAM_NAME = 't';
const SMHI_SYMBOL_PARAM_NAME = 'Wsymb2';

export function getTemperature(timepoint: TimePoint) {
  return timepoint.parameters?.find(
    (p) => p.name === SMHI_TEMPERATURE_PARAM_NAME
  )?.values[0];
}

export function getWeatherSymbol(timepoint: TimePoint) {
  const weatherSymbolNumber =
    timepoint.parameters?.find((p) => p.name === SMHI_SYMBOL_PARAM_NAME)
      ?.values[0] || 1;
  let IconComponent = iconMap[1];
  if (weatherSymbolNumber in iconMap) {
    // @ts-ignore
    IconComponent = iconMap[weatherSymbolNumber];
  }

  return IconComponent;
}

export function getWeatherTime(timepoint: TimePoint) {
  return format(new Date(timepoint.validTime), DateFormats.HoursMinutes);
}
