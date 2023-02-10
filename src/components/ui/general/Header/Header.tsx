import { useAuthenticationStore } from 'store/authentication';

import * as styles from './Header.styles';

export const Header = () => {
  const token = useAuthenticationStore((store) => store.token);
  const logout = useAuthenticationStore((store) => store.logout);

  return (
    <styles.Root>
      {'[insert-header]'.toString()}
      {!!token && (
        <button type="button" onClick={() => logout()}>
          {'[insert-logout]'.toString()}
        </button>
      )}
    </styles.Root>
  );
};
