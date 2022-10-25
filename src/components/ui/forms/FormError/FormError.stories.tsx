import { Story, Meta } from '@storybook/react';

import { FormError, FormErrorProps } from './FormError';

export default {
  title: 'components/forms/FormError',
  component: FormError,
  args: {
    error: 'Lorem ipsum'
  }
} as Meta;

const Template: Story<FormErrorProps> = (args) => <FormError {...args} />;

export const Default = Template.bind({});
