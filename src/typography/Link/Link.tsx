import React from 'react';
import { Props } from './Link.types';

import { withIris } from '../../utils';
import { Link as Styled } from './Link.style';

export const Link = withIris<
  HTMLAnchorElement | HTMLSpanElement,
  Props
>(LinkComponent);

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
