import { useIntl } from 'react-intl';

import { Layout } from 'components/general';
import { GridLayout } from 'components/grid';
import { SEO } from 'components/tools';

import { texts } from './Landing.text';

import * as styles from './Landing.styles';

export const Landing = () => {
  const { formatMessage } = useIntl();
  return (
    <styles.Root>
      <SEO title={formatMessage(texts.seoTitle)} />
      <Layout>
        <GridLayout />
      </Layout>
    </styles.Root>
  );
};
