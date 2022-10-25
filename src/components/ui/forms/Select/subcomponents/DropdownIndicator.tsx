import { ComponentProps } from 'react';

import { components } from 'react-select';

import { SelectProps } from '../Select';

export const DropdownIndicator = (
  props: ComponentProps<typeof components.DropdownIndicator>
) => {
  const { selectProps }: { [key: string]: any } = props;
  const icon: SelectProps['iconDropdownIndicator'] =
    selectProps.iconDropdownIndicator;

  return (
    <components.DropdownIndicator {...props}>
      {icon || null}
    </components.DropdownIndicator>
  );
};
