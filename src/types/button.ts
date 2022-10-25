import { FlattenSimpleInterpolation } from 'styled-components';

export type ButtonStyles = {
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
  hover: {
    backgroundColor: string;
    color: string;
    borderColor: string;
  };
};

export type ButtonColor = {
  isGhost?: boolean;
  solid?: ButtonStyles;
  ghost?: ButtonStyles;
};

export type ButtonSizes = 'small' | 'medium' | 'large';

export type ButtonSize = {
  rounded?: boolean;
  paddingTopAndBottom: string;
  paddingRightAndLeft: string;
  typography: FlattenSimpleInterpolation;
  borderWidth: string;
  iconMargin: string;
};
