import { Grid } from '@entire.se/components';
import { useIntl } from 'react-intl';

import { BooksQuery } from 'api/graphql';
import { Link, SEO } from 'components/tools';
import { Container } from 'components/ui/general';
import { Paths } from 'consts/router';

import { texts } from './Home.text';

import * as styles from './Home.styles';

export interface HomeProps {
  books: BooksQuery['books'];
}

export const Home = ({ books }: HomeProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <styles.Root>
        <Container>
          <Grid gap={[2, 0]}>
            {books.edges.map(({ isbn, title }) => (
              <Grid.Item key={isbn} width={12}>
                <Link href={Paths.Book(isbn)}>{title}</Link>
              </Grid.Item>
            ))}
          </Grid>
        </Container>
        {/* @ts-ignore */}
        <button type="button" onClick={onClick}>
          {'Test'.toString()}
        </button>
      </styles.Root>
    </>
  );
};
