import { Link } from '@entire.se/components';

import { Paths } from 'consts/router';

import * as styles from './Header.styles';

export const Header = () => {
  return (
    <styles.Root>
      <Link href={Paths.Landing}>{'[insert-header]'.toString()}</Link>
    </styles.Root>
  );
};
