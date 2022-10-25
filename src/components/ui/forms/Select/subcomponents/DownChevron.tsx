import { ComponentProps } from 'react';

import { components } from 'react-select';

export const DownChevron = (
  props: ComponentProps<typeof components.DownChevron>
) => {
  return <components.DownChevron {...props} />;
};
