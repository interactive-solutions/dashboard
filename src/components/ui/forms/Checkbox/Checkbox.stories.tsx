import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

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

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const SizeWithBreakpoints = Template.bind({});
SizeWithBreakpoints.args = {
  size: {
    root: 'small',
    md: 'medium',
    xl: 'large'
  }
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
    message: 'Error message',
    type: 'required'
  }
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true
};
