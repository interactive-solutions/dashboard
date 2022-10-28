import { useCallback } from 'react';

import { flexRender, Header, Table } from '@tanstack/react-table';

import { TableSelectors } from 'consts/cypress';

import * as styles from './Head.styles';

export interface HeadProps {
  table: Table<any>;
  visible: boolean;
  sorting: boolean;
}

export const Head = ({ table, visible, sorting }: HeadProps) => {
  const enableSorting = useCallback(
    (header: Header<any, any>) =>
      sorting && header.column.columnDef.enableSorting !== false,
    [sorting]
  );

  const getSortingIndicator = useCallback((header: Header<any, any>) => {
    const direction = header.column.getIsSorted();

    switch (direction) {
      case 'asc':
        return ' ↓';

      case 'desc':
        return ' ↑';

      default:
        return ' ↕';
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <styles.Thead data-cy={TableSelectors.Head}>
      {table.getHeaderGroups().map((headerGroup) => (
        <styles.Tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <styles.Th key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder ? null : (
                <styles.ToggleSorting
                  as={enableSorting(header) ? 'button' : 'div'}
                  type={enableSorting(header) ? 'button' : undefined}
                  onClick={
                    enableSorting(header)
                      ? header.column.getToggleSortingHandler()
                      : undefined
                  }
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {enableSorting(header) && getSortingIndicator(header)}
                </styles.ToggleSorting>
              )}
            </styles.Th>
          ))}
        </styles.Tr>
      ))}
    </styles.Thead>
  );
};
