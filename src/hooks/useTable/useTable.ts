import { useCallback } from 'react';

import {
  NumberParam,
  useQueryParams,
  StringParam,
  BooleanParam
} from 'use-query-params';

import { TableFetchDataVariables } from 'types/table';

export const useTable = () => {
  const [getAllQueryParameters, setAllQueryParameters] = useQueryParams(
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

  const clearAllQueryParameters = useCallback(() => {
    setAllQueryParameters({});
  }, [setAllQueryParameters]);

  const getPageIndexQueryParameter = useCallback(
    () => getAllQueryParameters.pageIndex || undefined,
    [getAllQueryParameters.pageIndex]
  );

  const getSortingQueryParameter = useCallback(() => {
    if (
      getAllQueryParameters.sortingId &&
      typeof getAllQueryParameters.sortingDesc === 'boolean'
    ) {
      return [
        {
          id: getAllQueryParameters.sortingId,
          desc: getAllQueryParameters.sortingDesc
        }
      ];
    }
  }, [getAllQueryParameters.sortingDesc, getAllQueryParameters.sortingId]);

  const getSearchTermQueryParameter = useCallback(
    () => getAllQueryParameters.searchTerm || undefined,
    [getAllQueryParameters.searchTerm]
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
    getAllQueryParameters,
    setAllQueryParameters,
    getPageIndexQueryParameter,
    getSortingQueryParameter,
    getSearchTermQueryParameter,
    clearAllQueryParameters
  };
};
