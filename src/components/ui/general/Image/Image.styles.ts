import { ThemePaletteRange } from '@entire.se/components';
import NextImage from 'next/image';
import styled, { DefaultTheme } from 'styled-components';

import { ImageProps } from './Image';

export const Root = styled.div<{
  $shouldFadeIn: boolean;
  $hasLoaded: boolean;
}>`
  display: flex;

  ${({ $shouldFadeIn, $hasLoaded, theme }) =>
    $shouldFadeIn &&
    `
      ${Image} {
        opacity: 0;
        transition: ${theme.ease([
          {
            property: 'opacity',
            duration: 'medium'
          }
        ])};

        ${
          $hasLoaded &&
          `
            opacity: 1;
          `
        }
      }
    `}
`;

export const Inner = styled.div<{
  $backgroundColor?: ImageProps['backgroundColor'];
  $isFill?: ImageProps['fill'];
}>`
  display: inline-flex;

  ${({ $backgroundColor, theme }) => {
    if (!$backgroundColor) {
      return '';
    }

    const [name, range] = $backgroundColor.split('-');
    return `
      background-color: ${
        theme.palettes[name as keyof DefaultTheme['palettes']][
          range as unknown as ThemePaletteRange
        ]
      };
    `;
  }}

  ${({ $isFill }) =>
    !!$isFill &&
    `
      position: absolute;
      height: 100%;
      width: 100%;
      inset: 0px;
    `}
`;

export const Image = styled(NextImage)``;
