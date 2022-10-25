import { ApolloProvider } from '@apollo/client';
import { RootProvider } from '@entire.se/components';
import { AppProps as NextAppProps } from 'next/app';
import { IntlProvider } from 'react-intl';

import { client } from 'api/apollo';
import { SEO } from 'components/tools';
import { Layout } from 'components/ui/general';
import { ProgressBar } from 'components/ui/router';
import { messages } from 'lang/messages';
import { theme } from 'styles/settings';

import { Global } from 'styles/Global.styles';

export interface AppProps extends NextAppProps {}

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootProvider theme={theme}>
      <Global />
      <IntlProvider messages={messages.sv} locale="sv" defaultLocale="sv">
        <ApolloProvider client={client}>
          <SEO />
          <ProgressBar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </IntlProvider>
    </RootProvider>
  );
};

export default App;
