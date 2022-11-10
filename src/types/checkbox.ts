import { FlattenSimpleInterpolation } from 'styled-components';

export type CheckboxColor = {
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

export type CheckboxSizes = 'small' | 'medium' | 'large';

export type CheckboxSize = {
  labelTypography: FlattenSimpleInterpolation;
  checkboxSize: string;
  checkboxBorderWidth: string;
  labelGap: string;
};
