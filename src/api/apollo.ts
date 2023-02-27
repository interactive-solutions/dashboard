import { ApolloClient, ApolloLink, DefaultOptions } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { isSSR } from '@entire.se/utils';
import { withScope, captureMessage } from '@sentry/nextjs';
import { createUploadLink } from 'apollo-upload-client';

import { cache } from 'api/cache';
import { environment } from 'api/environment';
import { refreshToken } from 'api/refreshToken';
import { useAuthenticationStore } from 'store/authentication';

const uploadHttpLink = createUploadLink({
  uri: environment.uri
});

const authenticationLink = new ApolloLink((operation, forward) => {
  const { token } = useAuthenticationStore.getState();

  operation.setContext({
    headers: token
      ? {
          authorization: `jwt ${token}`
        }
      : {}
  });

  return forward(operation);
});

const errorLink = onError((error) => {
  const { networkError, operation, graphQLErrors, response } = error;

  if (networkError?.message !== 'Network request failed') {
    withScope((scope) => {
      scope.setExtra('graphQLErrors', graphQLErrors);
      scope.setExtra('networkError', networkError);
      scope.setExtra('response', response);
      scope.setExtra('operation', operation);

      captureMessage(
        `Apollo error: Operation name "${
          operation.operationName || 'unknown'
        }"`,
        'error'
      );
    });
  }

  refreshToken(error);
});

const retryLink = new RetryLink({
  attempts: { max: 2 }
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all'
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all'
  },
  mutate: {
    errorPolicy: 'all'
  }
};

export const client = new ApolloClient({
  ssrMode: isSSR,
  cache,
  link: retryLink.concat(
    errorLink.concat(
      authenticationLink.concat(uploadHttpLink as unknown as ApolloLink)
    )
  ),
  defaultOptions
});
