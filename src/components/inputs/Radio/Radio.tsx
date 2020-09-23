import React from 'react';

import { Input } from '../Input/Input';

import { withIris, IrisInputProps } from '../../../utils';

export const Radio = withIris<HTMLInputElement, Props>(
  RadioComponent
);

type Props = IrisInputProps;

function RadioComponent(props: Props) {
  return <Input type="radio" {...props} />;
}
