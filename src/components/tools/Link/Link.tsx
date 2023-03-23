import { forwardRef } from 'react';

import { Link, LinkProps as MuiLinkProps, styled } from '@mui/material';
import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

export type NextLinkComposedProps = {
  to: NextLinkProps['href'];
  linkAs?: NextLinkProps['as'];
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  Omit<
    NextLinkProps,
    'href' | 'as' | 'passHref' | 'onMouseEnter' | 'onClick' | 'onTouchStart'
  >;

const Anchor = styled('a')({});

export const NextLinkComposed = forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>((props, ref) => {
  const {
    to,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior = true,
    locale,
    ...rest
  } = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
      legacyBehavior={legacyBehavior}
    >
      <Anchor ref={ref} {...rest} />
    </NextLink>
  );
});

export type NextLinkStyledProps = {
  activeClassName?: string;
  as?: NextLinkProps['as'];
  href: NextLinkProps['href'];
  linkAs?: NextLinkProps['as'];
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
  Omit<MuiLinkProps, 'href'>;

export const NextLinkStyled = forwardRef<
  HTMLAnchorElement,
  NextLinkStyledProps
>((props, ref) => {
  const {
    activeClassName = 'active',
    as,
    className: classNameProps,
    href,
    legacyBehavior,
    linkAs: linkAsProp,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    scroll,
    shallow,
    ...rest
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  const isExternal =
    typeof href === 'string' &&
    (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={href} ref={ref} {...rest} />;
    }

    return <Link className={className} href={href} ref={ref} {...rest} />;
  }

  const linkAs = linkAsProp || as;
  const nextjsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior,
    locale,
  };

  if (noLinkStyle) {
    return (
      <NextLinkComposed
        className={className}
        ref={ref}
        {...nextjsProps}
        {...rest}
      />
    );
  }

  return (
    <Link
      component={NextLinkComposed}
      className={className}
      ref={ref}
      {...nextjsProps}
      {...rest}
    />
  );
});
