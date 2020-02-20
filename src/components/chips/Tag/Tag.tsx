import React from 'react';

import { DOMElement, Props } from './Tag.types';
import { Tag as Styled, Image, DismissX } from './Tag.style';

import { withIris, useClose } from '../../../utils';

export const Tag = withIris<DOMElement, Props>(TagComponent);

function TagComponent({
  children,
  element = 'button',
  forwardRef,
  onClose,
  size = 'md',
  src,
  theme,
  ...props
}: Props) {
  const { reject, complete } = useClose(onClose);

  const onClick = event => {
    event.preventDefault();
    if (reject) reject(event);
    if (complete) complete(event);
  };

  return (
    <Styled
      element={element}
      format="secondary"
      icon={reject && <DismissX onClick={onClick} />}
      iconPosition={reject ? 'right' : null}
      ref={forwardRef}
      size={size}
      src={src}
      theme={theme}
      {...props}
    >
      {src && <Image size={size} src={src} alt="User avatar image" />}
      {children}
    </Styled>
  );
}
