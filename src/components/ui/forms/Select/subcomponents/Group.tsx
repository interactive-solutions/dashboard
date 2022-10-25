import { ComponentProps } from 'react';

import { components } from 'react-select';

export const Group = (props: ComponentProps<typeof components.Group>) => {
  return <components.Group {...props} />;
};
