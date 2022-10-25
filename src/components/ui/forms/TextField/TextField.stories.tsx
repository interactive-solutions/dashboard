import { Story, Meta } from '@storybook/react';
import { FieldError, useForm } from 'react-hook-form';

import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'components/forms/TextField',
  component: TextField,
  args: {
    name: 'name',
    register: `Don't mind this field...`
  }
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
  const { register } = useForm();
  return <TextField {...args} register={register} />;
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  iconLeft: '🔥'
};

export const IconRight = Template.bind({});
IconRight.args = {
  iconRight: '🔥'
};

export const Textarea = Template.bind({});
Textarea.args = {
  textarea: {
    minRows: 3
  }
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label'
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder'
};

export const Error = Template.bind({});
Error.args = {
  error: {
    message: 'Error message' as unknown as FieldError
  }
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: 'Default value'
};
