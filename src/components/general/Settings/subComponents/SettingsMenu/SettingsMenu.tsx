import { Dispatch, SetStateAction } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from '@mui/material';

import { GridItem } from 'types/grid';

import {
  Root,
  WidgetList,
  ButtonContent,
  VisibilityIcon,
  Line,
  ButtonRow,
  CloseButton,
} from './SettingsMenu.styles';

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
    <Root>
      <WidgetList>
        {gridItems.map(({ name, visible }) => (
          <ButtonContent key={name} onClick={() => toggleWidget(name)}>
            {name}
            <VisibilityIcon isActive={visible} />
          </ButtonContent>
        ))}
      </WidgetList>

      <Line />

      <ButtonRow>
        <IconButton disabled>
          <SaveIcon fontSize="large" />
        </IconButton>
        <IconButton disabled>
          <DarkModeOutlinedIcon fontSize="large" />
        </IconButton>
        <CloseButton onClick={() => setIsOpen(false)}>
          <CloseIcon fontSize="large" />
        </CloseButton>
      </ButtonRow>
    </Root>
  );
};
