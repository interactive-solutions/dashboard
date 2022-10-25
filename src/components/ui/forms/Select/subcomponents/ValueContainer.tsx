import { ComponentProps } from 'react';

import { components } from 'react-select';

export const ValueContainer = (
  props: ComponentProps<typeof components.ValueContainer>
) => {
  return <components.ValueContainer {...props} />;
};
