import { ComponentProps } from 'react';

import { components } from 'react-select';

export const MultiValue = (
  props: ComponentProps<typeof components.MultiValue>
) => {
  return <components.MultiValue {...props} />;
};
