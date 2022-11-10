import { FlattenSimpleInterpolation } from 'styled-components';

export type SelectColor = {
  label: {
    idle: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  control: {
    idle: {
      backgroundColor: string;
      borderColor: string;
    };
    disabled: {
      backgroundColor: string;
      borderColor: string;
    };
    hover: {
      borderColor: string;
    };
  };
  input: {
    idle: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  singleValue: {
    idle: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  placeholder: {
    idle: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  indicatorSeparator: {
    idle: {
      backgroundColor: string;
    };
    disabled: {
      backgroundColor: string;
    };
  };
  indicator: {
    idle: {
      color: string;
    };
    disabled: {
      color: string;
    };
    hover: {
      color: string;
    };
  };
  multiValue: {
    idle: {
      backgroundColor: string;
      borderColor: string;
    };
    disabled: {
      backgroundColor: string;
      borderColor: string;
    };
  };
  multiValueLabel: {
    idle: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  multiValueRemove: {
    idle: {
      color: string;
    };
    disabled: {
      color: string;
    };
    hover: {
      color: string;
    };
  };
  menu: {
    idle: {
      backgroundColor: string;
      boxShadow: string;
    };
  };
  option: {
    idle: {
      backgroundColor: string;
      color: string;
    };
    hover: {
      backgroundColor: string;
      color: string;
    };
  };
  message: {
    idle: {
      color: string;
    };
  };
};

export type SelectSizes = 'small' | 'medium' | 'large';

export type SelectSize = {
  rounded?: boolean;
  minheight: string;
  controlTypograhy: FlattenSimpleInterpolation;
  controlBorderWidth: string;
  controlBorderRadius: string;
  valueContainerPadding: string;
  indicatorSeparatorMarginTopAndBottom: string;
  indicatorSeparatorWidth: string;
  multiValueBorderRadius: string;
  multiValueMargin: string;
  multiValueBorderWidth: string;
  multiValueTypography: FlattenSimpleInterpolation;
  multiValueLabelPadding: string;
  multiValueRemovePadding: string;
  menuBorderRadius: string;
  menuMarginTop: string;
  menuListPadding: string;
  menuListMaxHeight: string;
  optionTypography: FlattenSimpleInterpolation;
  optionPadding: string;
  messageTypography: FlattenSimpleInterpolation;
  messagePadding: string;
  labelTypography: FlattenSimpleInterpolation;
  labelGap: string;
};
