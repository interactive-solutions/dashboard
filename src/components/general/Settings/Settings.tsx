import { Dispatch, SetStateAction, useState } from 'react';

import { GridItem } from 'types/grid';

import { SettingsMenu, SettingsButton } from './subComponents';

import * as styles from './Settings.styles';

type SettingsProps = {
  gridItems: GridItem[];
  setGridItems: Dispatch<SetStateAction<GridItem[]>>;
};

export const Settings = ({ gridItems, setGridItems }: SettingsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <styles.Root>
      {isOpen ? (
        <SettingsMenu {...{ gridItems, setGridItems, setIsOpen }} />
      ) : (
        <SettingsButton {...{ setIsOpen }} />
      )}
    </styles.Root>
  );
};
