import { useEffect, useRef } from 'react';

import { LoadingButton } from '@mui/lab';
import { Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { MutationLoginEmailArgs } from 'api/graphql';
import { SEO } from 'components/tools';
import { TextField } from 'components/ui/forms';
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
    control,
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

  // Make sure nothing is visible if signed in, because the router.replace()
  // is ongoing
  if (user) {
    return null;
  }

  return (
    <styles.Root>
      <SEO title={formatMessage(texts.seoTitle)} />
      <Container maxWidth="xs">
        <form onSubmit={onSubmit}>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <TextField
                control={control}
                name="email"
                type="email"
                fullWidth
                validation={{ required: true, validate: isEmail }}
                error={errors.email}
                label="[insert-email-label]"
                autoFocus
              />
            </Grid>
            <Grid item>
              <TextField
                control={control}
                name="password"
                type="password"
                fullWidth
                validation={{ required: true }}
                error={errors.password}
                label="[insert-password-label]"
              />
            </Grid>
            {hasError && (
              <Grid item>
                <Typography color="error">
                  {'[insert-error-response]'.toString()}
                </Typography>
              </Grid>
            )}
            <Grid item>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                loading={isLoading}
              >
                {'[insert-submit]'.toString()}
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </Container>
    </styles.Root>
  );
};
