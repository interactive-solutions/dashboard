import { FlattenSimpleInterpolation } from 'styled-components';

export type TextFieldColor = {
  isDisabled?: boolean;
  isReadOnly?: boolean;
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
  rounded?: boolean;
  hasIconRight?: boolean;
  hasIconLeft?: boolean;
  hasAddonRight?: boolean;
  hasAddonLeft?: boolean;
  paddingTopAndBottom: string;
  paddingRightAndLeft: string;
  fieldTypography: FlattenSimpleInterpolation;
  labelTypography: FlattenSimpleInterpolation;
  borderWidth: string;
  textareaMinHeight?: string;
  addonTypography: FlattenSimpleInterpolation;
  addonPaddingRightAndLeft: string;
};
