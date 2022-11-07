import {
  ComponentProps,
  MutableRefObject,
  ReactNode,
  useId,
  useMemo
} from 'react';

import { ResponsiveBreakpoints } from '@entire.se/components';
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions
} from 'react-hook-form';
import ReactSelect, { SelectInstance } from 'react-select';

import { FormError } from 'components/ui/forms';
import { SelectSelectors } from 'consts/cypress';
import { theme } from 'styles/settings';
import { SelectSizes } from 'types/select';

import * as styles from './Select.styles';

export interface SelectProps {
  control: Control<any, any>;
  validation?: RegisterOptions;
  name: string;
  options: ComponentProps<ReactSelect>['options'];
  label?: ReactNode;
  fullWidth?: boolean;
  disabled?: ComponentProps<ReactSelect>['isDisabled'];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder?: ComponentProps<ReactSelect>['placeholder'];
  searchable?: ComponentProps<ReactSelect>['isSearchable'];
  multiple?: ComponentProps<ReactSelect>['isMulti'];
  clearable?: ComponentProps<ReactSelect>['isClearable'];
  loading?: ComponentProps<ReactSelect>['isLoading'];
  closeMenuOnSelect?: ComponentProps<ReactSelect>['closeMenuOnSelect'];
  noOptionsMessage?: ComponentProps<ReactSelect>['noOptionsMessage'];
  onChange?: ComponentProps<ReactSelect>['onChange'];
  onBlur?: ComponentProps<ReactSelect>['onBlur'];
  color?: 'light';
  size?:
    | SelectSizes
    | {
        [key in ResponsiveBreakpoints]?: SelectSizes;
      };
  rounded?: boolean;
  defaultValue?: ComponentProps<ReactSelect>['defaultValue'];
  selectRef?: MutableRefObject<SelectInstance | null>;
  iconDropdownIndicator?: ReactNode;
  iconClearIndicator?: ReactNode;
  iconMultiValueRemove?: ReactNode;
}

export const Select = ({
  control,
  validation,
  name,
  options,
  label,
  fullWidth,
  disabled,
  error,
  placeholder,
  searchable,
  multiple,
  clearable,
  loading,
  closeMenuOnSelect,
  noOptionsMessage,
  onChange,
  onBlur,
  color,
  size,
  rounded,
  defaultValue,
  selectRef,
  iconDropdownIndicator,
  iconClearIndicator,
  iconMultiValueRemove,
  ...rest
}: SelectProps) => {
  const instanceId = useId();

  const getValidation = useMemo(
    () => (!disabled ? validation : {}),
    [disabled, validation]
  );

  return (
    <styles.Root
      data-cy={SelectSelectors.Root}
      $fullWidth={fullWidth}
      $hasError={!!error}
      $isDisabled={disabled}
      $rounded={rounded}
      $color={color}
      $size={size}
      {...rest}
    >
      <Controller
        rules={getValidation}
        defaultValue={defaultValue}
        name={name}
        control={control}
        render={({
          field: {
            name: innerName,
            ref: innerRef,
            value: innerValue,
            onChange: innerOnChange,
            onBlur: innerOnBlur
          }
        }) => (
          <styles.Content>
            {!!label && (
              <styles.Label data-cy={SelectSelectors.Label}>
                {label}
                {getValidation?.required ? ' *' : ''}
              </styles.Label>
            )}
            {/* @ts-ignore - See why something breaks here... */}
            <styles.Select
              name={innerName}
              ref={(event: SelectInstance | null) => {
                if (selectRef) selectRef.current = event;
                innerRef(event);
              }}
              value={innerValue}
              onChange={(newValue, actionMeta) => {
                innerOnChange(newValue, actionMeta);
                onChange?.(newValue, actionMeta);
              }}
              onBlur={(event) => {
                innerOnBlur();
                onBlur?.(event);
              }}
              instanceId={instanceId}
              options={options}
              isDisabled={disabled}
              placeholder={placeholder || '\u00a0'}
              classNamePrefix="react-select"
              isSearchable={searchable}
              isMulti={multiple}
              isClearable={clearable}
              closeMenuOnSelect={closeMenuOnSelect}
              noOptionsMessage={noOptionsMessage}
              isLoading={loading}
              iconDropdownIndicator={iconDropdownIndicator}
              iconClearIndicator={iconClearIndicator}
              iconMultiValueRemove={iconMultiValueRemove}
              components={{
                ClearIndicator: styles.ClearIndicator,
                Control: styles.Control,
                CrossIcon: styles.CrossIcon,
                DownChevron: styles.DownChevron,
                DropdownIndicator: styles.DropdownIndicator,
                Group: styles.Group,
                GroupHeading: styles.GroupHeading,
                IndicatorsContainer: styles.IndicatorsContainer,
                IndicatorSeparator: styles.IndicatorSeparator,
                Input: styles.Input,
                LoadingIndicator: styles.LoadingIndicator,
                LoadingMessage: styles.LoadingMessage,
                Menu: styles.Menu,
                MenuList: styles.MenuList,
                MenuPortal: styles.MenuPortal,
                MultiValue: styles.MultiValue,
                MultiValueContainer: styles.MultiValueContainer,
                MultiValueLabel: styles.MultiValueLabel,
                MultiValueRemove: styles.MultiValueRemove,
                NoOptionsMessage: styles.NoOptionsMessage,
                Option: styles.Option,
                Placeholder: styles.Placeholder,
                SelectContainer: styles.SelectContainer,
                SingleValue: styles.SingleValue,
                ValueContainer: styles.ValueContainer
              }}
              theme={theme}
            />
          </styles.Content>
        )}
      />
      <FormError error={error} />
    </styles.Root>
  );
};
