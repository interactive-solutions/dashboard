import { useEffect } from 'react';

import dynamic from 'next/dynamic';

import { useUsersLazyQuery } from 'api/graphql';
import { useAuthenticationStore } from 'store/authentication';

const Component = () => {
  const isLoading = useAuthenticationStore((store) => store.isLoading);
  const hasError = useAuthenticationStore((store) => store.hasError);
  const user = useAuthenticationStore((store) => store.user);
  const login = useAuthenticationStore((store) => store.login);
  const logout = useAuthenticationStore((store) => store.logout);

  // Fetch users that requires authentication
  const [fetchUsers, { data, error, loading }] = useUsersLazyQuery();

  useEffect(() => {
    console.log(data, error, loading);
  }, [data, error, loading]);

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() =>
            login({
              email: 'admin@interactivesolutions.se',
              password: 'helloWorld'
            })
          }
        >
          {'Login'.toString()}
        </button>
        {isLoading && <span>{'Loading...'.toString()}</span>}
      </div>
      <div>
        <button type="button" onClick={() => logout()}>
          {'Logout'.toString()}
        </button>
      </div>
      {!!user && (
        <div>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
        </div>
      )}
      {hasError && <div>{'Something went wrong...'.toString()}</div>}
      <button type="button" onClick={() => fetchUsers()}>
        {'Fetch books'.toString()}
      </button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Component), {
  ssr: false
});
