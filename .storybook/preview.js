import { ApolloProvider } from '@apollo/client';
import { useIsTabbing } from '@entire.se/hooks';
import { CssBaseline, ThemeProvider, GlobalStyles } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DocsContainer } from '@storybook/addon-docs';
import { IntlProvider } from 'react-intl';

import { client } from '../src/api/apollo';
import { messages } from '../src/i18n/messages';
import { theme, global } from '../src/styles';

export const decorators = [
  (Story) => {
    useIsTabbing();

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <IntlProvider messages={messages.sv} locale="sv" defaultLocale="sv">
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <GlobalStyles styles={global} />
              <main>
                <Story />
              </main>
            </ThemeProvider>
          </ApolloProvider>
        </IntlProvider>
      </LocalizationProvider>
    );
  },
];

export const parameters = {
  docs: {
    container: ({ children, context }) => {
      useIsTabbing();

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={global} />
          <DocsContainer context={context}>
            <div>{children}</div>
          </DocsContainer>
        </ThemeProvider>
      );
    },
  },
  options: {
    storySort: {
      order: ['Instructions', 'Components'],
    },
  },
};
