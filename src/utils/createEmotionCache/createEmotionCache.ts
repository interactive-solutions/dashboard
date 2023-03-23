import createCache from '@emotion/cache';
import { isSSR } from '@entire.se/utils';

export const createEmotionCache = () => {
  let insertionPoint;

  if (!isSSR) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'entire', insertionPoint });
};
