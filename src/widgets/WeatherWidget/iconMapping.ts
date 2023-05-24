/* Symbol meanings: 
Value	Meaning
1	Clear sky
2	Nearly clear sky
3	Variable cloudiness
4	Halfclear sky
5	Cloudy sky
6	Overcast
7	Fog
8	Light rain showers
9	Moderate rain showers
10	Heavy rain showers
11	Thunderstorm
12	Light sleet showers
13	Moderate sleet showers
14	Heavy sleet showers
15	Light snow showers
16	Moderate snow showers
17	Heavy snow showers
18	Light rain
19	Moderate rain
20	Heavy rain
21	Thunder
22	Light sleet
23	Moderate sleet
24	Heavy sleet
25	Light snowfall
26	Moderate snowfall
27	Heavy snowfall
*/

import ClearDay from './svg/clear-day.svg';
import ClearNight from './svg/clear-night.svg';
import Cloudy from './svg/cloudy.svg';
import Drizzle from './svg/drizzle.svg';
import HeavyDrizzle from './svg/extreme-drizzle.svg';
import HeavyRain from './svg/extreme-rain.svg';
import HeavySleet from './svg/extreme-sleet.svg';
import HeavySnow from './svg/extreme-snow.svg';
import Fog from './svg/fog.svg';
import Overcast from './svg/overcast.svg';
import DrizzleShowers from './svg/partly-cloudy-day-drizzle.svg';
import RainShowers from './svg/partly-cloudy-day-rain.svg';
import PartlyCloudyDay from './svg/partly-cloudy-day.svg';
import PartlyCloudyNight from './svg/partly-cloudy-night.svg';
import Rain from './svg/rain.svg';
import Sleet from './svg/sleet.svg';
import Snow from './svg/snow.svg';
import Thunderstorms from './svg/thunderstorms.svg';

// The icons are taken from https://github.com/basmilius/weather-icons
// There are a lot of additional icons that we can use,
// but I couldn't be bothered to add/map them all.
export const iconMap = {
  1: ClearDay,
  2: ClearNight,
  3: PartlyCloudyDay,
  4: PartlyCloudyNight,
  5: Cloudy,
  6: Overcast,
  7: Fog,
  8: DrizzleShowers,
  9: RainShowers,
  10: HeavyDrizzle,
  11: Thunderstorms,
  12: Sleet,
  13: Sleet,
  14: HeavySleet,
  15: Snow,
  16: Snow,
  17: HeavySnow,
  18: Drizzle,
  19: Rain,
  20: HeavyRain,
  21: Thunderstorms,
  22: Sleet,
  23: Sleet,
  24: Sleet,
  25: Snow,
  26: Snow,
  27: HeavySnow,
};
