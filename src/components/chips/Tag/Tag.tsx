import React, { ReactNode, MouseEventHandler } from 'react';

import { Tag as Styled, Image } from './Tag.style';

import { DismissX } from '../../../icons';
import { IrisProps, withIris } from '../../../utils';

export const Tag = withIris<DOMElement, Props>(TagComponent);

type DOMElement = HTMLButtonElement | HTMLSpanElement;

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = IrisProps<
  {
    element?: 'button' | 'span';
    icon?: ReactNode;
    iconPosition?: 'right' | 'left' | 'featured';
    onDismiss?: MouseEventHandler;
    size?: Sizes;
    src?: string;
  },
  DOMElement
>;

function TagComponent({
  children,
  element = 'button',
  forwardRef,
  onDismiss,
  size = 'md',
  src,
  theme,
  ...props
}: Props) {
  const onClick = event => {
    event.preventDefault();
    return onDismiss && onDismiss(event);
  };

  return (
    <Styled
      // element={element} needs Iris 8 Button
      // format="secondary" needs Iris 8 Button
      format={theme.name === 'dark' ? 'secondaryDark' : 'secondary'}
      icon={onDismiss && <DismissX />}
      iconPosition={onDismiss ? 'right' : null}
      // ref={forwardRef} needs Iris 8 Button
      size={size}
      src={src}
      theme={theme}
      onClick={onClick}
      {...props}
    >
      {src && <Image size={size} src={src} />}
      {children}
    </Styled>
  );
}
