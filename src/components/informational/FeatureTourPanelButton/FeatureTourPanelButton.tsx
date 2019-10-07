import React, { SFC } from 'react';
import { Button } from '../../buttons/Button/Button';
import { ButtonProps } from '../../buttons/Button/ButtonTypes';

export const FeatureTourPanelButton: SFC<ButtonProps> = ({
  children,
  format,
  ...props
}) => (
  <Button
    {...props}
    format={format || 'lightTransparent'}
    size="md"
    autoWidth="xs"
    children={children}
  />
);
