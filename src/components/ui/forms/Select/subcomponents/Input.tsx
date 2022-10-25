import { ComponentProps } from 'react';

import { components } from 'react-select';

export const Input = (props: ComponentProps<typeof components.Input>) => {
  return <components.Input {...props} />;
};
