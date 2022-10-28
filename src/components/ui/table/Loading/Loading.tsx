import { TableSelectors } from 'consts/cypress';

import * as styles from './Loading.styles';

export interface LoadingProps {
  visible: boolean;
}

export const Loading = ({ visible }: LoadingProps) => {
  if (!visible) {
    return null;
  }

  return (
    <styles.Root data-cy={TableSelectors.Loading}>
      {'[insert-loading]'.toString()}
    </styles.Root>
  );
};
