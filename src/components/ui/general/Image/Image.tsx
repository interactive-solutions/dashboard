import { useCallback, useState } from 'react';

import { ThemePaletteRange } from '@entire.se/components';
import { ImageProps as NextImageProps } from 'next/image';
import { DefaultTheme } from 'styled-components';

import { ImageSelectors } from 'consts/cypress';

import * as styles from './Image.styles';

export interface ImageProps extends NextImageProps {
  fadeIn?: boolean;
  backgroundColor?: `${keyof DefaultTheme['palettes']}-${ThemePaletteRange}`;
}

export const Image = ({
  fadeIn = true,
  backgroundColor,
  ...rest
}: ImageProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const onLoadingComplete = useCallback(
    (result: { naturalWidth: number; naturalHeight: number }) => {
      setHasLoaded(true);
      rest.onLoadingComplete?.(result);
    },
    [rest]
  );

  return (
    <styles.Root
      data-cy={ImageSelectors.Root}
      $shouldFadeIn={fadeIn}
      $hasLoaded={hasLoaded}
      $layout={rest.layout}
      $backgroundColor={backgroundColor}
    >
      <styles.Image
        {...rest}
        data-cy={ImageSelectors.Image}
        onLoadingComplete={onLoadingComplete}
      />
    </styles.Root>
  );
};
