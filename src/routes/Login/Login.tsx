import { useEffect, useRef } from 'react';

import { Grid, Typography } from '@entire.se/components';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { MutationLoginEmailArgs } from 'api/graphql';
import { SEO } from 'components/tools';
import { TextField } from 'components/ui/forms';
import { Button } from 'components/ui/general';
import { Paths } from 'consts/router';
import { useValidate } from 'hooks';
import { useAuthenticationStore } from 'store/authentication';

import { texts } from './Login.text';

import * as styles from './Login.styles';

export const Login = () => {
  const router = useRouter();
  const { formatMessage } = useIntl();
  const { isEmail } = useValidate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MutationLoginEmailArgs>();

  // Next.js doesn't like when multiple router.replace() is triggered
  const hasInitiatedRouterReplace = useRef(false);

  const isLoading = useAuthenticationStore((store) => store.isLoading);
  const hasError = useAuthenticationStore((store) => store.hasError);
  const user = useAuthenticationStore((store) => store.user);
  const login = useAuthenticationStore((store) => store.login);
  const logout = useAuthenticationStore((store) => store.logout);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    await login({ email, password });
  });

  // User is signed in, so send him/her to the Landing page
  useEffect(() => {
    if (user && !hasInitiatedRouterReplace.current) {
      router.replace(Paths.Landing);
      hasInitiatedRouterReplace.current = true;
    }
  }, [router, user]);

  // If the user isn't signed in we need to clear all states, because
  // loading and error states can be persisted forever
  useEffect(() => {
    if (!user) {
      logout();
    }
  }, [user, logout]);

  // Make sure nothing is visible if signed in
  if (user) {
    return null;
  }

  return (
    <>
      <SEO title={formatMessage(texts.seoTitle)} />
      <styles.Root>
        <styles.Container>
          <form onSubmit={onSubmit}>
            <Grid gap={3}>
              <Grid.Item width={12}>
                <TextField
                  name="email"
                  type="email"
                  label="[insert-email-label]"
                  fullWidth
                  register={register}
                  validation={{
                    required: true,
                    validate: isEmail
                  }}
                  error={errors.email}
                />
              </Grid.Item>
              <Grid.Item width={12}>
                <TextField
                  name="password"
                  type="password"
                  label="[insert-password-label]"
                  fullWidth
                  register={register}
                  validation={{ required: true }}
                  error={errors.password}
                />
              </Grid.Item>
              {hasError && (
                <Grid.Item width={12}>
                  <Typography type="body-20" color="error-400">
                    {'[insert-error-response]'.toString()}
                  </Typography>
                </Grid.Item>
              )}
              <Grid.Item width={12}>
                <Button
                  type="submit"
                  fullWidth
                  loading={isLoading}
                  disabled={isLoading}
                >
                  {'[insert-submit]'.toString()}
                </Button>
              </Grid.Item>
            </Grid>
          </form>
        </styles.Container>
      </styles.Root>
    </>
  );
};
