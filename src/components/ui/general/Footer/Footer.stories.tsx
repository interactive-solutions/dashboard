import { Story, Meta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'components/general/Footer',
  component: Footer
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});
