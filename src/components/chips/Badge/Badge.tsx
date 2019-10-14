import React from 'react';

import { BadgeFormats } from './Badge.types';
import { Badge as Styled, Wrapper } from './Badge.style';

import { useLayoutStyles, IrisProps, withIris } from '../../../utils';

export const Badge = withIris<DOMElement, Props>(BadgeComponent);

type DOMElement = HTMLSpanElement | HTMLAnchorElement;

type Props = IrisProps<
  {
    format?: BadgeFormats;
    href?: string;
    label?: string;
    size?: 'sm' | 'lg';
  },
  DOMElement
>;

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
