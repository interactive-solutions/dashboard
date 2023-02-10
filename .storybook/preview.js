import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { useIsTabbing } from '@entire.se/hooks';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { DocsContainer } from '@storybook/addon-docs';
import { IntlProvider } from 'react-intl';

import { client } from '../src/api/apollo';
import { messages } from '../src/i18n/messages';
import { theme } from '../src/styles';

export const decorators = [
  (Story) => {
    useIsTabbing();

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IntlProvider messages={messages.sv} locale="sv" defaultLocale="sv">
          <ApolloProvider client={client}>
            <main>
              <Story />
            </main>
          </ApolloProvider>
        </IntlProvider>
      </ThemeProvider>
    );
  }
];

export const parameters = {
  docs: {
    container: ({ children, context }) => {
      useIsTabbing();

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DocsContainer context={context}>
            <div>{children}</div>
          </DocsContainer>
        </ThemeProvider>
      );
    }
  },
  options: {
    storySort: {
      order: ['Instructions', 'Components']
    }
  }
};
