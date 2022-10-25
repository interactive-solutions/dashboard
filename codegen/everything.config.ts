import { CodegenConfig } from '@graphql-codegen/cli';

import defaultConfig from './default.config';

const getGeneratesItem = defaultConfig.generates['src/api/graphql.ts'];
delete defaultConfig.generates['src/api/graphql.ts'];

const config: CodegenConfig = {
  ...defaultConfig,
  documents: ['graphql/**/*.graphql'],
  generates: {
    ...defaultConfig.generates,
    'graphql/graphql.ts': getGeneratesItem
  }
};

export default config;
