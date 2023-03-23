# Next.js boilerplate :fire:

[Next.js](https://nextjs.org/) with [MUI](https://mui.com/).

## Usage

Recommended node version is defined in `.nvmrc`.

Run `$ yarn graphql:generate` after installing the packages, it will generate GraphQL for the application to work.

- `$ yarn install` - Install packages.
- `$ yarn start` - Start development server on port 9000.
- `$ yarn start:localhost` - Same as `$ yarn start` but with localhost settings.
- `$ yarn start:staging` - Same as `$ yarn start` but with staging settings.
- `$ yarn start:production` - Same as `$ yarn start` but with production settings.
- `$ yarn build` - Build project to the build folder.
- `$ yarn build:localhost` - Same as `$ yarn build` but with localhost settings.
- `$ yarn build:staging` - Same as `$ yarn build` but with staging settings.
- `$ yarn build:production` - Same as `$ yarn build` but with production settings.
- `$ yarn serve` - Serve the build folder on port 9090.
- `$ yarn serve:localhost` - Same as `$ yarn serve` but with localhost settings.
- `$ yarn serve:staging` - Same as `$ yarn serve` but with staging settings.
- `$ yarn serve:production` - Same as `$ yarn serve` but with production settings.
- `$ yarn cypress:open` - Open [Cypress](https://www.cypress.io/) test runner.
- `$ yarn cypress:run` - Run [Cypress](https://www.cypress.io/) tests to completion.
- `$ yarn cypress:start:localhost` - Start `$ yarn start:localhost` together with `cypress:open`.
- `$ yarn cypress:start:staging` - Start `$ yarn start:staging` together with `cypress:open`.
- `$ yarn cypress:ci:localhost` - Continuous integration with `cypress:run` and localhost settings.
- `$ yarn cypress:ci:staging` - Continuous integration with `cypress:run` and staging settings.
- `$ yarn prettier:report` - Report any [Prettier](https://prettier.io/) issues.
- `$ yarn prettier:fix` - Fix any [Prettier](https://prettier.io/) issues.
- `$ yarn eslint:report` - Report any [ESLint](https://eslint.org/) issues.
- `$ yarn eslint:fix` - Fix any [ESLint](https://eslint.org/) issues.
- `$ yarn stylelint:report` - Report any [Stylelint](https://stylelint.io/) issues.
- `$ yarn stylelint:fix` - Fix any [Stylelint](https://stylelint.io/) issues.
- `$ yarn typescript:report` - Report any TypeScript issues.
- `$ yarn graphql:generate` - Generate GraphQL with [codegen](https://graphql-code-generator.com/) within `/src/graphql` and generate everything from backend into gitignored `/graphql`.
- `$ yarn graphql:watch` - Watch GraphQL with [codegen](https://graphql-code-generator.com/) within `/src/graphql`.
- `$ yarn graphql:operations` - Generate a GraphQL operations file for [codegen](https://graphql-code-generator.com/).
- `$ yarn storybook:start` - Start [Storybook](https://storybook.js.org/) server on port 1337.
- `$ yarn storybook:build` - Build [Storybook](https://storybook.js.org/).
- `$ yarn i18n:extract` - [Extract](https://formatjs.io/docs/tooling/cli#extraction) string messages.
- `$ yarn i18n:compile` - [Compile](https://formatjs.io/docs/tooling/cli#compilation) extracted file.

## Pages

Pages lives within two places, this because we're using separate sibling files for styling, texts etc. and Next.js doesn't like that. So within the pages folder we're collecting data and making the optional data request(s), then the page itself with styling, texts etc. should be within the routes folder. So the pages component will send its data as props to the routes component.

## Component lifecycle

You should look at a component as its own lifecycle. Everything about it should be wrapped in the same folder, where the folder name is the components name, and then return itself. This is the structure and files that could/should be included:

```
.
├── components
│   └── ...
│       ├── Example
│       │   ├── Example.stories.tsx   # Storybook
│       │   ├── Example.styles.ts     # Styling
│       │   ├── Example.text.ts       # Intl text
│       │   └── Example.tsx           # Export component and props
│       │   ...
│       └── index.ts                  # Exports every component and props within the folder
└── ...
```

## Environment variables

- `NEXT_PUBLIC_APOLLO_URI` - [Apollo](https://www.apollographql.com/) uri.
- `NEXT_PUBLIC_IMAGES_DOMAINS` - Space separated list of [images.domains](https://nextjs.org/docs/basic-features/image-optimization#domains) for the Next.js configuration.
- `NEXT_PUBLIC_ENVIRONMENT` - Tell the application which system it's running. It can be localhost, production, staging or storybook.
- `NEXT_PUBLIC_SENTRY_AUTH_TOKEN` - Will be populated with `$SENTRY_AUTH_TOKEN` within `.gitlab-ci.yml`.
- `NEXT_PUBLIC_SENTRY_DSN` - Define [Data Source Name (DSN)](https://docs.sentry.io/product/sentry-basics/dsn-explainer/).
- `NEXT_PUBLIC_SENTRY_RELEASE` - Will be populated with `$CI_PIPELINE_ID` within `.gitlab-ci.yml`.
- `NEXT_PUBLIC_SENTRY_ENVIRONMENT` - Will be populated with `$CI_ENVIRONMENT_NAME` within `.gitlab-ci.yml`.

## Browser support

Supported browsers are defined [here](https://nextjs.org/docs/basic-features/supported-browsers-features/).

## Read more

You can learn more in the [Next.js documentation](https://nextjs.org/docs/).
