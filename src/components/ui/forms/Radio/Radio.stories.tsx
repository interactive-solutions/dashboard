import { Grid } from '@entire.se/components';
import { Story, Meta } from '@storybook/react';
import { FieldError, useForm } from 'react-hook-form';

import { Radio, RadioProps } from './Radio';

export default {
  title: 'components/forms/Radio',
  component: Radio,
  args: {
    name: 'name',
    register: `Don't mind this field...`,
    label: 'Lorem ipsum'
  }
} as Meta;

const Template: Story<RadioProps> = (args) => {
  const { register } = useForm();

  return (
    <Grid gap={[1, 0]}>
      <Grid.Item width={12}>
        <Radio {...args} register={register} value="1" />
      </Grid.Item>
      <Grid.Item width={12}>
        <Radio {...args} register={register} value="2" />
      </Grid.Item>
    </Grid>
  );
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
