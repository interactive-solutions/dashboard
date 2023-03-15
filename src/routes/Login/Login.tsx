import { useCallback, useMemo } from 'react';

import { Typography } from '@mui/material';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { BasicTable } from 'components/ui/table';
import { useBooksLazyQuery } from 'graphql/cli/graphql.everything';
import { BasicTableFetchDataVariables } from 'types/table';

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
    (variables: BasicTableFetchDataVariables) => {
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
      <BasicTable
        columns={columns}
        data={data?.books.edges || []}
        onFetchData={handleFetchData}
        pagination
        loading={loading}
        error={error}
        pageCount={
          typeof data?.books.meta.total === 'number' &&
          typeof data?.books.meta.limit === 'number'
            ? Math.ceil(data.books.meta.total / data.books.meta.limit)
            : undefined
        }
      />
    </>
  );
};
