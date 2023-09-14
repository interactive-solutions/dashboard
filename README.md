# Entire dashboard

This is an internal dashboard created and used by employees of Entire. The idea is to create a library of widgets
from where everyone can drag and drop widgets they consider helpful into their dashboard.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en). Make sure you use the recommended node version, it is defined in .nvmrc. If using nvm, run `nvm use` to automatically
  use the defined version.
- [yarn](https://yarnpkg.com/). Package manager to handle dependencies.

### Getting started

1. run `yarn install` to install dependencies listed in package.json.
2. run `yarn start` to start development server on port 9000, this will auto-reload on http://localhost:9000 in sync with your local changes.

### About the repo

This project is built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) and [MUI](https://mui.com/)

#### Component lifecycle

You should look at a component as its own lifecycle. Everything about it should be wrapped in the same folder, where the folder name is the components name, and then return itself. This is the structure and files that could/should be included:

```
.
├── components
│   └── ...
│       ├── Example
│       │   ├── Example.styles.ts     # Styling
│       │   └── Example.tsx           # Export component and props
│       │   ...
│       └── index.ts                  # Exports every component and props within the folder
└── ...
```

#### Material UI Components

We use [Material UI]('https://mui.com/material-ui/') React components.

```
import { IconButton } from '@mui/material;
```

#### Style theme

Theme is defined in `styles/theme` directory. Please use colors defined in `palette.ts` and spacing unit defined in `spacing.ts` when creating styled components.

```
export const Box = styled('div')`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.brandColors.darkGray};
`;
```

### To create a widget

Widgets live in `src/widgets` directory. Every widget should have its own subdirectory, as described in _Component lifecycle_ section above.

Widgets are rendered as a grid with drag-and-drop functionality. To make your widget part of the choosable collection, it needs to be defined in `griditems` located in `src/widgets/index.ts`.

### Linting

We are using stylelint, eslint and prettier as code quality tools. Rules are extended from external packages and defined in `.eslintrc.js`, `.prettierrc.js` and `.stylelintrc.js`.
Make sure your IDE use these files. It is recommended to make your IDE run lint fixes on save.

To get reports on lint and typescript issues you can run `yarn eslint:report && stylelint:report && prettier:report &&z typescript:report`
To automatically fix some lint issues you can run `yarn eslint:fix && stylelint:fix && prettier:fix`

We have a "pre-push hook" that checks code quality before pushing it to the remote branch. It is defined in `.huskyrc.js` and checks the code using the same commands as specified above. Any errors reported will only be shown to you. If you get errors, simply fix whatever is reported and push again (just don't forget to `add` and `commit` your fixes)

### Useful commands

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
- `$ yarn prettier:report` - Report any [Prettier](https://prettier.io/) issues.
- `$ yarn prettier:fix` - Fix any [Prettier](https://prettier.io/) issues.
- `$ yarn eslint:report` - Report any [ESLint](https://eslint.org/) issues.
- `$ yarn eslint:fix` - Fix any [ESLint](https://eslint.org/) issues.
- `$ yarn stylelint:report` - Report any [Stylelint](https://stylelint.io/) issues.
- `$ yarn stylelint:fix` - Fix any [Stylelint](https://stylelint.io/) issues.
- `$ yarn typescript:report` - Report any TypeScript issues.

### Environment variables

- `NEXT_PUBLIC_IMAGES_DOMAINS` - Space separated list of [images.domains](https://nextjs.org/docs/basic-features/image-optimization#domains) for the Next.js configuration.
- `NEXT_PUBLIC_ENVIRONMENT` - Tell the application which system it's running. It can be localhost, production or staging.

## Browser support

Supported browsers are defined [here](https://nextjs.org/docs/basic-features/supported-browsers-features/).
