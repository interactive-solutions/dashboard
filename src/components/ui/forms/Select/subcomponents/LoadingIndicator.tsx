import { ComponentProps } from 'react';

import { Spinner } from '@entire.se/components';
import { components } from 'react-select';

import * as styles from '../Select.styles';

export const LoadingIndicator = (
  props: ComponentProps<typeof components.LoadingIndicator>
) => {
  return (
    <styles.LoadingIndicatorContainer>
      <components.LoadingIndicator {...props} />
      <Spinner visible size={20} lineWidth={2} />
    </styles.LoadingIndicatorContainer>
  );
};
