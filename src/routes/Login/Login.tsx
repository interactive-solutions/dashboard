import { useEffect } from 'react';

import { Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MutationLoginEmailArgs>();

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
    if (user) {
      router.replace(Paths.Landing);
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
          <Grid container spacing={1.5} direction="column">
            <Grid item>
              <TextField
                control={control}
                name="email"
                type="email"
                fullWidth
                validation={{ required: true, validate: isEmail }}
                error={errors.email}
                label={<FormattedMessage {...texts.form_labelEmail} />}
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
                label={<FormattedMessage {...texts.form_labelPassword} />}
              />
            </Grid>
            {hasError && (
              <Grid item>
                <Typography color="error" variant="body2">
                  <FormattedMessage {...texts.errorResponse} />
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Button type="submit" fullWidth size="large" loading={isLoading}>
                <FormattedMessage {...texts.buttonSubmit} />
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </styles.Root>
  );
};
