import { ComponentProps } from 'react';

import { components } from 'react-select';

export const NoOptionsMessage = (
  props: ComponentProps<typeof components.NoOptionsMessage>
) => {
  return <components.NoOptionsMessage {...props} />;
};
