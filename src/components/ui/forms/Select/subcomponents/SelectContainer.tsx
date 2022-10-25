import { ComponentProps } from 'react';

import { components } from 'react-select';

export const SelectContainer = (
  props: ComponentProps<typeof components.SelectContainer>
) => {
  return <components.SelectContainer {...props} />;
};
