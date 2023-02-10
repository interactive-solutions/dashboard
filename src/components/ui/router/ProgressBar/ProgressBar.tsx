import { useCallback, useEffect } from 'react';

import { GlobalStyles, useTheme } from '@mui/material';
import Router from 'next/router';
import NProgress from 'nprogress';

export const ProgressBar = () => {
  const className = 'progress-bar';
  const { palette, zIndex, transitions } = useTheme();

  const routeChangeStart = useCallback(() => {
    NProgress.set(0);
    NProgress.start();
  }, []);

  const routeChangeEnd = useCallback(() => {
    NProgress.done(true);
  }, []);

  useEffect(() => {
    NProgress.configure({
      template: `<div class="${className}" role="bar"></div>`,
      showSpinner: false,
      easing: transitions.easing.easeInOut,
      speed: transitions.duration.complex
    });
  }, [transitions.easing.easeInOut, transitions.duration.complex]);

  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
  }, [routeChangeEnd, routeChangeStart]);

  return (
    <GlobalStyles
      styles={{
        [`.${className}`]: {
          background: palette.primary.main,
          position: 'fixed',
          zIndex: zIndex.snackbar,
          top: 0,
          left: 0,
          width: '100%',
          height: 3
        }
      }}
    />
  );
};
