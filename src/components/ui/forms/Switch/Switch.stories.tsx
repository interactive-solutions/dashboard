import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Switch, SwitchProps } from './Switch';

export default {
  title: 'components/forms/Switch',
  component: Switch,
  args: {
    name: 'name',
    control: `Don't mind this field...`,
  },
} as Meta;

const Template: Story<SwitchProps> = (args) => {
  const { control } = useForm();
  return <Switch {...args} control={control} />;
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

export const LabelTop = Template.bind({});
LabelTop.args = {
  label: 'Label',
  labelPlacement: 'top',
};

export const LabelEnd = Template.bind({});
LabelEnd.args = {
  label: 'Label',
  labelPlacement: 'end',
};

export const LabelBottom = Template.bind({});
LabelBottom.args = {
  label: 'Label',
  labelPlacement: 'bottom',
};

export const LabelStart = Template.bind({});
LabelStart.args = {
  label: 'Label',
  labelPlacement: 'start',
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

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
};
