import { ComponentProps } from 'react';

import { components } from 'react-select';

export const SingleValue = (
  props: ComponentProps<typeof components.SingleValue>
) => {
  return <components.SingleValue {...props} />;
};
