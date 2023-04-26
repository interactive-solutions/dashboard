import { ApolloClient, ApolloLink, DefaultOptions } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { isSSR } from '@entire.se/utils';
import { createUploadLink } from 'apollo-upload-client';

import { cache } from 'api/cache';
import { environment } from 'api/environment';
import { refreshToken } from 'api/refreshToken';
import { useAuthenticationStore } from 'store/authentication';

const uploadHttpLink = createUploadLink({
  uri: environment.uri,
});

const authenticationLink = new ApolloLink((operation, forward) => {
  const { token } = useAuthenticationStore.getState();

  operation.setContext({
    headers: token
      ? {
          authorization: `jwt ${token}`,
        }
      : {},
  });

  return forward(operation);
});

const errorLink = onError((error) => {
  refreshToken(error);
});

const retryLink = new RetryLink({
  attempts: { max: 2 },
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'none',
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'none',
  },
  mutate: {
    errorPolicy: 'none',
  },
};

export const client = new ApolloClient({
  ssrMode: isSSR,
  cache,
  link: retryLink.concat(
    errorLink.concat(
      authenticationLink.concat(uploadHttpLink as unknown as ApolloLink)
    )
  ),
  defaultOptions,
});
