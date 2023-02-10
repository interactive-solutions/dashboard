import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { NextAdapter } from 'next-query-params';
import { AppProps as NextAppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { QueryParamProvider } from 'use-query-params';

import { client } from 'api/apollo';
import { SEO } from 'components/tools';
import { Layout } from 'components/ui/general';
import { ProgressBar } from 'components/ui/router';
import { messages } from 'i18n/messages';
import { theme } from 'styles';
import { createEmotionCache } from 'utils';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

export const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: AppProps) => {
  return (
    <QueryParamProvider adapter={NextAdapter}>
      <IntlProvider messages={messages.sv} locale="sv" defaultLocale="sv">
        <ApolloProvider client={client}>
          <CacheProvider value={emotionCache}>
            <SEO />
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ProgressBar />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </CacheProvider>
        </ApolloProvider>
      </IntlProvider>
    </QueryParamProvider>
  );
};

export default App;
