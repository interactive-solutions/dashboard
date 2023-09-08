import { useState } from 'react';

import { Dashboard, Settings } from 'components/general';
import { SEO } from 'components/tools';
import { gridItems as defaultGridItems } from 'widgets';

import * as styles from './Landing.styles';

export const Landing = () => {
  const [gridItems, _] = useState(defaultGridItems);

  return (
    <styles.Root>
      <SEO title="Landing" />
      <Dashboard gridItems={gridItems} />
      <Settings />
    </styles.Root>
  );
};
