import React, { Ref } from 'react';

import { DOMElement, Props } from './Avatar.types';
import { Avatar as Styled, Anchor } from './Avatar.style';

import { useLayoutStyles, withIris } from '../../../utils';

export const Avatar = withIris<DOMElement, Props>(AvatarComponent);

function AvatarComponent({
  className,
  forwardRef,
  size = 'auto',
  href,
  style,
  target,
  ...props
}: Props) {
  const [layoutStyles, displayStyles] = useLayoutStyles(style);

  return href ? (
    <Anchor
      href={href}
      target={target}
      className={className}
      ref={forwardRef as Ref<HTMLAnchorElement>}
      style={layoutStyles}
    >
      <Styled size={size} style={displayStyles} {...props} />
    </Anchor>
  ) : (
    <Styled
      size={size}
      ref={forwardRef as Ref<HTMLImageElement>}
      className={className}
      style={style}
      {...props}
    />
  );
}
