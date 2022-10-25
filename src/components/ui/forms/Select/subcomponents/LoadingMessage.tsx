import { ComponentProps } from 'react';

import { components } from 'react-select';

export const LoadingMessage = (
  props: ComponentProps<typeof components.LoadingMessage>
) => {
  return <components.LoadingMessage {...props} />;
};
