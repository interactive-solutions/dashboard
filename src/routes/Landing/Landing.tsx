import { Button } from '@mui/material';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { useAuthenticationStore } from 'store/authentication';

import { texts } from './Landing.text';

import * as styles from './Landing.styles';

export const Landing = () => {
  const { formatMessage } = useIntl();
  const logout = useAuthenticationStore((store) => store.logout);

  return (
    <styles.Root>
      <SEO title={formatMessage(texts.seoTitle)} />
      <Button type="button" onClick={() => logout()}>
        {'Logga ut'.toString()}
      </Button>
    </styles.Root>
  );
};
