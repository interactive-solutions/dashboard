import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

import { SelectColor } from 'types/select';

import { SelectProps } from '../Select';

import {
  ClearIndicator,
  Control,
  DropdownIndicator,
  IndicatorSeparator,
  Input,
  Label,
  LoadingIndicatorContainer,
  LoadingMessage,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue
} from '../Select.styles';

export const generateColor = ({
  label,
  control,
  input,
  singleValue,
  placeholder,
  indicatorSeparator,
  indicator,
  multiValue,
  multiValueLabel,
  multiValueRemove,
  menu,
  option,
  message
}: SelectColor) => {
  return css`
    && ${Label} {
      color: ${label.default.color};
    }

    && ${Control} {
      background-color: ${control.default.backgroundColor};
      border-color: ${control.default.borderColor};

      &:hover,
      &.react-select__control--is-focused,
      &.react-select__control--menu-is-open {
        border-color: ${control.hover.borderColor};
      }
    }

    && ${Input} {
      color: ${input.default.color};
    }

    && ${SingleValue} {
      color: ${singleValue.default.color};
    }

    && ${Placeholder} {
      color: ${placeholder.default.color};
    }

    && ${IndicatorSeparator} {
      background-color: ${indicatorSeparator.default.backgroundColor};
    }

    &&
      ${ClearIndicator},
      &&
      ${DropdownIndicator},
      &&
      ${LoadingIndicatorContainer} {
      color: ${indicator.default.color};

      &:hover {
        color: ${indicator.hover.color};
      }
    }

    && ${MultiValue} {
      background-color: ${multiValue.default.backgroundColor};
      border-color: ${multiValue.default.borderColor};

      .react-select__multi-value__label {
        color: ${multiValueLabel.default.color};
      }

      .react-select__multi-value__remove {
        color: ${multiValueRemove.default.color};

        &:hover {
          color: ${multiValueRemove.hover.color};
        }
      }
    }

    && ${Menu} {
      background-color: ${menu.default.backgroundColor};
      box-shadow: ${menu.default.boxShadow};
    }

    && ${Option} {
      background-color: ${option.default.backgroundColor};
      color: ${option.default.color};

      &:hover,
      &.react-select__option--is-focused,
      &.react-select__option--is-selected {
        background-color: ${option.hover.backgroundColor};
        color: ${option.hover.color};
      }
    }

    && ${NoOptionsMessage}, && ${LoadingMessage} {
      color: ${message.default.color};
    }

    && .react-select--is-disabled {
      ${Control} {
        background-color: ${control.disabled.backgroundColor};
        border-color: ${control.disabled.borderColor};
      }

      ${SingleValue} {
        color: ${singleValue.disabled.color};
      }

      ${Placeholder} {
        color: ${placeholder.disabled.color};
      }

      ${IndicatorSeparator} {
        background-color: ${indicatorSeparator.disabled.backgroundColor};
      }

      ${ClearIndicator}, ${DropdownIndicator}, ${LoadingIndicatorContainer} {
        color: ${indicator.disabled.color};
      }

      ${MultiValue} {
        background-color: ${multiValue.disabled.backgroundColor};
        border-color: ${multiValue.disabled.borderColor};

        .react-select__multi-value__label,
        .react-select__multi-value__remove {
          background-color: transparent;
          border-color: transparent;
        }

        .react-select__multi-value__label {
          color: ${multiValueLabel.disabled.color};
        }

        .react-select__multi-value__remove {
          color: ${multiValueRemove.disabled.color};
        }
      }
    }
  `;
};

/**
 * When defining colors, make sure every color has the same type of styles so
 * they can overwrite each other.
 */
export const colors: {
  [key in NonNullable<SelectProps['color']>]: (
    theme: DefaultTheme
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  light: (theme) =>
    generateColor({
      label: {
        default: {
          color: theme.palettes.dark[700]
        }
      },
      control: {
        default: {
          backgroundColor: theme.palettes.light[100],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[400],
          borderColor: theme.palettes.dark[400]
        },
        hover: {
          borderColor: theme.surfaces.primary
        }
      },
      input: {
        default: {
          color: theme.palettes.dark[700]
        }
      },
      singleValue: {
        default: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      placeholder: {
        default: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      indicatorSeparator: {
        default: {
          backgroundColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.dark[400]
        }
      },
      indicator: {
        default: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        },
        hover: {
          color: theme.surfaces.primary
        }
      },
      multiValue: {
        default: {
          backgroundColor: theme.palettes.light[100],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[400],
          borderColor: theme.palettes.dark[400]
        }
      },
      multiValueLabel: {
        default: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      multiValueRemove: {
        default: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        },
        hover: {
          color: theme.surfaces.primary
        }
      },
      menu: {
        default: {
          backgroundColor: theme.palettes.light[100],
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)'
        }
      },
      option: {
        default: {
          backgroundColor: 'transparent',
          color: theme.palettes.dark[700]
        },
        hover: {
          backgroundColor: theme.surfaces.primary,
          color: theme.palettes.light[100]
        }
      },
      message: {
        default: {
          color: theme.palettes.dark[700]
        }
      }
    })
};
