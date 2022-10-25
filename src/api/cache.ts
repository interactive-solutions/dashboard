import { InMemoryCache } from '@apollo/client';

import fragmentMatcher from 'graphql/fragment-matcher.json';

export const cache = new InMemoryCache({
  possibleTypes: fragmentMatcher.possibleTypes,
  typePolicies: {
    User: {
      merge: true
    }
  }
});
