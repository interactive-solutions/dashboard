import { ComponentProps } from 'react';

import { components } from 'react-select';

export const MenuPortal = (
  props: ComponentProps<typeof components.MenuPortal>
) => {
  return <components.MenuPortal {...props} />;
};
