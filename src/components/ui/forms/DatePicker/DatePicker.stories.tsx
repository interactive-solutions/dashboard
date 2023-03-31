import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { DatePicker, DatePickerProps } from './DatePicker';

export default {
  title: 'components/forms/DatePicker',
  component: DatePicker,
  args: {
    name: 'name',
    control: `Don't mind this field...`,
    label: 'Label',
  },
} as Meta;

const Template: Story<DatePickerProps> = (args) => {
  const { control } = useForm();
  return <DatePicker {...args} control={control} />;
};

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  slotProps: {
    textField: {
      size: 'small',
    },
  },
};

export const Medium = Template.bind({});
Medium.args = {
  slotProps: {
    textField: {
      size: 'medium',
    },
  },
};

export const VariantFilled = Template.bind({});
VariantFilled.args = {
  slotProps: {
    textField: {
      variant: 'filled',
    },
  },
};

export const VariantOutlined = Template.bind({});
VariantOutlined.args = {
  slotProps: {
    textField: {
      variant: 'outlined',
    },
  },
};

export const VariantStandard = Template.bind({});
VariantStandard.args = {
  slotProps: {
    textField: {
      variant: 'standard',
    },
  },
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: null,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
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
  slotProps: {
    textField: {
      fullWidth: true,
    },
  },
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: new Date('2023-03-31'),
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  slotProps: {
    textField: {
      color: 'primary',
    },
  },
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  slotProps: {
    textField: {
      color: 'secondary',
    },
  },
};

export const ColorError = Template.bind({});
ColorError.args = {
  slotProps: {
    textField: {
      color: 'error',
    },
  },
};

export const ColorInfo = Template.bind({});
ColorInfo.args = {
  slotProps: {
    textField: {
      color: 'info',
    },
  },
};

export const ColorSuccess = Template.bind({});
ColorSuccess.args = {
  slotProps: {
    textField: {
      color: 'success',
    },
  },
};

export const ColorWarning = Template.bind({});
ColorWarning.args = {
  slotProps: {
    textField: {
      color: 'warning',
    },
  },
};
