import { useCallback } from 'react';

// eslint-disable-next-line import/no-duplicates
import { format as dateFormat } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import { sv } from 'date-fns/locale';
import { useIntl } from 'react-intl';

import { DateFormats } from 'consts/format';

export const useFormat = () => {
  const intl = useIntl();

  const handleDate = useCallback(
    (
      date: Date | string | number,
      format: DateFormats = DateFormats.YearMonthDay
    ) => {
      let locale;

      if (intl.locale === 'sv') {
        locale = sv;
      }

      return dateFormat(new Date(date), format, { locale });
    },
    [intl.locale]
  );

  const handleCurrency = useCallback(
    (number: number, options?: Intl.NumberFormatOptions) => {
      if (intl.locale === 'sv') {
        return number.toLocaleString('sv-SE', {
          style: 'currency',
          currency: 'SEK',
          currencyDisplay: 'code',
          maximumFractionDigits: 0,
          ...options,
        });
      }

      return number;
    },
    [intl.locale]
  );

  return { date: handleDate, currency: handleCurrency };
};
