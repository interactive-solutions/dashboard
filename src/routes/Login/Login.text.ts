import { defineMessages } from 'react-intl';

import { shared } from 'i18n/shared.text';

export const texts = defineMessages({
  seoTitle: {
    id: 'Login.seoTitle',
    description: 'Seo title',
    defaultMessage: 'Logga in',
  },
  buttonSubmit: {
    id: 'Login.buttonSubmit',
    description: 'Button submit login form',
    defaultMessage: 'Logga in',
  },
  errorResponse: {
    id: 'Login.errorResponse',
    description: 'Error response when login fails',
    defaultMessage:
      'Kunde inte logga in, endera har ni angett fel inloggningsuppgifter eller så ligger servern nere.',
  },
  ...shared.form,
});
