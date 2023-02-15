import { ApolloProvider } from '@apollo/client';
import { useIsTabbing } from '@entire.se/hooks';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DocsContainer } from '@storybook/addon-docs';
import { IntlProvider } from 'react-intl';

import { client } from '../src/api/apollo';
import { messages } from '../src/i18n/messages';
import { theme } from '../src/styles';

export const decorators = [
  (Story) => {
    useIsTabbing();

    return (
      <IntlProvider messages={messages.sv} locale="sv" defaultLocale="sv">
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
              <Story />
            </main>
          </ThemeProvider>
        </ApolloProvider>
      </IntlProvider>
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
