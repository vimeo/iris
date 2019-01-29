import React, { SFC } from 'react';
import { Button } from '../Button/Button';
import { ButtonProps } from '../Button/ButtonProps';

export const FeatureTourPanelButton: SFC<ButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    {...props}
    format="lightTransparent"
    size="md"
    autoWidth="xs"
    children={children}
  />
);
