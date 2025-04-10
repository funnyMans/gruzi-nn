import { type CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: 'src/shared/gql/server/schema/**/schema.graphql',
  generates: {
    'src/shared/gql/server/schema': defineConfig(),
  },
  // config: {
  //   contextType: '../context/context#Context',
  // },
};
export default config;
