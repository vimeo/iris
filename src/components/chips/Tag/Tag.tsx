import React, { ReactNode } from 'react';

import { Tag as Styled, Image, DismissX } from './Tag.style';

import {
  IrisProps,
  withIris,
  useClose,
  onClose,
} from '../../../utils';

export const Tag = withIris<DOMElement, Props>(TagComponent);

type DOMElement = HTMLButtonElement | HTMLSpanElement;

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = IrisProps<
  {
    element?: 'button' | 'span';
    icon?: ReactNode;
    iconPosition?: 'right' | 'left' | 'featured';
    onClose?: onClose;
    size?: Sizes;
    src?: string;
  },
  DOMElement
>;

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
