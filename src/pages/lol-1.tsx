import { Container, Link, Typography } from '@mui/material';

export default () => {
  return (
    <Container>
      <Typography variant="h6" sx={{ color: 'success.main' }}>
        1.
      </Typography>
      <Link href="/lol-2">2.</Link>
    </Container>
  );
};
