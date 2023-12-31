import { ReactNode } from 'react';

import Head from 'next/head';

export type SEOProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

export const SEO = ({ children, title, description }: SEOProps) => {
  return (
    <Head>
      <title>{title ? `${title} | Dashboard` : 'Dashboard'}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/images/favicon.svg" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      {children}
    </Head>
  );
};
