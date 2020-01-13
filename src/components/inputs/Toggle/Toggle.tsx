import React, {ReactNode} from 'react';

import { Input } from '../Input/Input';

import { withIris, IrisInputProps } from '../../../utils';

export const Toggle = withIris<HTMLInputElement, Props>(
  ToggleComponent,
);

type Props = IrisInputProps<
  {
    icon?: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
  },
  HTMLInputElement
>;

function ToggleComponent(props: Props) {
  return <Input type="toggle" {...props} />;
}
