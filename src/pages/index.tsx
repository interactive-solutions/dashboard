import { GetServerSideProps } from 'next';

import { client } from 'api/apollo';
import { BooksDocument, BooksQuery, BooksQueryVariables } from 'api/graphql';
import { Home } from 'routes';

export interface PageProps {
  books: BooksQuery['books'];
}

export default ({ books }: PageProps) => {
  return <Home books={books} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<
    BooksQuery | undefined,
    BooksQueryVariables
  >({
    query: BooksDocument,
    variables: {
      filter: {
        limit: 5
      }
    }
  });

  if (!data?.books) {
    return { notFound: true };
  }

  return {
    props: {
      books: data.books
    }
  };
};
