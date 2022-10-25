import { ComponentProps } from 'react';

import { components } from 'react-select';

export const GroupHeading = (
  props: ComponentProps<typeof components.GroupHeading>
) => {
  return <components.GroupHeading {...props} />;
};
