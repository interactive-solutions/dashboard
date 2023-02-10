import { useCallback, useEffect } from 'react';

// import {
//   TransitionCubicBeziers,
//   TransitionDurations
// } from '@entire.se/components';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({
  template: '<div class="progress-bar" role="bar"></div>',
  showSpinner: false
  // easing: TransitionCubicBeziers.Ease,
  // speed: TransitionDurations.Medium * 1000
});

// import { css } from 'styled-components';

// export const progressBar = css`
//   .progress-bar {
//     background: ${({ theme }) => theme.surfaces.primary};
//     position: fixed;
//     z-index: 9999;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 3px;
//   }
// `;

export const ProgressBar = () => {
  const routeChangeStart = useCallback(() => {
    NProgress.set(0);
    NProgress.start();
  }, []);

  const routeChangeEnd = useCallback(() => {
    NProgress.done(true);
  }, []);

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

  return null;
};
