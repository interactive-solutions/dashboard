import { useCallback } from 'react';

// import { Grid } from '@entire.se/components';
import { Story, Meta } from '@storybook/react';
import NProgress from 'nprogress';

// import { Button } from 'components/ui/general';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'components/router/ProgressBar',
  component: ProgressBar
} as Meta;

const Template: Story = (args) => {
  const start = useCallback(() => {
    NProgress.set(0);
    NProgress.start();
  }, []);

  const end = useCallback(() => {
    NProgress.done(true);
  }, []);

  return (
    <div>
      <div>
        <button type="button" onClick={start}>
          Start
        </button>
      </div>
      <div>
        <button type="button" onClick={end}>
          End
        </button>
      </div>
      <ProgressBar {...args} />
    </div>
  );
};

export const Default = Template.bind({});
