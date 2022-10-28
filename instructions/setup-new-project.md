# Setup new project

Some things within this boilerplate are project specific and therefore needs to be adjusted in the start. Follow this list:

1. Search within the entire repository for `TODO:` and adjust the comments.
2. Setup variables for our pipelines in Settings --> CI/CD --> Variables:

- **ENTIRE_HOSTNAME_STAGING** - URL to isdemo for the project (e.g. boilerplate has _nextjs-boilerplate.isdemo.se_).
- **ENTIRE_HOSTNAME_STORYBOOK** - URL to Storybook for the project (e.g. boilerplate has _storybook.nextjs-boilerplate.isdemo.se_).
- **CF_ACCESS_CLIENT_ID_STAGING** - Cloudflare access client id. Set as masked and use values from [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/ci_cd).
- **CF_ACCESS_CLIENT_SECRET_STAGING** - Cloudflare access client secret. Set as masked and use values from [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/ci_cd).

3. Setup branches in Settings --> Repository:

- **Default branch** - Set this to _develop_.
- **Protected branches** - Protect _master_ and _develop_ with the same settings as [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/repository).

4. Synchronize design variables with the designer. Some critical variables to adjust as soon as possible:

- **Palettes & surfaces** - Set hex colors.
- **Typography** - Set all typographies.

5. Setup Apollo uri and images domains:

- **.env** - Within desired file update `NEXT_PUBLIC_APOLLO_URI` and `NEXT_PUBLIC_IMAGES_DOMAINS`.
- **codegen/default.config.ts** - Update `schema`.

6. Search within the entire repository for `nextjs-boilerplate` and replace it with the project name. Some strings aren't supposed to be replaced, but you'll probably notice it yourself.
7. Replace namespace `internal` with the namespace that is for your project.
8. Want to disable SSR because e.g. you're going to create a backoffice? Go to `src/pages/_app.tsx` and use the commented out code.
9. Setup [Sentry](https://sentry.interactivesolutions.se/) and edit these:

- **process.env.NEXT_PUBLIC_SENTRY_DSN** - Within `.gitlab-ci.yml`.
- **sentry.properties** - Edit `defaults.project`.

10. Remove `src/pages/books`.
11. TODO: Write how to setup provisioning...
