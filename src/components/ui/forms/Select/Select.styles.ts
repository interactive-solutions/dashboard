import { SelectColor, SelectSize, SelectSizes } from '@entire.se/components';
import { DefaultTheme } from 'styled-components';

import { SelectProps } from './Select';

export const getColors = (
  theme: DefaultTheme
): {
  [key in NonNullable<SelectProps['color']>]: SelectColor;
} => ({
  light: {
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
  }
});

export const getSizes = (
  theme: DefaultTheme
): {
  [key in SelectSizes]: SelectSize;
} => ({
  small: {
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
    messagePadding: theme.spacing(1.25),
    labelTypography: theme.typography.title[10],
    labelGap: theme.spacing(0.5)
  },
  medium: {
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
    messagePadding: theme.spacing(1.5),
    labelTypography: theme.typography.title[10],
    labelGap: theme.spacing(0.5)
  },
  large: {
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
    messagePadding: theme.spacing(1.75),
    labelTypography: theme.typography.title[10],
    labelGap: theme.spacing(0.5)
  }
});
