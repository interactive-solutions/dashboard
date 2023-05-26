import { CircularProgress, Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import { texts } from '../BasicTable.text';

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
      <Grid container alignItems="center" direction="column" spacing={1.5}>
        <Grid item>
          <CircularProgress size={50} />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <FormattedMessage {...texts.table_loading} />
          </Typography>
        </Grid>
      </Grid>
    </styles.Loading>
  );
};
