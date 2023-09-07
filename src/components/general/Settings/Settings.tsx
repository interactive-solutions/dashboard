import { useState } from 'react';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton } from '@mui/material';

import { SettingsMenu } from './subComponents';

import * as styles from './Settings.styles';

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <styles.Root>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <SettingsOutlinedIcon fontSize="large" />
      </IconButton>
      {isOpen && <SettingsMenu />}
    </styles.Root>
  );
};
