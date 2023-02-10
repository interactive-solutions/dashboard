import { useCallback } from 'react';

import { format as dateFormat } from 'date-fns';
import { sv } from 'date-fns/locale';
import { useIntl } from 'react-intl';

import { DateFormat } from 'consts/format';

export const useFormat = () => {
  const intl = useIntl();

  const formatDate = useCallback(
    (date: Date, format: DateFormat = DateFormat.Date) => {
      let locale;

      if (intl.locale === 'sv') {
        locale = sv;
      }

      return dateFormat(new Date(date), format, { locale });
    },
    [intl.locale]
  );

  const formatCurrency = useCallback(
    (number: number, options?: Intl.NumberFormatOptions) => {
      if (typeof number !== 'number') {
        return number;
      }

      return number.toLocaleString('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        currencyDisplay: 'code',
        maximumFractionDigits: 0,
        ...options
      });
    },
    []
  );

  return { date: formatDate, currency: formatCurrency };
};
