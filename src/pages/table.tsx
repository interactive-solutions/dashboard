import { useCallback, useMemo } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import dynamic from 'next/dynamic';

import { BooksQuery, useBooksLazyQuery } from 'api/graphql';
import { Button } from 'components/ui/general';
import { Table } from 'components/ui/table';
import { useTable } from 'hooks';
import { TableFetchDataVariables } from 'types/table';

const Component = () => {
  const [fetchBooks, { data, loading, error }] = useBooksLazyQuery();
  const { getPageCount, getFetchDataVariables } = useTable();

  const columns = useMemo<ColumnDef<BooksQuery['books']['edges'][0]>[]>(
    () => [
      {
        header: 'Title',
        accessorKey: 'title'
      },
      {
        header: 'Isbn',
        accessorFn: ({ isbn }) => isbn,
        cell: ({ row }) => <div>{row.original.isbn}</div>
      },
      {
        header: 'Trigger',
        enableSorting: false,
        cell: ({ row }) => (
          <Button
            type="button"
            onClick={() => console.log(row.original.id)}
            size="small"
          >
            {'Button'.toString()}
          </Button>
        )
      }
    ],
    []
  );

  const handleFetchData = useCallback(
    (variables: TableFetchDataVariables) => {
      const { filter, sorting } = getFetchDataVariables(variables);
      fetchBooks({ variables: { filter, sorting } });
    },
    [fetchBooks, getFetchDataVariables]
  );

  return (
    <div style={{ padding: 32 }}>
      <Table
        data={data?.books.edges || []}
        columns={columns}
        onFetchData={handleFetchData}
        loading={loading}
        sorting
        pagination
        pageCount={getPageCount(data?.books.meta)}
        error={error}
        handleQueryParameters
        search
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Component), {
  ssr: false
});
