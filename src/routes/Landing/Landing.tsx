import { useState } from 'react';

import { Dashboard, Settings, Layout } from 'components/general';
import { SEO } from 'components/tools';
import { gridItems as defaultGridItems } from 'widgets';

import { Root } from './Landing.styles';

export const Landing = () => {
  const [gridItems, setGridItems] = useState(defaultGridItems);

  return (
    <Root>
      <SEO title="Landing" />
      <Layout>
        <Dashboard {...{ gridItems, setGridItems }} />
        <Settings {...{ gridItems, setGridItems }} />
      </Layout>
    </Root>
  );
};
