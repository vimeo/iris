import React from 'react';

import { LoaderCircular as Styled } from './LoaderCircular.style';
import { Props } from './LoaderCircular.types';

import { withIris } from '../../utils';

export const LoaderCircular = withIris<HTMLDivElement, Props>(
  LoaderCircularComponent,
);

function LoaderCircularComponent({
  format = 'primary',
  size = 'md',
  forwardRef,
  ...props
}: Props) {
  return (
    <div {...props}>
      <Styled ref={forwardRef} format={format} size={size} />
    </div>
  );
}
