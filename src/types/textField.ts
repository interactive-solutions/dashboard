import { FlattenSimpleInterpolation } from 'styled-components';

export type TextFieldColor = {
  label: {
    default: {
      color: string;
    };
  };
  field: {
    default: {
      backgroundColor: string;
      color: string;
      borderColor: string;
      placeholder: string;
    };
    disabled: {
      backgroundColor: string;
      color: string;
      borderColor: string;
      placeholder: string;
    };
    hover: {
      borderColor: string;
    };
    focus: {
      borderColor: string;
    };
  };
};

export type TextFieldSizes = 'small' | 'medium' | 'large';

export type TextFieldSize = {
  rounded?: boolean;
  hasIconRight?: boolean;
  hasIconLeft?: boolean;
  paddingTopAndBottom: string;
  paddingRightAndLeft: string;
  fieldTypography: FlattenSimpleInterpolation;
  labelTypography: FlattenSimpleInterpolation;
  borderWidth: string;
  textareaMinHeight?: string;
};
