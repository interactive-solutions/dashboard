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
  message,
  isDisabled
}: SelectColor & {
  isDisabled?: boolean;
}) => {
  return css`
    && ${Label} {
      color: ${label.idle.color};
      transition: ${({ theme }) => theme.ease(['color'])};

      ${isDisabled === true &&
      `
        color: ${label.disabled.color};
      `}
    }

    && ${Control} {
      background-color: ${control.idle.backgroundColor};
      border-color: ${control.idle.borderColor};
      transition: ${({ theme }) =>
        theme.ease(['background-color', 'border-color'])};

      &:hover,
      &.react-select__control--is-focused,
      &.react-select__control--menu-is-open {
        border-color: ${control.hover.borderColor};
      }

      ${isDisabled === true &&
      `
        background-color: ${control.disabled.backgroundColor};
        border-color: ${control.disabled.borderColor};
      `}
    }

    && ${Input} {
      color: ${input.idle.color};
      transition: ${({ theme }) => theme.ease(['color'])};

      ${isDisabled === true &&
      `
        color: ${input.disabled.color};
      `}
    }

    && ${SingleValue} {
      color: ${singleValue.idle.color};
      transition: ${({ theme }) => theme.ease(['color'])};

      ${isDisabled === true &&
      `
        color: ${singleValue.disabled.color};
      `}
    }

    && ${Placeholder} {
      color: ${placeholder.idle.color};
      transition: ${({ theme }) => theme.ease(['color'])};

      ${isDisabled === true &&
      `
        color: ${placeholder.disabled.color};
      `}
    }

    && ${IndicatorSeparator} {
      background-color: ${indicatorSeparator.idle.backgroundColor};
      transition: ${({ theme }) => theme.ease(['background-color'])};

      ${isDisabled === true &&
      `
        background-color: ${indicatorSeparator.disabled.backgroundColor};
      `}
    }

    &&
      ${ClearIndicator},
      &&
      ${DropdownIndicator},
      &&
      ${LoadingIndicatorContainer} {
      color: ${indicator.idle.color};
      transition: ${({ theme }) => theme.ease(['color'])};

      &:hover {
        color: ${indicator.hover.color};
      }

      ${isDisabled === true &&
      `
        color: ${indicator.disabled.color};
      `}
    }

    && ${MultiValue} {
      background-color: ${multiValue.idle.backgroundColor};
      border-color: ${multiValue.idle.borderColor};
      transition: ${({ theme }) =>
        theme.ease(['background-color', 'border-color'])};

      .react-select__multi-value__label {
        color: ${multiValueLabel.idle.color};
        transition: ${({ theme }) => theme.ease(['color'])};
      }

      .react-select__multi-value__remove {
        color: ${multiValueRemove.idle.color};
        transition: ${({ theme }) => theme.ease(['color'])};

        &:hover {
          color: ${multiValueRemove.hover.color};
        }
      }

      ${isDisabled === true &&
      css`
        background-color: ${multiValue.disabled.backgroundColor};
        border-color: ${multiValue.disabled.borderColor};
        transition: ${({ theme }) =>
          theme.ease(['background-color', 'border-color'])};

        .react-select__multi-value__label,
        .react-select__multi-value__remove {
          background-color: transparent;
          border-color: transparent;
          transition: ${({ theme }) =>
            theme.ease(['background-color', 'border-color', 'color'])};
        }

        .react-select__multi-value__label {
          color: ${multiValueLabel.disabled.color};
        }

        .react-select__multi-value__remove {
          color: ${multiValueRemove.disabled.color};
        }
      `}
    }

    && ${Menu} {
      background-color: ${menu.idle.backgroundColor};
      box-shadow: ${menu.idle.boxShadow};
    }

    && ${Option} {
      background-color: ${option.idle.backgroundColor};
      color: ${option.idle.color};
      transition: ${({ theme }) => theme.ease(['background-color', 'color'])};

      &:hover,
      &.react-select__option--is-focused,
      &.react-select__option--is-selected {
        background-color: ${option.hover.backgroundColor};
        color: ${option.hover.color};
      }
    }

    && ${NoOptionsMessage}, && ${LoadingMessage} {
      color: ${message.idle.color};
    }
  `;
};

/**
 * When defining colors, make sure every color has the same type of styles so
 * they can overwrite each other.
 */
export const colors: {
  [key in NonNullable<SelectProps['color']>]: (
    theme: DefaultTheme,
    color?: {
      isDisabled?: boolean;
    }
  ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  light: (theme, color = {}) =>
    generateColor({
      ...color,
      label: {
        idle: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      control: {
        idle: {
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
        idle: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      singleValue: {
        idle: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      placeholder: {
        idle: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      indicatorSeparator: {
        idle: {
          backgroundColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.dark[400]
        }
      },
      indicator: {
        idle: {
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
        idle: {
          backgroundColor: theme.palettes.light[100],
          borderColor: theme.palettes.dark[700]
        },
        disabled: {
          backgroundColor: theme.palettes.light[400],
          borderColor: theme.palettes.dark[400]
        }
      },
      multiValueLabel: {
        idle: {
          color: theme.palettes.dark[700]
        },
        disabled: {
          color: theme.palettes.dark[400]
        }
      },
      multiValueRemove: {
        idle: {
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
        idle: {
          backgroundColor: theme.palettes.light[100],
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)'
        }
      },
      option: {
        idle: {
          backgroundColor: 'transparent',
          color: theme.palettes.dark[700]
        },
        hover: {
          backgroundColor: theme.surfaces.primary,
          color: theme.palettes.light[100]
        }
      },
      message: {
        idle: {
          color: theme.palettes.dark[700]
        }
      }
    })
};
