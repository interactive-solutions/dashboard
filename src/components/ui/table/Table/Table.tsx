import { ApolloError } from '@apollo/client';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/router';

import { Content } from 'components/ui/table';
import { TableFetchDataVariables } from 'types/table';

export interface TableProps {
  data: any[];
  columns: ColumnDef<any, any>[];
  sorting?: boolean;
  pagination?: boolean;
  pageCount?: number;
  pageSize?: number;
  loading?: boolean;
  error?: ApolloError;
  onFetchData?: (variables: TableFetchDataVariables) => void;
  handleQueryParameters?: boolean;
  search?: boolean;
}

export const Table = (props: TableProps) => {
  const { isReady } = useRouter();

  // This will prevent the hydration failure and will only be rendered on
  // the client side
  if (!isReady && props.handleQueryParameters) {
    return null;
  }

  return <Content {...props} />;
};
