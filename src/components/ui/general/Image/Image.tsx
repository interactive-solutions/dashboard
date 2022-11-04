import { useCallback, useState } from 'react';

import { ThemePaletteRange } from '@entire.se/components';
import type * as CSS from 'csstype';
import { ImageProps as NextImageProps } from 'next/image';
import { DefaultTheme } from 'styled-components';

import { ImageSelectors } from 'consts/cypress';

import * as styles from './Image.styles';

export interface ImageProps extends NextImageProps {
  fadeIn?: boolean;
  backgroundColor?: `${keyof DefaultTheme['palettes']}-${ThemePaletteRange}`;
  fit?: CSS.Property.ObjectFit;
  position?: CSS.Property.ObjectPosition;
}

export const Image = ({
  fadeIn = true,
  backgroundColor,
  fit,
  position,
  ...rest
}: ImageProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const onLoadingComplete = useCallback(
    (image: HTMLImageElement) => {
      setHasLoaded(true);
      rest.onLoadingComplete?.(image);
    },
    [rest]
  );

  return (
    <styles.Root
      data-cy={ImageSelectors.Root}
      $shouldFadeIn={fadeIn}
      $hasLoaded={hasLoaded}
    >
      <styles.Inner $backgroundColor={backgroundColor} $isFill={rest.fill}>
        <styles.Image
          {...rest}
          data-cy={ImageSelectors.Image}
          onLoadingComplete={onLoadingComplete}
          style={{
            objectFit: fit,
            objectPosition: position
          }}
        />
      </styles.Inner>
    </styles.Root>
  );
};
