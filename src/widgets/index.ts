import { GridItem } from 'types/grid';

import { Logo } from './Logo';
import { LoremIpsum } from './LoremIpsum';
import { LunchToday } from './LunchToday/LunchToday';
import { Quotes } from './Quotes';
import { SimpleWeather } from './SimpleWeather';

export const gridItems: GridItem[] = [
  {
    Widget: Logo,
    dataGrid: { x: 0, y: 0, w: 4, h: 3 },
  },
  {
    Widget: LoremIpsum,
    dataGrid: { x: 3, y: 5, w: 3, h: 3 },
  },
  {
    Widget: LunchToday,
    dataGrid: { x: 6, y: 0, w: 3, h: 3 },
  },
  {
    Widget: Quotes,
    dataGrid: { x: 9, y: 5, w: 3, h: 3 },
  },
  {
    Widget: SimpleWeather,
    dataGrid: { x: 12, y: 0, w: 3, h: 3 },
  },
];
