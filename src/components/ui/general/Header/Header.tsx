import { useAuthenticationStore } from 'store/authentication';

export const Header = () => {
  const token = useAuthenticationStore((store) => store.token);
  const logout = useAuthenticationStore((store) => store.logout);

  return (
    <div>
      {'Header'.toString()}
      {!!token && (
        <button type="button" onClick={() => logout()}>
          {'[insert-logout]'.toString()}
        </button>
      )}
    </div>
  );
};
