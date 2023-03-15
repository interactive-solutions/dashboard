import { useCallback, useMemo } from 'react';

import { Typography } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { BasicTable } from 'components/ui/table';
import { BooksQuery, useBooksLazyQuery } from 'graphql/cli/graphql.everything';
import { BasicTableFetchDataVariables } from 'types/table';

import { texts } from './Login.text';

export const Login = () => {
  const { formatMessage } = useIntl();
  const [fetchBooks, { data, loading, error }] = useBooksLazyQuery();

  const columns = useMemo<ColumnDef<BooksQuery['books']['edges'][0]>[]>(
    () => [
      {
        header: 'Title',
        accessorKey: 'title'
      },
      {
        header: 'Id',
        accessorKey: 'id',
        enableSorting: false
      }
    ],
    []
  );

  const handleFetchData = useCallback(
    ({ pageIndex, pageSize, sorting }: BasicTableFetchDataVariables) => {
      fetchBooks({
        variables: {
          filter: {
            offset: pageIndex * pageSize,
            limit: pageSize
          },
          sorting: {
            sorting: sorting.map(({ id, desc }) => ({
              field: id,
              direction: desc ? 'desc' : 'asc'
            }))
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
        sorting
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
