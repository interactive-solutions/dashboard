import { Error } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

import * as styles from './RouterError.styles';

export type RouterErrorProps = {
  statusCode: number;
};

export const RouterError = ({ statusCode }: RouterErrorProps) => {
  return (
    <styles.Root>
      <Grid container alignItems="center" direction="column" spacing={2}>
        <Grid item>
          <Error
            sx={{
              fontSize: 100,
              display: 'block',
              color: 'error.main',
            }}
          />
        </Grid>
        <Grid item>
          <Typography color="error.main">{`Router error with status code "${statusCode}".`}</Typography>
        </Grid>
      </Grid>
    </styles.Root>
  );
};
