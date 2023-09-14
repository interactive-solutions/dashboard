import { GridItem } from 'types/grid';

import { Logo } from './Logo';
import { Memes } from './Memes';
import { Quotes } from './Quotes';
import { That70sClock } from './That70sClock';
import { WeatherWidget } from './WeatherWidget';
import { Week } from './Week/Week';

export const gridItems: GridItem[] = [
  {
    name: 'Logo',
    Widget: Logo,
    dataGrid: { w: 4, h: 3 },
    visible: false,
    workInProgress: true,
  },
  {
    name: 'Quotes',
    Widget: Quotes,
    dataGrid: { w: 3, h: 3 },
    visible: false,
    workInProgress: true,
  },
  {
    name: 'WeatherWidget',
    Widget: WeatherWidget,
    dataGrid: { w: 3, h: 3 },
    visible: false,
    workInProgress: true,
  },
  {
    name: 'Memes',
    Widget: Memes,
    dataGrid: { w: 2, h: 6 },
    visible: false,
    workInProgress: true,
  },
  {
    name: 'That70sClock',
    Widget: That70sClock,
    dataGrid: { w: 3, h: 2 },
    visible: false,
    workInProgress: true,
  },
  {
    name: 'Week',
    Widget: Week,
    dataGrid: { w: 2, h: 2 },
    visible: true,
    workInProgress: true,
  },
];
