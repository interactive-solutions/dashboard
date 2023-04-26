import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { GridLayout } from 'components/ui/grid';

import { Layout } from '../../components/ui/general';

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
