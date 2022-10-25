import { ComponentProps } from 'react';

import { components } from 'react-select';

export const Option = (props: ComponentProps<typeof components.Option>) => {
  return <components.Option {...props} />;
};
