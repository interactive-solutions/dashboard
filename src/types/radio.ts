import { FlattenSimpleInterpolation } from 'styled-components';

export type RadioColor = {
  isDisabled?: boolean;
  label: {
    default: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  radioNotChecked: {
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
  radioChecked: {
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

export type RadioSizes = 'small' | 'medium' | 'large';

export type RadioSize = {
  labelTypography: FlattenSimpleInterpolation;
  radioSize: string;
  radioBorderWidth: string;
  labelGap: string;
};
