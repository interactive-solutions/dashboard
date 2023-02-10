import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';

import { texts } from './Landing.text';

export const Landing = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <div>{'Landing'.toString()}</div>
    </>
  );
};
