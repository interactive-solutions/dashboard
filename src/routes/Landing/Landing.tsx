import { Typography } from '@mui/material';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';

import { texts } from './Landing.text';

export const Landing = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <Typography>{'Landing'.toString()}</Typography>
    </>
  );
};
