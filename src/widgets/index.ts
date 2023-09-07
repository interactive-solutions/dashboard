import { GridItem } from 'types/grid';

import { Logo } from './Logo';
import { Memes } from './Memes';
import { Quotes } from './Quotes';
import { That70sClock } from './That70sClock';
import { WeatherWidget } from './WeatherWidget';
import { Week } from './Week/Week';

export const gridItems: GridItem[] = [
  {
    Widget: Logo,
    dataGrid: { w: 4, h: 3 },
    defaultVisible: false,
    workInProgress: true,
  },
  {
    Widget: Quotes,
    dataGrid: { w: 3, h: 3 },
    defaultVisible: false,
    workInProgress: true,
  },
  {
    Widget: WeatherWidget,
    dataGrid: { w: 3, h: 3 },
    defaultVisible: false,
    workInProgress: true,
  },
  {
    Widget: Memes,
    dataGrid: { w: 2, h: 10 },
    defaultVisible: false,
    workInProgress: true,
  },
  {
    Widget: That70sClock,
    dataGrid: { w: 3, h: 2 },
    defaultVisible: false,
    workInProgress: true,
  },
  {
    Widget: Week,
    dataGrid: { w: 2, h: 2 },
    defaultVisible: true,
    workInProgress: true,
  },
];
