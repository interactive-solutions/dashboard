import { Story, Meta } from '@storybook/react';
import { NextAdapter } from 'next-query-params';
import { QueryParamProvider } from 'use-query-params';

import { TableFetchDataVariables } from 'types/table';

import { Table, TableProps } from './Table';

export default {
  title: 'components/table/Table',
  component: Table,
  args: {
    columns: [
      {
        header: 'Column 1',
        accessorKey: 'col1'
      },
      {
        header: 'Column 2',
        accessorKey: 'col2'
      },
      {
        header: 'Column 3',
        accessorKey: 'col3'
      },
      {
        header: 'Column 4',
        accessorKey: 'col4'
      }
    ],
    data: [
      {
        col1: 'Modo',
        col2: 'Hockey',
        col3: 'Modo',
        col4: 'Hockey'
      },
      {
        col1: 'Modo',
        col2: 'Hockey',
        col3: 'Modo',
        col4: 'Hockey'
      },
      {
        col1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        col2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto accusantium ducimus possimus.',
        col3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        col4: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto accusantium ducimus possimus.'
      }
    ],
    onFetchData: (variables: TableFetchDataVariables) => {
      console.log(variables);
    }
  }
} as Meta;

const Template: Story<TableProps> = (args) => (
  <QueryParamProvider adapter={NextAdapter}>
    <Table {...args} />
  </QueryParamProvider>
);

export const Default = Template.bind({});

export const Sorting = Template.bind({});
Sorting.args = {
  sorting: true
};

export const Pagination = Template.bind({});
Pagination.args = {
  pagination: true
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  data: []
};

export const Empty = Template.bind({});
Empty.args = {
  data: []
};
