import { FlattenSimpleInterpolation } from 'styled-components';

export type CheckboxColor = {
  label: {
    idle: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  checkboxNotChecked: {
    idle: {
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
    idle: {
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
