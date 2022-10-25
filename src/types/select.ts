import { FlattenSimpleInterpolation } from 'styled-components';

export type SelectColor = {
  label: {
    default: {
      color: string;
    };
  };
  control: {
    default: {
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
    default: {
      color: string;
    };
  };
  singleValue: {
    default: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  placeholder: {
    default: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  indicatorSeparator: {
    default: {
      backgroundColor: string;
    };
    disabled: {
      backgroundColor: string;
    };
  };
  indicator: {
    default: {
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
    default: {
      backgroundColor: string;
      borderColor: string;
    };
    disabled: {
      backgroundColor: string;
      borderColor: string;
    };
  };
  multiValueLabel: {
    default: {
      color: string;
    };
    disabled: {
      color: string;
    };
  };
  multiValueRemove: {
    default: {
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
    default: {
      backgroundColor: string;
      boxShadow: string;
    };
  };
  option: {
    default: {
      backgroundColor: string;
      color: string;
    };
    hover: {
      backgroundColor: string;
      color: string;
    };
  };
  message: {
    default: {
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
};
