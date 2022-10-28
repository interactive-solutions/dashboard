import { flexRender, Table } from '@tanstack/react-table';

import { TableSelectors } from 'consts/cypress';

import * as styles from './Body.styles';

export interface BodyProps {
  table: Table<any>;
  visible: boolean;
}

export const Body = ({ table, visible }: BodyProps) => {
  if (!visible) {
    return null;
  }

  return (
    <styles.Tbody data-cy={TableSelectors.Body}>
      {table.getRowModel().rows.map((row) => (
        <styles.Tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <styles.Td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </styles.Td>
          ))}
        </styles.Tr>
      ))}
    </styles.Tbody>
  );
};
