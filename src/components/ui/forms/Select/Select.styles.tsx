import { ResponsiveBreakpoints } from '@entire.se/components';
import ReactSelect from 'react-select';
import styled, { css } from 'styled-components';

import { SelectSizes } from 'types/select';

import { SelectProps } from './Select';
import { sizes, colors } from './styles';
import * as components from './subcomponents';

export const defaultValues: {
  rounded: NonNullable<SelectProps['rounded']>;
  color: NonNullable<SelectProps['color']>;
  size: SelectSizes;
} = {
  rounded: false,
  color: 'light',
  size: 'medium'
};

export const Root = styled.div<{
  $fullWidth: SelectProps['fullWidth'];
  $hasError: boolean;
  $isDisabled?: SelectProps['disabled'];
  $color: SelectProps['color'];
  $rounded?: SelectProps['rounded'];
  $size?: SelectProps['size'];
}>`
  display: inline-flex;
  flex-direction: column;
  text-align: left;

  ${({ $fullWidth }) =>
    !!$fullWidth &&
    `
      display: flex;
    `}

  ${({ $color = defaultValues.color, theme, $isDisabled }) => css`
    ${colors[$color](theme, {
      isDisabled: $isDisabled
    })}
  `}

  ${({
    theme,
    $size = defaultValues.size,
    $rounded = defaultValues.rounded
  }) => {
    if (typeof $size === 'string') {
      return css`
        ${sizes[$size](theme, {
          rounded: $rounded
        })}
      `;
    }

    if (typeof $size === 'object' && !Array.isArray($size)) {
      return Object.keys($size).map((breakpoint) => {
        const getBreakpoint = breakpoint as ResponsiveBreakpoints;
        const getSize = $size[getBreakpoint];

        if (!getSize) {
          return '';
        }

        return css`
          ${theme.respondTo[getBreakpoint]`
            ${sizes[getSize](theme, {
              rounded: $rounded
            })}
          `}
        `;
      });
    }

    return '';
  }}

  ${({ $hasError, theme }) =>
    $hasError &&
    `
      && ${Control} {
        border-color: ${theme.surfaces.error};
      }
    `}

  ${({ $isDisabled }) =>
    !!$isDisabled &&
    `
      &, * {
        cursor: not-allowed;
      }
    `}
`;

export const Content = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  transition: ${({ theme }) => theme.ease(['color'])};
`;

export const Select = styled(ReactSelect)`
  display: flex;
  flex-direction: column;
`;

export const Control = styled(components.Control)`
  && {
    border-style: solid;
    cursor: pointer;
    box-shadow: none;
    transition: ${({ theme }) => theme.ease(['border-color'])};
  }
`;

export const SelectContainer = styled(components.SelectContainer)`
  &&.react-select--is-disabled {
    pointer-events: auto;
    cursor: not-allowed;

    * {
      pointer-events: none;
    }
  }
`;

export const Placeholder = styled(components.Placeholder)`
  && {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const IndicatorSeparator = styled(components.IndicatorSeparator)`
  && {
    margin: 0;
  }
`;

export const ClearIndicator = styled(components.ClearIndicator)`
  && {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => theme.ease(['color'])};
  }
`;

export const DropdownIndicator = styled(components.DropdownIndicator)`
  && {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => theme.ease(['color'])};
  }
`;

export const LoadingIndicatorContainer = styled.span`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled(components.LoadingIndicator)`
  && {
    display: none;
  }
`;

export const MultiValue = styled(components.MultiValue)`
  && {
    border-style: solid;
    align-items: center;

    /* react-select has issues with passing components... */
    .react-select__multi-value__label,
    .react-select__multi-value__remove {
      background-color: transparent;
      margin: 0;
      font-size: 100%;
      border: none;
    }

    .react-select__multi-value__remove {
      transition: ${({ theme }) => theme.ease(['color'])};
    }
  }
`;

export const Menu = styled(components.Menu)`
  && {
    z-index: 9;
    box-shadow: none;
    overflow: hidden;
  }
`;

export const Option = styled(components.Option)`
  && {
    background-color: transparent;
    cursor: pointer;
    transition: ${({ theme }) => theme.ease(['color', 'background-color'])};
  }
`;

export const CrossIcon = styled(components.CrossIcon)``;
export const DownChevron = styled(components.DownChevron)``;
export const Group = styled(components.Group)``;
export const GroupHeading = styled(components.GroupHeading)``;
export const IndicatorsContainer = styled(components.IndicatorsContainer)``;
export const Input = styled(components.Input)``;
export const LoadingMessage = styled(components.LoadingMessage)``;
export const MenuList = styled(components.MenuList)``;
export const MenuPortal = styled(components.MenuPortal)``;
export const MultiValueContainer = styled(components.MultiValueContainer)``;
export const NoOptionsMessage = styled(components.NoOptionsMessage)``;
export const SingleValue = styled(components.SingleValue)``;
export const ValueContainer = styled(components.ValueContainer)``;

// react-select doesn't pass these properly...
export const MultiValueLabel = styled(components.MultiValueLabel)``;
export const MultiValueRemove = styled(components.MultiValueRemove)``;
