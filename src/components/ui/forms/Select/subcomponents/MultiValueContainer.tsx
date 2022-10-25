import { ComponentProps } from 'react';

import { components } from 'react-select';

export const MultiValueContainer = (
  props: ComponentProps<typeof components.MultiValueContainer>
) => {
  return <components.MultiValueContainer {...props} />;
};
