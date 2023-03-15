import { useCallback, useEffect, useRef, useState } from 'react';

import { ApolloError } from '@apollo/client';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import {
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  Updater,
  PaginationState,
  getPaginationRowModel,
  functionalUpdate,
  flexRender,
  ColumnDef
} from '@tanstack/react-table';

import { BasicTableFetchDataVariables } from 'types/table';

import { Loading } from './subcomponents';

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
  const initiated = useRef(false);

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
    initiated.current = true;
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
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {!!pagination && !loading && initiated.current && (
          <TableFooter>
            <TableRow>
              <TablePagination
                count={table.getPageCount()}
                rowsPerPage={variables.pageSize}
                page={variables.pageIndex}
                onPageChange={(_, page) => table.setPageIndex(page)}
                rowsPerPageOptions={[]}
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
      <Loading visible={!!loading && initiated.current} />
      {!table.getRowModel().rows.length && !loading && initiated.current && (
        <div>{error?.message || 'Empty'.toString()}</div>
      )}
    </TableContainer>
  );
};
