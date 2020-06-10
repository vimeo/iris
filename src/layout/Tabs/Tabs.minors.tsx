import React from 'react';

import { PanelProps } from './Tabs.types';

import { IrisProps } from '../../utils';

export function Panel({
  children,
  active,
  onActivate,
  ...props
}: IrisProps<PanelProps>) {
  return (
    <div style={{ padding: '0.5rem 0' }} {...props}>
      {children}
    </div>
  );
}
