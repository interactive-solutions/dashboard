import { CircularProgress } from '@mui/material';

import * as styles from './Loading.styles';

export interface LoadingProps {
  visible: boolean;
}

export const Loading = ({ visible }: LoadingProps) => {
  if (!visible) {
    return null;
  }

  return (
    <styles.Root>
      <CircularProgress />
    </styles.Root>
  );
};
