import React from 'react';

import { IrisProps, withIris } from '../../../utils';
import { Card as Styled } from './Card.style';

export const Card = withIris<HTMLDivElement, Props>(CardComponent);

type Props = IrisProps<
  {
    /**
     * [default =  false]
     */
    loading?: boolean;
    /**
     * [default = false]
     */
    selected?: boolean;
    /**
     * [default = false]
     */
    noHoverState?: boolean;
  },
  HTMLDivElement
>;

function CardComponent({ forwardRef, loading, ...props }: Props) {
  return <Styled ref={forwardRef} $loading={loading} {...props} />;
}
