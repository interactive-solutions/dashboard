import { useCallback, useMemo } from 'react';

import { Typography } from '@mui/material';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Table } from 'components/ui/table';
import { useBooksLazyQuery } from 'graphql/cli/graphql.everything';
import { TableFetchDataVariables } from 'types/table';

import { texts } from './Login.text';

export const Login = () => {
  const { formatMessage } = useIntl();
  const [fetchBooks, { data, loading, error }] = useBooksLazyQuery();

  const columns = useMemo(
    () => [
      {
        header: 'Title',
        accessorKey: 'title'
      }
    ],
    []
  );

  const handleFetchData = useCallback(
    (variables: TableFetchDataVariables) => {
      console.log(variables);
      fetchBooks({
        variables: {
          filter: {
            offset: variables.pageIndex * variables.pageSize,
            limit: variables.pageSize
          }
        }
      });
    },
    [fetchBooks]
  );

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <Typography variant="h4" color="info.dark">
        {'Login'.toString()}
      </Typography>
      <Table
        columns={columns}
        data={data?.books.edges || []}
        onFetchData={handleFetchData}
        pagination
        loading={loading}
        error={error}
      />
    </>
  );
};
