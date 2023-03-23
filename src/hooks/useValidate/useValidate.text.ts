import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  isEmail: {
    id: 'useValidate.isEmail',
    description: 'Incorrect format of email',
    defaultMessage: 'E-post har fel format',
  },
  isPhoneNumber: {
    id: 'useValidate.isPhoneNumber',
    description: 'Incorrect format of phone number',
    defaultMessage: 'Telefon har fel format',
  },
  isOrganisationNumber: {
    id: 'useValidate.isOrganisationNumber',
    description: 'Incorrect format of organisation number',
    defaultMessage: 'Organisationsnummer har fel format',
  },
  isNumeric: {
    id: 'useValidate.isNumeric',
    description: 'Incorrect format of numeric',
    defaultMessage: 'Behöver vara i nummerformat',
  },
  isLatitude: {
    id: 'useValidate.isLatitude',
    description: 'Incorrect format of latitude',
    defaultMessage: 'Latitud måste vara mellan -90 och 90',
  },
  isLongitude: {
    id: 'useValidate.isLongitude',
    description: 'Incorrect format of longitude',
    defaultMessage: 'Longitud måste vara mellan -180 och 180',
  },
  isPostalCode: {
    id: 'useValidate.isPostalCode',
    description: 'Incorrect format of postal code',
    defaultMessage: 'Postnummer har fel format',
  },
  isURL: {
    id: 'useValidate.isURL',
    description: 'Incorrect format of URL',
    defaultMessage: 'URL har fel format',
  },
  isAtLeast: {
    id: 'useValidate.isAtLeast',
    description: 'Is at least passed number',
    defaultMessage: 'Behöver vara minst {atLeast}',
  },
  isInt: {
    id: 'useValidate.isInt',
    description: 'Is integer',
    defaultMessage: 'Behöver vara heltal',
  },
});
