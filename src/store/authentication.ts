import create from 'zustand';

import { client } from 'api/apollo';
import {
  FullUserFragment,
  LoginEmailDocument,
  LoginEmailMutation,
  LoginEmailMutationVariables
} from 'api/graphql';
import { withDevtools, withPersist } from 'store/middlewares';
import { NonFunctionProperties } from 'types/nonFunction';

export interface AuthenticationStore {
  token: string | null;
  refreshToken: string | null;
  user: FullUserFragment | null;
  isLoading: boolean;
  hasError: boolean;
  setToken: (token: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setUser: (user: FullUserFragment) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (hasError: boolean) => void;
  login: (variables: LoginEmailMutationVariables) => void;
  logout: () => void;
}

export const initialAuthenticationStore: NonFunctionProperties<AuthenticationStore> =
  {
    token: null,
    refreshToken: null,
    user: null,
    isLoading: false,
    hasError: false
  };

export const useAuthenticationStore = create<AuthenticationStore>()(
  withDevtools(
    withPersist(
      (set) => ({
        ...initialAuthenticationStore,
        setToken: (token) => {
          set(() => ({ token }), false, 'authentication/setToken');
        },
        setRefreshToken: (refreshToken) => {
          set(
            () => ({ refreshToken }),
            false,
            'authentication/setRefreshToken'
          );
        },
        setUser: (user) => {
          set(() => ({ user }), false, 'authentication/setUser');
        },
        setLoading: (isLoading) => {
          set(() => ({ isLoading }), false, 'authentication/setLoading');
        },
        setError: (hasError) => {
          set(() => ({ hasError }), false, 'authentication/setError');
        },
        login: async (variables) => {
          set(
            () => ({
              ...initialAuthenticationStore,
              isLoading: true
            }),
            false,
            'authentication/login/isLoading'
          );

          const { data } = await client.mutate<
            LoginEmailMutation,
            LoginEmailMutationVariables
          >({
            mutation: LoginEmailDocument,
            variables
          });

          const {
            success,
            jwt: token,
            refreshToken,
            user
          } = data?.loginEmail || {};

          if (success) {
            set(
              () => ({
                ...initialAuthenticationStore,
                token,
                refreshToken,
                user
              }),
              false,
              'authentication/login/success'
            );
            return;
          }

          set(
            () => ({ hasError: true, isLoading: false }),
            false,
            'authentication/login/hasError'
          );
        },
        logout: () => {
          set(() => initialAuthenticationStore, false, 'authentication/logout');
        }
      }),
      {
        name: 'nextjs-boilerplate/authentication'
      }
    )
  )
);
