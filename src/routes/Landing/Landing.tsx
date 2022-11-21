import { Grid, Link, Tooltip } from '@entire.se/components';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Container } from 'components/ui/general';

import { texts } from './Landing.text';

import * as styles from './Landing.styles';

export const Landing = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <styles.Root>
        <Container>{'Landing'.toString()}</Container>
      </styles.Root>
    </>
  );
};
