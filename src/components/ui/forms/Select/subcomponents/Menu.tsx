import { ComponentProps } from 'react';

import { components } from 'react-select';

export const Menu = (props: ComponentProps<typeof components.Menu>) => {
  return <components.Menu {...props} />;
};
