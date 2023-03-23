import { TableBody, TableCell, TableRow } from '@mui/material';
import { flexRender, Table } from '@tanstack/react-table';

export type BodyProps = {
  table: Table<any>;
  visible: boolean;
};

export const Body = ({ table, visible }: BodyProps) => {
  if (!visible) {
    return null;
  }

  return (
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
  );
};
