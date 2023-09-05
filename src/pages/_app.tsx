import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { AppProps as NextAppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { NextAdapter } from 'next-query-params';
import { QueryParamProvider } from 'use-query-params';

import { Layout } from 'components/general';
import { ProgressBar } from 'components/router';
import { SEO } from 'components/tools';
import { global, theme } from 'styles';
import { createEmotionCache } from 'utils';

export type AppProps = {
  emotionCache?: EmotionCache;
} & NextAppProps;

const clientSideEmotionCache = createEmotionCache();

export const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppProps) => {
  return (
    <QueryParamProvider adapter={NextAdapter}>
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
    </QueryParamProvider>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
