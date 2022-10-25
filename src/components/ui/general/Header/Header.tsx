import { Link } from 'components/tools';
import { Paths } from 'consts/router';

import * as styles from './Header.styles';

export const Header = () => {
  return (
    <styles.Root>
      <Link href={Paths.Home}>{'[insert-header]'.toString()}</Link>
    </styles.Root>
  );
};
