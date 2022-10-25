import { GetServerSideProps } from 'next';

import { client } from 'api/apollo';
import {
  BookIsbnDocument,
  BookIsbnQueryVariables,
  BookIsbnQuery
} from 'api/graphql';
import { Book } from 'routes';

export interface PageProps {
  bookIsbn: NonNullable<BookIsbnQuery['bookIsbn']>;
}

export default ({ bookIsbn }: PageProps) => {
  return <Book bookIsbn={bookIsbn} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (typeof query.isbn !== 'string') {
    return { notFound: true };
  }

  const { data } = await client.query<
    BookIsbnQuery | undefined,
    BookIsbnQueryVariables
  >({
    query: BookIsbnDocument,
    variables: {
      isbn: query.isbn
    }
  });

  if (!data?.bookIsbn) {
    return { notFound: true };
  }

  return {
    props: {
      bookIsbn: data.bookIsbn
    }
  };
};
