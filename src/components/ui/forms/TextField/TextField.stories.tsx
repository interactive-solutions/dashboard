import { FireTruck } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'components/forms/TextField',
  component: TextField,
  args: {
    name: 'name',
    control: `Don't mind this field...`,
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
  const { control } = useForm();
  return <TextField {...args} control={control} />;
};

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
};

export const Error = Template.bind({});
Error.args = {
  error: {
    message: 'Error message',
    type: 'required',
  },
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'Helper text',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: 'Default value',
};

export const InputAdornments = Template.bind({});
InputAdornments.args = {
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <FireTruck />
      </InputAdornment>
    ),
  },
};
