import { ComponentProps } from 'react';

import { components } from 'react-select';

export const Control = (props: ComponentProps<typeof components.Control>) => {
  return <components.Control {...props} />;
};
