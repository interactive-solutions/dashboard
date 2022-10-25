import { ComponentProps } from 'react';

import { components } from 'react-select';

export const IndicatorsContainer = (
  props: ComponentProps<typeof components.IndicatorsContainer>
) => {
  return <components.IndicatorsContainer {...props} />;
};
