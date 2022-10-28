import { useCallback } from 'react';

import {
  NumberParam,
  useQueryParams,
  StringParam,
  BooleanParam
} from 'use-query-params';

import { TableFetchDataVariables } from 'types/table';

export const useTable = () => {
  const [getAllQueryVariables, setAllQueryVariables] = useQueryParams(
    {
      pageIndex: NumberParam,
      sortingId: StringParam,
      sortingDesc: BooleanParam,
      searchTerm: StringParam
    },
    {
      updateType: 'replace'
    }
  );

  const getPageIndexQueryVariable = useCallback(
    () => getAllQueryVariables.pageIndex || undefined,
    [getAllQueryVariables.pageIndex]
  );

  const getSortingQueryVariable = useCallback(() => {
    if (
      getAllQueryVariables.sortingId &&
      typeof getAllQueryVariables.sortingDesc === 'boolean'
    ) {
      return [
        {
          id: getAllQueryVariables.sortingId,
          desc: getAllQueryVariables.sortingDesc
        }
      ];
    }
  }, [getAllQueryVariables.sortingDesc, getAllQueryVariables.sortingId]);

  const getSearchTermQueryVariable = useCallback(
    () => getAllQueryVariables.searchTerm || undefined,
    [getAllQueryVariables.searchTerm]
  );

  const getPageCount = useCallback(
    ({
      total,
      limit
    }: {
      total?: number;
      limit?: number;
    } = {}) => {
      if (typeof total === 'number' && typeof limit === 'number') {
        return Math.ceil(total / limit);
      }
    },
    []
  );

  const getFetchDataVariables = useCallback(
    ({
      pageIndex,
      pageSize,
      sorting,
      searchTerm
    }: TableFetchDataVariables) => ({
      filter: {
        offset: pageIndex * pageSize,
        limit: pageSize,
        searchTerm
      },
      sorting: {
        sorting: sorting.map(({ id, desc }) => ({
          field: id,
          direction: desc ? 'desc' : 'asc'
        }))
      }
    }),
    []
  );

  return {
    getPageCount,
    getFetchDataVariables,
    getAllQueryVariables,
    setAllQueryVariables,
    getPageIndexQueryVariable,
    getSortingQueryVariable,
    getSearchTermQueryVariable
  };
};
