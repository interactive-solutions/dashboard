import { ApolloError } from '@apollo/client';
import { ColumnDef } from '@tanstack/react-table';

import { Content } from 'components/ui/table';
import { TableFetchDataVariables } from 'types/table';

export interface TableProps {
  data: any[];
  columns: ColumnDef<any, any>[];
  onFetchData: (variables: TableFetchDataVariables) => void;
  sorting?: boolean;
  pagination?: boolean;
  pageCount?: number;
  pageSize?: number;
  loading?: boolean;
  error?: ApolloError;
  handleQueryParameters?: boolean;
}

export const Table = (props: TableProps) => {
  return <Content {...props} />;
};
