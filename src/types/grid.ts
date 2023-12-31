import { FC } from 'react';

export type DataGrid = {
  // A string corresponding to the component key
  i?: string;

  // These are all in grid units, not pixels
  w: number;
  h: number;
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;

  // If false, will not be resizable. Overrides `static`.
  isResizable?: boolean;
  // By default, a handle is only shown on the bottom-right (southeast) corner.
  // Note that resizing from the top or left is generally not intuitive.
  resizeHandles?: Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'>;
  // If true and draggable, item will be moved only within grid.
  isBounded?: boolean;
};

export type GridItem = {
  name: string;
  Widget: FC;
  dataGrid: DataGrid;
  visible: boolean;
  workInProgress: boolean;
};
