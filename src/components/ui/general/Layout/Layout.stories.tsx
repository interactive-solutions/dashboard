import { Story, Meta } from '@storybook/react';

import { Layout, LayoutProps } from './Layout';

export default {
  title: 'components/general/Layout',
  component: Layout,
  args: {
    children: 'Children',
  },
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
