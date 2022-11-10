import { FlattenSimpleInterpolation } from 'styled-components';

export type TextFieldColor = {
  label: {
    default: {
      color: string;
    };
    disabled: {
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
    readOnly: {
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
  addon: {
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
    readOnly: {
      backgroundColor: string;
      color: string;
      borderColor: string;
    };
  };
};

export type TextFieldSizes = 'small' | 'medium' | 'large';

export type TextFieldSize = {
  paddingTopAndBottom: string;
  paddingRightAndLeft: string;
  fieldTypography: FlattenSimpleInterpolation;
  labelTypography: FlattenSimpleInterpolation;
  labelGap: string;
  borderWidth: string;
  textareaMinHeight?: string;
  addonTypography: FlattenSimpleInterpolation;
  addonPaddingRightAndLeft: string;
};
