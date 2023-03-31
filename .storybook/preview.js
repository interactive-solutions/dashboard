import { ApolloProvider } from '@apollo/client';
import { useIsTabbing } from '@entire.se/hooks';
import { CssBaseline, ThemeProvider, GlobalStyles } from '@mui/material';
import { DocsContainer } from '@storybook/addon-docs';

import { client } from '../src/api/apollo';
import { IntlProvider, LocalizationProvider } from '../src/components/tools';
import { theme, global } from '../src/styles';

export const decorators = [
  (Story) => {
    useIsTabbing();

    return (
      <IntlProvider>
        <LocalizationProvider>
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <GlobalStyles styles={global} />
              <main>
                <Story />
              </main>
            </ThemeProvider>
          </ApolloProvider>
        </LocalizationProvider>
      </IntlProvider>
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
