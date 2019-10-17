import React from 'react';

import { Input } from '../Input/Input';

import { withIris, IrisInputProps } from '../../../utils';

export const Checkbox = withIris<HTMLInputElement, Props>(
  CheckboxComponent,
);

type Props = IrisInputProps<
  {
    indeterminate?: boolean;
  },
  HTMLInputElement
>;

function CheckboxComponent(props: Props) {
  return <Input type="checkbox" {...props} />;
}
