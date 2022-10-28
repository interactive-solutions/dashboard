import { ApolloError } from '@apollo/client';

import { TableSelectors } from 'consts/cypress';

import * as styles from './Empty.styles';

export interface EmptyProps {
  visible: boolean;
  error?: ApolloError;
}

export const Empty = ({ visible, error }: EmptyProps) => {
  if (!visible) {
    return null;
  }

  return (
    <styles.Root data-cy={TableSelectors.Empty}>
      {error?.message || '[insert-empty]'}
    </styles.Root>
  );
};
