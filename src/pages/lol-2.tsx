import { LoadingButton } from '@mui/lab';
import { Container, Typography } from '@mui/material';

export default () => {
  return (
    <Container>
      <Typography>2.</Typography>
      <LoadingButton
        href="/lol-1"
        variant="contained"
        fullWidth
        color="warning"
      >
        1.
      </LoadingButton>
    </Container>
  );
};
