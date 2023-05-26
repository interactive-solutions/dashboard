import { AppsOutage } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import { texts } from '../BasicTable.text';

import * as styles from '../BasicTable.styles';

export type EmptyProps = {
  visible: boolean;
};

export const Empty = ({ visible }: EmptyProps) => {
  if (!visible) {
    return null;
  }

  return (
    <styles.Error>
      <Grid container alignItems="center" direction="column" spacing={1}>
        <Grid item>
          <AppsOutage
            sx={{
              fontSize: 90,
              display: 'block',
              color: 'grey.500',
            }}
          />
        </Grid>
        <Grid item>
          <Typography>
            <FormattedMessage {...texts.table_empty} />
          </Typography>
        </Grid>
      </Grid>
    </styles.Error>
  );
};
