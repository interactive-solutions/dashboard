import { Story, Meta } from '@storybook/react';
import { FieldError, useForm } from 'react-hook-form';

import { File, FileProps } from './File';

export default {
  title: 'components/forms/File',
  component: File,
  args: {
    name: 'name',
    register: `Don't mind this field...`,
    children: 'Select file 👉'
  }
} as Meta;

const Template: Story<FileProps> = (args) => {
  const { register } = useForm();
  return <File {...args} register={register} />;
};

export const Single = Template.bind({});

export const MultipleWithShowList = Template.bind({});
MultipleWithShowList.args = {
  multiple: true,
  showFileList: true
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

export const AcceptJPG = Template.bind({});
AcceptJPG.args = {
  accept: '.jpg'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};
