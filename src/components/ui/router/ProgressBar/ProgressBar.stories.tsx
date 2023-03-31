import { useCallback } from 'react';

import { ButtonGroup } from '@mui/material';
import { Story, Meta } from '@storybook/react';
import NProgress from 'nprogress';

import { Button } from 'components/ui/general';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'components/router/ProgressBar',
  component: ProgressBar,
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
    <>
      <ButtonGroup>
        <Button type="button" onClick={start}>
          Start
        </Button>
        <Button type="button" onClick={end}>
          End
        </Button>
      </ButtonGroup>
      <ProgressBar {...args} />
    </>
  );
};

export const Default = Template.bind({});
