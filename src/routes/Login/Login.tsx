import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';

import { texts } from './Login.text';

export const Login = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <h1>{'Login'.toString()}</h1>
    </>
  );
};
