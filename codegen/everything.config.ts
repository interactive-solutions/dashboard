import { CodegenConfig } from '@graphql-codegen/cli';

import defaultConfig from './default.config';

const getGeneratesItem = defaultConfig.generates['src/api/graphql.ts'];
delete defaultConfig.generates['src/api/graphql.ts'];

const config: CodegenConfig = {
  ...defaultConfig,
  documents: ['src/graphql/cli/operations.graphql'],
  generates: {
    ...defaultConfig.generates,
    'src/graphql/cli/everything.ts': getGeneratesItem
  }
};

export default config;
