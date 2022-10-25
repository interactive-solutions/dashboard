import { ComponentProps } from 'react';

import { components } from 'react-select';

export const MenuList = (props: ComponentProps<typeof components.MenuList>) => {
  return <components.MenuList {...props} />;
};
