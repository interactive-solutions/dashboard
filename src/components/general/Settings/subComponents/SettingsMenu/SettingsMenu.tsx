import { Dispatch, SetStateAction } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from '@mui/material';

import { GridItem } from 'types/grid';

import * as styles from './SettingsMenu.styles';

type SettingsMenuProps = {
  gridItems: GridItem[];
  setGridItems: Dispatch<SetStateAction<GridItem[]>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SettingsMenu = ({
  gridItems,
  setGridItems,
  setIsOpen,
}: SettingsMenuProps) => {
  const toggleWidget = (currentName: string) => {
    const currentWidget = gridItems.find(({ name }) => name === currentName);
    if (!currentWidget) return;

    currentWidget.visible = !currentWidget.visible;
    setGridItems([...gridItems]);
  };

  return (
    <styles.Root>
      <styles.WidgetList>
        {gridItems.map(({ name, visible }) => (
          <styles.ButtonContent key={name} onClick={() => toggleWidget(name)}>
            {name}
            <styles.VisibilityIcon isActive={visible} />
          </styles.ButtonContent>
        ))}
      </styles.WidgetList>

      <styles.Line />

      <styles.ButtonRow>
        <IconButton disabled>
          <SaveIcon fontSize="large" />
        </IconButton>
        <IconButton disabled>
          <DarkModeOutlinedIcon fontSize="large" />
        </IconButton>
        <styles.CloseButton onClick={() => setIsOpen(false)}>
          <CloseIcon fontSize="large" />
        </styles.CloseButton>
      </styles.ButtonRow>
    </styles.Root>
  );
};
