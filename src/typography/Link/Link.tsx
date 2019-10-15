import React, { ReactNode } from 'react';

import { withIris, IrisProps } from '../../utils';
import { Link as Styled } from './Link.style';

export const Link = withIris<
  HTMLAnchorElement | HTMLSpanElement,
  Props
>(LinkComponent);

type Props = IrisProps<
  {
    element?: 'a' | 'span';
    format?: 'primary' | 'primaryDark' | 'warning' | 'light';
    decoration?: 'loud' | 'inherit' | 'silent';
    title?: ReactNode;
    href?: string;
    target?: string;
  },
  HTMLAnchorElement | HTMLSpanElement
>;

function LinkComponent({
  children,
  decoration,
  element = 'a',
  format = 'primary',
  href,
  ...props
}: Props) {
  return (
    <Styled
      as={element}
      href={href}
      decoration={decoration}
      format={format}
      {...props}
    >
      {children}
    </Styled>
  );
}
