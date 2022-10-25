import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { LinkSelectors } from 'consts/cypress';

export interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const Link = ({
  children,
  className,
  target,
  onClick,
  ...rest
}: LinkProps) => {
  return (
    <NextLink {...rest}>
      {/* https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links */}
      {/*
        eslint-disable-next-line
          jsx-a11y/anchor-is-valid,
          jsx-a11y/no-static-element-interactions,
          jsx-a11y/anchor-is-valid,
          jsx-a11y/click-events-have-key-events
      */}
      <a
        className={className}
        target={target}
        onClick={onClick}
        data-cy={LinkSelectors.Root}
      >
        {children}
      </a>
    </NextLink>
  );
};
