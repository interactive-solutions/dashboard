import { css } from 'styled-components';

/**
 * As the largest text on the screen, display styles are reserved for short,
 * important text or numerals. They work best on large screens.
 */
const display = {
  40: css`
    font-size: 80px;
    line-height: 112px;
    font-weight: 500;
  `,
  30: css`
    font-size: 62px;
    line-height: 87px;
    font-weight: 500;
  `,
  20: css`
    font-size: 52px;
    line-height: 73px;
    font-weight: 500;
  `,
  10: css`
    font-size: 36px;
    line-height: 50px;
    font-weight: 500;
  `
};

/**
 * Headlines are best-suited for short, high-emphasis text on smaller screens.
 */
const headline = {
  40: css`
    font-size: 30px;
    line-height: 42px;
    font-weight: 500;
  `,
  30: css`
    font-size: 28px;
    line-height: 39px;
    font-weight: 500;
  `,
  20: css`
    font-size: 26px;
    line-height: 36px;
    font-weight: 500;
  `,
  10: css`
    font-size: 24px;
    line-height: 37px;
    font-weight: 500;
  `
};

/**
 * Titles are smaller than headline styles, and should be used for
 * medium-emphasis text that remains relatively short.
 */
const title = {
  40: css`
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
  `,
  30: css`
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
  `,
  20: css`
    font-size: 17px;
    line-height: 24px;
    font-weight: 500;
  `,
  10: css`
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
  `
};

/**
 * Body styles are used for longer passages of text in your app.
 */
const body = {
  40: css`
    font-size: 20px;
    line-height: 28px;
    font-weight: 300;
  `,
  30: css`
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
  `,
  20: css`
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
  `,
  10: css`
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
  `
};

/**
 * Label styles are smaller, utilitarian styles, used for things like the text
 * inside components or for very small text in the content body, such as
 * captions.
 */
const label = {
  40: css`
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
  `,
  30: css`
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
  `,
  20: css`
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
  `,
  10: css`
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  `
};

export const typography = {
  display,
  headline,
  title,
  body,
  label
};
