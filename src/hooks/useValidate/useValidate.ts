import { useCallback } from 'react';

import isEmail from 'validator/lib/isEmail';
import isFloat from 'validator/lib/isFloat';
import isInt from 'validator/lib/isInt';
import isNumeric from 'validator/lib/isNumeric';
import isPostalCode from 'validator/lib/isPostalCode';
import isURL from 'validator/lib/isURL';

import { Patterns } from 'consts/validate';

export const useValidate = () => {
  const handleIsEmail = useCallback(
    (value: string) => (isEmail(value) ? true : 'Incorrect format'),
    []
  );

  const handleIsPhoneNumber = useCallback(
    (value: string) =>
      new RegExp(Patterns.PhoneNumber).test(value) ? true : 'Incorrect format',
    []
  );

  const handleIsOrganisationNumber = useCallback(
    (value: string) =>
      new RegExp(Patterns.OrganisationNumber).test(value)
        ? true
        : 'Incorrect format',
    []
  );

  const handleIsNumeric = useCallback(
    (value: string) => (isNumeric(value) ? true : 'Numeric format is required'),
    []
  );

  const handleIsLatitude = useCallback(
    (value: string) =>
      isFloat(value, { min: -90, max: 90 })
        ? true
        : 'Latitude must be between -90 and 90',
    []
  );

  const handleIsLongitude = useCallback(
    (value: string) =>
      isFloat(value, { min: -180, max: 180 })
        ? true
        : 'Longitude must be between -180 and 180',
    []
  );

  const handleIsPostalCode = useCallback(
    (value: string) => (isPostalCode(value, 'SE') ? true : 'Incorrect format'),
    []
  );

  const handleIsURL = useCallback(
    (value: string) =>
      isURL(value, { require_protocol: true }) ? true : 'Incorrect format',
    []
  );

  const handleIsInt = useCallback(
    (value: string) => (isInt(value) ? true : 'Integer required'),
    []
  );

  const handleIsAtLeast = useCallback((atLeast: number, value: number) => {
    const numberAtLeast = Number(atLeast);
    const numberValue = Number(value);

    if (
      typeof numberAtLeast === 'number' &&
      typeof numberValue === 'number' &&
      !Number.isNaN(numberAtLeast) &&
      !Number.isNaN(numberValue)
    ) {
      return value >= atLeast ? true : `Has to be at least ${atLeast}`;
    }

    return true;
  }, []);

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
