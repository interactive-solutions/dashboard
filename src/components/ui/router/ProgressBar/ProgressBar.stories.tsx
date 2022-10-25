import { useCallback } from 'react';

import { Grid } from '@entire.se/components';
import { Story, Meta } from '@storybook/react';
import NProgress from 'nprogress';

import { Button } from 'components/ui/general';

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
    <Grid gap={2}>
      <Grid.Item>
        <Button type="button" onClick={start}>
          Start
        </Button>
      </Grid.Item>
      <Grid.Item>
        <Button type="button" onClick={end}>
          End
        </Button>
      </Grid.Item>
      <ProgressBar {...args} />
    </Grid>
  );
};

export const Default = Template.bind({});
