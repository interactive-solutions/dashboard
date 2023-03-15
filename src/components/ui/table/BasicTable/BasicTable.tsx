import { useCallback, useEffect, useState } from 'react';

import { ApolloError } from '@apollo/client';
import { Table, TableContainer } from '@mui/material';
import {
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  Updater,
  PaginationState,
  getPaginationRowModel,
  functionalUpdate,
  ColumnDef
} from '@tanstack/react-table';

import { BasicTableFetchDataVariables } from 'types/table';

import { Body, Empty, Head, Loading, Pagination } from './subcomponents';

export interface BasicTableProps {
  data: any[];
  columns: ColumnDef<any, any>[];
  onFetchData: (variables: BasicTableFetchDataVariables) => void;
  sorting?: boolean;
  pagination?: boolean;
  pageCount?: number;
  pageSize?: number;
  loading?: boolean;
  error?: ApolloError;
}

export const BasicTable = ({
  data,
  columns,
  sorting,
  pagination,
  pageCount,
  pageSize,
  loading,
  error,
  onFetchData
}: BasicTableProps) => {
  const [initiated, setInitiated] = useState(false);

  const [variables, setVariables] = useState<BasicTableFetchDataVariables>({
    pageIndex: 0,
    pageSize: typeof pageSize === 'number' ? pageSize : 10,
    sorting: []
  });

  const handleFetchData = useCallback(() => {
    onFetchData(variables);
  }, [variables, onFetchData]);

  useEffect(() => {
    handleFetchData();
    setInitiated(true);
  }, [handleFetchData]);

  const onSortingChange = useCallback(
    (sortingState: Updater<SortingState>) => {
      if (!sorting) return;

      const value = functionalUpdate(sortingState, variables.sorting);
      setVariables((previousVariables) => ({
        ...previousVariables,
        sorting: value,
        pageIndex: 0
      }));
    },
    [sorting, variables.sorting]
  );

  const onPaginationChange = useCallback(
    (paginationState: Updater<PaginationState>) => {
      if (!pagination) return;

      const value = functionalUpdate(paginationState, {
        pageIndex: variables.pageIndex,
        pageSize: variables.pageSize
      });
      setVariables((previousVariables) => ({
        ...previousVariables,
        pageIndex: value.pageIndex,
        pageSize: value.pageSize
      }));
    },
    [pagination, variables.pageIndex, variables.pageSize]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: sorting ? getSortedRowModel() : undefined,
    getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
    state: {
      sorting: sorting ? variables.sorting : undefined,
      pagination: pagination
        ? {
            pageIndex: variables.pageIndex,
            pageSize: variables.pageSize
          }
        : undefined
    },
    onPaginationChange,
    onSortingChange,
    manualSorting: !!sorting,
    manualPagination: !!pagination,
    pageCount
  });

  return (
    <TableContainer>
      <Table>
        <Head table={table} visible sorting={!!sorting} />
        <Body table={table} visible />
        <Pagination
          table={table}
          visible={!!pagination && !loading && initiated}
        />
      </Table>
      <Loading visible={!!loading && initiated} />
      <Empty
        visible={!table.getRowModel().rows.length && !loading && initiated}
        error={error}
      />
    </TableContainer>
  );
};
