import { Container } from 'components/ui/general';
import { useAuthenticationStore } from 'store/authentication';

import * as styles from './Header.styles';

export const Header = () => {
  const token = useAuthenticationStore((store) => store.token);
  const logout = useAuthenticationStore((store) => store.logout);

  return (
    <styles.Root>
      {!!token && (
        <Container fullWidth>
          <styles.Content>
            <styles.Logout type="button" onClick={() => logout()}>
              {'[insert-logout]'.toString()}
            </styles.Logout>
          </styles.Content>
        </Container>
      )}
    </styles.Root>
  );
};
