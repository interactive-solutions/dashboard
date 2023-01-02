import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.booksquare.isdemo.se/graphql', // TODO: Change schema
  documents: ['src/graphql/**/!(/cli)/**/*.graphql'],
  generates: {
    'src/graphql/fragment-matcher.json': {
      plugins: ['fragment-matcher'], // https://www.the-guild.dev/graphql/codegen/plugins/other/fragment-matcher
      config: {
        module: 'commonjs',
        useExplicitTyping: true
      }
    },
    'src/api/graphql.ts': {
      plugins: [
        'typescript', // https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript
        'typescript-operations', // https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations
        'typescript-react-apollo' // https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo
      ],
      config: {
        flattenGeneratedTypes: false,
        withHooks: true,
        scalars: {
          ID: 'string | number',
          Time: 'string | number',
          Uint32: 'number',
          Uint64: 'number',
          Upload: 'File'
        }
      }
    },
    'src/graphql/cli/graphql.schema.json': {
      plugins: ['introspection']
    }
  }
};

export default config;
