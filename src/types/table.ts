import { SortingState } from '@tanstack/react-table';

export type TableFetchDataVariables = {
  pageIndex: number;
  pageSize: number;
  sorting: SortingState;
};
