import React from 'react';

import { DOMElement, Props } from './Badge.types';
import { Badge as Styled, Wrapper } from './Badge.style';

import { useLayoutStyles, withIris } from '../../utils';

export const Badge = withIris<DOMElement, Props>(BadgeComponent);

function BadgeComponent({
  children = null,
  className,
  href,
  forwardRef,
  format = 'default',
  size = 'sm',
  style,
  ...props
}: Props) {
  const [layoutStyles, displayStyles] = useLayoutStyles(style);
  if (!children) children = format.replaceAll('-', ' ');

  return href ? (
    <Wrapper className={className} style={layoutStyles}>
      <Styled
        as="a"
        children={children}
        $format={format}
        href={href}
        size={size}
        style={displayStyles}
        {...props}
      />
    </Wrapper>
  ) : (
    <Styled
      as="span"
      children={children}
      className={className}
      $format={format}
      ref={forwardRef}
      size={size}
      style={style}
      {...props}
    />
  );
}
