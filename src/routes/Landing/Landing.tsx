import { GridLayout } from 'components/grid';
import { SEO } from 'components/tools';

import * as styles from './Landing.styles';

export const Landing = () => {
  return (
    <styles.Root>
      <SEO title="Landing" />
      <GridLayout />
    </styles.Root>
  );
};
