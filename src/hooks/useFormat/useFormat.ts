import { useCallback } from 'react';

// eslint-disable-next-line import/no-duplicates
import { format as dateFormat } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import { sv } from 'date-fns/locale';

import { DateFormats } from 'consts/format';

export const useFormat = () => {
  const handleDate = useCallback(
    (
      date: Date | string | number,
      format: DateFormats = DateFormats.YearMonthDay
    ) => {
      return dateFormat(new Date(date), format, { locale: sv });
    },
    []
  );

  const handleCurrency = useCallback((number: number) => {
    return number.toLocaleString('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      currencyDisplay: 'code',
      maximumFractionDigits: 0,
    });
  }, []);

  return { date: handleDate, currency: handleCurrency };
};
