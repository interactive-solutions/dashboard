/**
 * Collect shared messages within this file. Enums from backend is great to
 * translate here.
 */

import { defineMessages } from 'react-intl';

// Form messages
const form = defineMessages({
  form_labelEmail: {
    id: 'shared.form_labelEmail',
    description: 'Label email',
    defaultMessage: 'E-post',
  },
  form_labelPassword: {
    id: 'shared.form_labelPassword',
    description: 'Label password',
    defaultMessage: 'Lösenord',
  },
  form_validationRequired: {
    id: 'shared.form_validationRequired',
    description: 'Validation required',
    defaultMessage: 'Obligatoriskt fält',
  },
});

// Table messages
const table = defineMessages({
  table_empty: {
    id: 'shared.table_empty',
    description: 'Empty results',
    defaultMessage: 'Hittade inga resultat',
  },
  table_loading: {
    id: 'shared.table_loading',
    description: 'Loading results',
    defaultMessage: 'Hämtar data...',
  },
});

export const shared = {
  form,
  table,
};
