import { CircularProgress } from '@mui/material';

import * as styles from '../BasicTable.styles';

export type LoadingProps = {
  visible: boolean;
};

export const Loading = ({ visible }: LoadingProps) => {
  if (!visible) {
    return null;
  }

  return (
    <styles.Loading>
      <CircularProgress />
    </styles.Loading>
  );
};
