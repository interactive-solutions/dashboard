import { useCallback } from 'react';

import { format as dateFnsFormat } from 'date-fns';
import { sv } from 'date-fns/locale';

import { DateFormat } from 'consts/date';

export const useFormat = () => {
  const formatDate = useCallback(
    (date: Date, format: DateFormat = DateFormat.Date) => {
      return dateFnsFormat(new Date(date), format, { locale: sv });
    },
    []
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
