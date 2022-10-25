import { ComponentProps } from 'react';

import { components } from 'react-select';

export const MultiValueLabel = (
  props: ComponentProps<typeof components.MultiValueLabel>
) => {
  return <components.MultiValueLabel {...props} />;
};
