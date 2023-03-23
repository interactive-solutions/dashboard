import { Button } from '@mui/material';

import { useAuthenticationStore } from 'store/authentication';

import * as styles from './Header.styles';

export const Header = () => {
  const token = useAuthenticationStore((store) => store.token);
  const logout = useAuthenticationStore((store) => store.logout);

  return (
    <styles.Root>
      {token ? (
        <Button
          type="button"
          onClick={() => logout()}
          variant="contained"
          size="small"
        >
          {'[insert-logout]'.toString()}
        </Button>
      ) : (
        '[insert-header]'.toString()
      )}
    </styles.Root>
  );
};
