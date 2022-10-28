import { SortingState } from '@tanstack/react-table';

export interface TableFetchDataVariables {
  pageIndex: number;
  pageSize: number;
  sorting: SortingState;
  searchTerm?: string;
}
