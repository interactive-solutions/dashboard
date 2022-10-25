import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'components/general/Button',
  component: Button,
  args: {
    children: 'Button'
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

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

export const Link = Template.bind({});
Link.args = {
  link: {
    href: 'https://www.modohockey.se/',
    target: '_blank'
  }
};

export const Ghost = Template.bind({});
Ghost.args = {
  ghost: true
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  iconLeft: '🔥'
};

export const IconRight = Template.bind({});
IconRight.args = {
  iconRight: '🔥'
};

export const AsDiv = Template.bind({});
AsDiv.args = {
  as: 'div'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
