import { Layout } from 'components/general';
import { GridLayout } from 'components/grid';
import { SEO } from 'components/tools';

import * as styles from './Landing.styles';

export const Landing = () => {
  return (
    <styles.Root>
      <SEO title="Landing" />
      <Layout>
        <GridLayout />
      </Layout>
    </styles.Root>
  );
};
