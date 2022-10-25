import { ComponentProps } from 'react';

import { components } from 'react-select';

export const IndicatorSeparator = (
  props: ComponentProps<typeof components.IndicatorSeparator>
) => {
  return <components.IndicatorSeparator {...props} />;
};
