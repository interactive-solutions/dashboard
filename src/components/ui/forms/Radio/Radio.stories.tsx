import { Grid } from '@mui/material';
import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Radio, RadioProps } from './Radio';

export default {
  title: 'components/forms/Radio',
  component: Radio,
  args: {
    name: 'name',
    control: `Don't mind this field...`,
  },
} as Meta;

const Template: Story<RadioProps> = (args) => {
  const { control } = useForm();
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Radio {...args} control={control} value="1" />
      </Grid>
      <Grid item>
        <Radio {...args} control={control} value="2" />
      </Grid>
    </Grid>
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

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: '1',
};
