import { ComponentProps } from 'react';

import { components } from 'react-select';

import { SelectProps } from '../Select';

export const MultiValueRemove = (
  props: ComponentProps<typeof components.MultiValueRemove>
) => {
  const { selectProps }: { [key: string]: any } = props;
  const icon: SelectProps['iconMultiValueRemove'] =
    selectProps.iconMultiValueRemove;

  return (
    <components.MultiValueRemove {...props}>
      {icon || null}
    </components.MultiValueRemove>
  );
};
