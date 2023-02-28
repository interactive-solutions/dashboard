import { LoadingButton } from '@mui/lab';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';

import { texts } from './Login.text';

export const Login = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <Typography variant="h4" color="info.dark">
        {'Login'.toString()}
      </Typography>
      <div>
        <Button size="small" variant="contained">
          {'small'.toString()}
        </Button>
        <Button size="medium" variant="contained">
          {'medium'.toString()}
        </Button>
        <LoadingButton size="large" variant="contained" loading>
          {'large'.toString()}
        </LoadingButton>
      </div>
      <ButtonGroup>
        <LoadingButton size="small" variant="contained" loading>
          {'small'.toString()}
        </LoadingButton>
        <Button size="medium" variant="contained">
          {'medium'.toString()}
        </Button>
        <Button size="large" variant="contained">
          {'large'.toString()}
        </Button>
      </ButtonGroup>
    </>
  );
};
