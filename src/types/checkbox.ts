export type CheckboxColor = {
  isDisabled?: boolean;
  label: {
    default: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  checkboxNotChecked: {
    default: {
      backgroundColor: string;
      color: string;
      borderColor: string;
    };
    disabled: {
      backgroundColor: string;
      color: string;
      borderColor: string;
    };
  };
  checkboxChecked: {
    default: {
      backgroundColor: string;
      color: string;
      borderColor: string;
    };
    disabled: {
      backgroundColor: string;
      color: string;
      borderColor: string;
    };
  };
};
