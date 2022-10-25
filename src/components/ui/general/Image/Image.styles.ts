import { ThemePaletteRange } from '@entire.se/components';
import NextImage from 'next/image';
import styled, { css, DefaultTheme } from 'styled-components';

import { ImageProps } from './Image';

export const Root = styled.div<{
  $shouldFadeIn: boolean;
  $hasLoaded: boolean;
  $layout?: ImageProps['layout'];
  $backgroundColor?: ImageProps['backgroundColor'];
}>`
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

  ${({ $layout }) => {
    if ($layout === 'fixed' || $layout === 'intrinsic') {
      return css`
        display: inline-flex;
        flex-direction: row;
      `;
    }

    if ($layout === 'fill' || $layout === 'responsive') {
      return css`
        display: flex;
        flex-direction: column;
      `;
    }

    return css`
      display: inline-flex;
      flex-direction: row;
    `;
  }}

  ${({ $backgroundColor, theme }) => {
    if (!$backgroundColor) {
      return '';
    }

    const [name, range] = $backgroundColor.split('-');
    return css`
      & > span {
        background-color: ${theme.palettes[
          name as keyof DefaultTheme['palettes']
        ][range as unknown as ThemePaletteRange]} !important;
      }
    `;
  }}
`;

export const Image = styled(NextImage)``;
