import { ApolloError } from '@apollo/client';

import * as styles from '../BasicTable.styles';

export type EmptyProps = {
  visible: boolean;
  error?: ApolloError;
};

export const Empty = ({ visible, error }: EmptyProps) => {
  if (!visible) {
    return null;
  }

  return (
    <styles.Error>{error?.message || '[insert-empty]'.toString()}</styles.Error>
  );
};
