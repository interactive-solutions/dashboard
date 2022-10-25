import { Story, Meta } from '@storybook/react';

import { Container, ContainerProps } from './Container';

export default {
  title: 'components/general/Container',
  component: Container,
  args: {
    children: 'Lorem ipsum'
  }
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};
