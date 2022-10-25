import { Grid, Typography } from '@entire.se/components';

import { BookIsbnQuery } from 'api/graphql';
import { SEO } from 'components/tools';
import { Button, Container, Image } from 'components/ui/general';
import { Paths } from 'consts/router';

import * as styles from './Book.styles';

export interface BookProps {
  bookIsbn: NonNullable<BookIsbnQuery['bookIsbn']>;
}

export const Book = ({ bookIsbn }: BookProps) => {
  const { title, image } = bookIsbn;

  return (
    <>
      <SEO title={title} />
      <styles.Root>
        <Container>
          <Grid
            reverse
            align="middle"
            gap={{
              root: [2, 0],
              xs: [0, 2],
              sm: [0, 4]
            }}
          >
            {!!image && (
              <Grid.Item
                width={{
                  root: 12,
                  xs: 6
                }}
              >
                <Image
                  src={image.uri}
                  alt={title}
                  width={image.width}
                  height={image.height}
                  backgroundColor="dark-400"
                  layout="responsive"
                  sizes="(min-width: 480px) 50vw, 100vw"
                />
              </Grid.Item>
            )}
            <Grid.Item
              width={{
                root: 12,
                xs: 6
              }}
            >
              <Grid
                gap={{
                  root: [1, 0],
                  xs: [2, 0],
                  sm: [3, 0]
                }}
              >
                <Grid.Item width={12}>
                  <Typography
                    type={{
                      root: 'headline-10',
                      xs: 'headline-40',
                      sm: 'display-10'
                    }}
                  >
                    {title}.
                  </Typography>
                </Grid.Item>
                <Grid.Item width={12}>
                  <Button link={{ href: Paths.Home }}>
                    {'Go back'.toString()}
                  </Button>
                </Grid.Item>
              </Grid>
            </Grid.Item>
          </Grid>
        </Container>
      </styles.Root>
    </>
  );
};
