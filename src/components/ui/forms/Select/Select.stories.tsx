import { MenuItem } from '@mui/material';
import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Select, SelectProps } from './Select';

export default {
  title: 'components/forms/Select',
  component: Select,
  args: {
    name: 'name',
    control: `Don't mind this field...`,
  },
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const { control } = useForm();

  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'tesla', label: 'Tesla' },
    { value: 'koenigsegg', label: 'Koenigsegg' },
    { value: 'ford', label: 'Ford' },
    { value: 'opel', label: 'Opel' },
    { value: 'volkswagen', label: 'Volkswagen' },
    { value: 'honda', label: 'Honda' },
    { value: 'mercedes', label: 'Mercedes' },
  ];

  return (
    <Select {...args} control={control} sx={{ minWidth: 200 }}>
      {args.children ||
        options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
    </Select>
  );
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

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
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

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: 'koenigsegg',
};

export const DefaultValueMultiple = Template.bind({});
DefaultValueMultiple.args = {
  multiple: true,
  defaultValue: ['koenigsegg', 'volvo', 'honda'],
};
