import { Typography } from '@mui/material';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Table } from 'components/ui/table';

import { texts } from './Login.text';

export const Login = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <Typography variant="h4" color="info.dark">
        {'Login'.toString()}
      </Typography>
      <Table />
    </>
  );
};
