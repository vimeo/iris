import React from 'react';

import { FloatingButton as Styled } from './Floating.style';

import { ArrowRight } from '../../icons';
import { withIris, IrisProps } from '../../utils';

export const FloatingButton = withIris<HTMLButtonElement, Props>(
  FloatingButtonComponent
);

type Props = IrisProps<unknown, HTMLButtonElement>;

function FloatingButtonComponent({
  children,
  forwardRef,
  ...props
}: Props) {
  return (
    <Styled
      format="secondary"
      icon={<ArrowRight />}
      iconPosition="right"
      ref={forwardRef}
      {...props}
    >
      {children}
    </Styled>
  );
}
