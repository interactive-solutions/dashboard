import { Grid } from '@entire.se/components';
import { Table } from '@tanstack/react-table';
import { FormattedMessage } from 'react-intl';

import { TableSelectors } from 'consts/cypress';

import { texts } from './Pagination.text';

import * as styles from './Pagination.styles';

export interface PaginationProps {
  table: Table<any>;
  visible: boolean;
}

export const Pagination = ({ table, visible }: PaginationProps) => {
  if (!visible) {
    return null;
  }

  return (
    <styles.Root data-ccy={TableSelectors.Pagination}>
      <Grid gap={1} align="middle">
        <Grid.Item>
          <styles.Button
            type="button"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            &#xab;
          </styles.Button>
        </Grid.Item>
        <Grid.Item>
          <styles.Button
            type="button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            &#x2039;
          </styles.Button>
        </Grid.Item>
        <Grid.Item>
          <styles.PageOf>
            <FormattedMessage
              {...texts.pageOf}
              values={{
                pageIndex:
                  table.getPageCount() === 0
                    ? 0
                    : table.getState().pagination.pageIndex + 1,
                pageCount: table.getPageCount()
              }}
            />
          </styles.PageOf>
        </Grid.Item>
        <Grid.Item>
          <styles.Button
            type="button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            &#x203A;
          </styles.Button>
        </Grid.Item>
        <Grid.Item>
          <styles.Button
            type="button"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            &#xbb;
          </styles.Button>
        </Grid.Item>
      </Grid>
    </styles.Root>
  );
};
