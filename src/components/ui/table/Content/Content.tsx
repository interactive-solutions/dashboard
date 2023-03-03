import { useCallback, useEffect, useState } from 'react';

import {
  CircularProgress,
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
  flexRender
} from '@tanstack/react-table';

import { TableProps } from 'components/ui/table';
import { TableFetchDataVariables } from 'types/table';

export const Content = ({
  data,
  columns,
  sorting,
  pagination,
  pageCount,
  pageSize,
  loading,
  // error,
  onFetchData
}: // handleQueryParameters
TableProps) => {
  const [initiated, setInitiated] = useState<boolean>(false);

  const [variables, setVariables] = useState<TableFetchDataVariables>({
    pageIndex: 0,
    pageSize: typeof pageSize === 'number' ? pageSize : 10,
    sorting: []
  });

  const handleFetchData = useCallback(() => {
    onFetchData?.(variables);
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
        {!!loading && initiated && <CircularProgress />}
        {!!pagination && (
          <TableFooter>
            <TableRow>
              <TablePagination
                count={table.getFilteredRowModel().rows.length}
                rowsPerPage={variables.pageSize}
                page={variables.pageIndex}
                onPageChange={(_, page) => {
                  table.setPageIndex(page);
                  console.log(page);
                }}
                rowsPerPageOptions={[]}
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  );
};
