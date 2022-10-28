import { ChangeEvent, useCallback } from 'react';

import debounce from 'lodash/debounce';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { TextField } from 'components/ui/forms';
import { TableSelectors } from 'consts/cypress';
import { useTable } from 'hooks';

import { texts } from './Search.text';

import * as styles from './Search.styles';

export interface SearchProps {
  onSearchChange: (searchTerm: string) => void;
}

export const Search = ({ onSearchChange }: SearchProps) => {
  const { formatMessage } = useIntl();
  const { register } = useForm();
  const { getSearchTermQueryVariable } = useTable();

  const handleOnChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onSearchChange(target.value);
    },
    [onSearchChange]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnChange = useCallback(debounce(handleOnChange, 250), [
    handleOnChange
  ]);

  return (
    <styles.Root data-cy={TableSelectors.Search}>
      <TextField
        register={register}
        name="searchTerm"
        fullWidth
        onChange={debouncedOnChange}
        defaultValue={getSearchTermQueryVariable()}
        placeholder={formatMessage(texts.placeholder)}
      />
    </styles.Root>
  );
};
