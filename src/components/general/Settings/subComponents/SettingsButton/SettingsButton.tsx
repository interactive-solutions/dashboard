import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { Button } from './SettingsButton.styles';

type SettingsButtonProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SettingsButton = ({ setIsOpen }: SettingsButtonProps) => {
  // This is to prevent flickering when mounting button under the pointer
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true);
    }, 50);
  }, [isRendered]);

  return (
    <Button isRendered={isRendered} onClick={() => setIsOpen(true)}>
      <SettingsOutlinedIcon fontSize="large" />
    </Button>
  );
};
