import React, { SFC, MouseEventHandler } from 'react';

import { Button } from '../Button/Button';

import { DismissX } from '../../../icons';
import { BaseProps } from '../../../utils';

interface Props extends BaseProps {
  buttonTitle?: string;
  autoSpacingHorizontal?: boolean;
  format?: 'basic' | 'soft' | 'alternative' | 'secondary' | 'primary';
  variant?:
    | 'basic'
    | 'transparent'
    | 'outline'
    | 'dashed'
    | 'minimal'
    | 'hyperminimal'
    | 'minimalTransparent';
  size?: 'sm' | 'md';
  onClick?: MouseEventHandler;
  type?: 'button';
}

export const ButtonDialogClose: SFC<Props> = ({
  buttonTitle = 'Close',
  autoSpacingHorizontal = true,
  format = 'basic',
  size = 'sm',
  ...props
}) => (
  <Button
    {...props}
    format={format}
    icon={<DismissX />}
    size={size}
  />
);
