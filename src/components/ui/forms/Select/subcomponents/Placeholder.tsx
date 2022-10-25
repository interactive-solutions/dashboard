import { ComponentProps } from 'react';

import { components } from 'react-select';

export const Placeholder = (
  props: ComponentProps<typeof components.Placeholder>
) => {
  return <components.Placeholder {...props} />;
};
