import { useCallback, useEffect, useState } from 'react';

import {
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  Updater,
  PaginationState,
  getPaginationRowModel,
  functionalUpdate
} from '@tanstack/react-table';

import {
  TableProps,
  Empty,
  Loading,
  Pagination,
  Body,
  Head,
  Above
} from 'components/ui/table';
import { TableSelectors } from 'consts/cypress';
import { useTable } from 'hooks';
import { TableFetchDataVariables } from 'types/table';

import * as styles from './Content.styles';

export const Content = ({
  data,
  columns,
  sorting,
  pagination,
  pageCount,
  pageSize,
  loading,
  error,
  onFetchData,
  handleQueryParameters,
  search
}: TableProps) => {
  const [initiated, setInitiated] = useState<boolean>(false);
  const {
    setAllQueryVariables,
    getPageIndexQueryVariable,
    getSortingQueryVariable,
    getSearchTermQueryVariable
  } = useTable();

  const [variables, setVariables] = useState<TableFetchDataVariables>({
    pageIndex: handleQueryParameters ? getPageIndexQueryVariable() || 0 : 0,
    pageSize: typeof pageSize === 'number' ? pageSize : 10,
    sorting: handleQueryParameters ? getSortingQueryVariable() || [] : [],
    searchTerm: handleQueryParameters ? getSearchTermQueryVariable() : undefined
  });

  const handleFetchData = useCallback(() => {
    if (handleQueryParameters) {
      setAllQueryVariables((previousQueryVariables) => ({
        ...previousQueryVariables,
        pageIndex: variables.pageIndex,
        sortingId: variables.sorting[0]?.id,
        sortingDesc:
          typeof variables.sorting[0]?.desc === 'boolean'
            ? variables.sorting[0].desc
            : undefined,
        searchTerm: variables.searchTerm?.length
          ? variables.searchTerm
          : undefined
      }));
    }

    onFetchData?.(variables);
  }, [variables, onFetchData, setAllQueryVariables, handleQueryParameters]);

  useEffect(() => {
    handleFetchData();
    setInitiated(true);
  }, [handleFetchData]);

  const onSortingChange = useCallback(
    (sortingState: Updater<SortingState>) => {
      if (!sorting) return;

      const value = functionalUpdate(sortingState, variables.sorting);
      setVariables((previousVariables) => ({
        ...previousVariables,
        sorting: value,
        pageIndex: 0
      }));
    },
    [sorting, variables.sorting]
  );

  const onPaginationChange = useCallback(
    (paginationState: Updater<PaginationState>) => {
      if (!pagination) return;

      const value = functionalUpdate(paginationState, {
        pageIndex: variables.pageIndex,
        pageSize: variables.pageSize
      });
      setVariables((previousVariables) => ({
        ...previousVariables,
        pageIndex: value.pageIndex,
        pageSize: value.pageSize
      }));
    },
    [pagination, variables.pageIndex, variables.pageSize]
  );

  const onSearchChange = useCallback(
    (searchTerm: string) => {
      if (!search) return;

      setVariables((previousVariables) => ({
        ...previousVariables,
        searchTerm: searchTerm.length ? searchTerm : undefined,
        pageIndex: 0
      }));
    },
    [search]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: sorting ? getSortedRowModel() : undefined,
    getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
    state: {
      sorting: sorting ? variables.sorting : undefined,
      pagination: pagination
        ? {
            pageIndex: variables.pageIndex,
            pageSize: variables.pageSize
          }
        : undefined
    },
    onPaginationChange,
    onSortingChange,
    manualSorting: !!sorting,
    manualPagination: !!pagination,
    pageCount
  });

  return (
    <styles.Root data-cy={TableSelectors.Root}>
      <Above
        visible={!!search}
        search={search}
        onSearchChange={onSearchChange}
        handleQueryParameters={handleQueryParameters}
      />
      <styles.Table data-cy={TableSelectors.Table}>
        <Head table={table} visible sorting={!!sorting} />
        <Body table={table} visible={!loading} />
      </styles.Table>
      <Loading visible={!!loading && initiated} />
      <Empty
        visible={!table.getRowModel().rows.length && !loading && initiated}
        error={error}
      />
      <Pagination
        table={table}
        visible={!!pagination && !loading && initiated}
      />
    </styles.Root>
  );
};
