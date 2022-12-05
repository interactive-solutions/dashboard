import { useCallback, useMemo } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { useIntl } from 'react-intl';

import { UsersUserFragment, useUsersLazyQuery } from 'api/graphql';
import { SEO } from 'components/tools';
import { Table } from 'components/ui/table';
import { useFormat, useTable } from 'hooks';
import { TableFetchDataVariables } from 'types/table';

import { texts } from './Landing.text';

import * as styles from './Landing.styles';

export const Landing = () => {
  const { formatMessage } = useIntl();
  const [fetchExample, { data, loading, error }] = useUsersLazyQuery();
  const { getPageCount, getFetchDataVariables } = useTable();
  const format = useFormat();

  const columns = useMemo<ColumnDef<UsersUserFragment>[]>(
    () => [
      {
        header: 'Name',
        accessorFn: ({ firstName, lastName }) => `${firstName} ${lastName}`
      },
      {
        header: 'Email',
        accessorKey: 'email'
      },
      {
        header: 'Created at',
        cell: ({ row }) => format.date(new Date(row.original.createdAt))
      }
    ],
    [format]
  );

  const handleFetchData = useCallback(
    (variables: TableFetchDataVariables) => {
      const { filter, sorting } = getFetchDataVariables(variables);
      fetchExample({ variables: { filter, sorting } });
    },
    [fetchExample, getFetchDataVariables]
  );

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <styles.Root>
        <Table
          data={data?.users.edges || []}
          columns={columns}
          onFetchData={handleFetchData}
          loading={loading}
          sorting
          pagination
          pageCount={getPageCount(data?.users.meta)}
          error={error}
          handleQueryParameters
          search
        />
      </styles.Root>
    </>
  );
};
