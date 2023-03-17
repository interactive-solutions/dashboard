import { useCallback, useMemo } from 'react';

import { Container } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import { useIntl } from 'react-intl';

import { UsersUserFragment, useUsersLazyQuery } from 'api/graphql';
import { SEO } from 'components/tools';
import { BasicTable } from 'components/ui/table';
import { useTable } from 'hooks';
import { TableFetchDataVariables } from 'types/table';

import { texts } from './Landing.text';

export const Landing = () => {
  const { formatMessage } = useIntl();
  const [fetchUsers, { data, loading, error }] = useUsersLazyQuery();
  const { getPageCount, getFetchDataVariables } = useTable();

  const columns = useMemo<ColumnDef<UsersUserFragment>[]>(
    () => [
      {
        header: '[insert-name]',
        accessorKey: 'firstName',
        accessorFn: ({ firstName, lastName }) => `${firstName} ${lastName}`,
      },
      {
        header: '[insert-id]',
        accessorKey: 'id',
        enableSorting: false,
      },
    ],
    []
  );

  const handleFetchData = useCallback(
    (variables: TableFetchDataVariables) => {
      const { filter, sorting } = getFetchDataVariables(variables);
      fetchUsers({ variables: { filter, sorting } });
    },
    [fetchUsers, getFetchDataVariables]
  );

  return (
    <Container maxWidth={false}>
      <SEO title={formatMessage(texts.seoTitle)} />
      <BasicTable
        data={data?.users.edges || []}
        columns={columns}
        onFetchData={handleFetchData}
        pagination
        loading={loading}
        error={error}
        sorting
        pageCount={getPageCount(data?.users.meta)}
      />
    </Container>
  );
};
