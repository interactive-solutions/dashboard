import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { NextAdapter } from 'next-query-params';
import { AppProps as NextAppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { IntlProvider } from 'react-intl';
import { QueryParamProvider } from 'use-query-params';

import { client } from 'api/apollo';
import { SEO } from 'components/tools';
import { Layout } from 'components/ui/general';
import { ProgressBar } from 'components/ui/router';
import { messages } from 'i18n/messages';
import { global, theme } from 'styles';
import { createEmotionCache } from 'utils';

export type AppProps = {
  emotionCache?: EmotionCache;
} & NextAppProps;

const clientSideEmotionCache = createEmotionCache();

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
            <ThemeProvider theme={theme}>
              <SEO />
              <CssBaseline />
              <GlobalStyles styles={global} />
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

export default dynamic(() => Promise.resolve(App), {
  ssr: false
});
