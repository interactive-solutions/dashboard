export type SwitchColor = {
  isDisabled?: boolean;
  label: {
    default: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  switch: {
    default: {
      switchHolderBackgroundColor: string;
      switchHolderBackgroundColorWhenChecked: string;
      switchBackgroundColor: string;
    };
    disabled: {
      switchHolderBackgroundColor: string;
      switchHolderBackgroundColorWhenChecked: string;
      switchBackgroundColor: string;
    };
  };
};
