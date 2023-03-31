import { FireTruck } from '@mui/icons-material';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { Button, ButtonProps } from '@mui/material';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'components/general/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const VariantContained = Template.bind({});
VariantContained.args = {
  variant: 'contained',
};

export const VariantOutlined = Template.bind({});
VariantOutlined.args = {
  variant: 'outlined',
};

export const VariantText = Template.bind({});
VariantText.args = {
  variant: 'text',
};

export const Loading: Story<LoadingButtonProps> = (args) => (
  <LoadingButton {...args} loading />
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: <FireTruck />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: <FireTruck />,
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  color: 'primary',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  color: 'secondary',
};

export const ColorError = Template.bind({});
ColorError.args = {
  color: 'error',
};

export const ColorInfo = Template.bind({});
ColorInfo.args = {
  color: 'info',
};

export const ColorSuccess = Template.bind({});
ColorSuccess.args = {
  color: 'success',
};

export const ColorWarning = Template.bind({});
ColorWarning.args = {
  color: 'warning',
};
