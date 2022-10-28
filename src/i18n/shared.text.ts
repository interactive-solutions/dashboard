/* eslint-disable @entire.se/eslint-react/id-filename-mismatch */
/**
 * Collect shared messages within this file. Enums from backend is great to
 * translate here.
 */

import { defineMessages } from 'react-intl';

// enum UserRole
const userRole = defineMessages({
  admin: {
    id: 'userRole.admin',
    description: 'Admin',
    defaultMessage: 'Admin'
  },
  user: {
    id: 'userRole.user',
    description: 'User',
    defaultMessage: 'Användare'
  }
});

export const shared = {
  userRole
};
