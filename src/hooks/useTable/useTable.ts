import { useCallback } from 'react';

import { TableFetchDataVariables } from 'types/table';

export const useTable = () => {
  const getPageCount = useCallback(
    ({
      total,
      limit,
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
    ({ pageIndex, pageSize, sorting }: TableFetchDataVariables) => ({
      filter: {
        offset: pageIndex * pageSize,
        limit: pageSize,
      },
      sorting: {
        sorting: sorting.map(({ id, desc }) => ({
          field: id,
          direction: desc ? 'desc' : 'asc',
        })),
      },
    }),
    []
  );

  return {
    getPageCount,
    getFetchDataVariables,
  };
};
