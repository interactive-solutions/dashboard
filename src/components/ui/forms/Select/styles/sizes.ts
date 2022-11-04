import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { SelectSize, SelectSizes } from 'types/select';

import {
  ClearIndicator,
  Control,
  DropdownIndicator,
  IndicatorSeparator,
  LoadingIndicatorContainer,
  LoadingMessage,
  Menu,
  MenuList,
  MultiValue,
  NoOptionsMessage,
  Option,
  ValueContainer
} from '../Select.styles';

export const generateSize = ({
  rounded,
  minheight,
  controlTypograhy,
  controlBorderWidth,
  controlBorderRadius,
  valueContainerPadding,
  indicatorSeparatorMarginTopAndBottom,
  indicatorSeparatorWidth,
  multiValueBorderRadius,
  multiValueMargin,
  multiValueBorderWidth,
  multiValueTypography,
  multiValueLabelPadding,
  multiValueRemovePadding,
  menuBorderRadius,
  menuMarginTop,
  menuListPadding,
  menuListMaxHeight,
  optionTypography,
  optionPadding,
  messageTypography,
  messagePadding
}: SelectSize) => {
  return css`
    && ${Control} {
      ${controlTypograhy};
      border-width: ${controlBorderWidth};
      min-height: ${minheight};
      border-radius: ${controlBorderRadius};

      ${rounded === true &&
      `
        border-radius: calc(${minheight} / 2);
      `}
    }

    && ${ValueContainer} {
      padding: ${valueContainerPadding};
    }

    && ${IndicatorSeparator} {
      margin: ${indicatorSeparatorMarginTopAndBottom} 0;
      width: ${indicatorSeparatorWidth};
    }

    &&
      ${ClearIndicator},
      &&
      ${DropdownIndicator},
      &&
      ${LoadingIndicatorContainer} {
      width: calc(${minheight} - ${controlBorderWidth} - ${controlBorderWidth});
    }

    && ${MultiValue} {
      ${multiValueTypography};
      border-radius: ${multiValueBorderRadius};
      margin: ${multiValueMargin};
      border-width: ${multiValueBorderWidth};

      ${rounded === true &&
      `
        /* Not really correct, update if someone complains */
        border-radius: calc(${minheight} / 2);
      `}

      .react-select__multi-value__label {
        padding: ${multiValueLabelPadding};
      }

      .react-select__multi-value__remove {
        padding: ${multiValueRemovePadding};
      }
    }

    && ${Menu} {
      border-radius: ${menuBorderRadius};
      margin-top: ${menuMarginTop};
    }

    && ${MenuList} {
      padding: ${menuListPadding};
      max-height: ${menuListMaxHeight};
    }

    && ${Option} {
      ${optionTypography};
      padding: ${optionPadding};
    }

    && ${NoOptionsMessage}, && ${LoadingMessage} {
      ${messageTypography};
      padding: ${messagePadding};
    }
  `;
};

/**
 * When defining sizes, make sure every size has the same type of styles so they
 * can overwrite each other.
 */
export const sizes: {
  [key in SelectSizes]: (
    theme: DefaultTheme,
    size?: {
      rounded?: boolean;
    }
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  small: (theme, size = {}) =>
    generateSize({
      ...size,
      minheight: '38px',
      controlTypograhy: theme.typography.body[20],
      controlBorderWidth: '2px',
      controlBorderRadius: theme.border.radius,
      valueContainerPadding: theme.spacing(0.25, 1.25),
      indicatorSeparatorMarginTopAndBottom: theme.spacing(1),
      indicatorSeparatorWidth: '1px',
      multiValueBorderRadius: theme.border.radius,
      multiValueMargin: theme.spacing(0.25, 0.5, 0.25, 0),
      multiValueBorderWidth: '1px',
      multiValueTypography: theme.typography.body[10],
      multiValueLabelPadding: theme.spacing(0.25, 0, 0.25, 0.75),
      multiValueRemovePadding: theme.spacing(0.5),
      menuBorderRadius: theme.border.radius,
      menuMarginTop: theme.spacing(0.5),
      menuListPadding: theme.spacing(0.5, 0),
      menuListMaxHeight: '250px',
      optionTypography: theme.typography.body[20],
      optionPadding: theme.spacing(0.75, 1.25),
      messageTypography: theme.typography.body[20],
      messagePadding: theme.spacing(1.25)
    }),
  medium: (theme, size = {}) =>
    generateSize({
      ...size,
      minheight: '42px',
      controlTypograhy: theme.typography.body[20],
      controlBorderWidth: '2px',
      controlBorderRadius: theme.border.radius,
      valueContainerPadding: theme.spacing(0.5, 1.5),
      indicatorSeparatorMarginTopAndBottom: theme.spacing(1.25),
      indicatorSeparatorWidth: '1px',
      multiValueBorderRadius: theme.border.radius,
      multiValueMargin: theme.spacing(0.25, 0.5, 0.25, 0),
      multiValueBorderWidth: '1px',
      multiValueTypography: theme.typography.body[10],
      multiValueLabelPadding: theme.spacing(0.25, 0, 0.25, 0.75),
      multiValueRemovePadding: theme.spacing(0.5),
      menuBorderRadius: theme.border.radius,
      menuMarginTop: theme.spacing(0.5),
      menuListPadding: theme.spacing(0.5, 0),
      menuListMaxHeight: '300px',
      optionTypography: theme.typography.body[20],
      optionPadding: theme.spacing(1, 1.5),
      messageTypography: theme.typography.body[20],
      messagePadding: theme.spacing(1.5)
    }),
  large: (theme, size = {}) =>
    generateSize({
      ...size,
      minheight: '46px',
      controlTypograhy: theme.typography.body[20],
      controlBorderWidth: '2px',
      controlBorderRadius: theme.border.radius,
      valueContainerPadding: theme.spacing(0.5, 1.75),
      indicatorSeparatorMarginTopAndBottom: theme.spacing(1.25),
      indicatorSeparatorWidth: '1px',
      multiValueBorderRadius: theme.border.radius,
      multiValueMargin: theme.spacing(0.25, 0.5, 0.25, 0),
      multiValueBorderWidth: '1px',
      multiValueTypography: theme.typography.body[20],
      multiValueLabelPadding: theme.spacing(0.25, 0, 0.25, 0.75),
      multiValueRemovePadding: theme.spacing(0.5),
      menuBorderRadius: theme.border.radius,
      menuMarginTop: theme.spacing(0.5),
      menuListPadding: theme.spacing(0.5, 0),
      menuListMaxHeight: '350px',
      optionTypography: theme.typography.body[20],
      optionPadding: theme.spacing(1.25, 1.75),
      messageTypography: theme.typography.body[20],
      messagePadding: theme.spacing(1.75)
    })
};
