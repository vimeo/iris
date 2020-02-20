import React from 'react';

import { DOMElement, Props } from './Badge.types';
import { Badge as Styled, Wrapper } from './Badge.style';

import { useLayoutStyles, withIris } from '../../../utils';

export const Badge = withIris<DOMElement, Props>(BadgeComponent);

function BadgeComponent({
  className,
  href,
  forwardRef,
  format = 'default',
  size = 'sm',
  style,
  ...props
}: Props) {
  const [layoutStyles, displayStyles] = useLayoutStyles(style);

  return href ? (
    <Wrapper className={className} style={layoutStyles}>
      <Styled
        as="a"
        format={format}
        size={size}
        href={href}
        style={displayStyles}
        {...props}
      />
    </Wrapper>
  ) : (
    <Styled
      as="span"
      className={className}
      format={format}
      ref={forwardRef}
      size={size}
      style={style}
      {...props}
    />
  );
}
