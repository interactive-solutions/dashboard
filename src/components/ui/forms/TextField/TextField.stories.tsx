import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'components/forms/TextField',
  component: TextField,
  args: {
    name: 'name',
    register: `Don't mind this field...`,
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
  const { control } = useForm();
  return <TextField {...args} control={control} />;
};

export const Default = Template.bind({});
