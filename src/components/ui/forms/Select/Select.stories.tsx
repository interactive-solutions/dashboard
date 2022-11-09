import { Story, Meta } from '@storybook/react';
import { FieldError, useForm } from 'react-hook-form';

import { Select, SelectProps } from './Select';

export default {
  title: 'components/forms/Select',
  component: Select,
  args: {
    name: 'name',
    control: `Don't mind this field...`,
    placeholder: 'Placeholder',
    options: [
      { value: 'volvo', label: 'Volvo' },
      { value: 'saab', label: 'Saab' },
      { value: 'tesla', label: 'Tesla' }
    ]
  }
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const { control } = useForm();
  return <Select {...args} control={control} />;
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

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};

export const WithoutPlaceholder = Template.bind({});
WithoutPlaceholder.args = {
  placeholder: undefined,
  fullWidth: true
};

export const NotSearchable = Template.bind({});
NotSearchable.args = {
  searchable: false
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label'
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true
};

export const Error = Template.bind({});
Error.args = {
  error: {
    message: 'Error message' as unknown as FieldError
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Label'
};

export const PreventCloseMenuOnSelect = Template.bind({});
PreventCloseMenuOnSelect.args = {
  closeMenuOnSelect: false
};

export const NoOptionsMessage = Template.bind({});
NoOptionsMessage.args = {
  noOptionsMessage: () => 'Lorem ipsum',
  options: []
};

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  multiple: true,
  defaultValue: [
    { value: 'tesla', label: 'Tesla' },
    { value: 'volvo', label: 'Volvo' }
  ],
  iconDropdownIndicator: '🔥',
  iconClearIndicator: '🏎️',
  iconMultiValueRemove: '🎃'
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: { value: 'tesla', label: 'Tesla' }
};

export const DefaultValueMultiple = Template.bind({});
DefaultValueMultiple.args = {
  multiple: true,
  defaultValue: [
    { value: 'tesla', label: 'Tesla' },
    { value: 'volvo', label: 'Volvo' }
  ]
};
