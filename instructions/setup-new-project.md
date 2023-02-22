# Setup new project

Some things within this boilerplate are project specific and therefore needs to be adjusted in the start. Follow this list:

1. Search within the entire repository for `TODO:` and adjust the comments.
2. Setup variables for our pipelines in Settings --> CI/CD --> Variables:
    1. **ENTIRE_HOSTNAME_STAGING** - URL to isdemo for the project (e.g. boilerplate has _nextjs-boilerplate.isdemo.se_).
    2. **ENTIRE_HOSTNAME_STORYBOOK** - URL to Storybook for the project (e.g. boilerplate has _storybook.nextjs-boilerplate.isdemo.se_).
    3. **CF_ACCESS_CLIENT_ID_STAGING** - Cloudflare access client id. Set as masked and use values from [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/ci_cd).
    4. **CF_ACCESS_CLIENT_SECRET_STAGING** - Cloudflare access client secret. Set as masked and use values from [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/ci_cd).
    5. **SENTRY_AUTH_TOKEN** - Sentry auth token. Use value from [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/ci_cd).
    6. **CLOUDFLARE_ZONE_ID** - Setup on group level. Use value from [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/ci_cd).
    7. **CF_AUTH_TOKEN** - Setup on group level. Use value from [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/ci_cd).
    8. **KUBECONFIG_STAGING** - Setup on group level. This is generated per project by backenders (or anyone with knowledge and access to terraform).
3. Setup branches in Settings --> Repository:
    1. **Default branch** - Set this to _develop_.
    2. **Protected branches** - Protect _master_ and _develop_ with the same settings as [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/repository).
4. Synchronize design variables with the designer. Some critical variables to adjust as soon as possible:
    1. **Palettes & surfaces** - Set hex colors.
    2. **Typography** - Set all typographies.
5. Setup Apollo uri and images domains:
    1. **.env** - Within desired file update `NEXT_PUBLIC_APOLLO_URI` and `NEXT_PUBLIC_IMAGES_DOMAINS`.
    2. **codegen/default.config.ts** - Update `schema`.
6. Search within the entire repository for `nextjs-boilerplate` and replace it with the project name.
7. Replace namespace `internal` with the namespace that is for your project.
8. Want to enable SSR? Go to `src/pages/_app.tsx` and use the commented out code.
9. Setup [Sentry](https://sentry.interactivesolutions.se/) and edit these:
    1. **process.env.NEXT_PUBLIC_SENTRY_DSN** - Within `.gitlab-ci.yml`.
    2. **sentry.properties** - Edit `defaults.project`.
    3. Make sure it works with a simple `throw new Error('...')`.
10. Want a responsive website? Remove `min-width` from `src/components/ui/general/Layout/Layout.styles.ts`.
11. Clean up image tags:
    1. Navigate to https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/packages_and_registries.
    2. Click on "Edit cleanup rules".
    3. Make the same settings for your project.
12. TODO: Write how to setup provisioning.
