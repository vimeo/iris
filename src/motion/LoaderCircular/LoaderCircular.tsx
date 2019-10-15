import React from 'react';

import { LoaderCircular as Styled } from './LoaderCircular.style';

import { IrisProps, withIris } from '../../utils';

export const LoaderCircular = withIris<HTMLDivElement, Props>(
  LoaderCircularComponent,
);

type Props = IrisProps<{
  format?: 'primary' | 'basic' | 'adaptive';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}>;

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
