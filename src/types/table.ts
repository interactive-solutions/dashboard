import { SortingState } from '@tanstack/react-table';

export interface BasicTableFetchDataVariables {
  pageIndex: number;
  pageSize: number;
  sorting: SortingState;
}
