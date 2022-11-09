import { Grid } from '@entire.se/components';
import { Story, Meta } from '@storybook/react';
import { FieldError, useForm } from 'react-hook-form';

import { Switch, SwitchProps } from './Switch';

export default {
  title: 'components/forms/Switch',
  component: Switch,
  args: {
    name: 'name',
    register: `Don't mind this field...`,
    labelRight: 'Lorem ipsum'
  }
} as Meta;

const Template: Story<SwitchProps> = (args) => {
  const { register } = useForm();

  if (args.type === 'radio') {
    return (
      <Grid gap={[1, 0]}>
        <Grid.Item width={12}>
          <Switch {...args} register={register} value="1" />
        </Grid.Item>
        <Grid.Item width={12}>
          <Switch {...args} register={register} value="2" />
        </Grid.Item>
      </Grid>
    );
  }

  return <Switch {...args} register={register} />;
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

export const WithLabelRight = Template.bind({});

export const WithLabelLeft = Template.bind({});
WithLabelLeft.args = {
  labelLeft: 'Lorem ipsum',
  labelRight: undefined
};

export const WithLabelBothSides = Template.bind({});
WithLabelBothSides.args = {
  labelLeft: 'Lorem ipsum'
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  labelRight: undefined
};

export const TypeCheckbox = Template.bind({});
TypeCheckbox.args = {
  type: 'checkbox'
};

export const TypeRadio = Template.bind({});
TypeRadio.args = {
  type: 'radio'
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
