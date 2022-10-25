const { withSentryConfig } = require('@sentry/nextjs');

const isDevelopment = process.env.NODE_ENV === 'development';
const isBuild = process.env.NODE_ENV === 'production';
const withSentry = process.env.NEXT_PUBLIC_SENTRY_DSN && isBuild;

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: isDevelopment,
      fileName: isDevelopment
    }
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  swcMinify: true,
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGES_DOMAINS?.split(' ') || []
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = withSentry
  ? withSentryConfig(
      {
        ...nextConfig,
        sentry: {
          hideSourceMaps: true
        }
      },
      {
        silent: true
      }
    )
  : nextConfig;
