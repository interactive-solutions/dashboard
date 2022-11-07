import { Story, Meta } from '@storybook/react';
import { FieldError, useForm } from 'react-hook-form';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'components/forms/Checkbox',
  component: Checkbox,
  args: {
    name: 'name',
    register: `Don't mind this field...`,
    label: 'Lorem ipsum'
  }
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  const { register } = useForm();
  return <Checkbox {...args} register={register} />;
};

export const WithLabel = Template.bind({});

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: undefined
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Error = Template.bind({});
Error.args = {
  error: {
    message: 'Error message' as unknown as FieldError
  }
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true
};
