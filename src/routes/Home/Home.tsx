import { Grid, Link, Tooltip } from '@entire.se/components';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Container } from 'components/ui/general';

import { texts } from './Home.text';

import * as styles from './Home.styles';

export const Home = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <styles.Root>
        <Container>{'Home'.toString()}</Container>
      </styles.Root>
    </>
  );
};
