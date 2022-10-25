import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  userAgent: 'cypress-testing',
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require('./cypress/plugins/index').default(on, config);
    },
    baseUrl: 'http://localhost:9000'
  }
});
