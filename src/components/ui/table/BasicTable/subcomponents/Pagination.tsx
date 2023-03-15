import { TableFooter, TablePagination, TableRow } from '@mui/material';
import { Table } from '@tanstack/react-table';

export type PaginationProps = {
  table: Table<any>;
  visible: boolean;
};

export const Pagination = ({ table, visible }: PaginationProps) => {
  if (!visible) {
    return null;
  }

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          count={table.getPageCount()}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => table.setPageIndex(page)}
          rowsPerPageOptions={[]}
        />
      </TableRow>
    </TableFooter>
  );
};
