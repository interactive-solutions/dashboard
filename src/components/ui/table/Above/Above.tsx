import { Grid } from '@entire.se/components';

import { Search, TableProps, SearchProps } from 'components/ui/table';
import { TableSelectors } from 'consts/cypress';

import * as styles from './Above.styles';

export interface AboveProps {
  visible: boolean;
  search: TableProps['search'];
  onSearchChange: SearchProps['onSearchChange'];
  handleQueryParameters?: TableProps['handleQueryParameters'];
}

export const Above = ({
  visible,
  search,
  onSearchChange,
  handleQueryParameters
}: AboveProps) => {
  if (!visible) {
    return null;
  }

  return (
    <styles.Root data-cy={TableSelectors.Above}>
      <Grid>
        {!!search && (
          <Grid.Item width={3}>
            <Search
              onSearchChange={onSearchChange}
              handleQueryParameters={handleQueryParameters}
            />
          </Grid.Item>
        )}
      </Grid>
    </styles.Root>
  );
};
