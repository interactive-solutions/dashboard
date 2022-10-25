import { ComponentProps } from 'react';

import { components } from 'react-select';

import { SelectProps } from '../Select';

export const ClearIndicator = (
  props: ComponentProps<typeof components.ClearIndicator>
) => {
  const { selectProps }: { [key: string]: any } = props;
  const icon: SelectProps['iconClearIndicator'] =
    selectProps.iconClearIndicator;

  return (
    <components.ClearIndicator {...props}>
      {icon || null}
    </components.ClearIndicator>
  );
};
