import {
  LocalizationProvider as MuiLocalizationProvider,
  LocalizationProviderProps as MuiLocalizationProviderProps,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { sv } from 'date-fns/locale';
import { useIntl } from 'react-intl';

export type LocalizationProviderProps<TDate = any> =
  {} & MuiLocalizationProviderProps<TDate>;

export const LocalizationProvider = (props: LocalizationProviderProps) => {
  const intl = useIntl();

  return (
    <MuiLocalizationProvider
      {...props}
      dateAdapter={AdapterDateFns}
      adapterLocale={intl.locale === 'sv' ? sv : undefined}
    />
  );
};
