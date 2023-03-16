import { useCallback } from 'react';

import { useIntl } from 'react-intl';
import isEmail from 'validator/lib/isEmail';
import isFloat from 'validator/lib/isFloat';
import isInt from 'validator/lib/isInt';
import isNumeric from 'validator/lib/isNumeric';
import isPostalCode from 'validator/lib/isPostalCode';
import isURL from 'validator/lib/isURL';

import { Patterns } from 'consts/validate';

import { texts } from './useValidate.text';

export const useValidate = () => {
  const { formatMessage, locale } = useIntl();

  const handleIsEmail = useCallback(
    (value: string) => (isEmail(value) ? true : formatMessage(texts.isEmail)),
    [formatMessage]
  );

  const handleIsPhoneNumber = useCallback(
    (value: string) =>
      new RegExp(Patterns.PhoneNumber).test(value)
        ? true
        : formatMessage(texts.isPhoneNumber),
    [formatMessage]
  );

  const handleIsOrganisationNumber = useCallback(
    (value: string) =>
      new RegExp(Patterns.OrganisationNumber).test(value)
        ? true
        : formatMessage(texts.isOrganisationNumber),
    [formatMessage]
  );

  const handleIsNumeric = useCallback(
    (value: string) =>
      isNumeric(value) ? true : formatMessage(texts.isNumeric),
    [formatMessage]
  );

  const handleIsLatitude = useCallback(
    (value: string) =>
      isFloat(value, { min: -90, max: 90 })
        ? true
        : formatMessage(texts.isLatitude),
    [formatMessage]
  );

  const handleIsLongitude = useCallback(
    (value: string) =>
      isFloat(value, { min: -180, max: 180 })
        ? true
        : formatMessage(texts.isLongitude),
    [formatMessage]
  );

  const handleIsPostalCode = useCallback(
    (value: string) =>
      isPostalCode(value, locale === 'sv' ? 'SE' : 'any')
        ? true
        : formatMessage(texts.isPostalCode),
    [formatMessage, locale]
  );

  const handleIsURL = useCallback(
    (value: string) =>
      isURL(value, { require_protocol: true })
        ? true
        : formatMessage(texts.isURL),
    [formatMessage]
  );

  const handleIsInt = useCallback(
    (value: string) => (isInt(value) ? true : formatMessage(texts.isInt)),
    [formatMessage]
  );

  const handleIsAtLeast = useCallback(
    (atLeast: number, value: number) => {
      const numberAtLeast = Number(atLeast);
      const numberValue = Number(value);

      if (
        typeof numberAtLeast === 'number' &&
        typeof numberValue === 'number' &&
        !Number.isNaN(numberAtLeast) &&
        !Number.isNaN(numberValue)
      ) {
        return value >= atLeast
          ? true
          : formatMessage(texts.isAtLeast, { atLeast });
      }

      return true;
    },
    [formatMessage]
  );

  return {
    isEmail: handleIsEmail,
    isPhoneNumber: handleIsPhoneNumber,
    isOrganisationNumber: handleIsOrganisationNumber,
    isNumeric: handleIsNumeric,
    isLatitude: handleIsLatitude,
    isLongitude: handleIsLongitude,
    isPostalCode: handleIsPostalCode,
    isURL: handleIsURL,
    isAtLeast: handleIsAtLeast,
    isInt: handleIsInt,
  };
};
