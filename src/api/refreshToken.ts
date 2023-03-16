import { ServerError } from '@apollo/client';
import { ErrorResponse } from '@apollo/client/link/error';

import { client } from 'api/apollo';
import {
  RefreshTokenDocument,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
} from 'api/graphql';
import { useAuthenticationStore } from 'store/authentication';

export const refreshToken = (error: ErrorResponse) => {
  const { networkError, operation, forward } = error;

  if ((networkError as ServerError)?.statusCode !== 401) {
    return;
  }

  const authenticationStore = useAuthenticationStore.getState();

  if (!authenticationStore.refreshToken) {
    authenticationStore.logout();
    return;
  }

  client
    .mutate<RefreshTokenMutation, RefreshTokenMutationVariables>({
      mutation: RefreshTokenDocument,
      variables: { token: authenticationStore.refreshToken },
    })
    .then(({ data }) => {
      if (!data?.refreshToken) {
        authenticationStore.logout();
        return;
      }

      const { jwt: token, refreshToken: newRefreshToken } = data.refreshToken;

      authenticationStore.setToken(token);
      authenticationStore.setRefreshToken(newRefreshToken);

      operation.setContext({
        headers: {
          authorization: `jwt ${token}`,
        },
      });

      forward(operation);
    })
    .catch(() => authenticationStore.logout());
};
