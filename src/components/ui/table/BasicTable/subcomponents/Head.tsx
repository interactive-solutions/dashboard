import { useCallback } from 'react';

import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { flexRender, Header, Table } from '@tanstack/react-table';

export type HeadProps = {
  table: Table<any>;
  visible: boolean;
  sorting: boolean;
};

export const Head = ({ table, visible, sorting }: HeadProps) => {
  const enableSorting = useCallback(
    (header: Header<any, any>) =>
      sorting && header.column.columnDef.enableSorting !== false,
    [sorting]
  );

  const renderHeader = useCallback(
    (header: Header<any, any>) => {
      if (header.isPlaceholder) {
        return null;
      }

      const children = flexRender(
        header.column.columnDef.header,
        header.getContext()
      );

      if (enableSorting(header)) {
        return (
          <TableSortLabel
            onClick={header.column.getToggleSortingHandler()}
            active={!!header.column.getIsSorted()}
            direction={header.column.getIsSorted() || undefined}
          >
            {children}
          </TableSortLabel>
        );
      }

      return <div>{children}</div>;
    },
    [enableSorting]
  );

  if (!visible) {
    return null;
  }

  return (
    <TableHead>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell
              key={header.id}
              colSpan={header.colSpan}
              sortDirection={
                enableSorting(header) ? header.column.getIsSorted() : undefined
              }
            >
              {renderHeader(header)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
};
