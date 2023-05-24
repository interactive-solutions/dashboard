import { GridItem } from 'types/grid';

import { Logo } from './Logo';
import { LoremIpsum } from './LoremIpsum';
import { LunchToday } from './LunchToday/LunchToday';
import { Memes } from './Memes';
import { Quotes } from './Quotes';
import { That70sClock } from './That70sClock';
import { WeatherWidget } from './WeatherWidget';

export const gridItems: GridItem[] = [
  {
    Widget: Logo,
    dataGrid: { w: 4, h: 3 },
  },
  {
    Widget: LoremIpsum,
    dataGrid: { w: 3, h: 3 },
  },
  {
    Widget: LunchToday,
    dataGrid: { w: 3, h: 3 },
  },
  {
    Widget: Quotes,
    dataGrid: { w: 3, h: 3 },
  },
  {
    Widget: WeatherWidget,
    dataGrid: { w: 3, h: 3 },
  },
  {
    Widget: Memes,
    dataGrid: { w: 2, h: 10 },
  },
  {
    Widget: That70sClock,
    dataGrid: { w: 6, h: 2 },
  },
];
