import { FlattenSimpleInterpolation } from 'styled-components';

export type RadioColor = {
  label: {
    idle: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  radioNotChecked: {
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
  radioChecked: {
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

export type RadioSizes = 'small' | 'medium' | 'large';

export type RadioSize = {
  labelTypography: FlattenSimpleInterpolation;
  radioSize: string;
  radioBorderWidth: string;
  labelGap: string;
};
