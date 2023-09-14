import { CircularProgress, Grid, Typography } from '@mui/material';

import { LoadingContainer } from '../BasicTable.styles';

export type LoadingProps = {
  visible: boolean;
};

export const Loading = ({ visible }: LoadingProps) => {
  if (!visible) {
    return null;
  }

  return (
    <LoadingContainer>
      <Grid container alignItems="center" direction="column" spacing={1.5}>
        <Grid item>
          <CircularProgress size={50} />
        </Grid>
        <Grid item>
          <Typography variant="body2">Fetching data</Typography>
        </Grid>
      </Grid>
    </LoadingContainer>
  );
};
