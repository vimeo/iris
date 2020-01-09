import React from 'react';

import { IrisProps, withIris } from '../../../utils';
import { Card as Styled } from './Card.style';

export const Card = withIris<HTMLDivElement, Props>(CardComponent);

type Props = IrisProps<
  {
    loading?: boolean;
    selected?: boolean;
    noHoverState?: boolean;
  },
  HTMLDivElement
>;

function CardComponent({ forwardRef, loading, ...props }: Props) {
  return <Styled ref={forwardRef} $loading={loading} {...props} />;
}
