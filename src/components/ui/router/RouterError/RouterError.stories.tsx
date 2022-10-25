import { Story, Meta } from '@storybook/react';

import { RouterError, RouterErrorProps } from './RouterError';

export default {
  title: 'components/router/RouterError',
  component: RouterError,
  args: {
    statusCode: 404
  }
} as Meta;

const Template: Story<RouterErrorProps> = (args) => <RouterError {...args} />;

export const Default = Template.bind({});
