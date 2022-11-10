import { FlattenSimpleInterpolation } from 'styled-components';

export type SwitchColor = {
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
      trackBackgroundColor: string;
      trackBackgroundColorWhenChecked: string;
      knobBackgroundColor: string;
    };
    disabled: {
      trackBackgroundColor: string;
      trackBackgroundColorWhenChecked: string;
      knobBackgroundColor: string;
    };
  };
};

export type SwitchSizes = 'small' | 'medium' | 'large';

export type SwitchSize = {
  trackWidth: string;
  trackHeight: string;
  knobSize: string;
  labelTypography: FlattenSimpleInterpolation;
  labelGap: string;
};
