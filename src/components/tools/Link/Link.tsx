import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { LinkSelectors } from 'consts/cypress';

export interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const Link = ({ children, className, target, ...rest }: LinkProps) => {
  return (
    <NextLink
      className={className}
      target={target}
      data-cy={LinkSelectors.Root}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
